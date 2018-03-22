package com.hellosport;

import com.hellosport.db.Comment;
import com.hellosport.db.CommentRepository;
import com.hellosport.db.Notification;
import com.hellosport.db.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;

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

		Notification post = new Notification("HALUUN NAISTA", "NYT HETI", "JARMO-JORMA PALLILA",
                                             Instant.now().getEpochSecond(), Instant.now().getEpochSecond() + Instant.now().getEpochSecond(),
                                             new ArrayList<>(Arrays.asList("female")), new ArrayList<>(Arrays.asList("tennis", "golf", "pennis")));
        post.addComment(new Comment("no mitähän helvettiä", "mummo48"));
        post.addComment(new Comment("ok", "make"));
        notificationRepository.save(post);

        post = new Notification("mennääks urheilee", "voitais pelata vaik cs-go tai ck2", "yrjö pulla",
                                Instant.now().getEpochSecond(), Instant.now().getEpochSecond() + Instant.now().getEpochSecond(),
                                new ArrayList<>(Arrays.asList("")), new ArrayList<>(Arrays.asList("cs-go", "ck2")));
        post.addComment(new Comment("eihä tää oo urheilu???????", "mummo48"));
        notificationRepository.save(post);
	}
}
