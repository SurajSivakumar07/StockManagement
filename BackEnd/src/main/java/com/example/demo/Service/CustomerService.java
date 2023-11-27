package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import com.example.demo.Model.CustomerModel;
import com.example.demo.Repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository repo;
	
	public String addData(CustomerModel model) {
		
		repo.save(model);
		return "Added";
	}
	
	public List<CustomerModel> getData(){
		return repo.findAll();
	}
	
	public String deleteData(int id) {
		repo.deleteById(id);
		return "Deleted";
	}
	
	public String updateData(CustomerModel model) {
		repo.save(model);
		return "Updated";
	}

}
