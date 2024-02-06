package com.boycottisrail.backend.dao.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "product_boycott")
@Data
public class EmailsEntity {
    @Id
    private String id;
    private String imageUrl;
    private String ProductName;
    private String brandName;
    private String Description;
    private String userId;

    // Constructors
    public EmailsEntity() {
    }

    public EmailsEntity(String imageUrl, String productName, String brandName, String description, String userId) {
        this.imageUrl = imageUrl;
        this.ProductName = productName;
        this.brandName = brandName;
        this.Description = description;
        this.userId = userId;
    }

    // Getters and Setters
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getProductName() {
        return ProductName;
    }

    public void setProductName(String productName) {
        this.ProductName = productName;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        this.Description = description;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
