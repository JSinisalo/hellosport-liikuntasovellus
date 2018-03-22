package com.hellosport;

import com.hellosport.db.Notification;
import com.hellosport.db.NotificationRepository;
import com.hellosport.db.Comment;
import com.hellosport.db.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloSportApplication implements CommandLineRunner {

	@Autowired
    NotificationRepository notificationRepository;

	@Autowired
    CommentRepository commentRepository;

	public static void main(String[] args) {
		SpringApplication.run(HelloSportApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Notification post = new Notification("Jepen niksit redux", "oon homo", "jeppe");
        post.addComment(new Comment("vitun homo tapa ittes xd", "edgelord"));
        post.addComment(new Comment("ihan jees", "make"));
        post.addComment(new Comment("kiva juttu hei, mut kuis se ny nii", "???"));
        notificationRepository.save(post);

        post = new Notification("Jarmo-Jorman paskat vitsit 1", "minä ainakin voitan leipää", "JJ");
        post.addComment(new Comment("mee kotiis", "ei näin"));
        post.addComment(new Comment("ei vittu mitä paskaa :DD", "make"));
        notificationRepository.save(post);
	}
}
