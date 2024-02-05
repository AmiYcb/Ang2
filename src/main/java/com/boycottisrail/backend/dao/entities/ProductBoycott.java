package com.boycottisrail.backend.dao.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

import java.util.List;

/**
 * Entity representing a product boycott.
 */
@Document(collection = "product_boycott")
@Data
public class ProductBoycott {
    @Id
    private String id;

    private String barcode;  // corresponds to Code Bar
    private String imageUrl; // corresponds to Image URL
    private String libelle;   // corresponds to Libelle
    private String reasons;   // corresponds to Boycott reasons
    private String alternative; // corresponds to Alternatives
    private String brand;      // corresponds to Brands

    // Assuming BrandBoycott and UserModel are also documents.
    // Storing just the ID if these objects are large or not frequently used
    // together.
//    private String brandId;
    private String brandName; // Include a field for the brand name

    private String userId;

//    private List<String> alternativeIds; // IDs of alternative products

    // Getters, setters, equals, hashCode, toString are provided by Lombok @Data
}
