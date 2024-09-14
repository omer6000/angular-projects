
# 📚 Learning Resources

Welcome to the **Learning Resources** project! This application is designed to practice **directives** and **custom directives** in Angular. It uses **attribute directives** to change the behavior of elements based on the user's role. The content displayed is different for each role (Admin, User, Guest), but no role has more content than another—it's purely for practice purposes.

---

## 📝 Features

- **Directives and Custom Directives**: Practice using Angular directives to modify element behavior dynamically.
- **Role-based Content Display**: Content changes based on the user’s role. The roles are determined by logging in with specific credentials.

---

## 🔐 User Roles & Credentials

The following are the possible roles and corresponding credentials for logging in:

1. **Admin**
   - Email: `admin@example.com`
   - Password: `admin`
   - Role: Admin
   - Content: Different content displayed for this role.
2. **User**
   - Email: `user@example.com`
   - Password: `user`
   - Role: User
   - Content: Different content displayed for this role.

3. **Guest**
   - Default role if no valid credentials are entered.
   - Content: Different content displayed for this role.

---

## 🛠️ Getting Started

### Install Dependencies

Before starting the app, install the necessary dependencies:

```bash
npm install
```

### Development Server

1. Run `ng serve` to start the development server.
2. Navigate to `http://localhost:4200/` to view the app.
3. The app will automatically reload if you change any of the source files.

---

## 📄 Code Scaffolding

Need to add more features or modify the app? Use Angular CLI to generate new components, services, or modules:

```bash
ng generate component component-name
```

Or use the `ng generate` command for other building blocks like services, directives, and more.