package com.hellosport.exception;

/**
 * The type Cannot find comment exception.
 */
public class CannotFindCommentException extends CannotFindEntityException {

    /**
     * Instantiates a new Cannot find comment exception.
     *
     * @param id the id
     */
    public CannotFindCommentException(long id) {
        super(id);
    }

}
