"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GITHUB_HANDLE = "25033865";

const calendarTheme = {
    dark: ["#f2f2f2", "#d8b4fe", "#c084fc", "#a855f7", "#6d28d9"],
    light: ["#f2f2f2", "#d8b4fe", "#c084fc", "#a855f7", "#6d28d9"],
};

type CalendarSizing = {
    blockSize: number;
    blockMargin: number;
    fontSize: number;
};

function getCalendarSizing(width: number): CalendarSizing {
    if (width < 420) {
        return { blockSize: 4, blockMargin: 1, fontSize: 8 };
    }

    if (width < 560) {
        return { blockSize: 6, blockMargin: 1, fontSize: 8 };
    }

    if (width < 720) {
        return { blockSize: 8, blockMargin: 1, fontSize: 9 };
    }

    return { blockSize: 9, blockMargin: 2, fontSize: 9 };
}

export default function GithubCard() {
    const cardRef = useRef<HTMLElement>(null);
    const [sizing, setSizing] = useState<CalendarSizing>({
        blockSize: 8,
        blockMargin: 1,
        fontSize: 9,
    });

    useEffect(() => {
        const card = cardRef.current;

        if (!card) {
            return;
        }

        const updateSizing = () => {
            setSizing(getCalendarSizing(card.clientWidth));
        };

        const resizeObserver = new ResizeObserver(updateSizing);
        resizeObserver.observe(card);
        updateSizing();

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <aside
            ref={cardRef}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/85 bg-inherit px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-6"
        >
            <div className="mb-4 flex items-center gap-2">
                <h2 className="text-lg font-bold leading-none text-white sm:text-lg">@Mudau-RA</h2>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400 sm:text-base">GitHub</span>
            </div>

            <div className="github-calendar overflow-x-auto pb-1">
                <GitHubCalendar
                    username={GITHUB_HANDLE}
                    colorScheme="dark"
                    blockSize={sizing.blockSize}
                    blockMargin={sizing.blockMargin}
                    fontSize={sizing.fontSize}
                    showColorLegend={false}
                    showTotalCount={false}
                    theme={calendarTheme}
                />
            </div>
        </aside>
    );
}
