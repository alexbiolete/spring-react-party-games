package com.mps.team3.party.games;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class Team3Application {

	public static void main(String[] args) {
		SpringApplication.run(Team3Application.class, args);
	}

}
