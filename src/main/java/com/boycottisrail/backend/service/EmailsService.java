package com.boycottisrail.backend.service;

import com.boycottisrail.backend.dao.entities.EmailsEntity;
import com.boycottisrail.backend.dao.repositories.EmailsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmailsService {

    private final EmailsRepository repository;

    public EmailsService(EmailsRepository repository) {
        this.repository = repository;
    }

    public List<EmailsEntity> findAll() {
        return repository.findAll();
    }

    public Optional<EmailsEntity> findById(String id) {
        return repository.findById(id);
    }

    public EmailsEntity save(EmailsEntity emails) {
        return repository.save(emails);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
