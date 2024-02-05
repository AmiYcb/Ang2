package com.boycottisrail.backend.controller;

import com.boycottisrail.backend.dao.entities.ProductReplacement;
import com.boycottisrail.backend.service.ProductReplacementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/product-replacements")
public class ProductReplacementController {

    private final ProductReplacementService service;

    @Autowired
    public ProductReplacementController(ProductReplacementService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProductReplacement> getAllProductReplacements() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductReplacement> getProductReplacementById(@PathVariable String id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProductReplacement createProductReplacement(@RequestBody ProductReplacement productReplacement) {
        return service.save(productReplacement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductReplacement> updateProductReplacement(@PathVariable String id,
            @RequestBody ProductReplacement updatedProductReplacement) {
        return service.findById(id)
                .map(existingReplacement -> {
                    existingReplacement.setReplacementName(updatedProductReplacement.getReplacementName());
                    existingReplacement.setReason(updatedProductReplacement.getReason());
                    return ResponseEntity.ok(service.save(existingReplacement));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductReplacement(@PathVariable String id) {
        return service.findById(id)
                .map(replacement -> {
                    service.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
