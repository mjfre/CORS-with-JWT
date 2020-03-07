package com.example.demo.student;

import com.example.demo.EmailValidator;
import com.example.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

//this is a service component that needs to be instantiated automatically
@Service
public class StudentService {

    private final StudentDataAccessObject studentDataAccessObject;
    private final EmailValidator emailValidator;

    @Autowired
    public StudentService(StudentDataAccessObject studentDataAccessObject, EmailValidator emailValidator) {
        this.studentDataAccessObject = studentDataAccessObject;
        this.emailValidator = emailValidator;
    }

    public List<Student> getAllStudents() {
        return studentDataAccessObject.selectAllStudents();
    }

    void addNewStudent(Student student) {

    }

    void deleteStudent(String pearId) {
//
    }

    public void updateStudent(UUID studentId, Student student) {

    }
}
