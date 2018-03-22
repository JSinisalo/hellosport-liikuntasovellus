package com.hellosport.exception;

public class CannotFindCommentException extends CannotFindEntityException {

    public CannotFindCommentException(long id) {
        super(id);
    }

}
