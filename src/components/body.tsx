import CarouselComponent from './card/carousel'
import Image from "next/image";

export default function Component() {

    return (
        <div className="min-h-screen text-white ">
            {/* Navigation */}
            <nav className="w-1200 bg-black py-8 px-4 rounded-3xl">
                <div className="max-w-[1920px] mx-auto px-8">
                    <ul className="flex justify-center gap-32 py-6">
                        <li className="border-b-2 border-green-500">
                            <a href="#" className="text-white hover:text-gray-300 text-lg">Travel</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 text-lg">Digital</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 text-lg">Brand</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 text-lg">Merch</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Spacer */}
            <div className="h-12"></div>

            {/* Hero Section */}
            <div className="mx-auto">
                {/* Hero Section */}
                <div className="relative flex h-[540px] max-w-screen-xl items-center justify-center mx-auto ">
                    <div className="absolute inset-0">
                        <img
                            src="/Frame 1574.png"
                            alt="Mountain landscape"
                            className="w-full h-full object-cover rounded-t-3xl"
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-t-3xl"></div>
                    </div>
                    <div className="relative text-center space-y-6 px-4">
                        <h1 className="text-7xl font-bold tracking-wider text-white">TRAVEL</h1>
                        <p className="max-w-2xl mx-auto text-lg text-white">
                            Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
                        </p>
                    </div>
                </div>
                <div className="bg-black w-full mx-auto pt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <CarouselComponent />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-fuchsia-950 from-10% via-black via-40% to-slate-950 to-90% rounded-b-3xl">
                    <div className="bg-black/50 inset-0 rounded-b-3xl w-1200 ">
                    <h2 className='text-center flex items-center justify-center pt-12 font-bold text-3xl'>
                        How to list ?
                    </h2>
                    <Image
                        src="/unsplash.png"
                        alt="a mountain"
                        width={1200}
                        height={547}
                        className="object-cover rounded-b-3xl"
                    />
                    
                    </div>
                    
                </div>

            </div>

        </div>

    )
}