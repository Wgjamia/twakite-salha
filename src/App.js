import React from "react";
import './style0.css';
import './style1.css';
import './style2.css';
import Header from "./components/Header";
import PrayerTimes from "./components/PrayerTimes";
import Weather from "./components/Weather";
import AdminMessages from "./components/AdminMessages";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="app">
        {/* Header */}
        <Header />

        {/* Weather Section */}
        <Weather />

        {/* Prayer Times Section */}
        <PrayerTimes />

        {/* Admin Messages Section */}
        <AdminMessages />

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;