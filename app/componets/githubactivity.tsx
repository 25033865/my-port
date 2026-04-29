"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubActivity() {
    return (
        <section className="w-full flex justify-center py-10">
            <div className="w-[90%] max-w-5xl rounded-2xl border border-white/60 bg-[#0d1117] p-6 shadow-lg">
                <div className="mb-5 flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white">@25033865</h2>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">GitHub</span>
                </div>

                <div className="overflow-x-auto">
                    <GitHubCalendar
                        username="25033865"
                        colorScheme="dark"
                        blockSize={12}
                        blockMargin={3}
                        fontSize={12}
                        showColorLegend={true}
                        showTotalCount={false}
                        theme={{
                            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
