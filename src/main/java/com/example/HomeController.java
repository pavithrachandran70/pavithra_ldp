package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

//    @GetMapping("/")
//    public String showHomePage() {
//        return "home";
//    }
@GetMapping("/")
public String redirectToLogin() {
    return "redirect:/login";
}


    @GetMapping("/admin")
    public String showAdminPage() {
        return "admin";
    }


        @GetMapping("/login")
        public String login() {
            return "login";
        }


}
