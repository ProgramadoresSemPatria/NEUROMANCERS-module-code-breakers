import GetStarted from "./pages/getStarted";
import RoadmapPage from "./pages/roadmap"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/getStarted",
      element: <GetStarted />,
    },
		 {
      path: "/roadmap",
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
