import { useContext, useEffect, useState } from "react";
import { api } from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const SellerSignUpPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    passwordHash: "",
  });

  const handleSignUp = async () => {
    const data = await api.post("/seller/signup", formData);
    if (data.status === 200) {
        setUser(data.data)
    }
    console.log(data);
  };


  useEffect(() => {
    if (user !== null) {
        navigate('/')
    }
  }, [])
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link to="/">Back to Home</Link>
      <div className="">
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, firstName: e.target.value }));
          }}
          placeholder="First Name"
          className="my-1 block border"
        />
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, lastName: e.target.value }));
          }}
          placeholder="Last Name"
          className="my-1 block border"
        />
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
          }}
          type="email"
          placeholder="Email"
          className="my-1 block border"
        />
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, passwordHash: e.target.value }));
          }}
          type="password"
          placeholder="Password"
          className="my-1 block border"
        />
        <input
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, phone: e.target.value }));
          }}
          type="number"
          placeholder="Phone"
          className="my-1 block border"
        />
        <button className="bg-green-200 p-3" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
