import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import EmailVerification from "./pages/email-verification";
import NewPassword from "./pages/new-password";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<NewPassword />} />
      </Routes>
    </>
  );
}

export default App;
