package com.avocado.dtos;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class JuiceDTO {
    private String title;
    private String imageUrl;
    private String description;
    private JsonNode attributes;
}
