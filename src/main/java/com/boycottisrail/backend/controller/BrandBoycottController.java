package com.boycottisrail.backend.controller;

import com.boycottisrail.backend.dao.entities.BrandBoycott;
import com.boycottisrail.backend.service.BrandBoycottService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/brand-boycotts")

public class BrandBoycottController {

    private final BrandBoycottService brandBoycottService;

    @Autowired
    public BrandBoycottController(BrandBoycottService brandBoycottService) {
        this.brandBoycottService = brandBoycottService;
    }

    @GetMapping
    public List<BrandBoycott> getAllBrandBoycotts() {
        return brandBoycottService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BrandBoycott> getBrandBoycottById(@PathVariable String id) {
        return brandBoycottService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public BrandBoycott createBrandBoycott(@RequestBody BrandBoycott brandBoycott) {
        return brandBoycottService.save(brandBoycott);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BrandBoycott> updateBrandBoycott(@PathVariable String id,
                                                           @RequestBody BrandBoycott updatedBrandBoycott) {
        return brandBoycottService.findById(id)
                .map(existingBoycott -> {
                    existingBoycott.setBrandName(updatedBrandBoycott.getBrandName());
                    existingBoycott.setBoycottReasons(updatedBrandBoycott.getBoycottReasons());
                    existingBoycott.setBrandDescription(updatedBrandBoycott.getBrandDescription());
                    return ResponseEntity.ok(brandBoycottService.save(existingBoycott));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBrandBoycott(@PathVariable String id) {
        return brandBoycottService.findById(id)
                .map(boycott -> {
                    brandBoycottService.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}