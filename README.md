# Multimedia File Collection Management Application

## Description
This web application allows users to manage a multimedia file collection. It provides functionalities to browse, add, update, and delete multimedia files. The application uses PHP for server-side operations and Angular for the client-side interface, incorporating AJAX for asynchronous data retrieval. The multimedia files' metadata is stored in a MySQL database hosted on the SCS network at `www.scs.ubbcluj.ro`.

## Features
- **Browse Multimedia Files**: Retrieve and display multimedia file titles based on category/genre using AJAX.
- **Add Multimedia Files**: Add new multimedia files to the collection.
- **Update Multimedia Files**: Edit details of existing multimedia files.
- **Delete Multimedia Files**: Remove multimedia files from the collection with confirmation.
- **Filter Display**: Display the filter used for browsing (category/genre) on the browsing page.

## Technologies Used
- **Frontend**: Angular
- **Backend**: PHP
- **Database**: MySQL
- **AJAX**: For asynchronous data fetching
- **CSS**: Basic styling and alignment of input fields

## Prerequisites
- PHP 7.0 or higher
- MySQL database on `www.scs.ubbcluj.ro`
- Angular CLI

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/multimedia-collection-app.git
   cd multimedia-file-manager

2. **Setup database**
   ```sql
   CREATE TABLE multimedia_files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    format VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    file VARCHAR(255) NOT NULL
);

4. **Configure Database Connection**
   - Update database.php with your database credentials using a dotenv file.
  
5. **Install Angular Dependencies**
   ```sh
   cd client
   npm install

7. **Run the Angular Development Server**
   ```sh
   ng server
9. **Run the PHP Server**
   ```sh
   php -S localhost:8000

## Usage
  - Browse Multimedia Files: Navigate to the browse page and select a genre/category to view titles.
  - Add Multimedia Files: Use the form on the add page to input details of the new file.
  - Update Multimedia Files: Click on a file from the list to open a prepopulated modal for editing.
  - Delete Multimedia Files: Click on a file and confirm the deletion.

## Security
  - SQL Injection Prevention: Prepared statements are used for database interactions to prevent SQL injection attacks.
  - Input Validation: Various validation logic is implemented to ensure data integrity.
