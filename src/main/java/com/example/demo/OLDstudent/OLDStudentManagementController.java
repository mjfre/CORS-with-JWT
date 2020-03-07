//package com.example.demo.OLDstudent;
//
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Arrays;
//import java.util.List;
//
//@RestController
//@RequestMapping("management/api/v1/students")
//public class OLDStudentManagementController {
//
//    private static final List<OLDStudent> STUDENTS = Arrays.asList(
//            new OLDStudent( 1, "James Bond"),
//            new OLDStudent( 2, "Maria Jones"),
//            new OLDStudent( 3, "Anna Smith")
//    );
//
//    //for @PreAuthorize:
//    //hasRole("ROLE_") hasAnyRole('ROLE_') hasAuthority('permission') hasAnyAuthority('permission')
//
//    @GetMapping
//    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ADMINTRAINEE')")
//    public List<OLDStudent> getAllStudents(){
//        System.out.println("GET students");return STUDENTS;
//    }
//
//    @PostMapping
//    @PreAuthorize("hasAuthority('student:write')")
//    public void registerNewStudent(@RequestBody OLDStudent student){
//        System.out.println("POST student");
//        System.out.println(student);
//    }
//
//    @DeleteMapping(path = "{studentId}")
//    @PreAuthorize("hasAuthority('student:write')")
//    public void deleteStudent(@PathVariable("studentId") Integer studentId){
//        System.out.println("DELETE student");
//        System.out.println(studentId);
//    }
//
//    @PutMapping(path = "{studentId}")
//    @PreAuthorize("hasAuthority('student:write')")
//    public void updateStudent(@PathVariable("studentId") Integer studentId,@RequestBody OLDStudent student){
//        System.out.println("PUT student");
//        System.out.println(String.format("%s %s", studentId, student));
//    }
//
//}
