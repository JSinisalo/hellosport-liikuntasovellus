package com.hellosport.db;

import javax.persistence.*;

/**
 * Created by possumunnki on 19.4.2018.
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

    public Member() {
    }

    public Member(String userName, String gender, long registered, boolean administrator) {
        this.userName = userName;
        this.gender = gender;
        this.registered = registered;
        this.administrator = administrator;
    }

    public Member(String userName, String gender, String introduction, long registered, boolean administrator) {
        this.userName = userName;
        this.gender = gender;
        this.introduction = introduction;
        this.registered = registered;
        this.administrator = administrator;
    }

    public long getId() {
        return id;
    }

    public void setId(long memberId) {
        id = memberId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public long getRegistered() {
        return registered;
    }

    public void setRegistered(long registered) {
        this.registered = registered;
    }

    public boolean isAdministrator() {
        return administrator;
    }

    public void setAdministrator(boolean administrator) {
        this.administrator = administrator;
    }
}
