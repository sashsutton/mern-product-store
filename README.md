# MERN Product Store

MERN Product Store is a responsive full-stack web application for managing a product store. Users can add, update, delete, and display products, including their price and image.

## Live Demo
Check out the live version of the application [here](https://mern-product-store-u93h.onrender.com).


## Project Structure

### Backend
The backend is built with Node.js, Express, and MongoDB.

#### Main File: `server.js`
The main entry point of the backend handles:
- Connecting to the database
- Setting up middleware
- Defining API routes for product management
- Serving the frontend in production

### Frontend
The frontend is built with React and uses the following technologies:
- **React**: Core library for building the user interface
- **React Router**: For handling client-side routing
- **Chakra UI**: For accessible and customizable UI components
- **React Icons**: For including icons in the application
- **Zustand**: For state management
- **Next Themes**: For implementing theme toggling
- **Vite**: For a fast development server and build tool

## Features
- **Add Products**: Add new products with details like name, price, and image.
- **Update Products**: Modify existing product details.
- **Delete Products**: Remove products from the store.
- **View Products**: Display all products in a list format.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mern-product-store.git
   cd mern-product-store
   ```

2. **Set up the backend**:

   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `root` folder and configure it with:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGO_URI=<Your MongoDB Connection String>
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Set up the frontend**:
   - Navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Production Build**:
   - Build the frontend for production:
     ```bash
     npm run build
     ```
   - Serve the built files using the backend server.

## API Endpoints

### Product Routes
- **GET** `/api/products` - Fetch all products
- **POST** `/api/products` - Add a new product
- **PUT** `/api/products/:id` - Update an existing product
- **DELETE** `/api/products/:id` - Delete a product

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose for ODM)
- dotenv for environment variable management

### Frontend
- React
- React Router
- Chakra UI
- React Icons
- Zustand
- Next Themes
- Vite

## Environment Variables
The following environment variables need to be set in a `.env` file:
- `NODE_ENV` - `development` or `production`
- `PORT` - Port for the server
- `MONGO_URI` - MongoDB connection string

## License
This project is licensed under the MIT License.

