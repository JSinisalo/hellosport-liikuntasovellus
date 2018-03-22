package com.hellosport.exception;

public class CannotFindNotificationException extends CannotFindEntityException {

    public CannotFindNotificationException(long id) {
        super(id);
    }

}
