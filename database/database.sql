CREATE DATABASE ng_films_db;

USE ng_films_db;

CREATE TABLE film(
    id              INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title           VARCHAR(180),
    description     VARCHAR(255),
    image           VARCHAR(200),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE film TO films;

DESCRIBE films;