import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="text-black px-4 py-10">
            <div className="container mx-auto flex flex-col md:flex-row md:gap-4">
                {/* Left Section */}
                <div className="md:w-1/2 md:text-left space-y-6">
                    <h1 className="text-3xl md:text-6xl font-extrabold text-black gap-2 leading-tight space-y-6">
                        <div className="flex flex-wrap gap-2  md:justify-start">
                            <span className="bg-white p-2.5 rounded-lg">One</span>
                            <span className="bg-white p-2.5 rounded-lg">Stop</span>
                        </div>
                        <div className="md:text-left">
                            <span className="bg-white p-2.5 rounded-lg">Marketplace</span>
                        </div>
                        <div className="flex gap-2 md:justify-start">
                            <span className="bg-white p-2.5 rounded-lg">For</span>
                            <span className="bg-green-500 text-black p-2.5 rounded-lg">Influencers</span>
                        </div>
                    </h1>
                    <div className="space-y-8 pt-14">
                        <p className="text-xl md:text-3xl font-extrabold text-white md:pr-32">
                            "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 w-fit mt-8">
                            <Link
                                href="/demo-store"
                                className="px-6 py-2 text-lg rounded-xl bg-green-500 text-black font-semibold hover:bg-green-600"
                            >
                                Demo Store
                            </Link>
                            <Link
                                href="/waitlist"
                                className="px-6 py-2 text-lg rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold border-2 border-transparent border-t-4 border-l-4 border-r-4 hover:bg-gray-800"
                            >   
                                Join Waitlist
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
                    <img src="/iamge.png" alt="hero img" className="w-full h-auto max-w-[400px] md:max-w-[500px]" />
                </div>
            </div>
        </section>
    );
}
