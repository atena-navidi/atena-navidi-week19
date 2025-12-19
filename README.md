# Product Management Dashboard

This project is a **Product Management Dashboard** built with **React**, **React Query**, and **Axios**, including a full **Authentication System** (Login & Register).  

The frontend supports **Protected Routes** and **JWT Token Authentication**.

---

## :hammer_and_wrench: Technologies

- **React 18+**
- **React Router DOM v6**
- **React Query (TanStack Query)**
- **Axios**
- **React Hook Form + Yup** for forms and validation
- **TailwindCSS** for styling
- **react-hot-toast** for notifications

---

## :file_folder: Project Structure
```
src/
├─ api/
│ ├─ auth.service.js # Login & Register requests
│ ├─ products.service.js # CRUD requests for products
│ └─ client.js # Axios instance with token interceptor
├─ components/
│ ├─ AuthCard.jsx # Login/Register form card
│ ├─ AuthForm.jsx # Form using react-hook-form
│ ├─ DashboardHeader.jsx # Dashboard header with search & logout
│ ├─ DeleteProductModal.jsx # Delete product modal
│ ├─ ProductFormModal.jsx # Create/Edit product modal
│ ├─ FormInput.jsx # Form input with validation
│ └─ Modal.jsx # Generic modal component
├─ context/
│ ├─ AuthContext.js
│ ├─ AuthProvider.jsx
│ └─ useAuth.js
├─ pages/
│ ├─ Login.jsx
│ ├─ Register.jsx
│ └─ Products.jsx
├─ routes/
│ └─ ProtectedRoute.jsx # Route protection based on login/role
├─ validation/
│ └─ authSchemas.js # Yup schemas for forms
├─ App.jsx
├─ main.jsx
└─ global.css
```
## :rocket: Installation


```bash
# Clone the repository
git clone https://github.com/atena-navidi/atena-navidi-week19.git

# Install dependencies
npm install
# or
yarn install
```

## :jigsaw: How to use

1. Edit a product using the Edit button :pencil2:.

2. Delete a product with Delete :wastebasket: .

3. Use the search bar :mag: to quickly find a product.




