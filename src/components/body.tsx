import CarouselComponent from './card/carousel'
import Image from "next/image";

export default function Component() {
    return (
        <div className="min-h-screen px-4 text-white">
            <nav className="w-full bg-black py-8 px-4 rounded-3xl">
                <div className="max-w-screen-xl mx-auto px-8">
                    <ul className="flex justify-center gap-8 sm:gap-16 py-6">
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

            <div className="h-12"></div>

            <div className="mx-auto">
                <div className="relative flex h-[300px] sm:h-[540px] max-w-screen-xl items-center justify-center mx-auto">
                    <div className="absolute inset-0">
                        <Image
                            src="/Frame 1574.png"
                            alt="Mountain landscape"
                            className="w-full h-full object-cover rounded-t-3xl"
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-t-3xl"></div>
                    </div>
                    <div className="relative text-center space-y-6 px-4 sm:px-8">
                        <h1 className="text-4xl sm:text-7xl font-bold tracking-wider text-white">
                            TRAVEL
                        </h1>
                        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-white">
                            Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
                        </p>
                    </div>
                </div>

                <div className="bg-black w-full mx-auto pt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <CarouselComponent />
                    </div>
                </div>

                <div className="relative bg-gradient-to-r from-fuchsia-950 via-black to-slate-950 rounded-b-3xl">
                    <div className="absolute inset-0 bg-black/50 rounded-b-3xl z-0"></div>

                    <div className="relative max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-8 z-10">
                        <h2 className="font-bold text-xl sm:text-3xl text-white mb-8">
                            How to list?
                        </h2>

                        <Image
                            src="/unsplash.png"
                            alt="A mountain landscape"
                            width={1200}
                            height={547}
                            className="object-cover rounded-b-3xl w-full sm:w-auto"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
