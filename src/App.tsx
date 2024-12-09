import RoadmapPage from "./pages/RoadmapPage";
import GetStarted from "./pages/getStarted";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/getStarted",
      element: <GetStarted />,
    },
    {
      path: "/",
      element: <RoadmapPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
