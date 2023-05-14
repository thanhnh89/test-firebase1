import { Routes, Route } from "react-router-dom";
import Login from "./container/login/Login";
import Register from "./container/register/Register";
import NotFound from "./container/notFound/notFound";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
