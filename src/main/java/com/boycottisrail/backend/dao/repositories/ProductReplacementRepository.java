package com.boycottisrail.backend.dao.repositories;

import com.boycottisrail.backend.dao.entities.ProductReplacement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductReplacementRepository extends MongoRepository<ProductReplacement, String> {
    // Additional custom queries can be added here
}
