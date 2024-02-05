package com.boycottisrail.backend.service;

import com.boycottisrail.backend.dao.entities.ProductReplacement;
import com.boycottisrail.backend.dao.repositories.ProductReplacementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductReplacementService {

    private final ProductReplacementRepository repository;

    @Autowired
    public ProductReplacementService(ProductReplacementRepository repository) {
        this.repository = repository;
    }

    public List<ProductReplacement> findAll() {
        return repository.findAll();
    }

    public Optional<ProductReplacement> findById(String id) {
        return repository.findById(id);
    }

    public ProductReplacement save(ProductReplacement productReplacement) {
        return repository.save(productReplacement);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
