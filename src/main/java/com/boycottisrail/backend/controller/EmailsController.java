package com.boycottisrail.backend.controller;

import com.boycottisrail.backend.dao.entities.EmailsEntity;
import com.boycottisrail.backend.service.EmailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/emails")
public class EmailsController {

    private final EmailsService emailsService;

    @Autowired
    public EmailsController(EmailsService emailsService) {
        this.emailsService = emailsService;
    }

    @GetMapping
    public List<EmailsEntity> getAllEmails() {
        return emailsService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmailsEntity> getEmailsById(@PathVariable String id) {
        return emailsService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public EmailsEntity createEmail(@RequestBody EmailsEntity emails) {
        return emailsService.save(emails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmailsEntity> updateEmail(@PathVariable String id,
                                                    @RequestBody EmailsEntity updatedEmail) {
        return emailsService.findById(id)
                .map(existingEmail -> {
                    existingEmail.setProductName(updatedEmail.getProductName());
                    existingEmail.setImageUrl(updatedEmail.getImageUrl());
                    existingEmail.setBrandName(updatedEmail.getBrandName());
                    existingEmail.setDescription(updatedEmail.getDescription());
                    existingEmail.setUserId(updatedEmail.getUserId());

                    return ResponseEntity.ok(emailsService.save(existingEmail));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmail(@PathVariable String id) {
        return emailsService.findById(id)
                .map(email -> {
                    emailsService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
