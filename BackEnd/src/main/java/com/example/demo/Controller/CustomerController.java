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

import com.example.demo.Model.CustomerModel;
 
import com.example.demo.Service.CustomerService;

@RestController
@CrossOrigin("*")
public class CustomerController {
	
	
	@Autowired 
	CustomerService service;
	@CrossOrigin
	@PostMapping("/customer")
	public String addDataa(@RequestBody CustomerModel list )
	{
		return service.addData(list);		 
	}
	@CrossOrigin
	@GetMapping("/customer")
	public List<CustomerModel> getDAta(){
		return service.getData();
	}

	@CrossOrigin
	@DeleteMapping("/customer/{id}")
	public String deleteData(@PathVariable int id) {
		return service.deleteData(id);
	}
	
	@CrossOrigin
	@PutMapping("/customer")
	public String updateData(@RequestBody CustomerModel model) {
		return service.updateData(model);
	}

}
