package pl.fitteam.fitadmin;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

  private final CustomerRepository customerRepository;

  public HelloController(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  @GetMapping("/hello")
  public String hello() {
    Iterable<Customer> byId = customerRepository.findAll();
    StringBuilder names = new StringBuilder();
    byId.forEach((customer) -> {
      names.append(customer.getFirstName()).append(" ").append(customer.getLastName()).append(", ");
    });
    return String.format("Hello, %s!", names);
  }

  @PutMapping("/hello")
  public Customer addCustomer() {
    Customer entity = new Customer("John", "Doe");
    customerRepository.save(entity);
    return entity;
  }

  @PostMapping("/hello")
  public void addCustomerPost(Customer entity) {
    customerRepository.save(entity);
  }

  @GetMapping("/admin")
  public String admin() {
    return "Hello, Admin!";
  }

  @GetMapping("/error")
  public String error() {
    return "This webpage does not exist!";
  }

  @GetMapping("/authenticated")
  public String authenticated() {
    return "Hello, Authenticated!";
  }
}
