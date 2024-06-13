# cousre-management-API-lms

The Course Management System API is a RESTful API designed for managing courses within a Learning Management System (LMS). It supports functionalities for user authentication, course management (CRUD operations), and progress tracking. The API uses Node.js, Express, MySQL, and Sequelize for efficient and scalable operations.

## Setup:

1. Clone the repository: `https://github.com/jivakys/cousre-management-API-lms`
2. Install dependencies: `npm install`
3. Create a MySQL database
4. Create a `.env` file and configure the database connection and JWT secret.
5. Run the application: `node index.js`

## Features
- **User Authentication**: Register and authenticate users with role-based access control (students and teachers).
- **Course Management**: Create, read, update, and delete courses.
- **Progress Tracking**: Track and update user progress in courses.
- **Role-Based Access Control**: Ensure only teachers can create, update, and delete courses.

## Tech Stack
- **Backend:**
- `Node.js`: JavaScript runtime environment
- `Express.js`: Web framework for Node.js

- **Database:**
- `MySQL`: Relational database management system

## Packages
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **JWT**: JSON Web Tokens for authentication.
- **mysql2**: MySQL client for Node.js
- **Sequelize**: ORM for MySQL and other relational databases
- **bcryptjs**: Library to hash passwords

## Swagger API Documentation
### Runs the project in the development mode
[http://localhost:7000](http://localhost:7000)

### Swagger API Link
[API Check here](http://localhost:7000/api-docs/)
  
## API Endpoints
### Authentication
- `POST /api/register`: Register a new user
- `POST /api/login`: Authenticate a user and provide a token

### Course Management
- `GET /api/courses/:id`: Retrieve details of a specific course
- `GET api/courses`: Retrieve a list of all courses with optional search, filter, and pagination.
  - Query Parameters:
    - `search`: Search term to filter courses by title.
    - `filter`: filters by createdBy(implement as needed).
    - `page`: Page number for pagination.
    - `limit`: Number of courses per page.
- `POST /api/courses`: Create a new course (teachers only)
- `PUT /api/courses/:id`: Update a course (teachers only)
- `DELETE /api/courses/:id`: Delete a course (teachers only)

### Progress Tracking
- `GET /api/users/:id/progress`: Retrieve progress for a specific user
- `POST /api/users/:id/progress`: Update progress for a specific user

## Security Measures
- Passwords are stored securely using bcrypt.
- JWT is used for authentication.
- Authorization middleware ensures only authenticated users can access protected routes.

## Environment Variables
PORT=your_port_number
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=your_db_name
JWT_SECRET=yourjwtsecret


## Contributing
- Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

