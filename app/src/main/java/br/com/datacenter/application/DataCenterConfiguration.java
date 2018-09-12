package br.com.datacenter.application;

import java.io.Serializable;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

@Component
@Configuration
@EnableScheduling
public class DataCenterConfiguration implements Serializable {

	private static final long serialVersionUID = 3037200994699406071L;

//	@Bean
//	public FilterRegistrationBean corsFilter() {
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
//		config.addAllowedMethod(HttpMethod.POST);
//		config.addAllowedMethod(HttpMethod.GET);
//		config.addAllowedMethod(HttpMethod.PUT);
//		config.addAllowedMethod(HttpMethod.DELETE);
//		source.registerCorsConfiguration("/**", config);
//		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
//		bean.setOrder(0);
//		return bean;
//	}
	
}
	
