package com.example;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;


//Enables Spring Security’s web security support.
//
//Registers the springSecurityFilterChain which intercepts HTTP requests and applies security filters.
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //This method is used to define users and their roles/passwords.
        //
        //AuthenticationManagerBuilder builds the authentication logic.
        auth
                //Sets up in-memory authentication (users are hardcoded in the app, not stored in DB or LDAP).
                //
                //Good for testing/demo.
                .inMemoryAuthentication()
                //{noop} tells Spring not to encode the password.
                .withUser("john").password("{noop}john").roles("ADMIN")
                .and()
                .withUser("admin").password("{noop}admin").roles("ADMIN");
    }

    @Override
    //This method defines authorization rules, login page, and other security behavior.
    protected void configure(HttpSecurity http) throws Exception {
        http
                //Begins setting up URL-based access control.
                .authorizeRequests()
                //Only users with role ADMIN can access /admin.
                .antMatchers("/admin").hasRole("ADMIN")
                //Everyone (even unauthenticated users) can access /.
                .antMatchers("/").permitAll()
                //Enables form-based login (instead of basic auth popup).
                .and()
                .formLogin()
                .loginPage("/login")
                //f login is successful, always redirect to /admin, even if the user was trying to access a different page before.
                .defaultSuccessUrl("/admin", true)
                //Allows everyone (even unauthenticated users) to see the login page.
                .permitAll()
                //If login fails (bad credentials), redirect back to /login?error.
                .failureUrl("/login?error")
                .and()
                //Enables default logout functionality at /logout.
                //
                //When users visit /logout, Spring clears their session and security context.
                .logout()
                .permitAll();
//                .and()
                //Disables CSRF protection (Cross-Site Request Forgery).
                //
                //Should only be disabled for testing or non-production apps.
                //
                //If enabled, POST requests (like form submissions) need a CSRF token.
//                .csrf().enable();
    }
}
