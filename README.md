# React Lesson 2

# Application Overview

This repository contains two different applications: a **Bookmark Application** and an **Employee Registration Application**. Both applications are designed to utilize local storage and can interact with a JSON server for data management.

## 1. Bookmark Application

### Features
- **Search Function**: Find songs based on title, artist, or genre.
- **Add Function**: Add new songs with the following details:
  - Song Title
  - Artist
  - Song Artwork Image
  - Album Name
  - Genre
- **Delete Function**: Remove songs from the list.
- **Update Function**: Edit existing song details.

### Data Storage
- Uses arrays to store song information in the browser's local storage.

## 2. Employee Registration Application (CRUD)

### Features
- **Search Function**: Locate employees using their ID (optional).
- **Add Function**: Add new employees with the following details:
  - Name and Surname
  - Email Address
  - Phone Number
  - Image
  - Employee Position
  - ID
- **Delete Function**: Remove employees from the list.
- **Update Function**: Edit existing employee details.

### Data Storage
- Utilizes arrays to store employee information, with the option to connect to a JSON Server for persistent storage.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON Server (for the Employee Registration Application)

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.

### For the Employee Registration Application
1. Clone this repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
    cd <project-directory>
3. Install JSON Server:
   ```bash
   npm install -g json-server
4. Create a db.json file in the project root with the following initial structure
   ```json
    {
      "employees": []
    }
5. Start the JSON server:
   ```bash
   json-server --watch db.json
6. Open your browser and navigate to the application.

#### For the Bookmark Application
* Simply open the HTML

### Future Improvements
- Implement user authentication for both applications.
- Enhance UI with frameworks like Vite or Vue.js.
- Add validation for input fields.

### Contributing
Feel free to open issues or submit pull requests for enhancements or bug fixes.
