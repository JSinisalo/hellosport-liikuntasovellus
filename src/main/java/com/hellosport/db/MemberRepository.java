package com.hellosport.db;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by possumunnki on 19.4.2018.
 */
public interface MemberRepository extends CrudRepository<Member, Long> {
}
