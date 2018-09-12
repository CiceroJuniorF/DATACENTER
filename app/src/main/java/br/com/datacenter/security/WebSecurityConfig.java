package br.com.datacenter.security;

import java.util.Collections;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableGlobalMethodSecurity
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.csrf().disable().authorizeRequests()
			.antMatchers("/files/*").permitAll()
			.antMatchers("/token/login").permitAll()
			.antMatchers("/client/login").permitAll()
			.anyRequest().authenticated()
			.and()
			
			// filtra requisições de login
			.addFilterBefore(new JWTLoginFilter("/token/login", authenticationManager()),
	                UsernamePasswordAuthenticationFilter.class)
			
			// filtra outras requisições para verificar a presença do JWT no header
			.addFilterBefore(new JWTAuthenticationFilter(),
	                UsernamePasswordAuthenticationFilter.class);
		
		httpSecurity.cors().configurationSource(new CorsConfigurationSource() {			
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest arg0) {
				CorsConfiguration config = new CorsConfiguration();
		        config.setAllowedHeaders(Collections.singletonList("*"));
		        config.setAllowedMethods(Collections.singletonList("*"));
		        config.addAllowedOrigin("*");
		        config.setAllowCredentials(true);
		        return config;
			}
		});
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		// cria uma conta default
		auth.inMemoryAuthentication()
			.withUser("application")
			.password("{noop}46c825f63334a04c8316ee69a8b49a68")
			.roles("ADMIN");
		
	}
	
	



	
}

