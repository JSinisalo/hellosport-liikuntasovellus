package com.hellosport.db;

import org.springframework.data.repository.CrudRepository;

/**
 * The interface Comment repository.
 */
public interface CommentRepository extends CrudRepository <Comment, Long> {
}
