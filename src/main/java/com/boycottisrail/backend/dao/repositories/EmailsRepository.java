package com.boycottisrail.backend.dao.repositories;

import com.boycottisrail.backend.dao.entities.EmailsEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailsRepository extends MongoRepository<EmailsEntity, String> {
}
