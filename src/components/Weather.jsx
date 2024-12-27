import React, { useState, useEffect, useCallback } from "react";

const Weather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(false);

    // Memoized fetchWeather function
    const fetchWeather = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`
            );
            const data = await response.json();
            setTemperature(data.hourly.temperature_2m[0]);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        } finally {
            setLoading(false);
        }
    }, [latitude, longitude]);

    // UseEffect that depends on fetchWeather
    useEffect(() => {
        if (latitude && longitude) {
            fetchWeather();
        }
    }, [latitude, longitude, fetchWeather]);

    const handleLocationPermission = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    alert("Location permissions denied!");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser!");
        }
    };

    return (
        <div className="CSS_VR_THEMER">
            <h2 className="wt">Weather Information</h2>
            {!latitude && (
                <button onClick={handleLocationPermission} className="eaBtn">
                    Get Location
                </button>
            )}

            {loading ? (
                <p className="lw">Loading weather...</p>
            ) : temperature ? (
                <p className="cSalats">Current Temperature: {temperature}°C</p>
            ) : (
                <p className="lw">Press "Get Location" to fetch weather.</p>
            )}
        </div>
    );
};

export default Weather;