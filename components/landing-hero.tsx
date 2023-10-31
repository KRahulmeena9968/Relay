"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>Use this AI tool for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to bg-violet-600">
                   <TypewriterComponent 
                   options={{
                    strings: [
                        "Chat with Relay.",
                        "Photo Generation.",
                        "Video Generation.",
                        "Music Generation.",
                        "Code Generation.",
                    ],
                    autoStart: true,
                    loop: true
                   }}/>
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Create your product using AI
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-lg font-semibold">
                    Start Generation for free
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                Use this AI Tool free.
            </div>
        </div>
    )
}