package com.boycottisrail.backend.dao.repositories;

import com.boycottisrail.backend.dao.entities.ProductBoycott;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductBoycottRepository extends MongoRepository<ProductBoycott, String> {
    // Additional custom methods can be defined here
}
