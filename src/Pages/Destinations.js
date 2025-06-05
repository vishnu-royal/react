import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Destinations = () => {
  return (
    <>
      <Header />



<main class="min-h-screen bg-gradient-to-b from-white to-slate-50">
    <div class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 -translate-y-full nav-bar">
        <div class="container mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2 text-primary font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-5 w-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
                <span>Explore Destinations</span>
            </div>
            <div class="flex items-center gap-2 w-1/2 max-w-md">
                <div class="relative flex-1">
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
                        class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input
                        class="flex w-full border bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 h-10 rounded-full border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Search destinations..."
                        value=""
                    />
                </div>
                <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 rounded-full"
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
                        class="lucide lucide-filter h-4 w-4 mr-2"
                    >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                    Filter
                </button>
            </div>
        </div>
    </div>
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/80 to-slate-800"></div>
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0 opacity-20 bg-[url('/diagonal-pattern.png')]"></div>
            <div class="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[100px]" ></div>
            <div class="absolute -bottom-[20%] -left-[5%] w-[30%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]" ></div>
        </div>
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute top-[15%] right-[15%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                
            >
                <img
                    alt="Compass"
                    loading="lazy"
                    width="30"
                    height="30"
                    decoding="async"
                    data-nimg="1"
                    class="w-6 h-6 md:w-8 md:h-8 opacity-80"
                    
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-compass-icon-MCoPsMKLrefWCNzxQdoPJZl5ekXEUQ.png"
                />
            </div>
            <div
                class="absolute bottom-[25%] left-[10%] w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                
            >
                <img
                    alt="Airplane"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    class="w-5 h-5 md:w-7 md:h-7 opacity-80"
                    
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-airplane-icon-IW30oaqflrJVJ8PxiYWWUnEy8e0GGs.png"
                />
            </div>
            <div
                class="absolute top-[40%] left-[20%] w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hidden md:flex"
                
            >
                <img
                    alt="Camera"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    class="w-4 h-4 md:w-6 md:h-6 opacity-80"
                    
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-camera-icon-A4f7xviOAYtmA2IdSZ0onuUOfwQ4ao.png"
                />
            </div>
        </div>
        <div class="relative container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="text-center md:text-left">
                    <div>
                        <div
                            class="border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm border-none"
                            data-v0-t="badge"
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
                                class="lucide lucide-globe mr-2 h-4 w-4"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            <span class="relative"><span class="animate-pulse absolute inset-0 rounded-full bg-white/20"></span><span class="relative">440+ Destinations Worldwide</span></span>
                        </div>
                        <h1 class="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
                            <span class="block">Discover Your</span>
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 relative">
                                Perfect Destination
                                <div class="absolute -bottom-2 left-0 h-1 bg-primary/70 rounded-full" ></div>
                            </span>
                        </h1>
                        <p class="text-base md:text-lg text-white/80 max-w-md mb-6">Explore amazing places organized by travel style, interests, and experiences that match your travel personality</p>
                        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
                            <button class="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300" tabindex="0">
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
                                    class="lucide lucide-globe h-4 w-4"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                                International
                            </button>
                            <button class="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300" tabindex="0">
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
                                    class="lucide lucide-map-pin h-4 w-4"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                India Destinations
                            </button>
                            <button class="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300" tabindex="0">
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
                                    class="lucide lucide-heart h-4 w-4"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                                Spiritual Retreats
                            </button>
                            <button class="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300" tabindex="0">
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
                                    class="lucide lucide-chevron-right h-4 w-4"
                                >
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                View All
                            </button>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="absolute -top-10 -left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                    <div class="absolute -bottom-5 -right-5 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
                    <div class="relative backdrop-blur-md bg-white/10 rounded-2xl p-5 border border-white/20 shadow-xl">
                        <h3 class="text-white text-lg font-medium mb-4">Find Your Next Adventure</h3>
                        <div class="relative flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur-md p-1.5 shadow-lg border border-white/20 mb-5">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
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
                                    class="lucide lucide-search h-5 w-5"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </div>
                            <input
                                class="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-10 flex-1 border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0"
                                placeholder="Search destinations..."
                                value=""
                            />
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-lg h-10 px-4 py-0 bg-white text-primary hover:bg-white/90"
                            >
                                Search
                            </button>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group relative overflow-hidden rounded-lg h-24">
                                <img
                                    alt="Paris"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    class="object-cover transition-transform duration-500 group-hover:scale-110"
                                    
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/eiffel-glow-yTtYE6wudXHE9u7ieOGAcxQ8EFQZC6.png"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div class="absolute bottom-2 left-2 right-2">
                                    <h4 class="text-white font-medium text-sm">Paris</h4>
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
                                            class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <p class="text-xs text-white/90">France</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group relative overflow-hidden rounded-lg h-24">
                                <img
                                    alt="Tokyo"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    class="object-cover transition-transform duration-500 group-hover:scale-110"
                                    
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-night-panorama-zuUw3hdj6DpgLwNtVEeGrECFnTRfpB.png"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div class="absolute bottom-2 left-2 right-2">
                                    <h4 class="text-white font-medium text-sm">Tokyo</h4>
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
                                            class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <p class="text-xs text-white/90">Japan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" class="w-full h-auto">
                <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,32L60,32C120,32,240,32,360,29.3C480,27,600,21,720,24C840,27,960,37,1080,40C1200,43,1320,37,1380,34.7L1440,32L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"
                ></path>
            </svg>
        </div>
    </section>
    <section class="py-8 bg-white horizontal-navTabs">
        <div class="container mx-auto px-4 md:px-6">
            <div dir="ltr" data-orientation="horizontal" class="w-full">
                <div
                    class="clickme inline-flex h-10 items-center rounded-md bg-muted text-muted-foreground mb-8 w-full justify-start overflow-x-auto scrollbar-hide p-1 sm:justify-center"
                    >
                    <a
                        href="javascript:void(0)" data-tag="all" 
                        class="activelink inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
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
                            class="lucide lucide-globe mr-1 h-4 w-4"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        All Categories
                    </a>
                    <a href="javascript:void(0)" data-tag="international"
                        class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
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
                            class="lucide lucide-globe mr-1 h-4 w-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        International
                    </a>
                    <a href="javascript:void(0)" data-tag="india"
                        class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
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
                            class="lucide lucide-map-pin mr-1 h-4 w-4"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        India Destinations
                    </a>
                    <a href="javascript:void(0)" data-tag="spiritual"
                        class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
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
                            class="lucide lucide-heart mr-1 h-4 w-4"
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                        Spiritual Retreats
                    </a>
                    <a href="javascript:void(0)" data-tag="adventure"
                        class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
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
                            class="lucide lucide-compass mr-1 h-4 w-4"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                        Adventure Travel
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="py-8 md:py-12 bg-white">
        <div class="container mx-auto px-4 md:px-6 custom-tab">
            
            <div id="all" class="mb-16 last:mb-0 scroll-mt-24 tab-list active">
                <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
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
                                class="lucide lucide-globe h-6 w-6"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">International</h2>
                            <p class="text-slate-600">Explore exciting destinations around the world</p>
                        </div>
                    </div>
                    <div
                        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border-blue-200 bg-blue-50 text-blue-600"
                        data-v0-t="badge"
                    >
                        200+ Destinations
                    </div>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div
                        class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100"
                        
                    >
                        <a href="/destinations/paris" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Paris"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/eiffel-glow-yTtYE6wudXHE9u7ieOGAcxQ8EFQZC6.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Paris</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">France</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">The city of lights and romance</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100"
                        
                    >
                        <a href="/destinations/tokyo" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Tokyo"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-night-panorama-zuUw3hdj6DpgLwNtVEeGrECFnTRfpB.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Tokyo</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Japan</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">A blend of traditional and ultramodern</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/new-york" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="New York"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/manhattan-evening-lights-jaubYG6zcezHB7x0Gq0n9phwQ5kqIj.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">New York</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">USA</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">The city that never sleeps</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/bali" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Bali"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/balinese-twilight-5fX8Vtk7s83XraClz0AjlWK4Pc3gpM.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.6</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Bali</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Indonesia</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Island paradise with rich culture</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/santorini" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Santorini"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/santorini-vista-rZ3wRn3dBk55MaXnF3rNnVOeIu1pGn.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Santorini</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Greece</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Stunning views and white-washed buildings</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/dubai" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Dubai"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/dubai-cityscape-twilight-xzq1OXg0MQsiEqSWZpNboX4hhugVTw.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Dubai</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">UAE</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Futuristic city in the desert</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/bangkok" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Bangkok"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/Bangkok-Temple-Twilight-9wdr9iDE2X3H0MOswBETZg4JWlvmpk.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.5</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Bangkok</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Thailand</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Vibrant street life and ornate shrines</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/london" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="London"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/london-thames-iconic-IbwfDAlOhXyf8lsOiHQfOYn4ucj5H2.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.6</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">London</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">UK</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Historic landmarks and modern attractions</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="international" class="mb-16 last:mb-0 scroll-mt-24 tab-list">
                <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
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
                                class="lucide lucide-globe h-6 w-6"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">International</h2>
                            <p class="text-slate-600">Explore exciting destinations around the world</p>
                        </div>
                    </div>
                    <div
                        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border-blue-200 bg-blue-50 text-blue-600"
                        data-v0-t="badge"
                    >
                        200+ Destinations
                    </div>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div
                        class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100"
                        
                    >
                        <a href="/destinations/paris" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Paris"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/eiffel-glow-yTtYE6wudXHE9u7ieOGAcxQ8EFQZC6.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Paris</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">France</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">The city of lights and romance</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100"
                        
                    >
                        <a href="/destinations/tokyo" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Tokyo"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-night-panorama-zuUw3hdj6DpgLwNtVEeGrECFnTRfpB.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Tokyo</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Japan</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">A blend of traditional and ultramodern</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/new-york" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="New York"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/manhattan-evening-lights-jaubYG6zcezHB7x0Gq0n9phwQ5kqIj.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">New York</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">USA</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">The city that never sleeps</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/bali" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Bali"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/balinese-twilight-5fX8Vtk7s83XraClz0AjlWK4Pc3gpM.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.6</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Bali</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Indonesia</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Island paradise with rich culture</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/santorini" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Santorini"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/santorini-vista-rZ3wRn3dBk55MaXnF3rNnVOeIu1pGn.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Santorini</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Greece</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Stunning views and white-washed buildings</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/dubai" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Dubai"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/dubai-cityscape-twilight-xzq1OXg0MQsiEqSWZpNboX4hhugVTw.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Dubai</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">UAE</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Futuristic city in the desert</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/bangkok" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Bangkok"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/Bangkok-Temple-Twilight-9wdr9iDE2X3H0MOswBETZg4JWlvmpk.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.5</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Bangkok</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Thailand</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Vibrant street life and ornate shrines</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/london" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="London"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/london-thames-iconic-IbwfDAlOhXyf8lsOiHQfOYn4ucj5H2.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.6</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">London</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">UK</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Historic landmarks and modern attractions</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-blue-50 text-blue-600 border-border-blue-200"
                                                data-v0-t="badge"
                                            >
                                                International
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="india" class="mb-16 last:mb-0 scroll-mt-24 tab-list">
                <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg">
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
                                class="lucide lucide-map-pin h-6 w-6"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">India Destinations</h2>
                            <p class="text-slate-600">Discover the diverse beauty of incredible India</p>
                        </div>
                    </div>
                    <div
                        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border-orange-200 bg-orange-50 text-orange-600"
                        data-v0-t="badge"
                    >
                        120+ Destinations
                    </div>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/rajasthan" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Rajasthan"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/majestic-rajasthani-palace-f5GyVylxkRSig5YmLdU1mBlhkNO1uR.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Rajasthan</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Land of kings and magnificent forts</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/kerala" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Kerala"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/kerala-houseboat-serenity-2mZ7isMoTtL9KsCcGSovaDzRHspcz1.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Kerala</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">God's own country with serene backwaters</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/ladakh" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Ladakh"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ladakh-prayer-wheels-V0IM8v28GTrrJ0YGVfxGZ8OgkICLE3.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Ladakh</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">High-altitude desert with Buddhist monasteries</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/goa" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Goa"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/goan-twilight-E4zQsYl9Jub2mxXtSYJJMDXgMIIujD.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.5</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Goa</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Beach paradise with Portuguese influence</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/andaman" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Andaman"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/andaman-escape-RtggPMciE4JwN1yYRODcqWBEgdx4yT.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Andaman</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Pristine beaches and coral reefs</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/himalayas" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Himalayas"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/snow-capped-himalayas-yyjE0AxKTrfwmJDzk3gWuIoGHdm2tb.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Himalayas</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Majestic mountain ranges and valleys</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/varanasi" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Varanasi"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/varanasi-ganges-boats-x1F7wORcx2bzgixfmmrA3PAf4Ym8F3.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.6</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Varanasi</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Ancient city on the banks of the Ganges</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/delhi" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Delhi"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/majestic-red-fort-MUoh3yykAmA0uZGEtb9kxSpf8O7qkV.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.4</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Delhi</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Historic capital with diverse architecture</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-orange-50 text-orange-600 border-border-orange-200"
                                                data-v0-t="badge"
                                            >
                                                India Destinations
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="spiritual" class="mb-16 last:mb-0 scroll-mt-24 tab-list">
                <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
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
                                class="lucide lucide-heart h-6 w-6"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Spiritual Retreats</h2>
                            <p class="text-slate-600">Find peace and reconnect with yourself</p>
                        </div>
                    </div>
                    <div
                        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border-purple-200 bg-purple-50 text-purple-600"
                        data-v0-t="badge"
                    >
                        45+ Destinations
                    </div>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/rishikesh" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Rishikesh"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/rishikesh-himalayan-vista-fLAiD9JdAsuY7yksOTY6BfErbpO5It.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Rishikesh</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Yoga capital of the world</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-purple-50 text-purple-600 border-border-purple-200"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Retreats
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/varanasi" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Varanasi"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/varanasi-ganges-boats-x1F7wORcx2bzgixfmmrA3PAf4Ym8F3.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Varanasi</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">One of the world's oldest living cities</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-purple-50 text-purple-600 border-border-purple-200"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Retreats
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/dharamshala" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Dharamshala"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/serene-mountain-sanctuary-7ema4wVV6H1YxkAV0812MseoEJfnLp.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Dharamshala</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Home to the Dalai Lama and Tibetan community</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-purple-50 text-purple-600 border-border-purple-200"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Retreats
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/bodh-gaya" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Bodh Gaya"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/serene-asian-temple-BJ70WpO2uy7LmTNntj2snprPuyS68P.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Bodh Gaya</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Where Buddha attained enlightenment</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-purple-50 text-purple-600 border-border-purple-200"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Retreats
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/kyoto" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Kyoto"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/serene-asian-temple-BJ70WpO2uy7LmTNntj2snprPuyS68P.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Kyoto</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Japan</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Ancient temples and zen gardens</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-purple-50 text-purple-600 border-border-purple-200"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Retreats
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/bali" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Bali"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bali-green-steps-KWYPWWoLATkrpEGVfBr4sO5HuS4t4E.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.6</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Bali</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Indonesia</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Island of the gods with sacred temples</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-purple-50 text-purple-600 border-border-purple-200"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Retreats
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="adventure" class="mb-16 last:mb-0 scroll-mt-24 tab-list">
                <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
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
                                class="lucide lucide-compass h-6 w-6"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Adventure Travel</h2>
                            <p class="text-slate-600">Thrilling experiences for the daring traveler</p>
                        </div>
                    </div>
                    <div
                        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-border-emerald-200 bg-emerald-50 text-emerald-600"
                        data-v0-t="badge"
                    >
                        75+ Destinations
                    </div>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/himalayas" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Himalayas"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mountain-vista-hike-jjrGbhIbgsXG9voF8oOhdyTSPxI4XD.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Himalayas</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Nepal/India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">World's highest mountain range</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/andaman" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Andaman"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/andaman-escape-RtggPMciE4JwN1yYRODcqWBEgdx4yT.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Andaman</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Scuba diving and water adventures</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/spiti-valley" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Spiti Valley"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/winding-mountain-path-lfcHhJRoL2oy0zfrRHFtfq0tmz4qRJ.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Spiti Valley</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Cold desert mountain valley</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/rishikesh" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Rishikesh"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/rishikesh-himalayan-vista-fLAiD9JdAsuY7yksOTY6BfErbpO5It.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.7</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Rishikesh</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">India</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">White water rafting and trekking</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/queenstown" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Queenstown"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/winding-mountain-path-lfcHhJRoL2oy0zfrRHFtfq0tmz4qRJ.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Queenstown</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">New Zealand</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Adventure capital of the world</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/interlaken" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Interlaken"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/alpine-majesty-PK8vhoa6BnqMSPsPawr5RE48EewAe3.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.8</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Interlaken</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Switzerland</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Paragliding and alpine adventures</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                        <a href="/destinations/machu-picchu" class="block">
                            <div class="flex flex-col h-full">
                                <div class="relative h-44 overflow-hidden">
                                    <img
                                        alt="Machu Picchu"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/andean-citadel-jPNkTxq4oFeOFPWcTedH9mY6gQnjfw.png"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div class="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
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
                                            class="lucide lucide-trending-up h-3 w-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        Trending
                                    </div>
                                    <div class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
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
                                            class="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span class="text-xs font-medium text-white">4.9</span>
                                    </div>
                                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div>
                                            <h3 class="text-lg font-bold text-white leading-tight">Machu Picchu</h3>
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
                                                    class="lucide lucide-map-pin h-3 w-3 text-white/80"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <p class="text-xs text-white/90">Peru</p>
                                            </div>
                                        </div>
                                        <div class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
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
                                                class="lucide lucide-arrow-right h-4 w-4"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <p class="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">Ancient Incan citadel in the Andes</p>
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                                        <div class="flex items-center gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-0 h-5 bg-emerald-50 text-emerald-600 border-border-emerald-200"
                                                data-v0-t="badge"
                                            >
                                                Adventure Travel
                                            </div>
                                        </div>
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
                                            class="lucide lucide-chevron-right h-4 w-4 text-slate-400"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative overflow-hidden bg-slate-900 py-16 md:py-24">
        <div class="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] opacity-10"></div>
        <div class="container relative mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <div
                    class="border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 inline-flex items-center rounded-full border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm"
                    data-v0-t="badge"
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
                        class="lucide lucide-globe mr-1 h-3.5 w-3.5"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                    </svg>
                    Stay Updated
                </div>
                <h2 class="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get Personalized Travel Recommendations</h2>
                <p class="mb-8 text-lg text-white/80">Subscribe to our newsletter and receive curated destination ideas based on your interests</p>
                <div class="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
                    <input
                        class="flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-12 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus-visible:border-white/30 focus-visible:ring-0"
                        placeholder="Enter your email"
                    />
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-12 px-6"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to Start Your Journey?</h2>
                <p class="mb-8 text-lg text-slate-600">Connect with travel experts or join our community to make your travel dreams a reality</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a
                        href="/experts"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-8"
                    >
                        Find Travel Experts
                    </a>
                    <a
                        href="/community"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-8"
                    >
                        Join Our Community
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>



      <Footer />
    </>
  );
};

export default Destinations;
