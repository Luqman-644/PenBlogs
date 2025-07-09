# **PenBlogs**

**PenBlogs** is a modern blogging platform built with React and Vite, powered by Appwrite as a robust backend-as-a-service (BaaS). This project offers a seamless experience for creating, managing, and reading blogs, featuring user authentication, image storage, a real-time editor, advanced state management, and efficient form handling. Designed for scalability, PenBlogs is ideal for developers and content creators.

## **Overview**

PenBlogs combines a dynamic React front-end with Appwrite’s powerful backend, enhanced by Redux Toolkit for state management and React Hook Form for form handling. It supports user registration, login, blog creation with rich metadata, and efficient data retrieval, all optimized for performance and scalability.

## **Features**

- **User Authentication**: Secure registration and login via Appwrite.
- **Blog Management**: Add, edit, and delete blogs with fields: **title**, **description**, **slug**, **body**, **image**, and **status (active/inactive)**.
- **Image Storage**: Store and fetch blog images using Appwrite’s storage service.
- **Real-Time Fetching**: Retrieve blogs and user data instantly with Appwrite’s API.
- **Real-Time Editor**: Use `rte.jsx` with React Quill for rich text editing of blog content.
- **Responsive Design**: Optimized for desktop, tablet, and mobile.
- **Search Functionality**: Filter blogs by title or slug.
- **Status Control**: Toggle blog visibility with active/inactive status.

## **Technologies Used**

- **React**: Core library for the front-end UI.
- **Vite**: Fast build tool and development server.
- **JavaScript**: Primary programming language.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **React Router**: Manages client-side navigation.
- **Appwrite**: Backend for authentication, database, storage, and real-time updates.
- **React Quill**: Rich text editor for `rte.jsx` component.
- **Redux Toolkit**: Centralizes state management for blogs, authentication, and UI, simplifying async Appwrite integrations and ensuring scalability.
- **React Hook Form**: Streamlines form handling for registration, login, and blog creation with efficient validation and performance.
- **HTML5 & CSS3**: Foundation for structure and style.

## **Installation**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Luqman-644/PenBlogs.git
   ```
2. **Navigate to the Project Directory**:

   ```bash
   cd PenBlogs
   ```
3. **Install Dependencies**:

   ```bash
   npm install
   ```
   - Ensures `react-quill`, `redux-toolkit`, `react-hook-form`, and other packages are installed.
4. **Set Up Appwrite**:
   - Install Appwrite locally or use Appwrite Cloud (see Appwrite Docs).
   - Configure environment variables (e.g., `APPWRITE_ENDPOINT`, `APPWRITE_PROJECT_ID`) in a `.env` file.
   - Initialize Appwrite SDK in your project.
5. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` to view the app.

## **Usage**

- **Register/Login**: Use the authentication form (managed by React Hook Form) to sign up or log in.
- **Create a Blog**: Navigate to the dashboard, use the Real Time Editor to write the body with rich text, add title, description, slug, upload an image, set status, and publish—forms validated with React Hook Form.
- **View Blogs**: Fetch and display blogs on the homepage, filtered by status.
- **Manage Blogs**: Edit or delete posts via the dashboard, with image and content updates supported.
- **Edit with RTE**: Leverage React Quill in `rte.jsx` to format blog bodies in real-time.

## **Project Structure**

```
PenBlogs/
├── public/           # Static assets
├── src/              # Source files
│   ├── assets/       # Images and styles
│   ├── components/   # Reusable React components (e.g., rte.jsx)
│   ├── pages/        # Page layouts
│   ├── services/     # Appwrite API integrations
│   ├── store/        # Redux Toolkit slices and store
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
├── .gitignore        # Excludes node_modules, dist, etc.
├── README.md         # Project documentation
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies and scripts
├── .env              # Appwrite environment variables
```

## **Appwrite Configuration**

- **Database**: A collection for blogs with attributes: `title` (string), `description` (string), `slug` (string, unique), `body` (text), `image` (file reference), `status` (boolean), `userId` (string).
- **Storage**: Bucket for storing blog images, with secure access.
- **Authentication**: Email/password login with session management.
- **API Endpoints**: Custom functions for adding, fetching, and updating blogs.

## **Redux Toolkit Usage**

Redux Toolkit is utilized to manage the application’s global state efficiently. It centralizes:

- **Blog State**: Stores the list of blogs, current blog details, and status updates.
- **Authentication**: Handles user login status, tokens, and profile data from Appwrite.
- **UI State**: Manages loading states, errors, and modal visibility.

## **React Hook Form Usage**

React Hook Form is employed to streamline form handling across the application. It:

- **Manages Forms**: Handles registration, login, and blog creation forms with minimal code.
- **Validates Input**: Integrates with validation libraries to ensure data integrity before Appwrite submission.
- **Enhances Performance**: Uses uncontrolled components to reduce re-renders, improving user experience. This approach simplifies development and maintains form state efficiently.

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with details.

Adhere to the code style and add tests where applicable.

## **License**

Licensed under the **MIT License**. See the LICENSE file for details.