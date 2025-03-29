/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { 
  LogOut, MenuIcon, Map,User,
  Truck
} from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { TripsList } from '@/components/trips-list';
import TripPlanningForm from '@/components/trip-planning-form';
import { UserProfile } from '@/components/user-profile';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('trips');
 

  const navigationItems = [
    { 
      icon: <Map className="w-6 h-6" />, 
      label: 'Trips', 
      section: 'trips' 
    },
    { 
      icon: <Map className="w-6 h-6" />, 
      label: 'Plan trip', 
      section: 'plan-trips' 
    },
    { 
      icon: <User className="w-6 h-6" />, 
      label: 'Profile', 
      section: 'profile' 
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'trips':
        return (
          <div className="space-y-6">
           
            <TripsList />
          </div>
        );
        case 'plan-trips':
          return(
            <div >
              <TripPlanningForm />
            </div>
          )
           
      case 'profile':
        return <UserProfile />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white flex">
      {/* Sidebar for Medium Screens and Above */}
      <div className="w-64 bg-gray-800/50 backdrop-blur-sm p-6 border-r border-white/10 hidden md:block">
        <div className="flex items-center mb-10">
          <Truck className="w-10 h-10 text-blue-500 mr-3" />
          <h2 className="text-2xl font-bold">TruckMaster</h2>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                activeSection === item.section 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </button>
          ))}

          <div className="absolute bottom-6 left-0 right-0 px-6">
            <Button
              onClick={()=>{}}
              variant="destructive"
              className="w-full"
            >
              <LogOut className="w-6 h-6 mr-2" />
              Logout
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Sheet */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-800">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <Truck className="w-8 h-8 text-blue-500 mr-3" />
                TruckMaster
              </SheetTitle>
            </SheetHeader>
            <nav className="space-y-4 mt-6">
              {navigationItems.map((item) => (
                <Button
                  key={item.section}
                  onClick={() => {
                    setActiveSection(item.section);
                    // Close sheet after selection
                  }}
                  variant="ghost"
                  className="w-full justify-start text-white"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Button>
              ))}
              <Button
                onClick={()=>{}}
                variant="destructive"
                className="w-full mt-4"
              >
                <LogOut className="w-6 h-6 mr-2" />
                Logout
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10 pt-20 md:pt-10">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {activeSection === 'trips' ? 'Trip Management' : 'User Profile'}
          </h1>
        </header>

        {/* Dynamic Content Section */}
        <div className="space-y-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


