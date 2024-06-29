import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-[#21282D] text-white flex justify-between items-center p-4">
                <div className="text-xl font-bold text-[#ABAAB3]">
                    MALLU <span className="text-[#B57340]">SAMP</span> ROLEPLAY
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to={"/"} className="hover:text-[#B57340]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/about-us"}
                                className="hover:text-[#B57340]"
                            >
                                About US
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/rules"}
                                className="hover:text-[#B57340]"
                            >
                                Rules
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-7xl font-bold mb-4 font-serif">
                    MALLU{" "}
                    <span className="text-white border border-3 border-[#B57340] bg-[#B57340] px-2 rounded hover:px-10 hover:py-3 transition-all duration-500 cursor-pointer animate-pulse">
                        SAMP
                    </span>{" "}
                    ROLE<span className="text-[#ff9350]">PLAY</span>{" "}
                </h1>
                <p className="mb-4 text-[#ffffff] font-medium text-xl bg-[#21282D]/40">
                    Experience Unparalleled Roleplay With Cutting-Edge Features,
                    Dedicated Staff, And A Thriving Community.
                </p>
                <div className="mb-8">
                    <span className="bg-black bg-opacity-50 px-4 py-2 rounded">
                        STATUS: <span className="text-green-500">Online</span>
                    </span>
                    <span className="ml-4 bg-black bg-opacity-50 px-4 py-2 rounded">
                        PLAYERS: 250 / 250
                    </span>
                </div>
                <div>
                    <button onClick={()=>{window.location.href='https://discord.com/invite/du3CsGNmYM'}} className="bg-[#2d3aa1] transition-all duration-300 text-white text-3xl hover:bg-[#20296c] px-6 py-2 mr-4 flex gap-3 items-center rounded-md">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" alt="discord" className="w-14"/> Join Now
                    </button>
                    {/* <button className="bg-[#B57340] text-white hover:bg-[#B57340] px-6 py-2 rounded">
                        Get Whitelist
                    </button> */}
                </div>
            </main>
        </div>
    );
}

export default Home;
