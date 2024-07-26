import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

// Pages
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import FacultyPage from "./pages/FacultyPage";
import StudentsPage from "./pages/StudentsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/academics",
        element: <AcademicsPage />,
      },
      {
        path: "/admissions",
        element: <AdmissionsPage />,
      },
      {
        path: "/faculty",
        element: <FacultyPage />,
      },
      {
        path: "/students",
        element: <StudentsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/students",
        element: <StudentsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
