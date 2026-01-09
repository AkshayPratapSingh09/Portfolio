"use client";

import React from "react";
import Link from "next/link";
import "./not-found.css";

const NotFound = () => {
    return (
        <div className="not-found-wrapper min-h-screen flex items-center justify-center p-6 bg-white">
            <div className="max-w-md w-full text-center relative">
                {/* Decoration: Floating Blobs */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>

                <div className="relative z-10">
                    {/* SVG Illustration */}
                    <div className="relative inline-block mb-10">
                        {/* Zzz Animation */}
                        <div className="absolute right-4 top-4 zzz" style={{ animationDelay: "0s" }}>
                            Z
                        </div>
                        <div className="absolute right-0 top-0 zzz" style={{ animationDelay: "1s" }}>
                            z
                        </div>
                        <div
                            className="absolute right-[-10px] top-[-10px] zzz"
                            style={{ animationDelay: "2s" }}
                        >
                            z
                        </div>

                        <svg
                            width="300"
                            height="300"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ghost-float"
                        >
                            {/* Modern Blobby Ghost */}
                            <path
                                d="M40 80C40 46.8629 66.8629 20 100 20C133.137 20 160 46.8629 160 80V150C160 161.046 151.046 170 140 170C134.477 170 130 165.523 130 160C130 154.477 125.523 150 120 150C114.477 150 110 154.477 110 160C110 165.523 105.523 170 100 170C94.4772 170 90 165.523 90 160C90 154.477 85.5228 150 80 150C74.4772 150 70 154.477 70 160C70 165.523 65.5228 170 60 170C48.9543 170 40 161.046 40 150V80Z"
                                className="glass-ghost"
                                stroke="#E2E8F0"
                                strokeWidth="1"
                            />

                            {/* Cute Eyes (Blinking) */}
                            <circle cx="75" cy="85" r="5" fill="#334155" className="eye-blink" />
                            <circle cx="125" cy="85" r="5" fill="#334155" className="eye-blink" />

                            {/* Blushing Cheeks */}
                            <circle cx="65" cy="98" r="7" fill="#FFD1DC" opacity="0.8" />
                            <circle cx="135" cy="98" r="7" fill="#FFD1DC" opacity="0.8" />

                            {/* Tiny Smile */}
                            <path
                                d="M92 105C92 105 100 110 108 105"
                                stroke="#334155"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Soft Dynamic Shadow */}
                        <div className="w-32 h-3 bg-slate-400/20 rounded-[100%] mx-auto mt-[-15px] blur-md"></div>
                    </div>

                    {/* Modern Typography */}
                    <h1 className="text-7xl font-bold text-slate-800 tracking-tight mb-4">404</h1>
                    <p className="text-2xl text-slate-600 font-bold mb-4">
                        Shhh... page is resting.
                    </p>
                    <p className="text-slate-500 mb-10 max-w-xs mx-auto text-lg leading-relaxed">
                        We couldn't find what you were looking for. It's likely hidden under a blanket.
                    </p>

                    {/* Modern Pill Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-slate-200 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span>Back to Reality</span>
                        </Link>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-bold rounded-full transition-all active:scale-95"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
