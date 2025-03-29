import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TruckMaster Pro. All rights reserved.
          </p>
        </div>
      </footer>
  )
}
