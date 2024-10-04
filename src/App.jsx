import React from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import Mainlayout from "./layouts/MainLayout";
import FindUs from "./pages/FindUs";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<MainPage />} />
          <Route path="/find-us" element={<FindUs />} />
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
