package com.hellosport.db;

import javax.persistence.*;

/**
 * Member class for upcoming member feature. Isnt actually used anywhere yet.
 */
@Entity
public class Member {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="member_id")
    private long id;

    @Column(unique = true)
    private String userName;

    private String gender;

    @Column(columnDefinition="clob")
    @Lob
    private String introduction;

    @Column(name="time_registered")
    private long registered;

    private boolean administrator = false;

    /**
     * Instantiates a new Member.
     */
    public Member() {
    }

    /**
     * Instantiates a new Member.
     *
     * @param userName      the user name
     * @param gender        the gender
     * @param registered    the registered
     * @param administrator the administrator
     */
    public Member(String userName, String gender, long registered, boolean administrator) {
        this.userName = userName;
        this.gender = gender;
        this.registered = registered;
        this.administrator = administrator;
    }

    /**
     * Instantiates a new Member.
     *
     * @param userName      the user name
     * @param gender        the gender
     * @param introduction  the introduction
     * @param registered    the registered
     * @param administrator the administrator
     */
    public Member(String userName, String gender, String introduction, long registered, boolean administrator) {
        this.userName = userName;
        this.gender = gender;
        this.introduction = introduction;
        this.registered = registered;
        this.administrator = administrator;
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
     * @param memberId the member id
     */
    public void setId(long memberId) {
        id = memberId;
    }

    /**
     * Gets user name.
     *
     * @return the user name
     */
    public String getUserName() {
        return userName;
    }

    /**
     * Sets user name.
     *
     * @param userName the user name
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * Gets gender.
     *
     * @return the gender
     */
    public String getGender() {
        return gender;
    }

    /**
     * Sets gender.
     *
     * @param gender the gender
     */
    public void setGender(String gender) {
        this.gender = gender;
    }

    /**
     * Gets introduction.
     *
     * @return the introduction
     */
    public String getIntroduction() {
        return introduction;
    }

    /**
     * Sets introduction.
     *
     * @param introduction the introduction
     */
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    /**
     * Gets registered.
     *
     * @return the registered
     */
    public long getRegistered() {
        return registered;
    }

    /**
     * Sets registered.
     *
     * @param registered the registered
     */
    public void setRegistered(long registered) {
        this.registered = registered;
    }

    /**
     * Is administrator boolean.
     *
     * @return the boolean
     */
    public boolean isAdministrator() {
        return administrator;
    }

    /**
     * Sets administrator.
     *
     * @param administrator the administrator
     */
    public void setAdministrator(boolean administrator) {
        this.administrator = administrator;
    }
}
