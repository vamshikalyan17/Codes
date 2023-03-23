package com.vamshi.springreact.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vamshi.springreact.POJO.Student;
import com.vamshi.springreact.Repository.StudentRepository;

@Service
public class StudentService implements StudentInterface {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	
	@Override
	public List<Student> getAllStudents() {
		return (List<Student>)studentRepository.findAll();
	}
}
