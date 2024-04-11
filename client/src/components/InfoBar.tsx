import React from 'react';

const InfoBar = () => {
    return (
        <div className="w-64 bg-black text-white overflow-y-auto" style={{ position: 'fixed', right: 0, top: 0, height: '100vh' }}>
            <h2 className="text-xl p-4">Info Bar</h2>
            <ul className="p-4">
                {/* Dummy data list */}
                <li className="mb-2">Item 1</li>
                <li className="mb-2">Item 2</li>
                <li className="mb-2">Item 3</li>
                {/* Add more items as needed */}
            </ul>
        </div>
    );
};

export default InfoBar;
