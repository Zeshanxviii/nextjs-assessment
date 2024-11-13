import Image from 'next/image';

type Feature = {
    title: string;
    description: string;
    type: 'icon';
    icon: string;
};


    const features: Feature[] = [
        {
            title: "Trusted By Influencers",
            description: "A trusted platform for influencers to grow and earn.",
            type: "icon",
            icon: "/d.png"
        },
        {
            title: "Secured Data",
            description: "Advanced security measures to protect your valuable data",
            type: "icon",
            icon: "/a.png"
        },
        {
            title: "Authentic Payment Partner",
            description: "Reliable, fast, and secure payments you can trust",
            type: "icon",
            icon: "/b.png"
        },
        {
            title: "Monetize Your Influence",
            description: "Seamlessly turn your influence into consistent revenue",
            type: "icon",
            icon: "/c.png"
        }
    ];

    export default function Features() {
        return (
            <div className="min-h-screen p-8 md:p-12 lg:p-16">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}

                    {/* Responsive Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Title Section on the left (for medium and large screens) */}
                        <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-12 md:mb-16 lg:mb-20 bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                        From Creation to Monetization: Vyb Store Has It All
                        </h1>
                        </div>

                        {/* Features List on the right (for medium and large screens) */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-950 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                                        {feature.title}
                                    </h2>
                                    <p className="text-gray-400 text-center mb-8">
                                        {feature.description}
                                    </p>

                                    {/* Render icon for each feature */}
                                    <div className="flex justify-center">
                                        <div className="relative w-32 h-32 transition-all duration-300 hover:scale-110">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
        


