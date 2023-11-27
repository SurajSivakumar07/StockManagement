package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CategoryModel;
import com.example.demo.Repository.CategoryRepository;


@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository repo;
	
	
	public String addData(CategoryModel model) {
		
		repo.save(model);
		return "Added";
	}
	
	public List<CategoryModel> getData(){
		return repo.findAll();
	}
	
	public String deleteData(int id) {
		repo.deleteById(id);
		return "Deleted";
	}
	
	public String updateData(CategoryModel model) {
		repo.save(model);
		return "Updated";
	}

}
