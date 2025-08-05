import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import {Home,Explore,YourLibrary,Liked} from "./pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='explore' element={<Explore />} />
      <Route path='your-library' element={<YourLibrary />} />
      <Route path='liked-songs' element={<Liked />} />
      {/* <Route path='details/:id' element={<JobDetails />} />
      <Route path='saved-job' element={<SavedJob />} /> */}
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
