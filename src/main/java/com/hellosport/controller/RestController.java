package com.hellosport.controller;

import com.hellosport.db.Notification;
import com.hellosport.db.NotificationRepository;
import com.hellosport.db.Comment;
import com.hellosport.db.CommentRepository;
import com.hellosport.exception.CannotFindNotificationException;
import com.hellosport.exception.CannotFindCommentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
}
