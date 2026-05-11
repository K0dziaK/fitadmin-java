package pl.fitteam.fitadmin;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.server.ResponseStatusException;

@Controller
public class TemplateViewController {

  @GetMapping({
      "/",
      "/home",
      "/error-view",
      "/admin/dashboard",
      "/admin/attendance/list",
      "/admin/classes/list",
      "/admin/classes/form",
      "/admin/membership-types/list",
      "/admin/membership-types/form",
      "/admin/trainers/list",
      "/admin/trainers/form",
      "/admin/users/list",
      "/auth/login",
      "/auth/register",
      "/classes/detail",
      "/classes/my-reservations",
      "/classes/schedule",
      "/dashboard",
      "/dashboard/index",
      "/memberships/list",
      "/memberships/my",
      "/memberships/purchase",
      "/profile/edit",
      "/ratings/form",
      "/reports",
      "/reports/index",
      "/fragments/footer",
      "/fragments/layout",
      "/fragments/navbar"
  })
  public String renderTemplate(HttpServletRequest request) {
    return switch (request.getRequestURI()) {
      case "/", "/home" -> "home";
      case "/error-view" -> "error";
      case "/admin/dashboard" -> "admin/dashboard";
      case "/admin/attendance/list" -> "admin/attendance/list";
      case "/admin/classes/list" -> "admin/classes/list";
      case "/admin/classes/form" -> "admin/classes/form";
      case "/admin/membership-types/list" -> "admin/membership-types/list";
      case "/admin/membership-types/form" -> "admin/membership-types/form";
      case "/admin/trainers/list" -> "admin/trainers/list";
      case "/admin/trainers/form" -> "admin/trainers/form";
      case "/admin/users/list" -> "admin/users/list";
      case "/auth/login" -> "auth/login";
      case "/auth/register" -> "auth/register";
      case "/classes/detail" -> "classes/detail";
      case "/classes/my-reservations" -> "classes/my-reservations";
      case "/classes/schedule" -> "classes/schedule";
      case "/dashboard", "/dashboard/index" -> "dashboard/index";
      case "/memberships/list" -> "memberships/list";
      case "/memberships/my" -> "memberships/my";
      case "/memberships/purchase" -> "memberships/purchase";
      case "/profile/edit" -> "profile/edit";
      case "/ratings/form" -> "ratings/form";
      case "/reports", "/reports/index" -> "reports/index";
      case "/fragments/footer" -> "fragments/footer";
      case "/fragments/layout" -> "fragments/layout";
      case "/fragments/navbar" -> "fragments/navbar";
      default -> throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    };
  }
}

