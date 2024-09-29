import React from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import mainPage from "./pages/mainPage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<mainPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
}

export default App
