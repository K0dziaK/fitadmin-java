package pl.fitteam.fitadmin;

import jakarta.servlet.ServletContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.templatemode.TemplateMode;

@SpringBootApplication
public class FitadminApplication {


  public static void main(String[] args) {
    SpringApplication.run(FitadminApplication.class, args);
  }


}
