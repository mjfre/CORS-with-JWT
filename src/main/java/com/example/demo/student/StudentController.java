package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/students")
@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200" })
@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_MANAGER')")
public class StudentController {


    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200" })
    @GetMapping
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PostMapping
    public void addNewStudent(@RequestBody @Valid Student student){
        studentService.addNewStudent(student);
    }

//    @GetMapping(path = "{studentId}/courses")
//    public List<StudentCourse> getAllCoursesForStudent(@PathVariable("studentId") UUID studentId){
//        return studentService.getAllCoursesForStudent(studentId);
//    }
//

    //changes pearId, firstName, lastName - NOT status or createdOn
    @PutMapping(path = "{studentId}")
    public void updateStudent(@PathVariable("studentId") String studentId,
                              @RequestBody Student student) {
        System.out.println("studentId");
        System.out.println(studentId);
        System.out.println("to UUID");
        System.out.println(UUID.fromString(studentId));
        studentService.updateStudent(UUID.fromString(studentId), student);
    }

    @DeleteMapping("{pearId}")
    public void deleteStudent(@PathVariable("pearId") String pearId) {
        studentService.deleteStudent(pearId);
    }
}
