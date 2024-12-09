import GetStarted from "./pages/GetStartedPage";
import RoadmapPage from "./pages/RoadmapPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
