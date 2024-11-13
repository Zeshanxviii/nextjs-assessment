// pages/travel.tsx
import { useState } from 'react';
import Link from 'next/link';

const TravelPage = () => {
    const [activeTab, setActiveTab] = useState("Travel");

    return (
        <div className="bg-black text-white min-h-screen px-4 py-8">
            {/* Navigation Tabs */}
            <div className="flex justify-center space-x-8 text-lg mb-10">
                {["Travel", "Digital", "Brand", "Merch"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-white" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold">TRAVEL</h1>
                <p className="text-lg">Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.</p>
            </div>

            {/* Curated Travel Itineraries Section */}
            <div className="text-center my-10">
                <h2 className="text-2xl font-bold mb-6">Explore Our Curated Travel Itineraries</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6">
                    {[
                        { location: "Darjeeling", img: "/darjeeling.png", hotel: "Semaia Hotel" },
                        { location: "Mumbai", img: "/mumbai.png", hotel: "Semaia Hotel" },
                        { location: "Delhi", img: "/delhi1.png", hotel: "Semaia Hotel" },
                        { location: "Agra", img: "/delhi2.png", hotel: "Semaia Hotel" },
                    ].map((itinerary, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src={itinerary.img} alt={itinerary.location} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{itinerary.location}</h3>
                                <p className="text-gray-400">{itinerary.hotel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How to List Section */}
            <div className="text-center my-10">
                <h2 className="text-2xl font-bold mb-6">How to list?</h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
                    {[
                        { step: "01", title: "Create Itinerary", icon: "✈️" },
                        { step: "02", title: "Convert into Travel Package", icon: "🗺️" },
                        { step: "03", title: "Earn by sharing", icon: "💸" },
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl">{item.icon}</div>
                            <p className="text-lg font-bold mt-2">{item.step} {item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center mt-12 text-sm text-gray-400">
                <p>You Curate Experience, We Make It Happen</p>
            </footer>
        </div>
    );
};

export default TravelPage;
