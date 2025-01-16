# JWT Authentication System

This project is a simple **JWT-based authentication system** built from scratch using **React**, **Node.js**, and **MySQL**. The application allows users to sign up, log in, and access a protected dashboard. It demonstrates secure authentication using **JSON Web Tokens (JWT)** and routing with **React Router DOM**.

---

## Features

1. **Home Page**:  
   - Two links: **Login** and **Signup**.

2. **Signup**:  
   - Users can create an account.  
   - After signing up, users are redirected to the **Login** page.

3. **Login**:  
   - Users can log in with their registered credentials.  
   - After successful login, users are redirected to the **Dashboard**.

4. **Dashboard**:  
   - Accessible only to authenticated users.  
   - JWT tokens are validated to ensure security.

---

## Technologies Used

- **Frontend**: React, React Router DOM  
- **Backend**: Node.js, Express  
- **Authentication**: JSON Web Tokens (JWT)  
- **Database**: MySQL  

---

## Project Structure

```
/server       # Node.js and Express server
/client      # React application
```
---

## How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/bachan-singh/React-Authentication-using-Jwt.git
cd React-Authentication-using-Jwt
```

### 2. Backend Setup
1. Navigate to the `server` folder:
   ```bash
   cd server
   npm install
   ```

2. Create a MySQL database and update the database configuration in the backend code.

3. Start the server:
   ```bash
   node index.js
   ```

### 3. Frontend Setup
1. Navigate to the `client` folder:
   ```bash
   cd client
   npm install
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Workflow

1. Start the application and land on the **Home Page**.  
2. Use the **Signup** link to register a new account.  
3. After signing up, you’ll be redirected to the **Login** page.  
4. Log in with your credentials and access the **Dashboard**.

---

