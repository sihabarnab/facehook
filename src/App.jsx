import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Profile />} path="/me" />
        </Route>

        <Route element={<Login />} path="/login" />
        <Route element={<Registration />} path="/register" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
};

export default App;
