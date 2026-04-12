import React from "react";

const background = () => {
return (
    <div>
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-background"></div>
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
            style={{ maskImage: "radial-gradient(60% 35% at 50% 0%, black 15%, transparent 50%)" }}
        ></div>
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px]"
            style={{ maskImage: "radial-gradient(80% 60% at 50% 20%, black 20%, transparent 70%)" }}
        ></div>
        <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none hidden md:block"
                style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.03) 30%, transparent 60%)", transform: "translateX(974px) translateY(257px) translateX(-50%) translateY(-50%)" }}
        ></div>
        <div
            className="absolute top-[-15%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-violet-600/15 via-purple-500/10 to-transparent rounded-full blur-[80px] md:blur-[100px]"
            style={{ transform: "translateX(4.44316px) translateY(-3.33237px) scale(1.02222)" }}
        ></div>
        <div
            className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-bl from-fuchsia-500/10 via-pink-500/5 to-transparent rounded-full blur-[80px] md:blur-[100px]"
            style={{ transform: "translateX(-0.0382217px) translateY(0.0509623px) scale(1.00019)" }}
        ></div>
        <div
            className="absolute bottom-[-5%] left-[30%] w-75 h-75 md:w-150 md:h-150 bg-linear-to-tr from-blue-500/8 via-indigo-500/5 to-transparent rounded-full blur-[80px] md:blur-[120px]"
            style={{ transform: "translateX(13.5825px) translateY(-13.5825px) scale(1.06791)" }}
        ></div>
        <div
            className="absolute left-0 right-0 h-px md:h-0.5 bg-linear-to-r from-transparent via-violet-500/20 md:via-violet-500/30 to-transparent hidden md:block"
                style={{ boxShadow: "rgba(124, 58, 237, 0.3) 0px 0px 30px 5px", transform: "translateY(11.8%)" }}
        ></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.5)_70%,hsl(var(--background))_100%)]"></div>
        <div className="noise absolute inset-0 opacity-[0.015]"></div>
    </div>
    </div>
);
};

export default background;
