# Role-Based Login/Logout System

This project is a full-stack application that demonstrates a role-based login/logout system with a dynamic admin panel. The system is built with React and Redux for the frontend, Node.js with Express for the backend, MongoDB for the database, and JWT for authentication.

## Features

- Secure authentication with JWT
- Role-based access control (Admin, Manager, SuperAdmin, User)
- Dynamic admin panel layout based on user roles
- User management by Admin and SuperAdmin

## Technologies

- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Setup

### Prerequisites

- Node.js (version 14.x or later)
- MongoDB

### Frontend Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/KiranSg-coder/RBAP.git
    ```

2. **Navigate to the frontend directory**

    ```bash
    cd role-based-auth/client
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Run the frontend application**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5713`.

### Backend Setup

1. **Navigate to the backend directory**

    ```bash
    cd role-based-auth/backend
    ```

2. **Create a `.env` file**

    ```bash
    MONGODB_URI=mongodb://localhost:27017/your-database
    JWT_SECRET=your-jwt-secret
    PORT=4000
    ```

    Update the `.env` file with your MongoDB URI and JWT secret.

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Run the backend application**

    ```bash
    npm run dev
    ```

    The backend server will be available at `http://localhost:4000`.

## Frontend Structure

```
        client/
        ├── src/
        │   ├── Layouts/
        │   │   ├── AdminLayout.jsx
        │   │   ├── ManagerLayout.jsx
        │   │   ├── PublicLayout.jsx
        │   │   ├── SuperAdminLayout.jsx
        │   │   ├── UserLayout.jsx
        │   ├── pages/
        │   │   ├── Admin.jsx
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── Manager.jsx
        │   │   ├── Register.jsx
        │   │   ├── SuperAdmin.jsx
        │   ├── redux/
        │   │   ├── AuthSlice.js
        │   │   ├── Store.js
        │   ├── services/
        │   │   ├── ApiEndpoint.js
        ├── App.css
        ├── App.jsx
        ├── main.jsx
        └── package-lock.json
        ├── package.json
        └── README.md
```

## Backend Structure

```
        backend/
        ├── src/
        │   ├── controllers/
        │   │   ├── Admin.js
        │   │   ├── Auth.js
        │   │   ├── MangerContoller.js
        │   │   ├── SuperAdmin.js
        │   ├── routes/
        │   │   ├── Auth.js
        │   │   ├── adminRoutes.js
        │   │   ├── managerRoutes.js
        │   │   ├── superAdminRoutes.js
        │   ├── models/
        │   │   ├── User.js
        │   ├── middleware/
        │   │   ├── verifyToken.js
        │   ├── utlis/
        │   │   ├── db.js
        │   ├── server.js
        ├── .env
        ├── package.json
        └── README.md
```

## Backend Endpoints

- **Authentication**
  - `POST /api/auth/login`: Login endpoint
  - `POST /api/auth/register`: Register endpoint
  - `POST /api/auth/logout`: Logout endpoint

- **Admin**
  - `GET /api/admin/getuser`: Get users for Admin
  - `DELETE /api/admin/delete/:id`: Delete user by Admin

- **Manager**
  - `GET /api/manager/getuser`: Get users for Manager

- **SuperAdmin**
  - `GET /api/superadmin/getuser`: Get users for SuperAdmin
  - `PUT /api/superadmin/update-role/:id`: Update user role by SuperAdmin
  - `DELETE /api/superadmin/delete/:id`: Delete user by SuperAdmin


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)

