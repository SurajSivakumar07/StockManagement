package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.CategoryModel;
import com.example.demo.Service.CategoryService;

@RestController
@CrossOrigin("*")
public class CategoryController {
	
	@Autowired
	CategoryService service;
		
	
	@GetMapping("/category")
	public List<CategoryModel> getDataa(){
		return  service.getData();
	}
	@CrossOrigin
	@PostMapping("/category")
	public String addDataa(@RequestBody CategoryModel model) {
		return service.addData(model);
	}
	
	@DeleteMapping("/category/{id}")
	public String deleteDataa(@PathVariable int id) {
		return service.deleteData(id);
	}
 
	@PutMapping("/category/")
	public String updateDataa(@RequestBody CategoryModel model) {
		return service.updateData(model);
	}
}
