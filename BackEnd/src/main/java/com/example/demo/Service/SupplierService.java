package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import com.example.demo.Model.SupplierModel;
import com.example.demo.Repository.SupplierRepository;

@Service
public class SupplierService {
	
	
	@Autowired
	SupplierRepository repo;
	
	
	public String addData(SupplierModel model) {
		
		repo.save(model);
		return "Added";
	}
	
	public List<SupplierModel> getData(){
		return repo.findAll();
	}
	
	public String deleteData(int id) {
		repo.deleteById(id);
		return "Deleted";
	}
	
	public String updateData(SupplierModel model) {
		repo.save(model);
		return "Updated";
	}

	

}
