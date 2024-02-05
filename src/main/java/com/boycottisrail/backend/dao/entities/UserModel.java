package com.boycottisrail.backend.dao.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "user")
@Data
public class UserModel {
    @Id
    private String id;
    private BoycottList boycottList;
    private String username;
    private String email;
    private String password;

    // Getters and setters
}
