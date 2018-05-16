package com.hellosport.db;

import javax.persistence.*;
import java.time.Instant;

/**
 *  Comments that are attached to the posts.
 */
@Entity
public class Comment {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="comment_id")
    private long id;

    private String author;

    private String textbody;

    @Column(name="time_posted")
    private long timePosted;

    @ManyToOne
    @JoinColumn(name="notification_id")
    private Notification notification;

    /**
     * Instantiates a new Comment.
     */
    public Comment() {
        setTimePosted(Instant.now().getEpochSecond());
    }

    /**
     * Instantiates a new Comment.
     *
     * @param textbody the textbody
     * @param author   the author
     */
    public Comment(String textbody, String author) {

        setTextbody(textbody);
        setAuthor(author);
        setTimePosted(Instant.now().getEpochSecond());
    }

    /**
     * Instantiates a new Comment.
     *
     * @param notification the notification
     * @param textbody     the textbody
     * @param author       the author
     */
    public Comment(Notification notification,String textbody, String author) {

        setTextbody(textbody);
        setAuthor(author);
        setNotification(notification);
        setTimePosted(Instant.now().getEpochSecond());
    }

    /**
     * Gets id.
     *
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Gets author.
     *
     * @return the author
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Sets author.
     *
     * @param author the author
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Gets textbody.
     *
     * @return the textbody
     */
    public String getTextbody() {
        return textbody;
    }

    /**
     * Sets textbody.
     *
     * @param textbody the textbody
     */
    public void setTextbody(String textbody) {
        this.textbody = textbody;
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
     * Gets notification.
     *
     * @return the notification
     */
    public Notification getNotification() {
       return notification;
    }

    /**
     * Sets notification.
     *
     * @param notification the notification
     */
    public void setNotification(Notification notification) {
        this.notification = notification;
    }
}
