package com.hellosport.db;

import javax.persistence.*;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Notification class. Holds all the info related to the posts.
 */
@Entity
public class Notification {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="notification_id")
    private long blogId;

    private String title;

    private String textBody;

    @Column(name="author_name")
    private String authorName;

    @Column(name="time_posted")
    private long timePosted;

    @ElementCollection
    @OneToMany(cascade=CascadeType.ALL)
    @Column(name="comments_id")
    private List<Comment> comments = new ArrayList<>();

    private long searchStart;
    private long searchEnd;

    @ElementCollection
    private List<String> gender = new ArrayList<>();

    @ElementCollection
    private List<String> sport = new ArrayList<>();

    /**
     * Instantiates a new Notification.
     */
    public Notification() {
        setTimePosted(Instant.now().getEpochSecond());
    }

    /**
     * Instantiates a new Notification.
     *
     * @param title       the title
     * @param textBody    the textbody
     * @param authorName  the authorname
     * @param searchStart the searchstart
     * @param searchEnd   the searchend
     * @param gender      the gender
     * @param sport       the sport
     */
    public Notification(String title, String textBody, String authorName, long searchStart, long searchEnd, List<String> gender, List<String> sport) {

        setTitle(title);
        setTextBody(textBody);
        setAuthorName(authorName);
        setTimePosted(Instant.now().getEpochSecond());
        setSearchStart(searchStart);
        setSearchEnd(searchEnd);
        setGender(gender);
        setSport(sport);
    }

    /**
     * Gets id.
     *
     * @return the id
     */
    public long getId() {
        return blogId;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(long id) {
        this.blogId = id;
    }

    /**
     * Gets title.
     *
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets title.
     *
     * @param title the title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets text body.
     *
     * @return the text body
     */
    public String getTextBody() {
        return textBody;
    }

    /**
     * Sets text body.
     *
     * @param textbody the textbody
     */
    public void setTextBody(String textbody) {
        this.textBody = textbody;
    }

    /**
     * Gets author name.
     *
     * @return the author name
     */
    public String getAuthorName() {
        return authorName;
    }

    /**
     * Sets author name.
     *
     * @param authorName the author name
     */
    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    /**
     * Gets time posted.
     *
     * @return the time posted
     */
    public long getTimePosted() {
        return timePosted;
    }

    /**
     * Sets time posted.
     *
     * @param timePosted the time posted
     */
    public void setTimePosted(long timePosted) {
        this.timePosted = timePosted;
    }

    /**
     * Gets comments.
     *
     * @return the comments
     */
    public List<Comment> getComments() {
        return comments;
    }

    /**
     * Sets comments.
     *
     * @param comments the comments
     */
    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }

    /**
     * Gets search start.
     *
     * @return the search start
     */
    public long getSearchStart() {
        return searchStart;
    }

    /**
     * Sets search start.
     *
     * @param searchStart the search start
     */
    public void setSearchStart(long searchStart) {
        this.searchStart = searchStart;
    }

    /**
     * Gets search end.
     *
     * @return the search end
     */
    public long getSearchEnd() {
        return searchEnd;
    }

    /**
     * Sets search end.
     *
     * @param searchEnd the search end
     */
    public void setSearchEnd(long searchEnd) {
        this.searchEnd = searchEnd;
    }

    /**
     * Gets gender.
     *
     * @return the gender
     */
    public List<String> getGender() {
        return gender;
    }

    /**
     * Sets gender.
     *
     * @param gender the gender
     */
    public void setGender(List<String> gender) {
        this.gender = gender;
    }

    /**
     * Gets sport.
     *
     * @return the sport
     */
    public List<String> getSport() {
        return sport;
    }

    /**
     * Sets sport.
     *
     * @param sport the sport
     */
    public void setSport(List<String> sport) {
        this.sport = sport;
    }

    /**
     * Add comment.
     *
     * @param c the c
     */
    public void addComment(Comment c) {

        comments.add(c);
    }

    /**
     * Remove comment.
     *
     * @param c the c
     */
    public void removeComment(Comment c) {

        comments.remove(c);
    }

    /**
     * Gets comment.
     *
     * @param id the id
     * @return the comment
     */
    public Optional<Comment> getComment(int id) {

        Optional<Comment> opt = Optional.empty();

        try {
            opt = Optional.of(comments.get(id));
        } catch (IndexOutOfBoundsException ex) {

            //it will send the error message in the calling method
        }

        return opt;
    }
}
