package com.avocado.services;

import com.avocado.dtos.JuiceDTO;
import com.avocado.dtos.SandwichDTO;
import com.avocado.dtos.OthersDTO;
import com.avocado.models.Juice;
import com.avocado.models.Sandwich;
import com.avocado.models.Others;
import com.avocado.repositories.JuiceRepository;
import com.avocado.repositories.SandwichRepository;
import com.avocado.repositories.OthersRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private SandwichRepository sandwichRepository;

    @Autowired
    private JuiceRepository juiceRepository;

    @Autowired
    private OthersRepository othersRepository;


    public List<SandwichDTO> getAllSandwiches() {
        return sandwichRepository.findAll().stream()
                .map(this::convertToSandwichDTO)
                .collect(Collectors.toList());
    }

    public List<JuiceDTO> getAllJuices() {
        return juiceRepository.findAll().stream()
                .map(this::convertToJuiceDTO)
                .collect(Collectors.toList());
    }

    public List<OthersDTO> getAllSides() {
        return othersRepository.findAll().stream()
                .map(this::convertToSideDTO)
                .collect(Collectors.toList());
    }

    public List<SandwichDTO> getSandwichesByType(String type){
        return sandwichRepository.findByType(type).stream()
                .map(this::convertToSandwichDTO)
                .collect(Collectors.toList());
    }

    private SandwichDTO convertToSandwichDTO(Sandwich sandwich) {
        return SandwichDTO.builder()
                .title(sandwich.getTitle())
                .description(sandwich.getDescription()) // Added description mapping
                .imageUrl(sandwich.getImageUrl())
                .attributes(getTree(sandwich.getAttributes()))
                .type(sandwich.getStype())
                .build();
    }

    private JuiceDTO convertToJuiceDTO(Juice juice) {
        return JuiceDTO.builder()
                .title(juice.getTitle())
                .description(juice.getDescription()) // Added description mapping
                .imageUrl(juice.getImageUrl())
                .attributes(getTree(juice.getAttributes()))
                .build();
    }

    private OthersDTO convertToSideDTO(Others others) {
        return OthersDTO.builder()
                .title(others.getTitle())
                .attributes(getTree(others.getAttributes()))
                .imageUrl(others.getImageUrl())
                .build();
    }



    private JsonNode getTree(String jsonContent){
        try {
            return  new ObjectMapper().readTree(jsonContent);
        }catch (Exception e){
            return null;
        }
    }
    // Add other necessary methods...
}
