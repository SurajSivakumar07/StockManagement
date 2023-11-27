package com.example.demo.Service;

import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CategoryModel;
import com.example.demo.Model.ListModel;
import com.example.demo.Repository.ListRepository;

@Service
public class ListService {
	@Autowired
	ListRepository repo;
	
	 public String addData(ListModel model) {
		 
		 repo.save(model);
		 
		 return "Added";
	 }

	public List<ListModel> getData() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	public String deleteData(int id) {
		repo.deleteById(id);
		return "Deleted";
	}
	
	public String updateData(ListModel model) {
		 repo.save(model);
		return "Updated";
	}
	
}
