package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.SupplierModel;

public interface SupplierRepository extends JpaRepository<SupplierModel, Integer> {

}
