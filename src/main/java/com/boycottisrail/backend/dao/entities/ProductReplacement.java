package com.boycottisrail.backend.dao.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "product_replacement")
@Data
public class ProductReplacement {
    @Id
    private String id;
    private String replacementName;
    private String reason;

    // Lombok will automatically generate getters, setters, equals, hashCode, and
    // toString methods
}
