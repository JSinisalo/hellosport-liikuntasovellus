package com.hellosport.db;

import javax.persistence.*;
import java.time.Instant;

/**
 * Notification class. Holds all the info related to the "events".
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

    /**
     * Instantiates a new Admin notification.
     */
    public AdminNotification() {
        setTimePosted(Instant.now().getEpochSecond());
    }

    /**
     * Instantiates a new Admin notification.
     *
     * @param title      the title
     * @param textBody   the text body
     * @param authorName the author name
     * @param timePosted the time posted
     */
    public AdminNotification(String title, String textBody, String authorName, long timePosted) {
        this.title = title;
        this.textBody = textBody;
        this.authorName = authorName;
        setTimePosted(Instant.now().getEpochSecond());
    }

    /**
     * Gets id.
     *
     * @return the id
     */
    public long getId() {
        return adminNotificationId;
    }

    /**
     * Sets id.
     *
     * @param adminNotificationId the admin notification id
     */
    public void setId(long adminNotificationId) {
        this.adminNotificationId = adminNotificationId;
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
     * @param textBody the text body
     */
    public void setTextBody(String textBody) {
        this.textBody = textBody;
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
}

