DROP DATABASE IF EXISTS ps9oer4w1b50rgbt;

CREATE DATABASE ps9oer4w1b50rgbt;

USE ps9oer4w1b50rgbt;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(20) NULL,
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);