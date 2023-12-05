import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import EmailVerification from "./pages/email-verification";
import NewPassword from "./pages/new-password";
import PilihDokter from "./pages/PilihDokter";
import ArticleUser from "./pages/ArticleUser";
import CalculatorBMI from "./pages/CalculatorBMI";
import SesiKonsultasi from "./pages/SesiKonsultasi";
import ProfileDoctor from "./pages/ProfileDoctor";
import ForumDiskusi from "./pages/ForumDiskusi";
import ArticleDetails from "./components/article_user/ArticleDetails";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/list-doctor" element={<PilihDokter />} />
        <Route path="/articles" element={<ArticleUser />} />
        <Route path="/bmi-calculator" element={<CalculatorBMI />} />
        <Route path="/consultations" element={<SesiKonsultasi />} />
        <Route path="/doctors/:id" element={<ProfileDoctor />} />
        <Route path="/discussions" element={<ForumDiskusi />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default App;
