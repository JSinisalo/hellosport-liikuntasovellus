package com.hellosport.controller;

import com.hellosport.db.*;
import com.hellosport.exception.CannotFindNotificationException;
import com.hellosport.exception.CannotFindCommentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    private NotificationRepository repo;


    @RequestMapping(value = "/notifications", method = RequestMethod.POST)
    public ResponseEntity<Void> postNotification(@RequestBody Notification a, UriComponentsBuilder b) {

        repo.save(a);

        UriComponents uriComponents = b.path("/notifications/{id}").buildAndExpand(a.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/notifications", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Notification>> getNotifications() {

        Iterable<Notification> notifications = repo.findAll();
        HttpStatus status = HttpStatus.OK;

        int size = 0;
        for(Notification value : notifications) { size++; }

        if(size == 0)
            status = HttpStatus.NOT_FOUND;

        return new ResponseEntity<>(notifications, status);
    }

    @RequestMapping(value = "/notifications/{id}", method = RequestMethod.GET)
    public ResponseEntity<Notification> getNotification(@PathVariable long id) throws CannotFindNotificationException {

        Optional<Notification> opt = repo.findById(id);

        if (!opt.isPresent()) throw new CannotFindNotificationException(id);

        Notification notification = opt.get();

        return new ResponseEntity<>(notification, HttpStatus.OK);
    }

    @RequestMapping(value = "/notifications/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteNotification(@PathVariable long id) throws CannotFindNotificationException {

        if (!repo.findById(id).isPresent()) throw new CannotFindNotificationException(id);

        repo.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Autowired
    private AdminNotificationRepository adminNotificationRepo;
    //Admin posts
    @RequestMapping(value = "/notification/admin", method = RequestMethod.POST)
    public ResponseEntity<Void> postAdminNotification(@RequestBody AdminNotification a,
                                                                   UriComponentsBuilder b) {

        adminNotificationRepo.save(a);

        UriComponents uriComponents = b.path("/notifications/admin/{id}").buildAndExpand(a.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/notifications/admin", method = RequestMethod.GET)
    public Iterable<AdminNotification> getAdminNotifications() {
        return adminNotificationRepo.findAll();
    }

    //#############################################Comments###################################################


    //is this needed?????????????
    @Autowired
    private CommentRepository cRepo;

    @RequestMapping(value = "notifications/{notificationsId}/comments", method = RequestMethod.POST)
    public ResponseEntity<Void> postComment(@PathVariable long notificationsId, @RequestBody Comment a, UriComponentsBuilder b) throws CannotFindNotificationException {

        Optional<Notification> opt = repo.findById(notificationsId);

        if (!opt.isPresent()) throw new CannotFindNotificationException(notificationsId);

        Notification notification = opt.get();

        notification.addComment(a);
        repo.save(notification);

        UriComponents uriComponents = b.path("/{notificationsId}/comments/{id}").buildAndExpand(notificationsId, a.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "notifications/{notificationsId}/comments", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Comment>> getComment(@PathVariable long notificationsId) throws CannotFindNotificationException {

        Optional<Notification> opt = repo.findById(notificationsId);

        if (!opt.isPresent()) throw new CannotFindNotificationException(notificationsId);

        Notification notification = opt.get();

        Iterable<Comment> comments = notification.getComments();
        HttpStatus status = HttpStatus.OK;

        int size = 0;
        for(Comment value : comments) { size++; }

        if(size == 0)
            status = HttpStatus.NOT_FOUND;

        return new ResponseEntity<>(comments, status);
    }

    @RequestMapping(value = "notifications/{notificationsId}/comments/{id}", method = RequestMethod.GET)
    public ResponseEntity<Comment> getComments(@PathVariable long notificationsId, @PathVariable int id) throws CannotFindNotificationException, CannotFindCommentException {

        Optional<Notification> opt = repo.findById(notificationsId);

        if (!opt.isPresent()) throw new CannotFindNotificationException(notificationsId);

        Notification notification = opt.get();

        Optional<Comment> c = notification.getComment(id);

        if (!c.isPresent()) throw new CannotFindCommentException(id);

        Comment comment = c.get();

        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @RequestMapping(value = "notifications/{notificationsId}/comments/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteComment(@PathVariable long notificationsId, @PathVariable int id) throws CannotFindNotificationException, CannotFindCommentException {

        Optional<Notification> opt = repo.findById(notificationsId);

        if (!opt.isPresent()) throw new CannotFindNotificationException(notificationsId);

        Notification notification = opt.get();

        Optional<Comment> c = notification.getComment(id);

        if (!c.isPresent()) throw new CannotFindCommentException(id);

        Comment comment = c.get();

        notification.removeComment(comment);

        repo.save(notification);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    //||||User||||
    //VVVV----VVVV

    @Autowired
    private MemberRepository memberRepo;

    @CrossOrigin
    @RequestMapping(value = "/users")
    public Iterable<Member> getMembers(){
        return memberRepo.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/users", method= RequestMethod.POST)
    public ResponseEntity<Void> addBlogPost(@RequestBody Member member, UriComponentsBuilder builder){
        memberRepo.save(member);

        UriComponents uriComponents =
                builder.path("users/{id}").buildAndExpand(member.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @CrossOrigin
    @RequestMapping(value = "/users/{memberID}", method = RequestMethod.PATCH)
    public void modifyIntroduction( @RequestBody Member member, @PathVariable long memberID) {
        Member memberExist = memberRepo.findById(memberID).orElse(null);
        if(memberExist != null) {
            memberExist.setIntroduction(member.getIntroduction());
            memberRepo.save(memberExist);
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/users/{memberID}", method = RequestMethod.GET)
    public Member getMember(@PathVariable long memberID){
        Member member = memberRepo.findById(memberID).orElse(null);
        return member;
    }

    @CrossOrigin
    @RequestMapping(value = "/users/{memberID}", method = RequestMethod.DELETE)
    public void deleteMember(@PathVariable long memberID){
        memberRepo.deleteById(memberID);
    }
}
