import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// Import the route component from its actual JSX entry file.
import UseStateEvents from "./projects/01-usestate-events/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          background: "#eee",
        }}
      >
        {/* Link to the URL route below, not to a source-file path. */}
        <Link to="/usestate-events">Day 1: useState</Link>
        {/* Add links to previous projects if they exist */}
      </nav>
      <Routes>
        <Route
          path="/usestate-events"
          element={<UseStateEvents />}
        />
        <Route
          path="/"
          element={<UseStateEvents />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
