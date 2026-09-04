CREATE DATABASE careerbridge;

USE careerbridge;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    college VARCHAR(150),
    course VARCHAR(100),
    year INT,
    cgpa DECIMAL(3,2)
);

CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150),
    email VARCHAR(100),
    description TEXT
);

CREATE TABLE internships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT,
    title VARCHAR(150),
    description TEXT,
    skills VARCHAR(500),
    location VARCHAR(100),
    stipend INT,
    duration VARCHAR(50),
    deadline DATE,

    FOREIGN KEY (company_id)
    REFERENCES companies(id)
);

CREATE TABLE jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT,
    title VARCHAR(150),
    description TEXT,
    skills VARCHAR(500),
    location VARCHAR(100),
    salary VARCHAR(100),

    FOREIGN KEY (company_id)
    REFERENCES companies(id)
);

CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    internship_id INT,
    status VARCHAR(50) DEFAULT 'Applied',

    FOREIGN KEY (student_id)
    REFERENCES students(id),

    FOREIGN KEY (internship_id)
    REFERENCES internships(id)
);
