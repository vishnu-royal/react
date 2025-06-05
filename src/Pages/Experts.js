import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Index = () => {
  return (
    <>
      <Header />


            <main class="min-h-screen">
                <section class="relative bg-slate-900 py-6 md:py-12 overflow-hidden">
                    <div class="absolute inset-0 w-full h-full">
                        <video autoplay="" loop="" playsinline="" class="w-full h-full object-cover opacity-30"><source type="video/mp4" src="https://v0.blob.com/Wk5XZ.mp4" /></video>
                        <div class="absolute inset-0 bg-slate-900/70"></div>
                    </div>
                    <div class="container mx-auto px-4 relative z-10">
                        <div class="max-w-3xl mx-auto text-center mb-6">
                            <h1 class="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4" >Connect with Local Travel Experts</h1>
                            <p class="text-white/80 text-sm md:text-base mb-4 md:mb-6" >
                                Get personalized travel advice from verified local experts who know their destinations inside out
                            </p>
                            <div class="relative max-w-xl mx-auto mb-6" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                                <input
                                    class="flex h-10 w-full border px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-12 pr-4 py-6 rounded-full text-base border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:ring-primary focus:border-primary"
                                    placeholder="Where do you want to go?"
                                    type="text"
                                    value=""
                                />
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary text-white hover:bg-primary/90 h-10"
                                >
                                    Find Experts
                                </button>
                            </div>
                            <div class="mb-6" >
                                <div class="text-sm text-white/60 mb-3">Popular destinations:</div>
                                <div class="flex flex-wrap justify-center gap-2">
                                    <a href="/experts/delhi">
                                        <button
                                            class="expoert-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 rounded-full border-white/20 text-white hover:bg-white/20 text-sm h-9"
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
                                                class="lucide lucide-map-pin h-3.5 w-3.5 mr-1.5"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Delhi
                                        </button>
                                    </a>
                                    <a href="/experts/mumbai">
                                        <button
                                            class="expoert-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 rounded-full border-white/20 text-white hover:bg-white/20 text-sm h-9"
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
                                                class="lucide lucide-map-pin h-3.5 w-3.5 mr-1.5"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Mumbai
                                        </button>
                                    </a>
                                    <a href="/experts/bangalore">
                                        <button
                                            class="expoert-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 rounded-full border-white/20 text-white hover:bg-white/20 text-sm h-9"
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
                                                class="lucide lucide-map-pin h-3.5 w-3.5 mr-1.5"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Bangalore
                                        </button>
                                    </a>
                                    <a href="/experts/jaipur">
                                        <button
                                            class="expoert-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 rounded-full border-white/20 text-white hover:bg-white/20 text-sm h-9"
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
                                                class="lucide lucide-map-pin h-3.5 w-3.5 mr-1.5"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Jaipur
                                        </button>
                                    </a>
                                    <a href="/experts/goa">
                                        <button
                                            class="expoert-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 rounded-full border-white/20 text-white hover:bg-white/20 text-sm h-9"
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
                                                class="lucide lucide-map-pin h-3.5 w-3.5 mr-1.5"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Goa
                                        </button>
                                    </a>
                                    <a href="/experts/kerala">
                                        <button
                                            class="expoert-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground px-4 py-2 rounded-full border-white/20 text-white hover:bg-white/20 text-sm h-9"
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
                                                class="lucide lucide-map-pin h-3.5 w-3.5 mr-1.5"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            Kerala
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center items-center gap-4 md:gap-16 mb-6 md:mb-8 text-center" >
                            <div>
                                <div class="text-xl md:text-3xl font-bold text-white">200+</div>
                                <div class="text-white/60 text-xs md:text-sm">Verified Experts</div>
                            </div>
                            <div class="h-8 md:h-12 w-px bg-white/20"></div>
                            <div>
                                <div class="text-xl md:text-3xl font-bold text-white">50+</div>
                                <div class="text-white/60 text-xs md:text-sm">Destinations</div>
                            </div>
                            <div class="h-8 md:h-12 w-px bg-white/20"></div>
                            <div>
                                <div class="text-xl md:text-3xl font-bold text-white">10k+</div>
                                <div class="text-white/60 text-xs md:text-sm">Happy Travelers</div>
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6" >
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-bold text-white">Featured Experts</h3>
                                <a href="/experts" class="text-primary text-sm font-medium flex items-center">
                                    View all experts
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chevron-right h-4 w-4 ml-1"
                                    >
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="md:hidden relative">
                                <div class="overflow-x-auto scrollbar-hide pb-4">
                                    <div class="flex space-x-6">
                                        <a href="/experts/delhi" class="block">
                                            <div class="flex flex-col items-center w-20">
                                                <div class="relative mb-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Rahul Sharma"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-1-Qd5JOMBYLc4AZ6oNEzdBL9WGqL2r4L.jpg"
                                                        />
                                                    </span>
                                                </div>
                                                <div class="text-center">
                                                    <h4 class="text-white text-sm font-medium truncate w-20 hover:text-primary transition-colors">Rahul Sharma</h4>
                                                    <p class="text-white/60 text-xs truncate w-20">Historical Tours</p>
                                                    <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                        >
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        Delhi
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/experts/delhi" class="block">
                                            <div class="flex flex-col items-center w-20">
                                                <div class="relative mb-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Priya Malhotra"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-2-VCbwS3dhFwX7lXBulVgC1MsEDZ1ZvO.jpg"
                                                        />
                                                    </span>
                                                </div>
                                                <div class="text-center">
                                                    <h4 class="text-white text-sm font-medium truncate w-20 hover:text-primary transition-colors">Priya Malhotra</h4>
                                                    <p class="text-white/60 text-xs truncate w-20">Food Tours</p>
                                                    <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                        >
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        Delhi
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/experts/mumbai" class="block">
                                            <div class="flex flex-col items-center w-20">
                                                <div class="relative mb-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Vikram Singh"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-3-zBcUxckhZXxm4jHFWu4RXyHuDeZ0Ky.jpg"
                                                        />
                                                    </span>
                                                </div>
                                                <div class="text-center">
                                                    <h4 class="text-white text-sm font-medium truncate w-20 hover:text-primary transition-colors">Vikram Singh</h4>
                                                    <p class="text-white/60 text-xs truncate w-20">Photography Tours</p>
                                                    <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                        >
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        Mumbai
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/experts/bangalore" class="block">
                                            <div class="flex flex-col items-center w-20">
                                                <div class="relative mb-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Anjali Gupta"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-4-FVf48Lvgw3x1fFeTAN4jjXTeQ6Olf0.jpg"
                                                        />
                                                    </span>
                                                </div>
                                                <div class="text-center">
                                                    <h4 class="text-white text-sm font-medium truncate w-20 hover:text-primary transition-colors">Anjali Gupta</h4>
                                                    <p class="text-white/60 text-xs truncate w-20">Shopping Tours</p>
                                                    <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                        >
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        Bangalore
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/experts/goa" class="block">
                                            <div class="flex flex-col items-center w-20">
                                                <div class="relative mb-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Arjun Kapoor"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-5-DWsuhOdtSE0UAAlFaU7g7lENAiCsIQ.jpg"
                                                        />
                                                    </span>
                                                </div>
                                                <div class="text-center">
                                                    <h4 class="text-white text-sm font-medium truncate w-20 hover:text-primary transition-colors">Arjun Kapoor</h4>
                                                    <p class="text-white/60 text-xs truncate w-20">Adventure Tours</p>
                                                    <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                        >
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        Goa
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/experts/kerala" class="block">
                                            <div class="flex flex-col items-center w-20">
                                                <div class="relative mb-2">
                                                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                        <img
                                                            class="aspect-square h-full w-full"
                                                            alt="Meera Reddy"
                                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                                        />
                                                    </span>
                                                </div>
                                                <div class="text-center">
                                                    <h4 class="text-white text-sm font-medium truncate w-20 hover:text-primary transition-colors">Meera Reddy</h4>
                                                    <p class="text-white/60 text-xs truncate w-20">Cultural Experiences</p>
                                                    <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                        >
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        Kerala
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:grid grid-cols-6 gap-6">
                                <a href="/experts/delhi" class="block">
                                    <div class="flex flex-col items-center">
                                        <div class="relative mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Rahul Sharma"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-1-Qd5JOMBYLc4AZ6oNEzdBL9WGqL2r4L.jpg"
                                                />
                                            </span>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="text-white text-sm font-medium truncate max-w-[140px] hover:text-primary transition-colors">Rahul Sharma</h4>
                                            <p class="text-white/60 text-xs truncate max-w-[140px]">Historical Tours</p>
                                            <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                Delhi
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/experts/delhi" class="block">
                                    <div class="flex flex-col items-center">
                                        <div class="relative mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Priya Malhotra"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-2-VCbwS3dhFwX7lXBulVgC1MsEDZ1ZvO.jpg"
                                                />
                                            </span>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="text-white text-sm font-medium truncate max-w-[140px] hover:text-primary transition-colors">Priya Malhotra</h4>
                                            <p class="text-white/60 text-xs truncate max-w-[140px]">Food Tours</p>
                                            <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                Delhi
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/experts/mumbai" class="block">
                                    <div class="flex flex-col items-center">
                                        <div class="relative mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Vikram Singh"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-3-zBcUxckhZXxm4jHFWu4RXyHuDeZ0Ky.jpg"
                                                />
                                            </span>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="text-white text-sm font-medium truncate max-w-[140px] hover:text-primary transition-colors">Vikram Singh</h4>
                                            <p class="text-white/60 text-xs truncate max-w-[140px]">Photography Tours</p>
                                            <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                Mumbai
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/experts/bangalore" class="block">
                                    <div class="flex flex-col items-center">
                                        <div class="relative mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Anjali Gupta"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-4-FVf48Lvgw3x1fFeTAN4jjXTeQ6Olf0.jpg"
                                                />
                                            </span>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="text-white text-sm font-medium truncate max-w-[140px] hover:text-primary transition-colors">Anjali Gupta</h4>
                                            <p class="text-white/60 text-xs truncate max-w-[140px]">Shopping Tours</p>
                                            <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                Bangalore
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/experts/goa" class="block">
                                    <div class="flex flex-col items-center">
                                        <div class="relative mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                <img
                                                    class="aspect-square h-full w-full"
                                                    alt="Arjun Kapoor"
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-5-DWsuhOdtSE0UAAlFaU7g7lENAiCsIQ.jpg"
                                                />
                                            </span>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="text-white text-sm font-medium truncate max-w-[140px] hover:text-primary transition-colors">Arjun Kapoor</h4>
                                            <p class="text-white/60 text-xs truncate max-w-[140px]">Adventure Tours</p>
                                            <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                Goa
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/experts/kerala" class="block">
                                    <div class="flex flex-col items-center">
                                        <div class="relative mb-2">
                                            <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-2 border-white/20 shadow-lg hover:ring-4 hover:ring-primary/20 transition-all duration-300">
                                                <img class="aspect-square h-full w-full" alt="Meera Reddy" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg" />
                                            </span>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="text-white text-sm font-medium truncate max-w-[140px] hover:text-primary transition-colors">Meera Reddy</h4>
                                            <p class="text-white/60 text-xs truncate max-w-[140px]">Cultural Experiences</p>
                                            <div class="flex items-center justify-center mt-1 text-xs text-white/80">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-map-pin h-3 w-3 mr-0.5 text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                Kerala
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="relative w-full bg-white py-10 md:py-24 expert-journey-section">
                    <div class="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="container mx-auto px-4 md:px-6">
                        <div class="mb-10 md:mb-12 reveal-on-scroll revealed">
                            <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                                <div>
                                    <div class="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                                        <span class="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Browse Experts
                                    </div>
                                    <h2 class="mb-2 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-4xl">Find the <span class="text-gradient">Perfect Expert</span> for Your Journey</h2>
                                    <p class="max-w-[700px] text-sm text-slate-600 md:text-base">Discover travel experts by city or specialty to get personalized guidance for your next adventure.</p>
                                </div>
                                <div class="relative w-full max-w-xs md:w-auto">
                                    <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-search h-4 w-4 text-slate-400"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </svg>
                                    </div>
                                    <input placeholder="Search experts..." class="w-full rounded-full border-slate-200 pl-10 pr-4 py-2 text-sm focus:border-primary focus:ring-primary" type="text" />
                                </div>
                            </div>
                        </div>
                        <div dir="ltr" data-orientation="horizontal" class="w-full reveal-on-scroll revealed">
                            <div
                                class="clickme h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 max-w-md mx-auto mb-8"
                            >
                                <a href="javascript:void(0)" data-tag="city"
                                    class="activelink inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                                    
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
                                        class="lucide lucide-map-pin mr-2 h-4 w-4"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    Browse by City
                                </a>
                                <a href="javascript:void(0)" data-tag="specialty"
                                    class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                                    tabindex="-1"
                                    data-orientation="horizontal"
                                    data-radix-collection-item=""
                                >
                                    <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                    Browse by Specialty
                                </a>
                            </div>
                            <div class="custom-tab">
                                <div class="tab-list active" id="city">
                                    <div
                                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                        >
                                        <div class="relative -mx-4 px-4">
                                            <div class="swiper mySwiper4 relative">
                                                    <button
                                                        class="custom-prev absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
                                                        aria-label="Previous city"
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
                                                    <div class="swiper-wrapper">
                                                    
                                                        <div
                                                            class="swiper-slide text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                            
                                                            data-v0-t="card"
                                                        >
                                                            <div class="relative h-40 w-full overflow-hidden">
                                                                <img
                                                                    alt="Delhi travel experts"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                    
                                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/london-premium-8jeoTGo78lLM8UyAaEM58O7L1pk3IK.jpg"
                                                                />
                                                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                                <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                        
                                                                    >
                                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                    </svg>
                                                                    <span class="text-lg font-medium text-white">Delhi</span>
                                                                </div>
                                                            </div>
                                                            <div class="p-3 md:p-4">
                                                                <div class="mb-3 flex items-center justify-between">
                                                                    <div class="text-sm text-slate-600"><span class="font-medium text-primary">42</span> experts available</div>
                                                                </div>
                                                                <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                    <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Historical Tours</p>
                                                                </div>
                                                                <button
                                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                                >
                                                                    View Experts in Delhi
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                    >
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="swiper-slide text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                            
                                                            data-v0-t="card"
                                                        >
                                                            <div class="relative h-40 w-full overflow-hidden">
                                                                <img
                                                                    alt="Mumbai travel experts"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                    
                                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/new-york-premium-HQS1Nz3fo9al4YHlydjjn7jB22qfsY.jpg"
                                                                />
                                                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                                <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                    >
                                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                    </svg>
                                                                    <span class="text-lg font-medium text-white">Mumbai</span>
                                                                </div>
                                                            </div>
                                                            <div class="p-3 md:p-4">
                                                                <div class="mb-3 flex items-center justify-between">
                                                                    <div class="text-sm text-slate-600"><span class="font-medium text-primary">38</span> experts available</div>
                                                                </div>
                                                                <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                    <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> City Experiences</p>
                                                                </div>
                                                                <button
                                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                                >
                                                                    View Experts in Mumbai
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                    >
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="swiper-slide text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                            data-v0-t="card"
                                                        >
                                                            <div class="relative h-40 w-full overflow-hidden">
                                                                <img
                                                                    alt="Jaipur travel experts"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                    
                                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/paris-premium-KRxmtU7XnvAoZD5QnMjcCj6anBcJ32.jpg"
                                                                />
                                                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                                <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                    >
                                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                    </svg>
                                                                    <span class="text-lg font-medium text-white">Jaipur</span>
                                                                </div>
                                                            </div>
                                                            <div class="p-3 md:p-4">
                                                                <div class="mb-3 flex items-center justify-between">
                                                                    <div class="text-sm text-slate-600"><span class="font-medium text-primary">29</span> experts available</div>
                                                                </div>
                                                                <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                    <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Cultural Heritage</p>
                                                                </div>
                                                                <button
                                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                                >
                                                                    View Experts in Jaipur
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                    >
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="swiper-slide text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                            data-v0-t="card"
                                                        >
                                                            <div class="relative h-40 w-full overflow-hidden">
                                                                <img
                                                                    alt="Goa travel experts"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                    
                                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/barcelona-premium-jIqylTxnl7GAfqWMHqRHt7FbLQYMgj.jpg"
                                                                />
                                                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                                <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                    >
                                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                    </svg>
                                                                    <span class="text-lg font-medium text-white">Goa</span>
                                                                </div>
                                                            </div>
                                                            <div class="p-3 md:p-4">
                                                                <div class="mb-3 flex items-center justify-between">
                                                                    <div class="text-sm text-slate-600"><span class="font-medium text-primary">35</span> experts available</div>
                                                                </div>
                                                                <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                    <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Beach Getaways</p>
                                                                </div>
                                                                <button
                                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                                >
                                                                    View Experts in Goa
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                    >
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                            data-v0-t="card"
                                                        >
                                                            <div class="relative h-40 w-full overflow-hidden">
                                                                <img
                                                                    alt="Varanasi travel experts"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                    
                                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-premium-QP12TkkIL0YeIX4LSGHtSn8zXYPV9p.jpg"
                                                                />
                                                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                                <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                    >
                                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                    </svg>
                                                                    <span class="text-lg font-medium text-white">Varanasi</span>
                                                                </div>
                                                            </div>
                                                            <div class="p-3 md:p-4">
                                                                <div class="mb-3 flex items-center justify-between">
                                                                    <div class="text-sm text-slate-600"><span class="font-medium text-primary">22</span> experts available</div>
                                                                </div>
                                                                <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                    <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Spiritual Journeys</p>
                                                                </div>
                                                                <button
                                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                                >
                                                                    View Experts in Varanasi
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                    >
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                            data-v0-t="card"
                                                        >
                                                            <div class="relative h-40 w-full overflow-hidden">
                                                                <img
                                                                    alt="Kochi travel experts"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    data-nimg="fill"
                                                                    class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                    
                                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sydney-premium-prJY3YIRtvcGBUfn40iraQmlgA9y6O.jpg"
                                                                />
                                                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                                <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                    >
                                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                    </svg>
                                                                    <span class="text-lg font-medium text-white">Kochi</span>
                                                                </div>
                                                            </div>
                                                            <div class="p-3 md:p-4">
                                                                <div class="mb-3 flex items-center justify-between">
                                                                    <div class="text-sm text-slate-600"><span class="font-medium text-primary">26</span> experts available</div>
                                                                </div>
                                                                <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                    <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Backwater Tours</p>
                                                                </div>
                                                                <button
                                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                                >
                                                                    View Experts in Kochi
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                    >
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                    <button
                                                        class="custom-next absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
                                                        aria-label="Next city"
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
                                                            class="lucide lucide-chevron-right h-5 w-5"
                                                        >
                                                            <path d="m9 18 6-6-6-6"></path>
                                                        </svg>
                                                    </button>
                                            </div>
                                            
                
                                        </div>
                                        <div class="mt-8 md:mt-12 text-center reveal-on-scroll revealed">
                                            <a href="/experts/all">
                                                <button
                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
                                                >
                                                    View All Experts
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-chevron-right ml-2 h-4 w-4"
                                                    >
                                                        <path d="m9 18 6-6-6-6"></path>
                                                    </svg>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="tab-list" id="specialty">
                                    <div
                                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                                        >
                                        <div class="relative -mx-4 px-4">
                                            <div class="swiper mySwiper4 relative">
                                                <button
                                                    class="custom-prev absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
                                                    aria-label="Previous city"
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
                                                <div class="swiper-wrapper">
                                                    <div
                                                        class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                        
                                                        data-v0-t="card"
                                                    >
                                                        <div class="relative h-40 w-full overflow-hidden">
                                                            <img
                                                                alt="Delhi travel experts"
                                                                loading="lazy"
                                                                decoding="async"
                                                                data-nimg="fill"
                                                                class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                
                                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/london-premium-8jeoTGo78lLM8UyAaEM58O7L1pk3IK.jpg"
                                                            />
                                                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                            <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                >
                                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                    <circle cx="12" cy="10" r="3"></circle>
                                                                </svg>
                                                                <span class="text-lg font-medium text-white">Delhi</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-3 md:p-4">
                                                            <div class="mb-3 flex items-center justify-between">
                                                                <div class="text-sm text-slate-600"><span class="font-medium text-primary">42</span> experts available</div>
                                                            </div>
                                                            <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Historical Tours</p>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                            >
                                                                View Experts in Delhi
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                >
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                        
                                                        data-v0-t="card"
                                                    >
                                                        <div class="relative h-40 w-full overflow-hidden">
                                                            <img
                                                                alt="Mumbai travel experts"
                                                                loading="lazy"
                                                                decoding="async"
                                                                data-nimg="fill"
                                                                class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                
                                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/new-york-premium-HQS1Nz3fo9al4YHlydjjn7jB22qfsY.jpg"
                                                            />
                                                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                            <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                >
                                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                    <circle cx="12" cy="10" r="3"></circle>
                                                                </svg>
                                                                <span class="text-lg font-medium text-white">Mumbai</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-3 md:p-4">
                                                            <div class="mb-3 flex items-center justify-between">
                                                                <div class="text-sm text-slate-600"><span class="font-medium text-primary">38</span> experts available</div>
                                                            </div>
                                                            <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> City Experiences</p>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                            >
                                                                View Experts in Mumbai
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                >
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                        data-v0-t="card"
                                                    >
                                                        <div class="relative h-40 w-full overflow-hidden">
                                                            <img
                                                                alt="Jaipur travel experts"
                                                                loading="lazy"
                                                                decoding="async"
                                                                data-nimg="fill"
                                                                class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                
                                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/paris-premium-KRxmtU7XnvAoZD5QnMjcCj6anBcJ32.jpg"
                                                            />
                                                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                            <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                >
                                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                    <circle cx="12" cy="10" r="3"></circle>
                                                                </svg>
                                                                <span class="text-lg font-medium text-white">Jaipur</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-3 md:p-4">
                                                            <div class="mb-3 flex items-center justify-between">
                                                                <div class="text-sm text-slate-600"><span class="font-medium text-primary">29</span> experts available</div>
                                                            </div>
                                                            <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Cultural Heritage</p>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                            >
                                                                View Experts in Jaipur
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                >
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                        data-v0-t="card"
                                                    >
                                                        <div class="relative h-40 w-full overflow-hidden">
                                                            <img
                                                                alt="Goa travel experts"
                                                                loading="lazy"
                                                                decoding="async"
                                                                data-nimg="fill"
                                                                class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                
                                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/barcelona-premium-jIqylTxnl7GAfqWMHqRHt7FbLQYMgj.jpg"
                                                            />
                                                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                            <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                >
                                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                    <circle cx="12" cy="10" r="3"></circle>
                                                                </svg>
                                                                <span class="text-lg font-medium text-white">Goa</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-3 md:p-4">
                                                            <div class="mb-3 flex items-center justify-between">
                                                                <div class="text-sm text-slate-600"><span class="font-medium text-primary">35</span> experts available</div>
                                                            </div>
                                                            <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Beach Getaways</p>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                            >
                                                                View Experts in Goa
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                >
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                        data-v0-t="card"
                                                    >
                                                        <div class="relative h-40 w-full overflow-hidden">
                                                            <img
                                                                alt="Varanasi travel experts"
                                                                loading="lazy"
                                                                decoding="async"
                                                                data-nimg="fill"
                                                                class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                
                                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-premium-QP12TkkIL0YeIX4LSGHtSn8zXYPV9p.jpg"
                                                            />
                                                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                            <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                >
                                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                    <circle cx="12" cy="10" r="3"></circle>
                                                                </svg>
                                                                <span class="text-lg font-medium text-white">Varanasi</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-3 md:p-4">
                                                            <div class="mb-3 flex items-center justify-between">
                                                                <div class="text-sm text-slate-600"><span class="font-medium text-primary">22</span> experts available</div>
                                                            </div>
                                                            <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Spiritual Journeys</p>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                            >
                                                                View Experts in Varanasi
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                >
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="swiper-slide text-card-foreground group min-w-[280px] max-w-[350px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                                        data-v0-t="card"
                                                    >
                                                        <div class="relative h-40 w-full overflow-hidden">
                                                            <img
                                                                alt="Kochi travel experts"
                                                                loading="lazy"
                                                                decoding="async"
                                                                data-nimg="fill"
                                                                class="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                
                                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sydney-premium-prJY3YIRtvcGBUfn40iraQmlgA9y6O.jpg"
                                                            />
                                                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                                            <div class="absolute bottom-4 left-4 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y(-2px)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-map-pin h-4 w-4 text-primary animate-bounce-subtle"
                                                                >
                                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                                    <circle cx="12" cy="10" r="3"></circle>
                                                                </svg>
                                                                <span class="text-lg font-medium text-white">Kochi</span>
                                                            </div>
                                                        </div>
                                                        <div class="p-3 md:p-4">
                                                            <div class="mb-3 flex items-center justify-between">
                                                                <div class="text-sm text-slate-600"><span class="font-medium text-primary">26</span> experts available</div>
                                                            </div>
                                                            <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 mb-3">
                                                                <p class="text-sm text-slate-600 transition-all duration-300 group-hover:text-slate-700"><span class="font-medium">Popular:</span> Backwater Tours</p>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm"
                                                            >
                                                                View Experts in Kochi
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                                                >
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    class="custom-next absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
                                                    aria-label="Next city"
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
                                                        class="lucide lucide-chevron-right h-5 w-5"
                                                    >
                                                        <path d="m9 18 6-6-6-6"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="mt-8 md:mt-12 text-center reveal-on-scroll revealed">
                                            <a href="/experts/all">
                                                <button
                                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
                                                >
                                                    View All Experts
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-chevron-right ml-2 h-4 w-4"
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
                </section>
                <section class="relative w-full bg-slate-50 py-8 md:py-24">
                    <div class="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="container mx-auto px-3 md:px-6">
                        <div class="mb-6 md:mb-12 text-center reveal-on-scroll revealed">
                            <div class="mb-2 md:mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium text-primary hover-lift">
                                <span class="mr-1 md:mr-2 h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Why Choose Our Experts
                            </div>
                            <h2 class="mb-2 md:mb-4 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-4xl">The <span class="text-gradient">Advantages</span> of Travel Experts</h2>
                            <p class="mx-auto max-w-2xl text-sm md:text-base text-slate-600">Discover how our verified travel experts can transform your journey with personalized guidance, local insights, and authentic experiences.</p>
                        </div>
                        <div class="grid gap-3 md:gap-8 md:grid-cols-2 lg:grid-cols-3 reveal-on-scroll revealed">
                            <div class="rounded-xl border border-slate-200 bg-white p-3 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-map-pin h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-3 text-base md:text-xl font-bold text-slate-800">Local Expertise</h3>
                                <p class="mb-2 md:mb-4 text-xs md:text-base text-slate-600">Our experts are locals or have extensive experience in their regions, providing insider knowledge that guidebooks can't offer.</p>
                                <ul class="space-y-1 md:space-y-2">
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Hidden gems and off-the-beaten-path locations</span>
                                    </li>
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Cultural insights and local customs</span>
                                    </li>
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Safety tips and practical advice</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="rounded-xl border border-slate-200 bg-white p-3 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-calendar h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-3 text-base md:text-xl font-bold text-slate-800">Personalized Planning</h3>
                                <p class="mb-2 md:mb-4 text-xs md:text-base text-slate-600">Get custom itineraries and recommendations tailored to your interests, budget, and travel style.</p>
                                <ul class="space-y-1 md:space-y-2">
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Custom itineraries designed just for you</span>
                                    </li>
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Time-saving recommendations and priorities</span>
                                    </li>
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Budget optimization and insider deals</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="rounded-xl border border-slate-200 bg-white p-3 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-video h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-3 text-base md:text-xl font-bold text-slate-800">Real-Time Support</h3>
                                <p class="mb-2 md:mb-4 text-xs md:text-base text-slate-600">Connect with experts through video calls and chat for immediate assistance before and during your trip.</p>
                                <ul class="space-y-1 md:space-y-2">
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">One-on-one video consultations</span>
                                    </li>
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">Quick chat responses for urgent questions</span>
                                    </li>
                                    <li class="flex items-start gap-1 md:gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-check mt-0.5 h-3 w-3 md:mt-1 md:h-4 md:w-4 text-primary flex-shrink-0"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-xs md:text-sm text-slate-600">On-trip assistance when plans change</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-16 rounded-xl border border-slate-200 bg-white p-3 md:p-8 shadow-sm reveal-on-scroll revealed">
                            <div class="grid gap-4 md:gap-6 md:grid-cols-2">
                                <div>
                                    <div class="mb-2 md:mb-4 text-2xl md:text-4xl text-primary">"</div>
                                    <p class="mb-4 md:mb-6 text-sm md:text-lg italic text-slate-600">
                                        My trip to Rajasthan was completely transformed by my expert, Vikram. He suggested experiences I never would have found on my own and was available to help when a last-minute change threatened our plans.
                                    </p>
                                    <div class="flex items-center gap-3 md:gap-4">
                                        <div class="h-8 w-8 md:h-12 md:w-12 rounded-full overflow-hidden">
                                            <img alt="Anjali Sharma" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="h-full w-full object-cover"  src="https://v0.blob.com/Yd9Ij.png" />
                                        </div>
                                        <div>
                                            <p class="text-sm md:text-base font-medium text-slate-800">Anjali Sharma</p>
                                            <p class="text-xs md:text-sm text-primary">Delhi, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative hidden md:block">
                                    <div class="relative h-full w-full rounded-lg overflow-hidden">
                                        <img alt="Travel experience" loading="lazy" decoding="async" data-nimg="fill" class="object-cover"  src="https://v0.blob.com/Yd9Ij.jpg" />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-12 text-center reveal-on-scroll revealed">
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse md:text-base md:px-6 md:py-3"
                            >
                                Connect with an Expert
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-chevron-right ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4"
                                >
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="relative w-full bg-slate-50 py-10 md:py-24 featured-experts-section">
                    <div class="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="container mx-auto px-4 md:px-6">
                        <div class="mb-10 md:mb-12 reveal-on-scroll revealed">
                            <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                                <div>
                                    <div class="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                                        <span class="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Featured Experts
                                    </div>
                                    <h2 class="mb-2 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-4xl">Meet Our <span class="text-gradient">Top-Rated</span> Travel Experts</h2>
                                    <p class="max-w-[700px] text-sm text-slate-600 md:text-base">Discover our most experienced and highly-rated travel experts ready to help you plan your perfect journey.</p>
                                </div>
                                <div class="flex items-center gap-2 text-sm font-medium">
                                    <span class="hidden text-primary md:inline">View all experts</span>
                                    <button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-9 rounded-md px-3 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                    >
                                        <span class="md:hidden">View all experts</span>
                                        <svg
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="relative -mx-4 px-4 reveal-on-scroll revealed">
                            <button
                                class="customPrevBtn absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
                                aria-label="Previous expert"
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
                            <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hide owl-carousel featured-experts-owl" >
                                <div
                                    class="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    
                                    data-v0-t="card"
                                >
                                    <div class="relative h-40 md:h-48 w-full overflow-hidden">
                                        <img
                                            alt="Rahul Sharma"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            class="object-cover transition-transform duration-700 group-hover:scale-110"
                                            
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                        />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                        <div class="absolute top-4 right-4">
                                            <div class="flex items-center gap-1 bg-primary/90 text-white text-sm px-2 py-1 rounded-full">
                                                <span>4.9</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-star h-3 w-3 fill-current"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 left-4 right-4">
                                            <h3 class="text-lg md:text-xl font-bold text-white mb-1">Rahul Sharma</h3>
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-sm text-slate-200">Delhi, India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 md:p-4">
                                        <div class="mb-3 flex items-center justify-between">
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-xs text-slate-600">5+ years</span>
                                            </div>
                                            <span class="text-xs text-slate-500">128 reviews</span>
                                        </div>
                                        <div class="mb-3 flex flex-wrap gap-1">
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Himalayan Treks
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Adventure
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Wildlife
                                            </div>
                                        </div>
                                        <p class="mb-4 text-xs text-slate-600 line-clamp-2">Himalayan trekking expert with extensive knowledge of Northern India's mountains, wildlife, and local cultures.</p>
                                        <div class="mb-4 space-y-2">
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-video h-3 w-3 text-primary"
                                                    >
                                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Available for video consultation</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-message-circle h-3 w-3 text-primary"
                                                    >
                                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Chat response time: ~1 hour</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-1 md:gap-2">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 flex-1 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-message-circle mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                </svg>
                                                Chat
                                            </button>
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 flex-1 bg-primary text-white hover:bg-primary/90 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-video mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                </svg>
                                                Video Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    
                                    data-v0-t="card"
                                >
                                    <div class="relative h-40 md:h-48 w-full overflow-hidden">
                                        <img
                                            alt="Priya Patel"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            class="object-cover transition-transform duration-700 group-hover:scale-110"
                                            
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-avatar-MOHPr7TbTXzKEubB3Vk3GxIENNM0eG.jpg"
                                        />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                        <div class="absolute top-4 right-4">
                                            <div class="flex items-center gap-1 bg-primary/90 text-white text-sm px-2 py-1 rounded-full">
                                                <span>4.8</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-star h-3 w-3 fill-current"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 left-4 right-4">
                                            <h3 class="text-lg md:text-xl font-bold text-white mb-1">Priya Patel</h3>
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-sm text-slate-200">Mumbai, India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 md:p-4">
                                        <div class="mb-3 flex items-center justify-between">
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-xs text-slate-600">4+ years</span>
                                            </div>
                                            <span class="text-xs text-slate-500">96 reviews</span>
                                        </div>
                                        <div class="mb-3 flex flex-wrap gap-1">
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Cultural Tours
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Food Experiences
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Photography
                                            </div>
                                        </div>
                                        <p class="mb-4 text-xs text-slate-600 line-clamp-2">Culinary and cultural expert specializing in Mumbai's diverse food scene and hidden cultural gems.</p>
                                        <div class="mb-4 space-y-2">
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-video h-3 w-3 text-primary"
                                                    >
                                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Available for video consultation</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-message-circle h-3 w-3 text-primary"
                                                    >
                                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Chat response time: ~2 hours</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-1 md:gap-2">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 flex-1 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-message-circle mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                </svg>
                                                Chat
                                            </button>
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 flex-1 bg-primary text-white hover:bg-primary/90 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-video mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                </svg>
                                                Video Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    
                                    data-v0-t="card"
                                >
                                    <div class="relative h-40 md:h-48 w-full overflow-hidden">
                                        <img
                                            alt="Vikram Singh"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            class="object-cover transition-transform duration-700 group-hover:scale-110"
                                            
                                            src="https://v0.blob.com/Yd9Ij.png"
                                        />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                        <div class="absolute top-4 right-4">
                                            <div class="flex items-center gap-1 bg-primary/90 text-white text-sm px-2 py-1 rounded-full">
                                                <span>4.9</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-star h-3 w-3 fill-current"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 left-4 right-4">
                                            <h3 class="text-lg md:text-xl font-bold text-white mb-1">Vikram Singh</h3>
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-sm text-slate-200">Jaipur, India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 md:p-4">
                                        <div class="mb-3 flex items-center justify-between">
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-xs text-slate-600">7+ years</span>
                                            </div>
                                            <span class="text-xs text-slate-500">112 reviews</span>
                                        </div>
                                        <div class="mb-3 flex flex-wrap gap-1">
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Heritage Sites
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Desert Safaris
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Local Cuisine
                                            </div>
                                        </div>
                                        <p class="mb-4 text-xs text-slate-600 line-clamp-2">Rajasthan specialist with deep knowledge of palaces, forts, desert experiences, and authentic local cuisine.</p>
                                        <div class="mb-4 space-y-2">
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-video h-3 w-3 text-primary"
                                                    >
                                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Available for video consultation</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-message-circle h-3 w-3 text-primary"
                                                    >
                                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Chat response time: ~1 hour</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-1 md:gap-2">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 flex-1 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-message-circle mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                </svg>
                                                Chat
                                            </button>
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 flex-1 bg-primary text-white hover:bg-primary/90 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-video mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                </svg>
                                                Video Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    data-v0-t="card"
                                >
                                    <div class="relative h-40 md:h-48 w-full overflow-hidden">
                                        <img
                                            alt="Ananya Desai"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            class="object-cover transition-transform duration-700 group-hover:scale-110"
                                            
                                            src="https://v0.blob.com/Yd9Ij.png"
                                        />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                        <div class="absolute top-4 right-4">
                                            <div class="flex items-center gap-1 bg-primary/90 text-white text-sm px-2 py-1 rounded-full">
                                                <span>4.7</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-star h-3 w-3 fill-current"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 left-4 right-4">
                                            <h3 class="text-lg md:text-xl font-bold text-white mb-1">Ananya Desai</h3>
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-sm text-slate-200">Goa, India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 md:p-4">
                                        <div class="mb-3 flex items-center justify-between">
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-xs text-slate-600">3+ years</span>
                                            </div>
                                            <span class="text-xs text-slate-500">84 reviews</span>
                                        </div>
                                        <div class="mb-3 flex flex-wrap gap-1">
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Beach Life
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Water Sports
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Nightlife
                                            </div>
                                        </div>
                                        <p class="mb-4 text-xs text-slate-600 line-clamp-2">Goa expert focusing on beach experiences, water activities, and the best spots for authentic local experiences.</p>
                                        <div class="mb-4 space-y-2">
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-video h-3 w-3 text-primary"
                                                    >
                                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Available for video consultation</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-message-circle h-3 w-3 text-primary"
                                                    >
                                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Chat response time: ~3 hours</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-1 md:gap-2">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 flex-1 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-message-circle mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                </svg>
                                                Chat
                                            </button>
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 flex-1 bg-primary text-white hover:bg-primary/90 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-video mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                </svg>
                                                Video Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    data-v0-t="card"
                                >
                                    <div class="relative h-40 md:h-48 w-full overflow-hidden">
                                        <img
                                            alt="Arjun Mehta"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            class="object-cover transition-transform duration-700 group-hover:scale-110"
                                            
                                            src="https://v0.blob.com/Yd9Ij.png"
                                        />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                        <div class="absolute top-4 right-4">
                                            <div class="flex items-center gap-1 bg-primary/90 text-white text-sm px-2 py-1 rounded-full">
                                                <span>4.9</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-star h-3 w-3 fill-current"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="absolute bottom-4 left-4 right-4">
                                            <h3 class="text-lg md:text-xl font-bold text-white mb-1">Arjun Mehta</h3>
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-sm text-slate-200">Varanasi, India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 md:p-4">
                                        <div class="mb-3 flex items-center justify-between">
                                            <div class="flex items-center gap-1.5">
                                                <svg
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
                                                <span class="text-xs text-slate-600">6+ years</span>
                                            </div>
                                            <span class="text-xs text-slate-500">76 reviews</span>
                                        </div>
                                        <div class="mb-3 flex flex-wrap gap-1">
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Spiritual Tours
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                River Cruises
                                            </div>
                                            <div
                                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-xs text-primary transition-all duration-300 hover:bg-primary/20"
                                                data-v0-t="badge"
                                            >
                                                Local Arts
                                            </div>
                                        </div>
                                        <p class="mb-4 text-xs text-slate-600 line-clamp-2">Spiritual journey expert specializing in Varanasi's sacred sites, rituals, and authentic cultural experiences.</p>
                                        <div class="mb-4 space-y-2">
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-video h-3 w-3 text-primary"
                                                    >
                                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Available for video consultation</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-message-circle h-3 w-3 text-primary"
                                                    >
                                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text-xs text-slate-600">Chat response time: ~2 hours</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-1 md:gap-2">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 flex-1 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-message-circle mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                </svg>
                                                Chat
                                            </button>
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 flex-1 bg-primary text-white hover:bg-primary/90 btn-pulse text-xs md:text-sm py-1 md:py-2"
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
                                                    class="lucide lucide-video mr-1 h-3 w-3 md:h-4 md:w-4"
                                                >
                                                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                </svg>
                                                Video Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="customNextBtn absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
                                aria-label="Next expert"
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
                                    class="lucide lucide-chevron-right h-5 w-5"
                                >
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="relative w-full bg-white py-8 md:py-24">
                    <div class="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="container mx-auto px-3 md:px-6">
                        <div class="mb-6 md:mb-12 text-center reveal-on-scroll">
                            <div class="mb-2 md:mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium text-primary hover-lift">
                                <span class="mr-1 md:mr-2 h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Simple Process
                            </div>
                            <h2 class="mb-2 md:mb-4 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-4xl">How to <span class="text-gradient">Connect</span> with Travel Experts</h2>
                            <p class="mx-auto max-w-2xl text-sm md:text-base text-slate-600">Our streamlined process makes it easy to find and connect with the perfect travel expert for your needs.</p>
                        </div>
                        <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-2 lg:grid-cols-4 reveal-on-scroll">
                            <div class="group relative rounded-xl border border-slate-200 bg-white p-2 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="absolute -right-2 -top-2 md:-right-3 md:-top-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary text-white text-xs md:text-base">1</div>
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-search h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-2 text-sm md:text-xl font-bold text-slate-800">Find Your Expert</h3>
                                <p class="text-xs md:text-base text-slate-600">Search for experts by destination, specialty, or browse our curated list of verified travel professionals.</p>
                            </div>
                            <div class="group relative rounded-xl border border-slate-200 bg-white p-2 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="absolute -right-2 -top-2 md:-right-3 md:-top-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary text-white text-xs md:text-base">2</div>
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-calendar h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-2 text-sm md:text-xl font-bold text-slate-800">Book a Session</h3>
                                <p class="text-xs md:text-base text-slate-600">Schedule a video consultation or start a chat conversation based on your preference and the expert's availability.</p>
                            </div>
                            <div class="group relative rounded-xl border border-slate-200 bg-white p-2 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="absolute -right-2 -top-2 md:-right-3 md:-top-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary text-white text-xs md:text-base">3</div>
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-video h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-2 text-sm md:text-xl font-bold text-slate-800">Connect &amp; Plan</h3>
                                <p class="text-xs md:text-base text-slate-600">Discuss your travel plans, ask questions, and receive personalized recommendations and itineraries.</p>
                            </div>
                            <div class="group relative rounded-xl border border-slate-200 bg-white p-2 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                                <div class="absolute -right-2 -top-2 md:-right-3 md:-top-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary text-white text-xs md:text-base">4</div>
                                <div class="mb-2 md:mb-4 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-users h-4 w-4 md:h-7 md:w-7"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-1 md:mb-2 text-sm md:text-xl font-bold text-slate-800">Travel with Confidence</h3>
                                <p class="text-xs md:text-base text-slate-600">Enjoy your trip with expert-backed plans and ongoing support if you need assistance during your journey.</p>
                            </div>
                        </div>
                        <div class="mt-16 hidden lg:block reveal-on-scroll">
                            <div class="relative mx-auto h-20 max-w-4xl">
                                <div class="absolute left-[12%] right-[12%] top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                                <div class="absolute left-[12%] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white"><div class="h-2 w-2 rounded-full bg-primary"></div></div>
                                <div class="absolute left-[37%] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white"><div class="h-2 w-2 rounded-full bg-primary"></div></div>
                                <div class="absolute left-[62%] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white"><div class="h-2 w-2 rounded-full bg-primary"></div></div>
                                <div class="absolute left-[87%] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white"><div class="h-2 w-2 rounded-full bg-primary"></div></div>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-12 text-center reveal-on-scroll">
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse md:text-base md:px-6 md:py-3"
                            >
                                Find an Expert Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-chevron-right ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4"
                                >
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="relative w-full bg-white py-10 md:py-24">
                    <div class="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                    <div class="container mx-auto px-4 md:px-6">
                        <div class="mb-10 text-center md:mb-16 reveal-on-scroll">
                            <div class="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                                <span class="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Success Stories
                            </div>
                            <h2 class="mb-2 md:mb-3 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-4xl">What Our <span class="text-gradient">Travelers Say</span></h2>
                            <p class="mx-auto max-w-[700px] text-sm text-slate-600 md:text-base">Hear from travelers who have experienced the difference our experts make in creating memorable, authentic journeys.</p>
                        </div>
                        <div class="relative -mx-4 px-4 reveal-on-scroll">
                            <button
                                class="customPrevBtn absolute -left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
                                aria-label="Previous testimonial"
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
                                    class="lucide lucide-chevron-left h-6 w-6"
                                >
                                    <path d="m15 18-6-6 6-6"></path>
                                </svg>
                            </button>
                            <div class="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide owl-carousel success-stories-owl" >
                                <div
                                    class="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    
                                    data-v0-t="card"
                                >
                                    <div class="mb-4 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-primary/20 hover-bright">
                                                <img
                                                    alt="Rahul Mehta"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    class="object-cover transition-transform duration-500 hover:scale-110"
                                                    
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                                />
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">Rahul Mehta</h4>
                                                <p class="text-xs text-slate-500">Mumbai, Maharashtra</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="relative mb-3 md:mb-4 rounded-lg bg-slate-50 p-3 md:p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20 animate-pulse-soft"
                                        >
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                        </svg>
                                        <p class="pl-2 text-sm italic text-slate-600 transition-all duration-300 hover:text-slate-700">
                                            "My expert helped me plan a trek in Himachal Pradesh that was perfectly matched to my experience level. He suggested routes I never would have found on my own and connected me with local guides who made the
                                            experience unforgettable."
                                        </p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-xs text-slate-500 mb-1">Expert consultation for</p>
                                        <span class="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Himachal Pradesh with Vikram Singh</span>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    data-v0-t="card"
                                >
                                    <div class="mb-4 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-primary/20 hover-bright">
                                                <img
                                                    alt="Anjali Sharma"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    class="object-cover transition-transform duration-500 hover:scale-110"
                                                    
                                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-avatar-MOHPr7TbTXzKEubB3Vk3GxIENNM0eG.jpg"
                                                />
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">Anjali Sharma</h4>
                                                <p class="text-xs text-slate-500">Delhi, NCR</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="relative mb-3 md:mb-4 rounded-lg bg-slate-50 p-3 md:p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20 animate-pulse-soft"
                                        >
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                        </svg>
                                        <p class="pl-2 text-sm italic text-slate-600 transition-all duration-300 hover:text-slate-700">
                                            "The video consultation with my Kerala expert saved me hours of research and helped me avoid tourist traps. She created a perfect balance of backwater experiences, cultural sites, and relaxation time."
                                        </p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-xs text-slate-500 mb-1">Expert consultation for</p>
                                        <span class="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Kerala with Meera Nair</span>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    data-v0-t="card"
                                >
                                    <div class="mb-4 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-primary/20 hover-bright">
                                                <img
                                                    alt="Arjun Patel"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    class="object-cover transition-transform duration-500 hover:scale-110"
                                                    
                                                    src="https://v0.blob.com/Yd9Ij.png"
                                                />
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">Arjun Patel</h4>
                                                <p class="text-xs text-slate-500">Bangalore, Karnataka</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="relative mb-3 md:mb-4 rounded-lg bg-slate-50 p-3 md:p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20 animate-pulse-soft"
                                        >
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                        </svg>
                                        <p class="pl-2 text-sm italic text-slate-600 transition-all duration-300 hover:text-slate-700">
                                            "When our plans had to change last minute due to weather, our expert was available via chat and quickly helped us rearrange our Rajasthan itinerary. His local connections made the transition seamless."
                                        </p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-xs text-slate-500 mb-1">Expert consultation for</p>
                                        <span class="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Rajasthan with Rahul Sharma</span>
                                    </div>
                                </div>
                                <div
                                    class="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                                    data-v0-t="card"
                                >
                                    <div class="mb-4 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-primary/20 hover-bright">
                                                <img
                                                    alt="Neha Iyer"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    class="object-cover transition-transform duration-500 hover:scale-110"
                                                    
                                                    src="https://v0.blob.com/Yd9Ij.png"
                                                />
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-slate-800 transition-colors duration-300 hover:text-primary">Neha Iyer</h4>
                                                <p class="text-xs text-slate-500">Chennai, Tamil Nadu</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                                
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-star h-4 w-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="relative mb-3 md:mb-4 rounded-lg bg-slate-50 p-3 md:p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20 animate-pulse-soft"
                                        >
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                        </svg>
                                        <p class="pl-2 text-sm italic text-slate-600 transition-all duration-300 hover:text-slate-700">
                                            "As a solo female traveler, safety was my priority. My expert provided invaluable advice for my North East India trip, suggesting women-friendly accommodations and connecting me with reliable local guides."
                                        </p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-xs text-slate-500 mb-1">Expert consultation for</p>
                                        <span class="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">North East India with Priya Patel</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="customNextBtn absolute -right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
                                aria-label="Next testimonial"
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
                                    class="lucide lucide-chevron-right h-6 w-6"
                                >
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="relative w-full bg-[#0F172A] py-10 md:py-24 text-white become-expert-section">
                    <div class="absolute inset-0 z-0 bg-[url('/subtle-pattern.png')] opacity-5 animate-shimmer"></div>
                    <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-shimmer"></div>
                    <div class="container relative z-10 mx-auto px-4 md:px-6">
                        <div class="grid gap-12 md:grid-cols-2 items-center reveal-on-scroll">
                            <div>
                                <div class="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                                    <span class="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Become an Expert
                                </div>
                                <h2 class="mb-3 md:mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl md:text-4xl">Share Your <span class="text-gradient">Travel Expertise</span> and Earn</h2>
                                <p class="mb-6 text-slate-300">
                                    Are you passionate about travel and have deep knowledge about destinations in India? Join our platform as a verified travel expert and help travelers experience the authentic side of India.
                                </p>
                                <div class="mb-6 md:mb-8 space-y-3 md:space-y-4">
                                    <div class="flex items-start gap-3">
                                        <div class="flex h-5 w-5 md:h-6 md:w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-check h-3 w-3 md:h-4 md:w-4"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-white">Share Your Knowledge</p>
                                            <p class="text-sm text-slate-300">Help travelers discover hidden gems and authentic experiences in your area of expertise.</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div class="flex h-5 w-5 md:h-6 md:w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-check h-3 w-3 md:h-4 md:w-4"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-white">Flexible Schedule</p>
                                            <p class="text-sm text-slate-300">Set your own availability for consultations and respond to chat inquiries on your own time.</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div class="flex h-5 w-5 md:h-6 md:w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-check h-3 w-3 md:h-4 md:w-4"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-white">Earn Income</p>
                                            <p class="text-sm text-slate-300">Receive payment for your expertise through consultations, custom itineraries, and chat support.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse text-sm md:text-base py-2 md:py-3"
                                    >
                                        Apply to Become an Expert
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-right ml-2 h-3 w-3 md:h-4 md:w-4"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </button>
                                    <button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 border-white/20 bg-white/5 text-white hover:bg-white/10"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div class="relative hidden md:block">
                                <div class="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
                                <div class="relative rounded-xl overflow-hidden border border-white/10 shadow-xl">
                                    <img alt="Become a travel expert" loading="lazy" width="600" height="400" decoding="async" data-nimg="1" class="w-full h-auto object-cover"  src="https://v0.blob.com/Nt9Ij.jpg" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div class="absolute bottom-0 left-0 right-0 p-6">
                                        <div class="rounded-lg border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                                            <div class="flex items-center gap-4 mb-3">
                                                <div class="h-12 w-12 rounded-full overflow-hidden">
                                                    <img alt="Expert" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="h-full w-full object-cover"  src="https://v0.blob.com/Yd9Ij.png" />
                                                </div>
                                                <div>
                                                    <p class="font-medium text-white">Vikram Singh</p>
                                                    <p class="text-sm text-primary">Rajasthan Expert • 7+ years</p>
                                                </div>
                                            </div>
                                            <p class="text-sm italic text-white">
                                                "Sharing my knowledge of Rajasthan with travelers has been incredibly rewarding. I've helped hundreds of people experience the authentic culture of my region while earning income doing what I love."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
                            <path
                                fill="#fff"
                                fill-opacity="1"
                                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                            ></path>
                        </svg>
                    </div>
                </section>
            </main>


      <Footer />
    </>
  );
};

export default Index;
