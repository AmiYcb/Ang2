package com.boycottisrail.backend.dao.repositories;

import com.boycottisrail.backend.dao.entities.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
    // Additional custom queries can be added here
}
