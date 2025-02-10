package com.avocado.controllers;

import com.avocado.dtos.JuiceDTO;
import com.avocado.dtos.SandwichDTO;
import com.avocado.dtos.OthersDTO;
import com.avocado.models.Sandwich;
import com.avocado.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
//TODO: MAKE IT MODULAR
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/sandwiches")
    public List<SandwichDTO> getAllSandwiches() {
        return productService.getAllSandwiches();
    }

    @GetMapping("/sandwiches/{type}")
    public List<SandwichDTO> getAllSandwichesByType(@PathVariable String type) {
        return productService.getSandwichesByType(type);
    }
    @GetMapping("/juices")
    public List<JuiceDTO> getAllJuices() {
        return productService.getAllJuices();
    }

    @GetMapping("/sides")
    public List<OthersDTO> getAllSides() {
        return productService.getAllSides();
    }

}
