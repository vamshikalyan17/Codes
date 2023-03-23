package com.vamshi.springreact.Service;

import java.util.List;

import com.vamshi.springreact.POJO.Student;

public interface StudentInterface {
	
	Student saveStudent(Student student);
	List<Student> getAllStudents();
}
