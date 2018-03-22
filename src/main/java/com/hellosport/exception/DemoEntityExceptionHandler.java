package com.hellosport.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class DemoEntityExceptionHandler {

    @ExceptionHandler(CannotFindNotificationException.class)
    public ResponseEntity<ErrorInfo> handleConflict(CannotFindNotificationException ex) {

        ErrorInfo e = new ErrorInfo("Cannot find blog post with id: " + ex.getId());

        return new ResponseEntity<ErrorInfo>(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(CannotFindCommentException.class)
    public ResponseEntity<ErrorInfo> commentNotFound(CannotFindCommentException ex) {

        ErrorInfo e = new ErrorInfo("Cannot find comment with id: " + ex.getId());

        return new ResponseEntity<ErrorInfo>(e, HttpStatus.NOT_FOUND);
    }
}
