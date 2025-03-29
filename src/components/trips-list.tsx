/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect,useState } from "react";
import { tripService } from "@/lib/apiServices";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export const TripsList = () => {
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTrips = async () => {
        try {
          setIsLoading(true);
          const fetchedTrips = await tripService.getAllTrips();
          setTrips(fetchedTrips);
        } catch (err:any) {
          setError(err);
          console.error('Failed to fetch trips', err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchTrips();
    }, []);
    console.log(trips)
    if (isLoading) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Active Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Loading trips...</p>
          </CardContent>
        </Card>
      );
    }
  
    if (error) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Active Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">Failed to load trips. Please try again.</p>
          </CardContent>
        </Card>
      );
    }
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Active Trips</CardTitle>
        </CardHeader>
        <CardContent>
          {trips.length === 0 ? (
            <p className="text-gray-400">No trips found</p>
          ) : (
            trips.map((trip:any) => (
              <div 
                key={trip.id} 
                className="flex justify-between items-center p-3 bg-gray-900  text-white rounded-lg mb-2 hover:cursor-pointer"

              >
                <div>
                  <p className="font-semibold">{trip.current_location} → {trip.dropoff_location}</p>
                  
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    );
  };
  