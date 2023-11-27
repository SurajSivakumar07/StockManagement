package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.CategoryModel;

public interface CategoryRepository  extends JpaRepository<CategoryModel, Integer>{

}
