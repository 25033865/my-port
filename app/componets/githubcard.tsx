"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";

const GITHUB_HANDLE = "25033865";
const PROFILE_IMAGE_URL =
    "https://firebasestorage.googleapis.com/v0/b/mudau-1d1cb.firebasestorage.app/o/musa.jpeg?alt=media&token=e25605e8-e9df-4990-836a-edd2f2f11ff8";

const calendarTheme = {
    dark: ["#161b22", "#3b2f61", "#5b3da4", "#7a54d9", "#a78bfa"],
};

type CalendarSizing = {
    blockSize: number;
    blockMargin: number;
    fontSize: number;
};

function getCalendarSizing(width: number): CalendarSizing {
    if (width < 420) {
        return { blockSize: 4, blockMargin: 1, fontSize: 9 };
    }

    if (width < 768) {
        return { blockSize: 5, blockMargin: 1, fontSize: 10 };
    }

    if (width < 1024) {
        return { blockSize: 6, blockMargin: 1, fontSize: 10 };
    }

    return { blockSize: 7, blockMargin: 2, fontSize: 11 };
}

export default function GithubCard() {
    const [sizing, setSizing] = useState<CalendarSizing>({
        blockSize: 7,
        blockMargin: 2,
        fontSize: 11,
    });

    useEffect(() => {
        const updateSizing = () => {
            setSizing(getCalendarSizing(window.innerWidth));
        };

        updateSizing();
        window.addEventListener("resize", updateSizing);

        return () => {
            window.removeEventListener("resize", updateSizing);
        };
    }, []);

    return (
        <aside className="w-full rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                    <div className="relative h-5 w-5 overflow-hidden rounded-full ring-1 ring-white/20">
                        <Image
                            src={PROFILE_IMAGE_URL}
                            alt="Mudau Rotondwa Agriment profile photo"
                            fill
                            sizes="20px"
                            className="object-cover"
                        />
                    </div>
                    <span className="text-sm font-medium text-white/90">@Mudau-RA</span>
                    <span className="text-xs text-white/60">• GitHub</span>
                </div>
                <GitHubCalendar
                    username={GITHUB_HANDLE}
                    colorScheme="dark"
                    showColorLegend={false}
                    showWeekdayLabels={["mon", "wed", "fri"]}
                    showMonthLabels={true}
                    showTotalCount={false}
                    blockSize={sizing.blockSize}
                    blockMargin={sizing.blockMargin}
                    fontSize={sizing.fontSize}
                    theme={calendarTheme}
                />
            </div>
        </aside>
    );
}