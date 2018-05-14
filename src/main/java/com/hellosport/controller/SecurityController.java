package com.hellosport.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/security")
public class SecurityController {

    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String output = "";
        if (userDetails.getAuthorities().toString().contains("ROLE_ADMIN")) {
            output = "yes";
        } else {
            output = "no";
        }
        return output;

    }
}