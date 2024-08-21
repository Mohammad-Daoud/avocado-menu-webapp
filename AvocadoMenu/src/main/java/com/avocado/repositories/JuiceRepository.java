package com.avocado.repositories;


import com.avocado.models.Juice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JuiceRepository extends JpaRepository<Juice, Long> {
}
