package com.boycottisrail.backend.dao.entities;

import java.util.List;

import lombok.Data;
@Data
public class BoycottList {
    private List<String> boycottedBrands;
    private List<String> boycottedProducts;

    

    // Vous pouvez ajouter d'autres champs en fonction de vos besoins
}