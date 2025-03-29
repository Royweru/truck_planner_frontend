/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { authService } from '@/lib/apiServices';
import { ACCESS_TOKEN } from '@/constants';

// Define types for authentication context
interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string,confirm_password:string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      
      console.log('Checking auth, token:', token);
      if (token) {
        try {
          const response = await fetch('http://localhost:8000/api/auth/user/me/', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log('Fetch response status:', response.status);
          
          if (response.ok) {
            const userData = await response.json();
            console.log('User data:', userData);
            setUser(userData);
          } else {
            console.error('Fetch failed:', response.statusText);
            authService.logout(); // Clear invalid token
          }
        } catch (error) {
          console.error('Fetch error:', error);
          authService.logout();
        }
      } else {
        console.log('No token found');
      }
      setLoading(false);
      console.log('Loading set to false, user:', user);
    };

    checkAuth();
  }, []); // Empty dependency array is fine for initial check

  const login = async (email: string, password: string) => {
    try {
      const userData = await authService.login(email, password);
      console.log('Login response:', userData);
      
      const response = await fetch('http://localhost:8000/api/auth/user/me/', {
        headers: {
          'Authorization': `Bearer ${userData.access}`
        }
      });
      
      if (response.ok) {
        const profileData = await response.json();
        console.log('Profile data:', profileData);
        setUser(profileData);
      } else {
        throw new Error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Login error:', error);
      setUser(null);
      throw error;
    }
  };

  const signup = async (username: string, email: string, password: string,confirm_password:string) => {
    try {
      await authService.signup(username, email, password,confirm_password);
      console.log('Signup successful, attempting login');
      await login(email, password);
    } catch (error) {
      console.error('Signup error:', error);
      setUser(null);
      throw error;
    }
  };

  const logout = () => {
    console.log('Logging out');
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    loading
  };

  console.log('AuthContext value:', value);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};