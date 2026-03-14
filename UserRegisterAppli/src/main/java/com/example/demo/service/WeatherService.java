package com.example.demo.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
 
import java.util.Map;

@Service
public class WeatherService 
{

    private final RestTemplate restTemplate = new RestTemplate();

    // @Value("${weather.api.key}")
    private String apiKey="44e71fd78c866dcdf957a96a8f1d9b66";
    
//   

    @Cacheable("weather")
    public String getWeatherByCity(String city) throws InterruptedException
     {
        System.out.println("StartedFetching....................");
        
        Thread.sleep(5000);
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + city
                   + "&appid=" + this.apiKey
                   + "&units=metric"; // Or use 'imperial' for Fahrenheit
  
        try {
            ResponseEntity<Map> response = this.restTemplate.getForEntity(url, Map.class);
            if (!response.getStatusCode().is2xxSuccessful()) 
            {
                return "Failed to get weather: " + response.getStatusCode();
            }

            System.out.println(response+"================================================================================");

            Map body = response.getBody();
            if (body == null || body.isEmpty()) {
                return "Empty weather data received.";
            }
            System.out.println("body isss"+body+"================================================================================"+"endd");
            Map main = (Map) body.get("main");
          //  String main=(String) body.get("main");
            Map weather = ((java.util.List<Map>) body.get("weather")).get(0);
             System.out.println(main+"================================================================================");
              System.out.println(weather+"================================================================================");
            double temp = (Double) main.get("temp");
             System.out.println(temp+"================================================================================");
            String description = (String) weather.get("description");
            System.out.println(description+"================================================================================");
            return "Current weather in " + city + ": " + temp + "°C, " + description;

        } catch (Exception e) {
            return "Error fetching weather: " + e.getMessage();
        }
     }
}