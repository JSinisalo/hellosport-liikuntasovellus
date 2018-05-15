package com.hellosport.exception;

/**
 * The type Cannot find notification exception.
 */
public class CannotFindNotificationException extends CannotFindEntityException {

    /**
     * Instantiates a new Cannot find notification exception.
     *
     * @param id the id
     */
    public CannotFindNotificationException(long id) {
        super(id);
    }

}
