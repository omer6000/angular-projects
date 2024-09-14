# 🖥️ Server Management

Welcome to the **Server Management** project! It was designed to practice key Angular features and deepen understanding of how various elements interact within a real-world application.

---

## 📝 Features

- **Server Status Display**: Dynamically show the status of the server.
- **Traffic Overview**: Display a visual summary of server traffic over the last 7 days using charts.
- **Support Tickets**: Allow users to submit support tickets by entering a title and request details in a form.

This project focuses on practicing:
- **Form Submission**: Allow users to input server details or submit support tickets.
- **Content Projection**: Implement content projection to enable flexible and reusable component designs.
- **Attribute Selection**: Practice selecting and applying attributes dynamically in the components.
- **Lifecycle Interfaces**: Explore how Angular lifecycle hooks are used to monitor and act on component changes.
- **Signal Effects**: Apply signal effects to manage asynchronous actions and events in the app.
- **Template Variables**: Use template variables for cleaner, more manageable markup.
- **Dynamic CSS Binding**: Bind CSS styles dynamically based on server status and other factors.

---

## 💻 UI Layout

The user interface is divided into three main sections:
1. **Server Status Panel**: Displays the current server status, along with error messages if the status cannot be fetched.
2. **Traffic Panel**: A visual bar chart displays traffic data for the last 7 days, offering an overview of server usage.
3. **Support Tickets Panel**: Users can submit support tickets by filling out a form with the title and request details, followed by a 'Submit' button to send the request.

The layout is designed to provide clear visual feedback to the user while keeping the interface clean and easy to navigate.

---

## 🛠️ Getting Started

### Install Dependencies

Before starting the app, make sure to install the necessary dependencies:

```bash
npm install
```

### Development Server

1. Run `npm start` to start the development server.
2. Navigate to `http://localhost:4200/` to view the app in action.
3. The app will automatically reload when you modify any source files.

---

## 📄 Code Scaffolding

Need to add more features? Run the following command to generate new components, services, or modules:

```bash
ng generate component component-name
