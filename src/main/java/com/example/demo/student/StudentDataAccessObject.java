package com.example.demo.student;

import com.example.demo.auth.ApplicationUser;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static com.example.demo.security.ApplicationUserRole.STUDENT;

@Repository
public class StudentDataAccessObject {



    @Autowired
    public StudentDataAccessObject(JdbcTemplate jdbcTemplate) {

    }


    public List<Student> selectAllStudents() {
        return Lists.newArrayList(
                        new Student(
                                "Tom",
                                "Jones"
                        ));
    }


}
