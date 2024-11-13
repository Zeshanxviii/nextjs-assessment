
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className=" text-black w-1200 py-10 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-4">
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-6xl font-extrabold text-black leading-tight space-y-4">
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-white p-2.5 rounded-lg">One</span>
                        <span className="bg-white p-2.5 rounded-lg">Stop</span>
                    </div>
                    <div>
                        <span className="bg-white p-2.5 rounded-lg">Marketplace</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="bg-white p-2.5 rounded-lg">For</span>
                        <span className="bg-green-500 text-black p-2.5 rounded-lg">Influencers</span>
                    </div>
                </h1>
                <div className="space-y-8 pt-14">
                    <p className="text-3xl font-extrabold text-white md:pr-32">
                        "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
                    </p>
        
                    <div className="flex space-x-4 gap-6">
                        <Link href="/demo-store" className="px-6 py-2 text-lg rounded-xl bg-green-500 text-black font-semibold hover:bg-green-600">
                            Demo Store
                        </Link>
                        <Link href="/waitlist" className="px-6 py-2 text-lg rounded-xl border border-gray-500 text-white font-semibold hover:bg-gray-800">
                            Join Waitlist
                        </Link>
                    </div>
                </div>
            </div>
    
            {/* Right Section */}
            <div className="mt-8 md:mt-0 md:w-1/2 items-end gap-4">
                <img src={"iamge.png"} alt="hero img" />
            </div>
        </div>
    </section>
    
    )
}
