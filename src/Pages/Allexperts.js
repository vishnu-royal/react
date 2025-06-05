import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Allexperts = () => {
  return (
    <>
      <Header />


<main class="min-h-screen bg-white">
    <section class="relative overflow-hidden bg-gradient-to-r from-slate-900 to-primary/90">
        <div class="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] bg-cover opacity-20"></div>
        <div class="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
        <div class="container mx-auto px-4 py-8 md:py-16 lg:py-24 relative z-10">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <a href="/experts" class="mb-6 inline-flex items-center text-white/80 hover:text-white transition-colors text-sm bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
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
                            class="lucide lucide-arrow-left mr-1.5 h-3.5 w-3.5"
                        >
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        <span>Back to Experts Home</span>
                    </a>
                    <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                        Connect with <span class="inline-block bg-white text-primary px-2 py-1 rounded-md">Local Experts</span><span class="block mt-2">for Authentic Experiences</span>
                    </h1>
                    <p class="text-white/90 text-base md:text-lg mb-4 md:mb-8 max-w-xl">Discover personalized travel experiences curated by our community of verified local experts who know their destinations inside out.</p>
                    <div class="relative w-full max-w-2xl mx-auto mt-4 sm:mt-6">
                        <div
                            class="flex items-center overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-primary/30 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20"
                        >
                            <div class="flex-1 relative">
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
                                    class="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                                <input
                                    placeholder="Search for travel experts by name, location or specialty..."
                                    class="w-full bg-transparent py-3 pl-10 pr-4 text-sm sm:text-base text-white placeholder:text-white/60 focus:outline-none"
                                    type="text"
                                    value=""
                                />
                            </div>
                            <button class="h-full px-4 sm:px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-medium transition-colors duration-300 flex items-center gap-2">
                                Search
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
                            </button>
                        </div>
                        <div class="mt-2 sm:mt-3 flex flex-wrap items-center gap-1 sm:gap-2 justify-center text-xs sm:text-sm">
                            <span class="text-white/70">Popular:</span><button class="px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors duration-300">Delhi</button>
                            <button class="px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors duration-300">Mumbai</button>
                            <button class="px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors duration-300">Rajasthan</button>
                            <button class="px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors duration-300">Kerala</button>
                            <button class="px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors duration-300">Himalayas</button>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block relative">
                    <div class="relative z-10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
                        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                        <h3 class="text-white text-xl font-medium mb-4">Featured Travel Experts</h3>
                        <div class="relative mb-6 rounded-xl overflow-hidden bg-white/10">
                            <div class="flex items-start p-4">
                                <div class="relative mr-4">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 border-2 border-white">
                                        <img
                                            class="aspect-square h-full w-full"
                                            alt="Arjun Negi"
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-1-Qd5JOMBYLc4AZ6oNEzdBL9WGqL2r4L.jpg"
                                        />
                                    </span>
                                    <div class="absolute -bottom-1 -right-1 bg-amber-500 text-white text-xs font-medium rounded-full px-1.5 py-0.5 border border-white">4.9</div>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center mb-1">
                                        <h4 class="text-white font-medium">Arjun Negi</h4>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ml-2 bg-amber-500/80 text-white text-xs"
                                            data-v0-t="badge"
                                        >
                                            Featured
                                        </div>
                                    </div>
                                    <div class="flex items-center text-white/80 text-xs mb-2">
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
                                            class="lucide lucide-map-pin h-3 w-3 mr-1"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Rishikesh</span>
                                    </div>
                                    <div class="flex flex-wrap gap-1 mb-2">
                                        <span class="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">Adventure</span><span class="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">Yoga</span>
                                        <span class="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">Spiritual</span>
                                    </div>
                                    <p class="text-white/80 text-xs line-clamp-2">Adventure guide and yoga instructor with deep knowledge of Rishikesh's spiritual and adventure offerings.</p>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-white/10 rounded-lg p-3 flex items-center">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3 border border-white/50">
                                    <img class="aspect-square h-full w-full" alt="Sarah Patel" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg" />
                                </span>
                                <div>
                                    <h5 class="text-white text-sm font-medium">Sarah Patel</h5>
                                    <div class="flex items-center text-white/70 text-xs">
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
                                            class="lucide lucide-map-pin h-2.5 w-2.5 mr-0.5"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Delhi</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white/10 rounded-lg p-3 flex items-center">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3 border border-white/50"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">P</span></span>
                                <div>
                                    <h5 class="text-white text-sm font-medium">Priya Nair</h5>
                                    <div class="flex items-center text-white/70 text-xs">
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
                                            class="lucide lucide-map-pin h-2.5 w-2.5 mr-0.5"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Kochi</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white/10 rounded-lg p-3 flex items-center">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3 border border-white/50"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">A</span></span>
                                <div>
                                    <h5 class="text-white text-sm font-medium">Ananya Das</h5>
                                    <div class="flex items-center text-white/70 text-xs">
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
                                            class="lucide lucide-map-pin h-2.5 w-2.5 mr-0.5"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Varanasi</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white/10 rounded-lg p-3 flex items-center">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 mr-3 border border-white/50">
                                    <img class="aspect-square h-full w-full" alt="Aisha Khan" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-4-FVf48Lvgw3x1fFeTAN4jjXTeQ6Olf0.jpg" />
                                </span>
                                <div>
                                    <h5 class="text-white text-sm font-medium">Aisha Khan</h5>
                                    <div class="flex items-center text-white/70 text-xs">
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
                                            class="lucide lucide-map-pin h-2.5 w-2.5 mr-0.5"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Lucknow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-8 md:py-12 lg:py-16">
        <div class="container mx-auto px-4">
            <div class="mb-8">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-700 mb-1">Our Travel Experts</h2>
                        <p class="text-slate-500">12 experts available to help plan your journey</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3">
                        <div class="flex items-center border border-slate-200 rounded-md overflow-hidden">
                            <button id="btn-grid" class="p-1.5 bg-primary/10 text-primary" aria-label="Grid view">
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
                                    class="lucide lucide-grid3x3 h-4 w-4"
                                >
                                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                    <path d="M3 9h18"></path>
                                    <path d="M3 15h18"></path>
                                    <path d="M9 3v18"></path>
                                    <path d="M15 3v18"></path>
                                </svg>
                            </button>
                            <button id="btn-list" class="p-1.5 bg-white text-slate-500" aria-label="List view">
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
                                    class="lucide lucide-list h-4 w-4"
                                >
                                    <line x1="8" x2="21" y1="6" y2="6"></line>
                                    <line x1="8" x2="21" y1="12" y2="12"></line>
                                    <line x1="8" x2="21" y1="18" y2="18"></line>
                                    <line x1="3" x2="3.01" y1="6" y2="6"></line>
                                    <line x1="3" x2="3.01" y1="12" y2="12"></line>
                                    <line x1="3" x2="3.01" y1="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r18»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            class="flex items-center justify-between rounded-md border bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-[180px] h-9 text-xs border-slate-200 text-slate-600"
                        >
                            <span>Highest Rating</span>
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
                                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <button id="toggle-filters"
                            class="justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent rounded-md px-3 flex items-center gap-2 text-xs h-9 border-slate-200 text-slate-600 hover:text-primary hover:border-primary/30"
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
                                class="lucide lucide-sliders-horizontal h-3.5 w-3.5"
                            >
                                <line x1="21" x2="14" y1="4" y2="4"></line>
                                <line x1="10" x2="3" y1="4" y2="4"></line>
                                <line x1="21" x2="12" y1="12" y2="12"></line>
                                <line x1="8" x2="3" y1="12" y2="12"></line>
                                <line x1="21" x2="16" y1="20" y2="20"></line>
                                <line x1="12" x2="3" y1="20" y2="20"></line>
                                <line x1="14" x2="14" y1="2" y2="6"></line>
                                <line x1="8" x2="8" y1="10" y2="14"></line>
                                <line x1="16" x2="16" y1="18" y2="22"></line>
                            </svg>
                            <span>Filters</span>
                        </button>
                    </div>
                </div>
                <div class="grid place-items-center all-experts-section">
                    <div id="filter-experts-block" class="hidden filter-experts-block mb-6 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white shadow-sm overflow-hidden transition-all duration-300 w-full">
                        <div class="p-4 sm:p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-slate-500 font-medium flex items-center gap-2">
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
                                        class="lucide lucide-filter h-4 w-4 text-primary"
                                    >
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                    Filter Experts
                                </h3>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                <div class="space-y-2">
                                    <label class="text-xs font-medium text-slate-500 flex items-center gap-1.5">
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
                                            class="lucide lucide-map-pin h-3 w-3 text-primary"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        Location
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-«r28»"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        class="flex items-center justify-between rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full h-10 text-sm border-slate-200 bg-white text-slate-600"
                                    >
                                        <span>All Locations</span>
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
                                            class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                                        <svg class="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                                            ></path>
                                        </svg>
                                        Specialty
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-«r29»"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        class="flex items-center justify-between rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full h-10 text-sm border-slate-200 bg-white text-slate-600"
                                    >
                                        <span>All Specialties</span>
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
                                            class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs font-medium text-slate-500 flex items-center gap-1.5">
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
                                        Language
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-«r2a»"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        class="flex items-center justify-between rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full h-10 text-sm border-slate-200 bg-white text-slate-600"
                                    >
                                        <span>All Languages</span>
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
                                            class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="w-full max-w-md mx-auto space-y-2">
                                    {/* <!-- Label --> */}
                                    <div class="flex items-center justify-between">
                                        <label class="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-star h-3 w-3 text-primary">
                                            <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        Minimum Rating
                                        </label>
                                        <span id="rating-value" class="text-xs font-medium text-primary/80">3.9+</span>
                                    </div>

                                    {/* <!-- Custom Styled Range Slider --> */}
                                    <div class="relative w-full h-2 bg-secondary rounded-full">
                                        <div id="range-fill" class="absolute h-full bg-primary rounded-full" style={{width: '45%'}}></div>
                                        <input id="rating-range" type="range" min="3" max="5" step="0.1" value="3.9"
                                        class="absolute left-0 w-full h-2 appearance-none bg-transparent pointer-events-none"
                                        />
                                    </div>

                                    {/* <!-- Range Labels --> */}
                                    <div class="flex justify-between text-xs text-slate-500 mt-1">
                                        <span>3.0</span><span>4.0</span><span>5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="view-wrapper" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">
                        <div class="group reveal-on-scroll revealed">
                            <div class="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-slate-100">
                                <div class="relative h-52 w-full overflow-hidden">
                                    <img
                                        alt="Sarah Patel's location"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/london-premium-8jeoTGo78lLM8UyAaEM58O7L1pk3IK.jpg"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div class="absolute top-3 left-3">
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-500 hover:bg-amber-600 text-white font-medium px-2 py-0.5 text-xs"
                                            data-v0-t="badge"
                                        >
                                            Featured Expert
                                        </div>
                                    </div>
                                    <button class="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
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
                                    </button>
                                    <div class="absolute bottom-0 left-0 right-0 p-4">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-white">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Sarah Patel"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                                />
                                            </span>
                                            <div>
                                                <h3 class="text-white font-medium group-hover:text-primary/90 transition-colors flex items-center">
                                                    Sarah Patel
                                                    <span class="ml-1 inline-flex items-center text-primary">
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
                                                            class="lucide lucide-circle-check-big h-3 w-3 fill-primary text-white"
                                                        >
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                    </span>
                                                </h3>
                                                <div class="flex items-center text-white/80 text-sm">
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
                                                        class="lucide lucide-map-pin h-3 w-3 mr-1"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Delhi
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
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
                                                class="lucide lucide-star h-3 w-3 fill-amber-400 text-amber-400 mr-1"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="text-white text-sm font-medium">4.9</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="body-txt">
                                        <div class="mb-3 flex flex-wrap gap-1.5">
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                            data-v0-t="badge"
                                        >
                                            Historical
                                        </div>
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                            data-v0-t="badge"
                                        >
                                            Cultural
                                        </div>
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                            data-v0-t="badge"
                                        >
                                            Photography
                                        </div>
                                        </div>
                                        <p class="mb-4 text-sm text-slate-600 line-clamp-2">History enthusiast and Delhi native with 8+ years guiding experience. Specialized in historical monuments and cultural experiences.</p>
                                        <div class="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-500">
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
                                                    class="lucide lucide-globe h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                                <span>English, Hindi</span>
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
                                                    class="lucide lucide-clock h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Responds within 2 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-block">
                                        <a href="/experts/profile/sarah-patel">
                                        <button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90 text-xs h-9"
                                        >
                                            View Profile
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
                                                class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5"
                                            >
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group reveal-on-scroll revealed">
                            <div class="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-slate-100">
                                <div class="relative h-52 w-full overflow-hidden">
                                    <img
                                        alt="Priya Nair's location"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                    
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sydney-premium-prJY3YIRtvcGBUfn40iraQmlgA9y6O.jpg"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div class="absolute top-3 left-3">
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-500 hover:bg-amber-600 text-white font-medium px-2 py-0.5 text-xs"
                                            data-v0-t="badge"
                                        >
                                            Featured Expert
                                        </div>
                                    </div>
                                    <button class="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
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
                                    </button>
                                    <div class="absolute bottom-0 left-0 right-0 p-4">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">P</span></span>
                                            <div>
                                                <h3 class="text-white font-medium group-hover:text-primary/90 transition-colors flex items-center">
                                                    Priya Nair
                                                    <span class="ml-1 inline-flex items-center text-primary">
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
                                                            class="lucide lucide-circle-check-big h-3 w-3 fill-primary text-white"
                                                        >
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                    </span>
                                                </h3>
                                                <div class="flex items-center text-white/80 text-sm">
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
                                                        class="lucide lucide-map-pin h-3 w-3 mr-1"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Kochi
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
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
                                                class="lucide lucide-star h-3 w-3 fill-amber-400 text-amber-400 mr-1"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="text-white text-sm font-medium">4.9</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="body-txt">
                                        <div class="mb-3 flex flex-wrap gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Backwaters
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Cultural
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Culinary
                                            </div>
                                        </div>
                                        <p class="mb-4 text-sm text-slate-600 line-clamp-2">Born and raised in Kerala, I specialize in authentic backwater experiences and traditional Kerala cuisine.</p>
                                        <div class="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-500">
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
                                                    class="lucide lucide-globe h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                                <span>English, Malayalam</span>
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
                                                    class="lucide lucide-clock h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Responds within 3 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-block">
                                        <a href="/experts/profile/priya-nair">
                                        <button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90 text-xs h-9"
                                        >
                                            View Profile
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
                                                class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5"
                                            >
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group reveal-on-scroll revealed">
                            <div class="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-slate-100">
                                <div class="relative h-52 w-full overflow-hidden">
                                    <img
                                        alt="Ananya Das's location"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-premium-QP12TkkIL0YeIX4LSGHtSn8zXYPV9p.jpg"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div class="absolute top-3 left-3">
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-500 hover:bg-amber-600 text-white font-medium px-2 py-0.5 text-xs"
                                            data-v0-t="badge"
                                        >
                                            Featured Expert
                                        </div>
                                    </div>
                                    <button class="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
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
                                    </button>
                                    <div class="absolute bottom-0 left-0 right-0 p-4">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">A</span></span>
                                            <div>
                                                <h3 class="text-white font-medium group-hover:text-primary/90 transition-colors flex items-center">
                                                    Ananya Das
                                                    <span class="ml-1 inline-flex items-center text-primary">
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
                                                            class="lucide lucide-circle-check-big h-3 w-3 fill-primary text-white"
                                                        >
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                    </span>
                                                </h3>
                                                <div class="flex items-center text-white/80 text-sm">
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
                                                        class="lucide lucide-map-pin h-3 w-3 mr-1"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Varanasi
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
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
                                                class="lucide lucide-star h-3 w-3 fill-amber-400 text-amber-400 mr-1"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="text-white text-sm font-medium">4.9</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="body-txt">
                                        <div class="mb-3 flex flex-wrap gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Spiritual
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Cultural
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                River Tours
                                            </div>
                                        </div>
                                        <p class="mb-4 text-sm text-slate-600 line-clamp-2">Spiritual guide and Varanasi native offering authentic experiences of the sacred city and its rituals.</p>
                                        <div class="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-500">
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
                                                    class="lucide lucide-globe h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                                <span>English, Hindi</span>
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
                                                    class="lucide lucide-clock h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Responds within 4 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-block">
                                        <a href="/experts/profile/ananya-das">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90 text-xs h-9"
                                            >
                                                View Profile
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
                                                    class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5"
                                                >
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group reveal-on-scroll revealed">
                            <div class="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-slate-100">
                                <div class="relative h-52 w-full overflow-hidden">
                                    <img
                                        alt="Arjun Negi's location"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://v0.blob.com/Yd9Ij.jpg"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div class="absolute top-3 left-3">
                                        <div
                                            class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-500 hover:bg-amber-600 text-white font-medium px-2 py-0.5 text-xs"
                                            data-v0-t="badge"
                                        >
                                            Featured Expert
                                        </div>
                                    </div>
                                    <button class="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
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
                                    </button>
                                    <div class="absolute bottom-0 left-0 right-0 p-4">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-white">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Arjun Negi"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-1-Qd5JOMBYLc4AZ6oNEzdBL9WGqL2r4L.jpg"
                                                />
                                            </span>
                                            <div>
                                                <h3 class="text-white font-medium group-hover:text-primary/90 transition-colors flex items-center">
                                                    Arjun Negi
                                                    <span class="ml-1 inline-flex items-center text-primary">
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
                                                            class="lucide lucide-circle-check-big h-3 w-3 fill-primary text-white"
                                                        >
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                    </span>
                                                </h3>
                                                <div class="flex items-center text-white/80 text-sm">
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
                                                        class="lucide lucide-map-pin h-3 w-3 mr-1"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Rishikesh
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
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
                                                class="lucide lucide-star h-3 w-3 fill-amber-400 text-amber-400 mr-1"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="text-white text-sm font-medium">4.9</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="body-txt">
                                        <div class="mb-3 flex flex-wrap gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Adventure
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Yoga
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Spiritual
                                            </div>
                                        </div>
                                        <p class="mb-4 text-sm text-slate-600 line-clamp-2">Adventure guide and yoga instructor with deep knowledge of Rishikesh's spiritual and adventure offerings.</p>
                                        <div class="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-500">
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
                                                    class="lucide lucide-globe h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                                <span>English, Hindi</span>
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
                                                    class="lucide lucide-clock h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Responds within 3 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-block">
                                        <a href="/experts/profile/arjun-negi">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90 text-xs h-9"
                                            >
                                                View Profile
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
                                                    class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5"
                                                >
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="group reveal-on-scroll revealed lg:col-start-2">
                            <div class="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-slate-100">
                                <div class="relative h-52 w-full overflow-hidden">
                                    <img
                                        alt="Raj Sharma's location"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/new-york-premium-HQS1Nz3fo9al4YHlydjjn7jB22qfsY.jpg"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <button class="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
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
                                    </button>
                                    <div class="absolute bottom-0 left-0 right-0 p-4">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">R</span></span>
                                            <div>
                                                <h3 class="text-white font-medium group-hover:text-primary/90 transition-colors flex items-center">
                                                    Raj Sharma
                                                    <span class="ml-1 inline-flex items-center text-primary">
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
                                                            class="lucide lucide-circle-check-big h-3 w-3 fill-primary text-white"
                                                        >
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                    </span>
                                                </h3>
                                                <div class="flex items-center text-white/80 text-sm">
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
                                                        class="lucide lucide-map-pin h-3 w-3 mr-1"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Mumbai
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
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
                                                class="lucide lucide-star h-3 w-3 fill-amber-400 text-amber-400 mr-1"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="text-white text-sm font-medium">4.8</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="body-txt">
                                        <div class="mb-3 flex flex-wrap gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                City
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Food
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Nightlife
                                            </div>
                                        </div>
                                        <p class="mb-4 text-sm text-slate-600 line-clamp-2">Mumbai-born food enthusiast and city explorer. I'll show you the hidden gems of Mumbai's vibrant food scene and nightlife.</p>
                                        <div class="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-500">
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
                                                    class="lucide lucide-globe h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                                <span>English, Hindi</span>
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
                                                    class="lucide lucide-clock h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Responds within 1 hour</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-block">
                                        <a href="/experts/profile/raj-sharma">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90 text-xs h-9"
                                            >
                                                View Profile
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
                                                    class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5"
                                                >
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group reveal-on-scroll revealed">
                            <div class="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-slate-100">
                                <div class="relative h-52 w-full overflow-hidden">
                                    <img
                                        alt="Rohan Mehta's location"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        class="object-cover transition-transform duration-700 group-hover:scale-110"
                                        
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/barcelona-premium-jIqylTxnl7GAfqWMHqRHt7FbLQYMgj.jpg"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <button class="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
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
                                    </button>
                                    <div class="absolute bottom-0 left-0 right-0 p-4">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-white"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">R</span></span>
                                            <div>
                                                <h3 class="text-white font-medium group-hover:text-primary/90 transition-colors flex items-center">
                                                    Rohan Mehta
                                                    <span class="ml-1 inline-flex items-center text-primary">
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
                                                            class="lucide lucide-circle-check-big h-3 w-3 fill-primary text-white"
                                                        >
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <path d="m9 11 3 3L22 4"></path>
                                                        </svg>
                                                    </span>
                                                </h3>
                                                <div class="flex items-center text-white/80 text-sm">
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
                                                        class="lucide lucide-map-pin h-3 w-3 mr-1"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    Goa
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
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
                                                class="lucide lucide-star h-3 w-3 fill-amber-400 text-amber-400 mr-1"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="text-white text-sm font-medium">4.8</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="body-txt">
                                        <div class="mb-3 flex flex-wrap gap-1.5">
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Beaches
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Adventure
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-slate-50 text-xs font-normal text-slate-600 hover:bg-slate-100 px-2 py-0"
                                                data-v0-t="badge"
                                            >
                                                Nightlife
                                            </div>
                                        </div>
                                        <p class="mb-4 text-sm text-slate-600 line-clamp-2">Goa local with insider knowledge of the best beaches, water sports, and vibrant nightlife scene.</p>
                                        <div class="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-500">
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
                                                    class="lucide lucide-globe h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                    <path d="M2 12h20"></path>
                                                </svg>
                                                <span>English, Hindi</span>
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
                                                    class="lucide lucide-clock h-3 w-3 text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Responds within 2 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-block">
                                        <a href="/experts/profile/rohan-mehta">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full bg-primary text-white hover:bg-primary/90 text-xs h-9"
                                            >
                                                View Profile
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
                                                    class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5"
                                                >
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                          
                    </div>
                </div>
                <div class="mt-12 flex items-center justify-center">
                    <div class="flex items-center space-x-2">
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-9 w-9 p-0 border-slate-200"
                            disabled=""
                            aria-label="Previous page"
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
                                class="lucide lucide-arrow-left h-4 w-4"
                            >
                                <path d="m12 19-7-7 7-7"></path>
                                <path d="M19 12H5"></path>
                            </svg>
                        </button>
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 rounded-md h-9 w-9 p-0 bg-primary text-white"
                        >
                            1
                        </button>
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-9 w-9 p-0 border-slate-200"
                        >
                            2
                        </button>
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-9 w-9 p-0 border-slate-200"
                            aria-label="Next page"
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
                                class="lucide lucide-arrow-right h-4 w-4"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-[url('/diagonal-pattern.png')] bg-cover py-16 md:py-20 relative community-section">
        <div class="absolute inset-0 bg-primary/90"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <span class="inline-block px-4 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4 backdrop-blur-sm">Join Our Community</span>
                <h2 class="text-2xl md:text-4xl font-bold text-white mb-4">Become a Travel Expert</h2>
                <p class="mb-8 text-white/90 md:text-lg">Share your local knowledge and passion for travel by joining our community of experts. Help travelers discover the authentic side of your city or region.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-white text-primary hover:bg-white/90 font-medium px-6 py-6"
                    >
                        Apply to Become an Expert
                    </button>
                    <button
                        class="program-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 border-white text-white hover:bg-white/10 px-6 py-6"
                    >
                        Learn More About the Program
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>


      <Footer />
    </>
  );
};

export default Allexperts;
