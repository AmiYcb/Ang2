package com.boycottisrail.backend.service;

import com.boycottisrail.backend.dao.entities.BrandBoycott;
import com.boycottisrail.backend.dao.entities.ProductBoycott;
import com.boycottisrail.backend.dao.repositories.ProductBoycottRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductBoycottService {

    private final ProductBoycottRepository repository;

    private final BrandBoycottService brandService; // Assuming you have a BrandService to fetch brand details

    @Autowired
    public ProductBoycottService(ProductBoycottRepository repository, BrandBoycottService brandService) {
        this.repository = repository;
        this.brandService = brandService;
    }

    public List<ProductBoycott> findAll() {
        List<ProductBoycott> products = repository.findAll();
        List<ProductBoycott> productsWithBrandNames = new ArrayList<>();

        for (ProductBoycott product : products) {
            Optional<BrandBoycott> brandOptional = brandService.findById(product.getBrand());
            brandOptional.ifPresent(brand -> product.setBrandName(brand.getBrandName()));
            productsWithBrandNames.add(product);
        }

        return productsWithBrandNames;
    }

    public Optional<ProductBoycott> findById(String id) {
        Optional<ProductBoycott> productOptional = repository.findById(id);
        if (productOptional.isPresent()) {
            ProductBoycott product = productOptional.get();

            // Fetch the brand details from BrandBoycottService
            Optional<BrandBoycott> brandOptional = brandService.findById(product.getBrand());
            if (brandOptional.isPresent()) {
                // If the brand exists, set its name in the product
                BrandBoycott brand = brandOptional.get();
                product.setBrandName(brand.getBrandName());
            }

            return Optional.of(product);
        } else {
            return Optional.empty();
        }
    }



    public ProductBoycott save(ProductBoycott productBoycott) {
        return repository.save(productBoycott);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
