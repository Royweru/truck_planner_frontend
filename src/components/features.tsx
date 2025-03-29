

export const Features = () => {
  return (
    <section className="bg-gray-900 py-16">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="text-blue-500 text-4xl mb-4">🚚</div>
        <h3 className="text-xl font-semibold text-white mb-2">Smart Route Planning</h3>
        <p className="text-gray-400">Optimize your routes with advanced AI-powered tracking and planning.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="text-green-500 text-4xl mb-4">🗺️</div>
        <h3 className="text-xl font-semibold text-white mb-2">Real-Time Tracking</h3>
        <p className="text-gray-400">Monitor your journey with precise GPS and live updates.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="text-purple-500 text-4xl mb-4">⏰</div>
        <h3 className="text-xl font-semibold text-white mb-2">Hours of Service</h3>
        <p className="text-gray-400">Automate ELD logs and stay compliant with FMCSA regulations.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="text-orange-500 text-4xl mb-4">📊</div>
        <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Insights</h3>
        <p className="text-gray-400">Detailed analytics and performance tracking for drivers.</p>
      </div>
    </div>
  </section>
  )
}
