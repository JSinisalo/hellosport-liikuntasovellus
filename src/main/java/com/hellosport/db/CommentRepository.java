package com.hellosport.db;

import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository <Comment, Long> {
}
