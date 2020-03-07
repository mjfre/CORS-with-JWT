//package com.example.demo.OLDstudent;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.Arrays;
//import java.util.List;
//
//@RestController
//@RequestMapping("api/v1/students")
//public class OLDStudentController {
//
//    private static final List<OLDStudent> STUDENTS = Arrays.asList(
//                new OLDStudent( 1, "James Bond"),
//                new OLDStudent( 2, "Maria Jones"),
//                new OLDStudent( 3, "Anna Smith")
//    );
//
//    @GetMapping(path = "{studentId}")
//    public OLDStudent getStudent(@PathVariable("studentId") Integer studentId){
//        return STUDENTS.stream()
//                .filter( student -> studentId.equals(student.getStudentId()))
//                .findFirst()
//                .orElseThrow(() -> new IllegalStateException("Student " + studentId + " does not exist"));
//    }
//}
