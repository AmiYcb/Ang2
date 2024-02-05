package com.boycottisrail.backend.dao.repositories;

import com.boycottisrail.backend.dao.entities.BrandBoycott;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandBoycottRepository extends MongoRepository<BrandBoycott, String> {
    // Additional custom queries can be added here
}