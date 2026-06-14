export default function App() {
  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      {/* Real-time, fully-interactive original website presentation. */}
      <iframe
        src="/demo/index.html"
        title="CHIEF LUKWELE CBO NGO Website Real Preview"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        allow="geolocation 'self'; autoplay 'self'"
        className="w-full h-full border-0"
      />
    </div>
  );
}


