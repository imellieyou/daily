import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, SignUp, LogIn, NotFound } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LogIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
