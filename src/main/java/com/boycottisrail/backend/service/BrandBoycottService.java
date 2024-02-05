package com.boycottisrail.backend.service;

import com.boycottisrail.backend.dao.entities.BrandBoycott;
import com.boycottisrail.backend.dao.repositories.BrandBoycottRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrandBoycottService {

    private final BrandBoycottRepository brandBoycottRepository;

    @Autowired
    public BrandBoycottService(BrandBoycottRepository brandBoycottRepository) {
        this.brandBoycottRepository = brandBoycottRepository;
    }

    public List<BrandBoycott> findAll() {
        return brandBoycottRepository.findAll();
    }

//    public Optional<BrandBoycott> findById(String id) {
//        return brandBoycottRepository.findById(id);
//    }

    public Optional<BrandBoycott> findById(String id) {
        return brandBoycottRepository.findById(id);
    }
    public BrandBoycott save(BrandBoycott brandBoycott) {
        return brandBoycottRepository.save(brandBoycott);
    }

    public void deleteById(String id) {
        brandBoycottRepository.deleteById(id);
    }
}
