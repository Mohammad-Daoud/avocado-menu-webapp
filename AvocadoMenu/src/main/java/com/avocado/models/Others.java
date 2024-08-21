package com.avocado.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "others")
public class Others {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String attributes;

    @Column(name = "image_url")
    private String imageUrl;
}
