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

 
import com.example.demo.Model.SupplierModel;
import com.example.demo.Service.SupplierService;

@RestController
@CrossOrigin("*")
public class SupplierController {
	
	
	@Autowired
	SupplierService service;
	
	@PostMapping("/supplier")
	public String addDataa(@RequestBody SupplierModel list )
	{
		return service.addData(list);		 
	}
	
	@GetMapping("/supplier")
	public List<SupplierModel> getDAta(){
		return service.getData();
	}

	@DeleteMapping("/supplier/{id}")
	public String deleteData(@PathVariable int id) {
		return service.deleteData(id);
	}
	
	@PutMapping("/supplier")
	public String updateData(@RequestBody SupplierModel model) {
		return service.updateData(model);
	}

}
