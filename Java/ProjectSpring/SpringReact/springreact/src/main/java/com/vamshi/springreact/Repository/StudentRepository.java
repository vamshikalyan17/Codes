package com.vamshi.springreact.Repository;

import org.springframework.data.repository.CrudRepository;

import com.vamshi.springreact.POJO.Student;

public interface StudentRepository extends CrudRepository<Student, Long> {

}
