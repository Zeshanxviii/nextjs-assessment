"use client"

import { useState } from "react"
import { Plus, Minus } from 'lucide-react'

export default function Frequentlyasked() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(2)

    const questions = [
        {
            question: "How much does it cost to set up a store?",
            answer: ""
        },
        {
            question: "What kind of digital products can I sell?",
            answer: ""
        },
        {
            question: "Do I need technical skills to use the platform?",
            answer: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            question: "Is there a limit to the number of products I can list?",
            answer: ""
        },
        {
            question: "How do I receive payments for my sales?",
            answer: ""
        },
        {
            question: "Can I sell internationally on this marketplace?",
            answer: ""
        },
        {
            question: "What support and resources are available for sellers?",
            answer: ""
        },
        {
            question: "Is there a review process for uploaded products?",
            answer: ""
        }
    ]

    return (
        <div className="min-h-screen mt-8 px-4 p-6 md:p-12">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-12 md:flex-row md:gap-24">
                    <div className="md:w-1/3 md:content-center ">
                        <h2 className="text-3xl font-bold text-[#00FF85] md:text-4xl">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>
                        <p className="mt-4 text-white/90">
                            Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for?
                        </p>
                        <p className="mt-2 text-white/90">Check out our full documentation</p>
                    </div>

                    <div className="flex-1 space-y-4">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-white transition-all duration-200 ease-in-out"
                            >
                                <button
                                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >
                                    <span className="text-base font-semibold md:text-lg">{item.question}</span>
                                    {openQuestion === index ? (
                                        <Minus className="h-5 w-5 shrink-0" />
                                    ) : (
                                        <Plus className="h-5 w-5 shrink-0" />
                                    )}
                                </button>
                                {openQuestion === index && item.answer && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}   