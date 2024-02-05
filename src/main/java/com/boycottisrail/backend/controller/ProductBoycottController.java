package com.boycottisrail.backend.controller;

import com.boycottisrail.backend.dao.entities.ProductBoycott;
import com.boycottisrail.backend.service.ProductBoycottService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "*"}, allowedHeaders = "*")
@RestController
@RequestMapping("/api/product-boycotts")

public class ProductBoycottController {

    private final ProductBoycottService service;

    @Autowired
    public ProductBoycottController(ProductBoycottService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProductBoycott> getAllProductBoycotts() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductBoycott> getProductBoycottById(@PathVariable String id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProductBoycott createProductBoycott(@RequestBody ProductBoycott productBoycott) {
        return service.save(productBoycott);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductBoycott> updateProductBoycott(@PathVariable String id,
                                                               @RequestBody ProductBoycott newProductBoycott) {
        return service.findById(id)
                .map(productBoycott -> {
                    productBoycott.setBarcode(newProductBoycott.getBarcode());
                    productBoycott.setImageUrl(newProductBoycott.getImageUrl());
                    productBoycott.setLibelle(newProductBoycott.getLibelle());
                    productBoycott.setReasons(newProductBoycott.getReasons());
                    productBoycott.setAlternative(newProductBoycott.getAlternative());
                    productBoycott.setBrand(newProductBoycott.getBrand());
                    productBoycott.setBrandName(newProductBoycott.getBrandName());
                    productBoycott.setUserId(newProductBoycott.getUserId());
//                    productBoycott.setAlternativeIds(newProductBoycott.getAlternativeIds());
                    return ResponseEntity.ok(service.save(productBoycott));
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductBoycott(@PathVariable String id) {
        return service.findById(id)
                .map(productBoycott -> {
                    service.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
