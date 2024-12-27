import React from "react";

const AdminMessages = () => {
    const messages = [
        "Stay connected to your prayers.",
        "Remember to maintain Wudu.",
        "Don't miss the Azkar after prayers.",
    ];

    return (
        <div className="CSS_X_LANG_DIRECTION">
            <h2 className="wt">Admin Announcements</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index} className="lw">
                        {msg}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminMessages;