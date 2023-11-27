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
import com.example.demo.Model.ListModel;
import com.example.demo.Service.ListService;

@RestController
@CrossOrigin("*")
public class InventoryController {
	
	@Autowired
	ListService service;
	
	
	@PostMapping("/")
	public String addDataa(@RequestBody ListModel list )
	{
		return service.addData(list);		 
	}
	
	@GetMapping("/")
	public List<ListModel> getDAta(){
		return service.getData();
	}

	
	@GetMapping("/get")
	public String ret() {
		return "hello world";
	}
	
	
	@DeleteMapping("/{id}")
	public String deleteData(@PathVariable int id) {
		return service.deleteData(id);
	}
	
	@PutMapping("/")
	public String updateData(@RequestBody ListModel model) {
		return service.updateData(model);
	}

}
