import { RouterProvider } from "react-router-dom";
import routes from "./routers/routes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
function App() {
  return (
    // <ErrorBoundary>
    <RouterProvider router={routes} />
    // </ErrorBoundary>
  );
}

export default App;
