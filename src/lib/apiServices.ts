/* eslint-disable @typescript-eslint/no-explicit-any */
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';
import axios from 'axios';

// Base configuration for API calls
const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance with base configuration
const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor to add authentication token
import { InternalAxiosRequestConfig } from 'axios';
apiService.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

// Authentication Services
export const authService = {

  login: async (username: string, password: string) => {
    try {
      const response = await apiService.post('/auth/jwt/', { 
        username, 
        password 
      });
      
      // Store tokens
      localStorage.setItem(ACCESS_TOKEN, response.data.access);
      localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
      
      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  },

  signup: async (username: string, email: string, password: string,confirm_password:string) => {
    try {
      const response = await apiService.post('/auth/user/create/', {
        username,
        email,
        password,
        confirm_password
      });
      return response.data;
    } catch (error) {
      console.error('Signup failed', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const response = await apiService.post('/auth/token/refresh/', {
        refresh: refreshToken
      });
      
      localStorage.setItem(ACCESS_TOKEN, response.data.access);
      return response.data.access;
    } catch (error) {
      // Logout user if refresh fails
      authService.logout();
      throw error;
    }
  },
  fetchUserProfile:async()=>{
  try {
     const res = await apiService.get('/auth/user/me/')
     return res.data
  } catch (error) {
    console.error("Failed to fetch user profile",error)
  }
  }
};

// Trip Planning Services
export const tripService = {
  planTrip: async (tripData: any) => {
    try {
      const response = await apiService.post('/trips/plan-trip/', tripData);
      return response.data;
    } catch (error) {
      console.error('Trip planning failed', error);
      throw error;
    }
  },

  getAllTrips: async () => {
    try {
      const response = await apiService.get('/trips/');
      return response.data;
    } catch (error) {
      console.error('Fetching trips failed', error);
      throw error;
    }
  },

  getTripDetails: async (tripId: string) => {
    try {
      const response = await apiService.get(`/trips/${tripId}/`);
      return response.data;
    } catch (error) {
      console.error('Fetching trip details failed', error);
      throw error;
    }
  }
};

export default apiService;