/* eslint-disable @next/next/no-img-element */
import React from "react";
import Stats from "./Stats";

const Profile: React.FC = () => {
return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 py-10 sm:py-12 flex items-center">
    <div className="max-w-5xl mx-auto w-full">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
          {/* Profile Image */}
        <div className="relative group flex justify-center sm:justify-start">
            <div
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-0.75 bg-linear-to-r from-purple-500 to-blue-500
                    transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            >
            <img
                src="/avatar.svg"
                alt="profile"
                className="w-full h-full rounded-full object-cover transition duration-300 group-hover:scale-105"
            />
            </div>
        </div>

          {/* Status */}
        <div className="text-center sm:text-left">
            <span
            className="inline-block px-4 py-1 rounded-full border border-purple-500 text-purple-400 text-sm
            transition duration-300 hover:bg-purple-500 hover:text-black hover:shadow-md"
            >
        Available for work
            </span>

            <p className="mt-2 text-gray-400 text-sm flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Based in South Africa
            </p>
        </div>
        </div>

        {/* Main Text */}
        <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I&apos;m Mudau <br />
            
            Rotondwa <br />
            Agriment
        </h1>

        <h2 className="text-purple-500 text-lg sm:text-xl font-bold mb-6">
            Full Stack Developer
        </h2>
        <div className="mt-6 max-w-xl mx-auto md:mx-0 text-sm md:text-gray-400 text-gray-400 leading-relaxed font-medium">
            <Stats />
        </div>
          {/* Tech Stack */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {["React.js", "Next.js", "Figma", "Java", "Firebase"].map(
            (tech) => (
                <span
                key={tech}
                className="
                px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-white/90

                transition duration-300 ease-in-out
                hover:bg-white/10 hover:border-purple-400/40
                hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                hover:-translate-y-1 hover:scale-105

                cursor-pointer
                "
                >
                {tech}
                </span>
            ),
            )}
        </div>
        </div>
    </div>
    </section>
);
};

export default Profile;
