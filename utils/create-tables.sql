CREATE TABLE files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    format_type VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    file_path VARCHAR(255) NOT NULL
);