package com.boycottisrail.backend.dao.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.List;

@Document(collection = "brand_boycott")
@Data
public class BrandBoycott {
    @Id
    private String id;
    private String brandName;
    private String imageUrl;
    private String boycottReasons;
    private String brandDescription;
}
