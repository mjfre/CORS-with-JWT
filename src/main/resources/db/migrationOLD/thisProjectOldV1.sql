CREATE TYPE student_status AS ENUM ('ACTIVE', 'DEACTIVATED','PENDING');
CREATE TYPE survey_order_status AS ENUM ('ACTIVE', 'COMPLETE', 'CANCELED');

CREATE TABLE IF NOT EXISTS student (
    pear_id VARCHAR(100) NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    teacher_id UUID,
    student_status student_status NOT NULL,
    created_on DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS survey_event (
    survey_event_id UUID NOT NULL PRIMARY KEY,
    date_issued DATE NOT NULL,
    issued_by VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS survey_order (
    pear_id VARCHAR(100) NOT NULL REFERENCES student (pear_id),
    survey_event_id UUID NOT NULL REFERENCES survey_event (survey_event_id),
    completed_on DATE,
    survey_order_status survey_order_status NOT NULL,
    PRIMARY KEY(pear_id, survey_event_id)
);

CREATE TABLE IF NOT EXISTS teacher (
    teacher_id UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    teacher_email VARCHAR(50) NOT NULL
);
