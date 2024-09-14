
# 🌍 Place Picker

Welcome to the **Place Picker** project! This application was created to practice HTTP concepts like **GET**, **PUT**, and **DELETE**. The app allows users to fetch images from the backend, add them to favorites, and remove them as well. It consists of both a backend server and an Angular frontend, with the backend handling image data and the frontend providing a user interface to manage the images.

---

## 📝 Features

- **Fetch Images**: Retrieve images from the backend server using HTTP GET requests.
- **Add to Favorites**: Users can add images to their favorites list, which is managed via HTTP PUT requests.
- **Remove from Favorites**: Easily remove images from the favorites list using HTTP DELETE requests.
- **Error Handling**: Handle HTTP response errors gracefully, ensuring that users receive clear feedback when something goes wrong.
- **Optimistic Updates**: The app uses **signals** and **services** to implement optimistic updates, providing instant feedback to users when they perform actions like adding or removing images from favorites.

---

## 🛠️ Getting Started

### Running the Backend

The backend folder is located inside the Angular app. Before starting the frontend, follow these steps to run the backend server:

1. Navigate to the `backend` folder inside the Angular app:
   ```bash
   cd backend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Running the Frontend

Once the backend is running, you can start the Angular frontend:

1. Navigate back to the Angular app's root folder (if necessary):
   ```bash
   cd ../
   ```
2. Install the necessary dependencies for the Angular app:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   npm start
   ```
4. Navigate to `http://localhost:4200/` to view the app in action.

---

## 📄 Code Scaffolding

Need to add more features or modify the app? Use Angular CLI to generate new components, services, or modules:

```bash
ng generate component component-name
```

Or use the `ng generate` command for other building blocks like services, directives, and more.