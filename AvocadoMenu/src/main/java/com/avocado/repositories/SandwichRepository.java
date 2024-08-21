package com.avocado.repositories;
import com.avocado.models.Sandwich;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SandwichRepository extends JpaRepository<Sandwich, Long> {

    @Query("SELECT s FROM Sandwich s WHERE s.stype = :type")
    List<Sandwich> findByType(@Param("type") String type);
}

