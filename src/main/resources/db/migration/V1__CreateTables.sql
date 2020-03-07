CREATE TYPE student_status AS ENUM ('ACTIVE', 'DEACTIVATED','PENDING');
CREATE TYPE survey_order_status AS ENUM ('ACTIVE', 'COMPLETE', 'CANCELED');

CREATE TABLE IF NOT EXISTS teacher (
    teacher_id UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    teacher_email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS student (
    student_id UUID NOT NULL PRIMARY KEY,
    pear_id VARCHAR(100),
    pike13_id VARCHAR(100),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    teacher_id UUID REFERENCES teacher (teacher_id),
    student_status student_status NOT NULL,
    created_on DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS survey_event (
    survey_event_id UUID NOT NULL PRIMARY KEY,
    date_issued DATE NOT NULL,
    issued_by VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS survey_order (
    student_id UUID NOT NULL REFERENCES student (student_id),
    survey_event_id UUID NOT NULL REFERENCES survey_event (survey_event_id),
    completed_on DATE,
    survey_order_status survey_order_status NOT NULL,
    PRIMARY KEY(student_id, survey_event_id)
);

