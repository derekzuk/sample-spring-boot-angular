package com.derekzuk.springbootangular.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HttpController {

    @GetMapping("/http-servlet-response")
    public void usingHttpServletResponse(HttpServletResponse response) {
        response.addHeader("Test-Header", "Test-Value");
        try {
            int num = (int)(Math.random() * 3 + 1);
            Thread.sleep(num);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/post-http-servlet-response")
    public void postUsingHttpServletResponse(HttpServletResponse response) throws IOException {
        response.addHeader("Test-Header", "Test-Value");
        String responseToClient = "";
        int num = (int)(Math.random() * 3 + 1);
        for (int i = 0; i < num; i++) {
            responseToClient = responseToClient + "Test text. ";
        }
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write(responseToClient);
    }

    @GetMapping("/takeTime")
    public void takeTime(HttpServletResponse response) {
        try {
            int num = (int)(Math.random() * 100 + 1);
            Thread.sleep(num);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/changeSize")
    public void changeSize(HttpServletResponse response) throws IOException {
        String responseToClient = "";
        int num = (int)(Math.random() * 100 + 1);
        for (int i = 0; i < num; i++) {
            responseToClient = responseToClient + "This message will vary in size. ";
        }
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write(responseToClient);
    }

}