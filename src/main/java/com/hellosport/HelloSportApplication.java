package com.hellosport;

import com.hellosport.db.*;
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
	AdminNotificationRepository adminNotificationRepo;

	@Autowired
    CommentRepository commentRepository;

	public static void main(String[] args) {
		SpringApplication.run(HelloSportApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Notification post = new Notification("Pesistä!", "Tulkaa pelaan pesistä Hervantaan maanantain!", "Lauri Oja",
                                             Instant.now().getEpochSecond(), Instant.now().getEpochSecond() + Instant.now().getEpochSecond(),
                                             new ArrayList<>(Arrays.asList("Any")), new ArrayList<>(Arrays.asList("Pesäpallo")));
        post.addComment(new Comment("Pesis sucks", "Pete Peltomaa"));
        post.addComment(new Comment("Monelta maantain häh?", "Make Mattinen"));
        notificationRepository.save(post);

        post = new Notification("Tarviin joogakaverii!", "Aloittelijat on ok! Pistäkää kommenttii!", "Jaana Joku",
				Instant.now().getEpochSecond(), Instant.now().getEpochSecond() + Instant.now().getEpochSecond(),
				new ArrayList<>(Arrays.asList("Female")), new ArrayList<>(Arrays.asList("Jooga")));
		post.addComment(new Comment("Jooga sucks", "Pete Peltomaa"));
		notificationRepository.save(post);

		AdminNotification apost = new AdminNotification("Koripalloa Unisportil", "25. päivä tätä kuuta.", "UNISPORT",
				Instant.now().getEpochSecond());
		adminNotificationRepo.save(apost);
	}
}
