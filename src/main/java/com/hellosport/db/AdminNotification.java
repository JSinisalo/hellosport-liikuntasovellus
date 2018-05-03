package com.hellosport.db;

import javax.persistence.*;
import java.time.Instant;

/**
 * Created by possumunnki on 4.5.2018.
 */
@Entity
public class AdminNotification {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="admin_notification_id")
    private long adminNotificationId;

    private String title;

    private String textBody;

    @Column(name="author_name")
    private String authorName;

    @Column(name="time_posted")
    private long timePosted;

    public AdminNotification() {
        setTimePosted(Instant.now().getEpochSecond());
    }

    public AdminNotification(String title, String textBody, String authorName, long timePosted) {
        this.title = title;
        this.textBody = textBody;
        this.authorName = authorName;
        setTimePosted(Instant.now().getEpochSecond());
    }

    public long getId() {
        return adminNotificationId;
    }

    public void setId(long adminNotificationId) {
        this.adminNotificationId = adminNotificationId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTextBody() {
        return textBody;
    }

    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public long getTimePosted() {
        return timePosted;
    }

    public void setTimePosted(long timePosted) {
        this.timePosted = timePosted;
    }
}

