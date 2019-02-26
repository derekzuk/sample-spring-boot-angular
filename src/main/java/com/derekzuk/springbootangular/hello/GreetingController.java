package com.derekzuk.springbootangular.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GreetingController {

    @GetMapping("/http-servlet-response")
    public void usingHttpServletResponse(HttpServletResponse response) {
        response.addHeader("Test-Header", "Test-Value");
    }

    @PostMapping("/post-http-servlet-response")
    public void postUsingHttpServletResponse(HttpServletResponse response) {
        response.addHeader("Test-Header", "Test-Value");
    }

}