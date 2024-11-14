// components/CarouselComponent.tsx
import React from "react";
import Image from "next/image";

interface Destination {
    image: string;
    title: string;
    location: string;
    author: string;
    authorImage: string;
}

const destinations: Destination[] = [
    {
        title: "Darjeeling Itinerary",
        location: "West Bengal",
        image: "/Frame3.png",
        author: "Samira Hadid",
        authorImage: "/influencer1.png"
    },
    {
        title: "Munnar Itinerary",
        location: "Kerala",
        image: "/Frame2.png",
        author: "Samira Hadid",
        authorImage: "/influencer1.png"
    },
    {
        title: "Delhi Itinerary",
        location: "Delhi",
        image: "/Frame1.png",
        author: "Samira Hadid",
        authorImage: "/influencer1.png"
    },
    {
        title: "Delhi Itinerary",
        location: "Delhi",
        image: "/Frame1.png",
        author: "Samira Hadid",
        authorImage: "/influencer1.png"
    },
    {
        title: "Delhi Itinerary",
        location: "Delhi",
        image: "/Frame1.png",
        author: "Samira Hadid",
        authorImage: "/influencer1.png"
    },
    {
        title: "Delhi Itinerary",
        location: "Delhi",
        image: "/Frame1.png",
        author: "Samira Hadid",
        authorImage: "/influencer1.png"
    }
];

const CarouselComponent = () => {
    return (
        <div className="bg-black text-white md:w-[1170px]">
            <h2 className="text-center text-4xl font-semibold pb-16">
                Explore Our Curated Travel Itineraries
            </h2>

            <div className="flex overflow-x-auto scrollbar-hide gap-6">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] group relative rounded-2xl  overflow-hidden shadow-lg"
                    >
                        <Image
                            src={destination.image}
                            alt={destination.title}
                            width={300}
                            height={400}
                            className="h-[400px] object-cover lg:w-[270px] lg:h-[480px]"
                        />
                        <div className="p-4 absolute inset-0">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h4 className="text-lg font-bold text-center">{destination.title}</h4>
                                <p className="text-sm text-gray-300 font-bold text-center">{destination.location}</p>
                                <div className="bg-white flex items-center justify-center p-1 w-fit ml-14 mt-2 rounded-full">
                                    <div className="w-6 h-6 rounded-full overflow-hidden">
                                        <Image
                                            src={destination.authorImage}
                                            alt={destination.author}
                                            width={24}
                                            height={24}
                                            className="object-cover"  
                                        />
                                    </div>
                                    <span className="text-sm text-black font-semibold ml-2 p-1">{destination.author}</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
