import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const DestinationsDtl = () => {
  return (
    <>
    <style>
        {`
          .tab-list {
            display: none;
          }

          .tab-list.active {
            display: block;
          }
        `}
      </style>
      <Header />



<main class="min-h-screen bg-white">
    <div class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 -translate-y-full nav-bar">
        <div class="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 md:gap-3">
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-left h-5 w-5"
                    >
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </button>
                <h2 class="font-bold text-base md:text-lg text-slate-800 truncate max-w-[150px] md:max-w-none">Bangkok</h2>
                <div
                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-primary/10 text-primary border-primary/20 text-xs"
                    data-v0-t="badge"
                >
                    Thailand
                </div>
            </div>
            <div class="flex items-center gap-1 md:gap-2">
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-heart h-5 w-5 text-slate-600"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </button>
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-share2 h-5 w-5 text-slate-600"
                    >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                </button>
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 bg-primary text-white hover:bg-primary/90 rounded-full text-sm h-9 px-3 md:h-10 md:px-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-video mr-2 h-4 w-4"
                    >
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>
                    Connect with Expert
                </button>
            </div>
        </div>
    </div>
    <section class="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div class="absolute inset-0 w-full h-full" >
            <img
                alt="Bangkok, Thailand"
                decoding="async"
                data-nimg="fill"
                class="object-cover w-full"
                
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/Bangkok-River-Temples-oP6y8XKvF4wKxoNKhOCTmHVbU7mVCZ.png"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>
        <div class="absolute top-6 right-6 z-10 flex flex-col gap-3">
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-5 w-5">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
            </button>
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 h-5 w-5">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
            </button>
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark h-5 w-5">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
            </button>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10">
            <div class="container mx-auto" >
                <div class="flex items-center gap-2 mb-3">
                    <a href="/destinations" class="text-white/80 hover:text-white text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full transition-colors">Destinations</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-right h-4 w-4 text-white/60"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <a href="/destinations/thailand" class="text-white/80 hover:text-white text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full transition-colors">Thailand</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-right h-4 w-4 text-white/60"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span class="text-white text-sm bg-primary/30 backdrop-blur-sm px-3 py-1 rounded-full">Bangkok</span>
                </div>
                <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-3 text-white">Bangkok</h1>
                <p class="text-lg md:text-2xl text-white/90 mb-4 md:mb-6 max-w-2xl">The City of Angels</p>
                <div class="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-8">
                    <div class="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-full text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-star h-4 w-4 text-yellow-400 fill-yellow-400"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span class="font-medium text-white">4.8</span><span class="text-white/80 hidden md:inline">(1245 reviews)</span>
                    </div>
                    <div class="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-full text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-map-pin h-4 w-4 text-primary"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span class="text-white">Thailand</span>
                    </div>
                    <div class="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-full text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-users h-4 w-4 text-primary"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span class="text-white">5420+ travelers</span>
                    </div>
                    <div class="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-full text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-video h-4 w-4 text-primary"
                        >
                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                            <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                        </svg>
                        <span class="text-white">28 local experts</span>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2 md:gap-3">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 bg-primary text-white hover:bg-primary/90 rounded-full h-10 md:h-12 px-4 md:px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-video mr-2 h-5 w-5"
                        >
                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                            <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                        </svg>
                        Connect with Local Expert
                    </button>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground px-4 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full h-10 md:h-12 text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-heart mr-2 h-5 w-5"
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                        Save to Wishlist
                    </button>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground px-4 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full h-10 md:h-12 text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-share2 mr-2 h-5 w-5"
                        >
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                        </svg>
                        Share
                    </button>
                </div>
            </div>
        </div>
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2" >
            <div class="flex flex-col items-center">
                <span class="text-white/80 text-sm mb-2">Scroll to explore</span>
                <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div class="w-1.5 h-1.5 bg-white rounded-full animate-dotMove"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gradient-to-r from-primary/5 to-primary/10 py-2 md:py-4 border-y border-primary/10">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center justify-between">
                <div class="flex items-center gap-3 md:gap-6 text-sm">
                    <div class="flex items-center gap-1 md:gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-sun h-4 w-4 md:h-5 md:w-5 text-yellow-500"
                        >
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                        <span class="text-slate-700">32°C</span>
                    </div>
                    <div class="flex items-center gap-1 md:gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-calendar h-4 w-4 md:h-5 md:w-5 text-primary"
                        >
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                        <span class="text-slate-700 truncate max-w-[120px] md:max-w-none">November to February</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-globe h-5 w-5 text-primary"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        <span class="text-slate-700">Language: Thai</span>
                    </div>
                </div>
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-primary"
                >
                    View Travel Information
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-right ml-1 h-4 w-4"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
            </div>
        </div>
    </section>
    <section class="bg-white py-6 md:py-10 lg:py-16 destinations-detail">
        <div class="container mx-auto px-4 md:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                <div class="lg:col-span-2">
                    <div dir="ltr" data-orientation="horizontal" class="w-full">
                        <div
                            class="clickme inline-flex h-10 items-center text-muted-foreground w-full justify-start mb-8 bg-slate-100/80 backdrop-blur-sm p-1 rounded-full"
                            >
                            <a
                                href="javascript:void(0)" data-tag="overview"
                                class="activelink inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                Overview
                            </a>
                            <a
                                href="javascript:void(0)" data-tag="experts"
                                class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                Local Experts
                            </a>
                            <a
                                href="javascript:void(0)" data-tag="visit"
                                class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                Places to Visit
                            </a>
                            <a
                                href="javascript:void(0)" data-tag="things"
                                class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                Things to Do
                            </a>
                            <a
                                href="javascript:void(0)" data-tag="shopping"
                                class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                Shopping
                            </a>
                        </div>
                    </div>
                    <div class="custom-tab">
                        <div class="space-y-6 md:space-y-10 tab-list active" id="overview">
                            <div class="prose max-w-none" >
                                <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                    About <span class="text-primary ml-2">Bangkok</span>
                                    <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                </h2>
                                <p class="text-slate-600 text-sm md:text-lg leading-relaxed">
                                    Bangkok, Thailand's vibrant capital, is a city of contrasts with ancient temples, bustling markets, and modern skyscrapers. Experience the rich culture, delicious street food, and warm hospitality.
                                </p>
                            </div>
                            <div>
                                <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                    Highlights of <span class="text-primary ml-2">Bangkok</span>
                                    <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                </h2>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    <li
                                        class="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-right h-4 w-4 text-primary"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        Grand Palace &amp; Wat Phra Kaew
                                    </li>
                                    <li
                                        class="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-right h-4 w-4 text-primary"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        Chatuchak Weekend Market
                                    </li>
                                    <li
                                        class="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-right h-4 w-4 text-primary"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        Chao Phraya River Cruise
                                    </li>
                                    <li
                                        class="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-right h-4 w-4 text-primary"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        Street Food in Chinatown
                                    </li>
                                    <li
                                        class="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-right h-4 w-4 text-primary"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        Wat Arun (Temple of Dawn)
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                    Explore Popular Itineraries
                                    <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                </h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="My 5 Days in Bangkok: Street Food &amp; Temple Hopping"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bangkok-night-market-feast-DfGSPyAeEKJOH4D4aYuVlVedG3YRWZ.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">My 5 Days in Bangkok: Street Food &amp; Temple Hopping</h3>
                                            <p class="text-sm text-slate-600 line-clamp-2">This was my first time exploring Bangkok, and I was blown away by the incredible street food and magnificent temples. Here's my 5-day adventure...</p>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Rahul Mehta"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                                        />
                                                    </span>
                                                    <div>
                                                        <p class="text-xs font-medium text-slate-800">Rahul Mehta</p>
                                                        <p class="text-[10px] text-slate-500">Mumbai, India</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">4.9</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Bangkok to Ayutthaya: The Perfect Weekend Trip"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ayutthaya-temple-ruins-gyuZXyW6goJ0IbV11jOIhn6eMw5n3n.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Bangkok to Ayutthaya: The Perfect Weekend Trip</h3>
                                            <p class="text-sm text-slate-600 line-clamp-2">Combining the bustling city life of Bangkok with the ancient ruins of Ayutthaya made for an unforgettable weekend getaway...</p>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Anjali Sharma"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-avatar-MOHPr7TbTXzKEubB3Vk3GxIENNM0eG.jpg"
                                                        />
                                                    </span>
                                                    <div>
                                                        <p class="text-xs font-medium text-slate-800">Anjali Sharma</p>
                                                        <p class="text-[10px] text-slate-500">Delhi, India</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">4.8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Bangkok for Digital Nomads: My 2-Week Experience"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bangkok-cafe-work-D9QQRX2nztf4O8NjnAuiz8KMqP2vJL.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Bangkok for Digital Nomads: My 2-Week Experience</h3>
                                            <p class="text-sm text-slate-600 line-clamp-2">Working remotely from Bangkok was an incredible experience. Great cafes, affordable living, and amazing weekend activities...</p>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">V</span></span>
                                                    <div>
                                                        <p class="text-xs font-medium text-slate-800">Vikram Patel</p>
                                                        <p class="text-[10px] text-slate-500">Bangalore, India</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">4.7</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                    Explore Travel Packages
                                    <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                </h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Discover Bangkok - A Romantic Honeymoon Journey"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/riverside-rendezvous-CBogR4ynzNuGlLvFlfQIIcNJEZ6bs4.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Discover Bangkok - A Romantic Honeymoon Journey</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-calendar h-4 w-4 text-primary"
                                                        >
                                                            <path d="M8 2v4"></path>
                                                            <path d="M16 2v4"></path>
                                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                            <path d="M3 10h18"></path>
                                                        </svg>
                                                        <span class="text-xs text-slate-600">6 Days / 5 Nights</span>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">4.8</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-sm font-medium text-primary">₹45,999</span><span class="text-xs text-slate-500 line-through">₹5,000</span></div>
                                                <button
                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 bg-primary text-white hover:bg-primary/90 rounded-full h-8 px-3 text-xs"
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Magical Bangkok And Romantic Tour"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/enchanted-bangkok-night-nctmp5RlDtsxcCmxZx3nqQlxupz8fh.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Magical Bangkok And Romantic Tour</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-calendar h-4 w-4 text-primary"
                                                        >
                                                            <path d="M8 2v4"></path>
                                                            <path d="M16 2v4"></path>
                                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                            <path d="M3 10h18"></path>
                                                        </svg>
                                                        <span class="text-xs text-slate-600">5 Days / 4 Nights</span>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">4.7</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-sm font-medium text-primary">₹38,499</span><span class="text-xs text-slate-500 line-through">₹4,500</span></div>
                                                <button
                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 bg-primary text-white hover:bg-primary/90 rounded-full h-8 px-3 text-xs"
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Bangkok &amp; Pattaya Unforgettable Journey"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bangkok-pattaya-roadtrip-xx7HfVh96gQYavJrlzKJNWouPyQJBq.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Bangkok &amp; Pattaya Unforgettable Journey</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-calendar h-4 w-4 text-primary"
                                                        >
                                                            <path d="M8 2v4"></path>
                                                            <path d="M16 2v4"></path>
                                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                            <path d="M3 10h18"></path>
                                                        </svg>
                                                        <span class="text-xs text-slate-600">7 Days / 6 Nights</span>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">4.9</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-sm font-medium text-primary">₹52,999</span><span class="text-xs text-slate-500 line-through">₹6,000</span></div>
                                                <button
                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 bg-primary text-white hover:bg-primary/90 rounded-full h-8 px-3 text-xs"
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                    Travel Tips for <span class="text-primary ml-2">Bangkok</span>
                                    <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                </h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Bangkok Travel Guide: A Detailed Itinerary and Expert's Travel Tips"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bustling-bangkok-QOuIKxZi697RvkzwYoV9THCWUAOrsX.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Bangkok Travel Guide: A Detailed Itinerary and Expert's Travel Tips</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Travel Expert Team</span></div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-calendar h-3 w-3 text-primary"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">May 10, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Top 5 Places To Visit In Bangkok"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/vibrant-bangkok-exploration-1K92MC3aJZU2SqmaJ101B5zVZ30eXc.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Top 5 Places To Visit In Bangkok</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Sophia Chen</span></div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-calendar h-3 w-3 text-primary"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">April 22, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Top 10 Things To Do In Bangkok: Your Ultimate Travel Guide"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bustling-bangkok-street-N0dwsOKJ0PBsvoH8MkydBkuLqSWXip.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Top 10 Things To Do In Bangkok: Your Ultimate Travel Guide</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Marco Traveler</span></div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-calendar h-3 w-3 text-primary"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">May 5, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                        
                                    >
                                        <div class="relative h-40 md:h-48">
                                            <img
                                                alt="Top Places To Visit In Bangkok For Couples – Ultimate Travel Guide"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bangkok-temple-sunset-Z9jxTAlnSkGP1810cv13qWo0GRekLf.png"
                                            />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="text-lg font-bold text-slate-800 mb-2">Top Places To Visit In Bangkok For Couples – Ultimate Travel Guide</h3>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Romantic Journeys</span></div>
                                                <div class="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-calendar h-3 w-3 text-primary"
                                                    >
                                                        <path d="M8 2v4"></path>
                                                        <path d="M16 2v4"></path>
                                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                        <path d="M3 10h18"></path>
                                                    </svg>
                                                    <span class="text-xs text-slate-600">April 30, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6 md:space-y-10 tab-list" id="experts">
                            <div class="space-y-6 md:space-y-10">
                                <div>
                                    <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                        Connect with Local Experts in <span class="text-primary ml-2">Bangkok</span>
                                        <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                    </h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        <div
                                            class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                            
                                        >
                                            <div class="relative h-40 md:h-48">
                                                <img alt="Somchai Thongchai" loading="lazy" decoding="async" data-nimg="fill" class="object-cover"  src="https://v0.blob.com/Yd9Ij.png" />
                                            </div>
                                            <div class="p-4">
                                                <h3 class="text-lg font-bold text-slate-800 mb-2">Somchai Thongchai</h3>
                                                <p class="text-sm text-slate-600 line-clamp-2">Local Culture &amp; Food</p>
                                                <div class="flex items-center justify-between mt-3">
                                                    <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Thai, English</span></div>
                                                    <div class="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                        <span class="text-xs text-slate-600">4.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                            
                                        >
                                            <div class="relative h-40 md:h-48">
                                                <img alt="Priya Malhotra" loading="lazy" decoding="async" data-nimg="fill" class="object-cover"  src="https://v0.blob.com/Yd9Ij.png" />
                                            </div>
                                            <div class="p-4">
                                                <h3 class="text-lg font-bold text-slate-800 mb-2">Priya Malhotra</h3>
                                                <p class="text-sm text-slate-600 line-clamp-2">Temple Tours &amp; History</p>
                                                <div class="flex items-center justify-between mt-3">
                                                    <div class="flex items-center gap-2"><span class="text-xs text-slate-600">English, Hindi, Thai</span></div>
                                                    <div class="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                        <span class="text-xs text-slate-600">4.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                            
                                        >
                                            <div class="relative h-40 md:h-48">
                                                <img alt="Alex Johnson" loading="lazy" decoding="async" data-nimg="fill" class="object-cover"  src="https://v0.blob.com/Yd9Ij.png" />
                                            </div>
                                            <div class="p-4">
                                                <h3 class="text-lg font-bold text-slate-800 mb-2">Alex Johnson</h3>
                                                <p class="text-sm text-slate-600 line-clamp-2">Digital Nomad Life</p>
                                                <div class="flex items-center justify-between mt-3">
                                                    <div class="flex items-center gap-2"><span class="text-xs text-slate-600">English</span></div>
                                                    <div class="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                        <span class="text-xs text-slate-600">4.7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6 md:space-y-10 tab-list" id="visit">
                            <div class="space-y-6 md:space-y-10">
                                <div>
                                    <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                        Must-Visit Places in <span class="text-primary ml-2">Bangkok</span>
                                        <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                    </h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <a href="/destinations/paris/places/wat-pho">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Wat Pho"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/reclining-buddha-glory-zN97Tac2g8st9dd7RahOteQZ14sxVO.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Wat Pho</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Wat Pho is a Buddhist temple complex in Bangkok, known for its giant reclining Buddha statue that measures 46 meters long and is covered in gold leaf.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Temple</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/places/lumphini-park">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Lumphini Park"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/lumphini-serenity-LoPw13a0p7ho2plw74ISLqSlm5o1Dp.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Lumphini Park</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Lumphini Park is an inner-city haven of tranquility with rare open public space, trees, and playgrounds in the Thai capital's center.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Park</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.7</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/places/asiatique-the-riverfront">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Asiatique The Riverfront"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/asiatique-twilight-pDJYJIUjDkbnRcQQuHHa4MCobW6v1f.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Asiatique The Riverfront</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Asiatique is a large open-air mall in Bangkok that combines shopping, dining, and entertainment with panoramic views of the Chao Phraya River.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Shopping</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.6</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/places/jim-thompson-house">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Jim Thompson House"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/traditional-thai-house-garden-w3aHNnKVKXaSMf3ZGHAiF8aaEQz6aC.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Jim Thompson House</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">The Jim Thompson House is a museum housing the art collection of American businessman Jim Thompson, who revitalized the Thai silk industry.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Museum</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6 md:space-y-10 tab-list" id="things">
                            <div class="space-y-6 md:space-y-10">
                                <div>
                                    <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                        Top Activities &amp; Things to Do in <span class="text-primary ml-2">Bangkok</span>
                                        <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                    </h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <a href="/destinations/paris/activities/chao-phraya-river-cruise">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Chao Phraya River Cruise"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/Bangkok-Twilight-Cruise-2YlEPIRlWSOL5lqoRMVS3yvNuLDheU.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Chao Phraya River Cruise</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Experience Bangkok from the water with a scenic cruise along the Chao Phraya River, passing temples and historic landmarks.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">1,200 THB</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/activities/thai-cooking-class">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Thai Cooking Class"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/vibrant-thai-cooking-uMaD2eGIRvOn0CotbeFZhPMefdzccm.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Thai Cooking Class</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Learn to prepare authentic Thai dishes with professional chefs, including a market visit to select fresh ingredients.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">1,500 THB</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/activities/explore-lumpini-park">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Explore Lumpini Park"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/lumpini-serenity-oyq2IDVonT0fuDmdPOWqsUlVikFpBq.png"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Explore Lumpini Park</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Enjoy a peaceful escape in Bangkok's largest park, perfect for morning walks, outdoor exercises, or boat rides on the lake.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Free</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.7</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/activities/visit-wat-phra-kaew">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Visit Wat Phra Kaew"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="/placeholder.svg?height=200&amp;width=300&amp;query=Wat%20Phra%20Kaew%20Bangkok"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Visit Wat Phra Kaew</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Explore the Temple of the Emerald Buddha, located within the grounds of the Grand Palace, featuring stunning Thai architecture.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">500 THB</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                                            >
                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">4.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6 md:space-y-10 tab-list" id="shopping">
                            <div class="space-y-6 md:space-y-10">
                                <div>
                                    <h2 class="text-xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center">
                                        Best Shopping Destinations in <span class="text-primary ml-2">Bangkok</span>
                                        <div class="ml-3 h-1 w-6 md:w-10 bg-primary rounded-full"></div>
                                    </h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <a href="/destinations/paris/shopping/siam-paragon">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Siam Paragon"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="/placeholder.svg?height=200&amp;width=300&amp;query=Siam%20Paragon%20Bangkok"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Siam Paragon</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">Siam Paragon is one of Bangkok's most popular shopping malls, featuring luxury brands, a large department store, and an aquarium.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Luxury Mall</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-clock h-3 w-3 text-primary"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <polyline points="12 6 12 12 16 14"></polyline>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">10:00 AM to 10:00 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/shopping/chatuchak-weekend-market">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="Chatuchak Weekend Market"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="/placeholder.svg?height=200&amp;width=300&amp;query=Chatuchak%20Weekend%20Market"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">Chatuchak Weekend Market</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">The largest market in Thailand with over 15,000 stalls selling everything from clothing and accessories to home decor and plants.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Weekend Market</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-clock h-3 w-3 text-primary"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <polyline points="12 6 12 12 16 14"></polyline>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">9:00 AM to 6:00 PM (Weekends only)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/shopping/mbk-center">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="MBK Center"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="/placeholder.svg?height=200&amp;width=300&amp;query=MBK%20Center%20Bangkok"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">MBK Center</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">A popular shopping destination known for its affordable prices on clothing, electronics, and souvenirs across eight floors.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Budget Shopping</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-clock h-3 w-3 text-primary"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <polyline points="12 6 12 12 16 14"></polyline>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">10:00 AM to 10:00 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/destinations/paris/shopping/iconsiam">
                                            <div
                                                class="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                                
                                            >
                                                <div class="relative h-40 md:h-48">
                                                    <img
                                                        alt="IconSiam"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        class="object-cover"
                                                        
                                                        src="/placeholder.svg?height=200&amp;width=300&amp;query=IconSiam%20Bangkok"
                                                    />
                                                </div>
                                                <div class="p-4">
                                                    <h3 class="text-lg font-bold text-slate-800 mb-2">IconSiam</h3>
                                                    <p class="text-sm text-slate-600 line-clamp-2">A luxury shopping complex on the banks of the Chao Phraya River, featuring international brands and a floating market.</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <div class="flex items-center gap-2"><span class="text-xs text-slate-600">Luxury Mall</span></div>
                                                        <div class="flex items-center gap-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="lucide lucide-clock h-3 w-3 text-primary"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <polyline points="12 6 12 12 16 14"></polyline>
                                                            </svg>
                                                            <span class="text-xs text-slate-600">10:00 AM to 10:00 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="space-y-6">
                    <div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 shadow-lg" >
                        <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl"></div>
                        <div class="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
                        <div class="relative p-4 md:p-6">
                            <h3 class="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                Connect with Local Expert
                                <div class="ml-3 h-1 w-6 bg-primary rounded-full"></div>
                            </h3>
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0">
                                    <div class="relative">
                                        <div class="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                                            <img
                                                alt="Somchai Thongchai"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                class="object-cover"
                                                
                                                src="https://v0.blob.com/Yd9Ij.png"
                                            />
                                        </div>
                                        <div class="absolute bottom-0 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white animate-pulse"></div>
                                        <div class="absolute -top-1 -right-1 bg-primary text-white text-[8px] px-1.5 py-0.5 rounded-full border border-white shadow-sm">✓ Verified</div>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-2">
                                        Somchai Thongchai
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-primary/20 text-primary border-none text-[10px]"
                                            data-v0-t="badge"
                                        >
                                            Top Expert
                                        </div>
                                    </h4>
                                    <p class="text-sm text-primary font-medium">Local Culture &amp; Food</p>
                                    <div class="flex items-center gap-1 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium">4.9</span><span class="text-[10px] text-slate-500">(87 reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-2 gap-2">
                                <div class="flex items-center gap-1.5 text-xs text-slate-600">
                                    <div class="bg-white/50 backdrop-blur-sm p-1 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-clock h-3 w-3 text-primary"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <span>Responds in ~2 hours</span>
                                </div>
                                <div class="flex items-center gap-1.5 text-xs text-slate-600">
                                    <div class="bg-white/50 backdrop-blur-sm p-1 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-globe h-3 w-3 text-primary"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                    </div>
                                    <span>Thai, English</span>
                                </div>
                            </div>
                            <div class="mt-4 text-sm font-bold text-primary">₹1,499</div>
                            <div class="mt-4 space-y-2">
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full h-10 rounded-full bg-primary text-white hover:bg-primary/90"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-video mr-2 h-4 w-4"
                                    >
                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                    </svg>
                                    Video Call
                                </button>
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 w-full h-10 rounded-full border-primary/30 text-primary hover:bg-primary/10"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-message-circle mr-2 h-4 w-4"
                                    >
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                    </svg>
                                    Chat Now
                                </button>
                            </div>
                            <div class="mt-4 pt-4 border-t border-primary/10">
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline text-primary text-xs p-0 h-auto w-full text-center"
                                >
                                    View all 28 experts in Bangkok
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 inline"
                                    >
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" >
                        <div class="bg-[#25D366] p-6 text-white">
                            <div class="flex items-center justify-between mb-2">
                                <h3 class="text-xl font-bold">Bangkok WhatsApp Group</h3>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-white/20 text-white border-none"
                                    data-v0-t="badge"
                                >
                                    248 members
                                </div>
                            </div>
                            <p class="text-white/90 text-sm">Join our exclusive WhatsApp community for real-time travel updates and local insights</p>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-center mb-6">
                                <div class="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-message-square h-8 w-8 text-[#25D366]"
                                    >
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="space-y-4 mb-6">
                                <div class="flex items-start gap-3">
                                    <div class="bg-[#25D366]/10 p-2 rounded-full flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-users h-5 w-5 text-[#25D366]"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="font-medium text-slate-800">Connect with fellow travelers</p>
                                        <p class="text-sm text-slate-600">Share experiences and meet travel buddies</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="bg-[#25D366]/10 p-2 rounded-full flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-map-pin h-5 w-5 text-[#25D366]"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="font-medium text-slate-800">Get local recommendations</p>
                                        <p class="text-sm text-slate-600">Hidden gems and authentic experiences</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="bg-[#25D366]/10 p-2 rounded-full flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-calendar h-5 w-5 text-[#25D366]"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="font-medium text-slate-800">Stay updated on events</p>
                                        <p class="text-sm text-slate-600">Local festivals and meetups</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-slate-50 rounded-lg p-4 mb-4">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="bg-[#25D366]/10 p-1.5 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-user-plus h-4 w-4 text-[#25D366]"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                                <line x1="22" x2="16" y1="11" y2="11"></line>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-sm font-medium text-slate-800">Join this WhatsApp group</p>
                                            <p class="text-xs text-slate-500">One-time membership fee</p>
                                        </div>
                                    </div>
                                    <div class="text-lg font-bold text-[#25D366]">₹99</div>
                                </div>
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-full"
                                >
                                    Join Now
                                </button>
                            </div>
                            <div class="flex items-center justify-center">
                                <div class="flex -space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6 border-2 border-white">
                                        <img class="aspect-square h-full w-full" alt="Member 1" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg" />
                                    </span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">M2</span></span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">M3</span></span>
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">M4</span></span>
                                </div>
                                <span class="text-xs text-slate-500 ml-2">+244 members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>


      <Footer />
    </>
  );
};

export default DestinationsDtl;
