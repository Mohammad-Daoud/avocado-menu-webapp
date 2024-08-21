package com.avocado.repositories;


import com.avocado.models.Others;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OthersRepository extends JpaRepository<Others, Long> {
}
