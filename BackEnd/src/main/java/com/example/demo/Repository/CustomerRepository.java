package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.CustomerModel;

public interface  CustomerRepository extends JpaRepository<CustomerModel, Integer> {

}
