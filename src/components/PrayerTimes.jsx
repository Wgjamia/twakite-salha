import React from "react";

const PrayerTimes = () => {
    const prayerTimes = {
        Fajr: "5:00 AM",
        Dhuhr: "12:30 PM",
        Asr: "3:45 PM",
        Maghrib: "6:15 PM",
        Isha: "8:00 PM",
    };

    return (
        <div className="CSS_HR_THEMER">
            <h2 className="wt">Prayer Times</h2>
            <table id="tablePrayADJ">
                <tbody>
                {Object.entries(prayerTimes).map(([prayer, time], index) => (
                    <tr key={index}>
                        <td className="cARPM">{prayer}</td>
                        <td className="cSalats">{time}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrayerTimes;