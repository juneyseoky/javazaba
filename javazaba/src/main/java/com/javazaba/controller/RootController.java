package com.javazaba.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {
	
	@GetMapping("/api")
	public String root() {
		return "하gngngn호";
	}
	

}
