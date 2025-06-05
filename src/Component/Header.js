import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
            <span className="text-2xl tracking-tight">Connecting</span>
            <span className="text-2xl tracking-tight ml-2 text-white">
              Traveller
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium text-white hover:text-primary transition-colors">Home</a>
          <a href="/community" className="text-sm font-medium text-white hover:text-primary transition-colors">Community</a>
          <a href="/experts" className="text-sm font-medium text-white hover:text-primary transition-colors">Experts</a>
          <a href="/destinations" className="text-sm font-medium text-white hover:text-primary transition-colors">Destinations</a>
          <a href="/about" className="text-sm font-medium text-white hover:text-primary transition-colors">About</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/community">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-9 rounded-md px-3 border-white/20 bg-white/5 text-white hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mr-2 h-4 w-4">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Join Community
            </button>
          </a>

          <a href="/login">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 bg-primary text-white hover:bg-primary/90">
            Sign Up / Login
          </button>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="flex md:hidden items-center justify-center rounded-md p-2 text-white hover:bg-white/10 bar-menu-toggle">
          <span className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-white/10 bg-[#0F172A]/95 backdrop-blur-md mob-menu hidden">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-white/10">Home</a>
            <a href="/community" className="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-white/10">Community</a>
            <a href="/experts" className="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-white/10">Experts</a>
            <a href="/destinations" className="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-white/10">Destinations</a>
            <a href="/about" className="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-white/10">About</a>

            <div className="mt-2 flex flex-col gap-2">
              <a href="/community">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mr-2 h-4 w-4">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Join Community
                </button>
              </a>
              <a href="/login">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90">
                  Sign Up / Login
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
