/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
} from "@react-google-maps/api";

import { 
  MapPin, 
  Clock, 
  Navigation, 
  Info, 
  X 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { tripService } from "../lib/apiServices";
import toast from "react-hot-toast";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px"
};

const TripPlanningForm = () => {
  const [tripDetails, setTripDetails] = useState({
    current_location: "",
    pickup_location: "",
    dropoff_location: "",
    current_cycle_hours: 0,
  });

  interface TripResult {
    estimated_time: string;
    route_coordinates: number[][];
    route_stops: any[];
    eld_logs: any[];
  }

  const [tripResult, setTripResult] = useState<TripResult | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [routePath, setRoutePath] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const google_map_api = import.meta.env.VITE_GOOGLE_MAP_API
  console.log(google_map_api)
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setTripDetails((prev) => ({
      ...prev,
      [name]: name === "current_cycle_hours" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (
        !tripDetails.current_location ||
        !tripDetails.pickup_location ||
        !tripDetails.dropoff_location
      ) {
        toast.error("All location fields are required");
        return;
      }

      if (
        tripDetails.current_cycle_hours < 0 ||
        tripDetails.current_cycle_hours > 14
      ) {
        toast.error("Cycle hours must be between 0 and 14");
        return;
      }
      
      const result = await tripService.planTrip(tripDetails);
      setTripResult(result);

      if (result.route_coordinates && result.route_coordinates.length > 0) {
        setMapCenter({
          lat: result.route_coordinates[0][0],
          lng: result.route_coordinates[0][1],
        });
        const formattedPath = result.route_coordinates.map((coord: any[]) => ({
          lat: coord[0],
          lng: coord[1],
        }));
        setRoutePath(formattedPath);
      }

      setModalOpen(true);
      toast.success(`Trip Planned Successfully, Estimated Time: ${result.estimated_time}`
      );
    } catch (err) {
      console.error(err)
      toast.error("Trip Planning Error",);
      setTripResult(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  return (
    <div className="w-full">
      <Card className="bg-gray-800/50 backdrop-blur-sm border-white/10 text-white">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            <Navigation className="mr-3 text-blue-500" />
            Trip Planner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { 
                  name: "current_location", 
                  label: "Current Location", 
                  icon: <MapPin className="text-blue-500 mr-2" /> 
                },
                { 
                  name: "pickup_location", 
                  label: "Pickup Location", 
                  icon: <Clock className="text-green-500 mr-2" /> 
                },
                { 
                  name: "dropoff_location", 
                  label: "Dropoff Location", 
                  icon: <MapPin className="text-red-500 mr-2" /> 
                }
              ].map((location) => (
                <div key={location.name}>
                  <label className="flex items-center mb-2 font-semibold text-gray-300">
                    {location.icon}
                    {location.label}
                  </label>
                  <Input
                    type="text"
                    name={location.name}
                    value={tripDetails[location.name as keyof typeof tripDetails]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${location.label.toLowerCase()}`}
                    className="bg-gray-700 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              ))}
            </div>
            
            <div className="w-full md:w-1/2 mx-auto">
              <label className="flex items-center mb-2 font-semibold text-gray-300">
                <Clock className="text-yellow-500 mr-2" />
                Current Cycle Hours
              </label>
              <Input
                type="number"
                name="current_cycle_hours"
                value={tripDetails.current_cycle_hours}
                onChange={handleInputChange}
                max="14"
                min="0"
                step="0.5"
                placeholder="Enter current cycle hours"
                className="bg-gray-700 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600
               to-purple-600 hover:from-blue-700 hover:to-purple-700
                text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {isLoading ? "Planning Trip..." : "Plan Trip"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Modal for Trip Results */}
      {isModalOpen && tripResult && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10">
            <div className="flex justify-between items-center p-6 bg-gray-900/50 border-b border-white/10">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 flex items-center">
                <Info className="mr-3 text-blue-500" />
                Trip Results
              </h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setModalOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-red-500/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Map Section */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <LoadScript googleMapsApiKey={google_map_api}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={mapCenter}
                    zoom={10}
                  >
                    {routePath.length > 0 && (
                      <Polyline
                        path={routePath}
                        options={{
                          strokeColor: "#3B82F6",
                          strokeOpacity: 0.8,
                          strokeWeight: 5,
                        }}
                      />
                    )}
                    <Marker
                      position={{
                        lat: routePath[0]?.lat || mapCenter.lat,
                        lng: routePath[0]?.lng || mapCenter.lng,
                      }}
                      label="Start"
                    />
                    <Marker
                      position={{
                        lat:
                          routePath[Math.floor(routePath.length / 2)]?.lat ||
                          mapCenter.lat,
                        lng:
                          routePath[Math.floor(routePath.length / 2)]?.lng ||
                          mapCenter.lng,
                      }}
                      label="Pickup"
                    />
                    <Marker
                      position={{
                        lat:
                          routePath[routePath.length - 1]?.lat || mapCenter.lat,
                        lng:
                          routePath[routePath.length - 1]?.lng || mapCenter.lng,
                      }}
                      label="Dropoff"
                    />
                  </GoogleMap>
                </LoadScript>
              </div>

              {/* Trip Details Section */}
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Trip Overview
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p className="flex items-center">
                      <Clock className="mr-2 text-green-500" />
                      <strong className="mr-2">Estimated Time:</strong>
                      {tripResult.estimated_time}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-blue-400 mb-2 flex items-center">
                        <MapPin className="mr-2" />
                        Route Stops
                      </h5>
                      <ul className="space-y-2 pl-5">
                        {tripResult.route_stops.map(
                          (stop: any, index: React.Key) => (
                            <li 
                              key={index} 
                              className="bg-gray-700/50 p-3 rounded-lg"
                            >
                              <strong className="text-white">{stop.stop_type}</strong>
                              <p className="text-sm text-gray-400 mt-1">
                                Location: {stop.location}
                                <br />
                                Duration: {stop.duration} hours
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-blue-400 mb-2 flex items-center">
                        <Info className="mr-2" />
                        ELD Logs
                      </h5>
                      <ul className="space-y-2 pl-5">
                        {tripResult.eld_logs.map(
                          (log: any, index: React.Key) => (
                            <li 
                              key={index} 
                              className="bg-gray-700/50 p-3 rounded-lg"
                            >
                              <strong className="text-white">{log.log_type}</strong>
                              <p className="text-sm text-gray-400 mt-1">
                                Duration: {log.duration_hours} hours
                                <br />
                                Start: {new Date(log.start_time).toLocaleString()}
                                <br />
                                End: {new Date(log.end_time).toLocaleString()}
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlanningForm;