"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Rahul Meena",
        avatar: "R",
        title: "Software Engineer",
        description: "This AI tool is gonna be the best ever!"
    },
    {
        name: "Prince Bagra",
        avatar: "R",
        title: "Software Engineer",
        description: "This is I think better then other tools!"
    },
    {
        name: "Yash Pareek",
        avatar: "R",
        title: "Software Engineer",
        description: "This helps me a lot while writing code for my projects!"
    },
    {
        name: "Vikas Rajoria",
        avatar: "R",
        title: "Software Engineer",
        description: "This helps me while i solve the question for my govt. exams!"
    },
]

export const LandingContent = () => {
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                What our client says...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    testimonials.map((item) => (
                        <Card key={item.description} className="bg-[#192339] border-none text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                                </CardTitle>
                                <CardContent className="pt-4 px-0">
                                    {item.description}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}