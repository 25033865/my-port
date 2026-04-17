import React from "react";

const background = () => {
return (
    <div>
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-background"></div>
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.045)_1px,transparent_1px)] bg-size-[48px_48px]"
            style={{ maskImage: "radial-gradient(65% 38% at 50% 0%, black 18%, transparent 55%)" }}
        ></div>
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[16px_16px]"
            style={{ maskImage: "radial-gradient(84% 64% at 50% 18%, black 24%, transparent 74%)" }}
        ></div>
        <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none hidden md:block"
                style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, rgba(124, 58, 237, 0.05) 36%, transparent 68%)", transform: "translateX(974px) translateY(257px) translateX(-50%) translateY(-50%)" }}
        ></div>
        <div
            className="absolute top-[-15%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-linear-to-br from-violet-600/20 via-purple-500/12 to-transparent rounded-full blur-[90px] md:blur-[115px]"
            style={{ transform: "translateX(6px) translateY(-4px) scale(1.03)" }}
        ></div>
        <div
            className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-linear-to-bl from-fuchsia-500/14 via-pink-500/8 to-transparent rounded-full blur-[90px] md:blur-[110px]"
            style={{ transform: "translateX(-1px) translateY(1px) scale(1.01)" }}
        ></div>
        <div
            className="absolute bottom-[-5%] left-[30%] w-75 h-75 md:w-150 md:h-150 bg-linear-to-tr from-blue-500/12 via-indigo-500/7 to-transparent rounded-full blur-[95px] md:blur-[135px]"
            style={{ transform: "translateX(14px) translateY(-14px) scale(1.07)" }}
        ></div>
        <div
            className="absolute left-0 right-0 h-px md:h-0.5 bg-linear-to-r from-transparent via-violet-500/28 md:via-violet-500/38 to-transparent hidden md:block"
                style={{ boxShadow: "rgba(124, 58, 237, 0.4) 0px 0px 40px 6px", transform: "translateY(11.8%)" }}
        ></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-background via-background/85 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.44)_66%,hsl(var(--background))_100%)]"></div>
        <div className="noise absolute inset-0 opacity-[0.02]"></div>
    </div>
    </div>
);
};

export default background;
