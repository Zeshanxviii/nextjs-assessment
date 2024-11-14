'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    src: string;
    color: string;
}

interface CardProps {
    projects: Project[];
}

export default function Card({ projects }: CardProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <main className="space-y-1">
            <h2 className='text-center text-xl md:text-3xl text-green-500 font-bold mt-8 pt-8'>How to get started?</h2>
            {projects.map((project, i) => (
                <div
                    className="h-auto md:h-[577px] flex items-center justify-center sticky top-0 mb-4"
                    key={`p_${i}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className="flex flex-col md:flex-row relative md:w-[840px] md:h-[377px] rounded-[25px] p-4 md:p-[50px] origin-top transition-all duration-500 ease-out"
                        style={{
                            backgroundColor: project.color,
                            top: `calc(-5vh + ${i * 25}px)`,
                            transform: hoveredIndex === i ? 'scale(1.02) rotate(3deg)' : 'scale(1) rotate(0deg)',
                        }}
                    >
                        <div className="flex flex-col md:flex-col w-full md:w-[40%]">
                            <h2 className="text-center m-0 text-xl md:text-2xl inline-block text-white font-bold mb-4">
                                {project.title}
                            </h2>
                            <p
                                className={`text-base text-white transition-all duration-500 ease-out ${hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            >
                                {project.description}
                            </p>
                        </div>
                        <div className="w-full md:w-[60%] h-full rounded-[25px] overflow-hidden">
                            <div
                                className="w-full h-full transition-transform duration-500 ease-out flex justify-center items-center overflow-hidden"
                                style={{ transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)' }}
                            >
                                <Image
                                    height={200}
                                    width={200}
                                    src={project.src}
                                    alt={`Image for ${project.title}`}
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}
