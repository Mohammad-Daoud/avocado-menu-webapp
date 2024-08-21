package com.avocado.dtos;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OthersDTO {
    private String title;
    private JsonNode attributes;
    private String imageUrl;
}
