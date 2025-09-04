import React from "react";

const Header = () => (
    <header className="bg-black shadow-md w-full sticky top-0 z-10">
        <nav className="container mx-auto flex items-center justify-between py-3 px-6">
            <a href="/" className="flex items-center gap-2">
                <img
                    src="/logo-dark.png"
                    alt="Logo"
                    className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-blue-300 tracking-wide">Weather App</span>
            </a>
           
        </nav>
    </header>
);

export default Header;