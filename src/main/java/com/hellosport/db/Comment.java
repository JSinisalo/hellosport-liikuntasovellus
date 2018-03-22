package com.hellosport.db;

import javax.persistence.*;
import java.time.Instant;

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

    public Comment() {
        setTimePosted(Instant.now().getEpochSecond());
    }

    public Comment(String textbody, String author) {

        setTextbody(textbody);
        setAuthor(author);
        setTimePosted(Instant.now().getEpochSecond());
    }

    public Comment(Notification notification,String textbody, String author) {

        setTextbody(textbody);
        setAuthor(author);
        setNotification(notification);
        setTimePosted(Instant.now().getEpochSecond());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTextbody() {
        return textbody;
    }

    public void setTextbody(String textbody) {
        this.textbody = textbody;
    }

    public long getTimePosted() {
        return timePosted;
    }

    public void setTimePosted(long timePosted) {
        this.timePosted = timePosted;
    }

    public Notification getNotification() {
       return notification;
    }

    public void setNotification(Notification notification) {
        this.notification = notification;
    }
}
