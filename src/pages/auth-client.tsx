/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useState, }from 'react'
import { useNavigate } from 'react-router';
import { authService } from '@/lib/apiServices';
import { Lock, User, Mail, Truck } from "lucide-react";
import { toast } from "sonner";

export const AuthClient = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        if (isLogin) {
          const res = await authService.login(
            formData.username,
            formData.password
          );
          if (res) {
            alert("You have successfully logged in");
            navigate("/driver-dashboard");
          }
        } else {
          const res = await authService.signup(
            formData.username,
            formData.email,
            formData.password,
            formData.confirmPassword
          );
          if (res) {
            alert("You have successfully signed up");
            setIsLogin(true);
          }
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <Truck className="w-16 h-16 text-blue-500 mr-4" />
              <h2 className="text-4xl font-bold text-white">TruckMaster Pro</h2>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {!isLogin && (
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
  
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
  
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700
                 text-white font-bold py-3 rounded-full transition duration-300 
                 transform hover:scale-105 ${
                   isLoading && " opacity-50 pointer-events-none"
                 }`}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
  
            <div className="text-center mt-6">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:text-blue-300 transition duration-300"
              >
                {isLogin
                  ? "Need an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
