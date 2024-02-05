package com.boycottisrail.backend.service;

import com.boycottisrail.backend.dao.entities.UserModel;
import com.boycottisrail.backend.dao.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserModel> findAll() {
        return userRepository.findAll();
    }

    public Optional<UserModel> findById(String id) {
        return userRepository.findById(id);
    }

    public UserModel save(UserModel userModel) {
        return userRepository.save(userModel);
    }

    public void deleteById(String id) {
        userRepository.deleteById(id);
    }
}
