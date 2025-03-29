import { Card,CardHeader,CardTitle,CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { authService } from "@/lib/apiServices";
export const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
      username: 'John Doe',
      role: 'Professional Driver',
      email: 'john.doe@truckmaster.com'
    });

  useEffect(()=>{
    const fetchUserData = async()=>{
        try {
            const res = await authService.fetchUserProfile()
            if(res){
                setProfile(res)
            }
        } catch (error) {
            console.error("Could not fetch user profile",error)
        }
    }
    fetchUserData()
  },[])
  console.log(profile)
    const handleSave = () => {
      setIsEditing(false);
      // In a real app, you'd save to backend here
    };
  
    return (
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>User Profile</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <input 
                value={profile.username}
                onChange={(e) => setProfile({...profile, username: e.target.value})}
                className="w-full p-2 bg-gray-700 rounded"
              />
              {/* <input 
                value={profile.role}
                onChange={(e) => setProfile({...profile, role: e.target.value})}
                className="w-full p-2 bg-gray-700 rounded"
              /> */}
              <input 
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full p-2 bg-gray-700 rounded"
              />
              <Button onClick={handleSave} className="w-full">Save Changes</Button>
            </div>
          ) : (
            <div className="space-y-2">
              <p><strong>Name:</strong> {profile.username}</p>
              <p><strong>Email:</strong> {profile.email}</p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };
  