import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SellerSignUpPage } from "./pages/SellerSignUpPage"
import { LoginPage } from "./pages/LoginPage"
import { AdminPage } from "./pages/AdminPage"
import { ProtectedRoute } from "./utils/ProtectedRoutes"

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller/signup" element={<SellerSignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
   
  )
}

export default App
