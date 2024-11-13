'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
}

interface CardProps {
    projects: Project[];
}

export default function Card({ projects }: CardProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <main className="space-y-1 ">
            <h2 className='text-center text-xl md:text-3xl text-green-500 font-bold mt-8 pt-8'>How to get started?</h2>
            {projects.map((project, i) => (
                <div
                    className="h-[577px] flex items-center justify-center sticky top-0"
                    key={`p_${i}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className="flex flex-col relative w-[840px] h-[377px] rounded-[25px] p-[50px] origin-top transition-all duration-500 ease-out"
                        style={{
                            backgroundColor: project.color,
                            top: `calc(-5vh + ${i * 25}px)`,
                            // Apply scale and rotation on hover
                            transform: hoveredIndex === i ? 'scale(1.02) rotate(3deg)' : 'scale(1) rotate(0deg)',
                        }}
                    >
                        <div className="flex flex-col">
                            <div className="w-[40%] relative">
                                <h2 className="text-center m-0 text-2xl inline-block flex-wrap text-white font-bold mb-4">{project.title}</h2>
                                <p
                                    className={`text-base transition-all duration-500 ease-out ${hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                >
                                    {project.description}
                                </p>
                                <span
                                    className={`flex items-center gap-[5px] mt-4 transition-all duration-500 ease-out ${hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                >
                                 {/*  */}
                                </span>
                            </div>
                            <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
                                <div className="w-full h-full transition-transform duration-500 ease-out" style={{ transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)' }}>
                                    {/* Ensure you have a parent element with position relative */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.src}  // Ensure the `src` is a valid image path or URL
                                            alt={`Image for ${project.title}`}
                                            layout="fill"  // Use layout="fill" to cover the parent container
                                            objectFit="cover"  // Ensure the image covers the space properly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}
