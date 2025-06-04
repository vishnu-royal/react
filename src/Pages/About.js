import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Index = () => {
  return (
    <>
      <Header />


<main class="min-h-screen bg-[#0F172A]">
    <section class="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 md:py-28">
        <div class="absolute inset-0 z-0 opacity-20">
            <img alt="Background pattern" decoding="async" data-nimg="fill" class="object-cover" src="/diagonal-pattern.png" />
        </div>
        <div class="container relative z-10 mx-auto px-4 text-center md:px-6">
            <div class="mx-auto max-w-3xl">
                <h1 class="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Our Mission to <span class="text-primary">Connect</span> Travelers Worldwide</h1>
                <p class="mb-8 text-lg text-gray-300 md:text-xl">We're building a global community that transforms how people travel, connect, and experience the world together.</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
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
                            class="lucide lucide-users mr-2 h-5 w-5"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Join Our Community
                    </button>
                    <a href="/experts">
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 border-white/20 bg-white/5 text-white hover:bg-white/10"
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
                                class="lucide lucide-globe mr-2 h-5 w-5"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            Meet Our Experts
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Our Story</h2>
                <div class="mb-10 h-1 w-20 bg-primary mx-auto"></div>
            </div>
            <div class="grid gap-12 md:grid-cols-2 items-center">
                <div class="order-2 md:order-1">
                    <h3 class="mb-4 text-2xl font-semibold text-white">From Solo Travelers to Global Community</h3>
                    <p class="mb-4 text-gray-300">Connecting Traveller began in 2018 when our founders, avid travelers themselves, recognized a fundamental gap in the travel experience: authentic human connection.</p>
                    <p class="mb-4 text-gray-300">After years of solo adventures across continents, they realized that the most memorable travel experiences weren't about the places they visited, but the people they met along the way.</p>
                    <p class="mb-6 text-gray-300">
                        What started as a simple meetup platform for travelers in major cities has evolved into a comprehensive ecosystem that connects travelers with local experts, fellow adventurers, and authentic experiences worldwide.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center gap-2">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-map-pin h-5 w-5 text-primary"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <span class="text-white">120+ Countries</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-users h-5 w-5 text-primary"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <span class="text-white">500K+ Members</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                                <svg
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
                            </div>
                            <span class="text-white">10K+ Local Experts</span>
                        </div>
                    </div>
                </div>
                <div class="order-1 md:order-2 relative">
                    <div class="relative h-[400px] overflow-hidden rounded-xl">
                        <img
                            alt="Travelers connecting around the world"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            class="object-cover"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/community-values-VNlLNGhRtOsdpCTaa8CBNHMyT2vwis.jpg"
                        />
                    </div>
                    <div class="absolute -bottom-6 -left-6 h-32 w-32 rounded-lg bg-primary p-4 text-center text-white shadow-lg">
                        <p class="text-3xl font-bold">5+</p>
                        <p class="text-sm">Years Connecting Travelers</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-[#1E293B] py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Our Core Values</h2>
                <div class="mb-10 h-1 w-20 bg-primary mx-auto"></div>
                <p class="mb-12 text-gray-300">These principles guide everything we do at Connecting Traveller, from product development to community management.</p>
            </div>
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-xl bg-[#0F172A]/80 p-6 transition-transform hover:scale-105">
                    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-heart h-7 w-7 text-primary"
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                    </div>
                    <h3 class="mb-3 text-xl font-semibold text-white">Authentic Connections</h3>
                    <p class="text-gray-300">We believe travel is about meaningful human connections that transcend cultural boundaries.</p>
                </div>
                <div class="rounded-xl bg-[#0F172A]/80 p-6 transition-transform hover:scale-105">
                    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-globe h-7 w-7 text-primary"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                    </div>
                    <h3 class="mb-3 text-xl font-semibold text-white">Cultural Respect</h3>
                    <p class="text-gray-300">We promote responsible travel that honors local cultures, traditions, and environments.</p>
                </div>
                <div class="rounded-xl bg-[#0F172A]/80 p-6 transition-transform hover:scale-105">
                    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-award h-7 w-7 text-primary"
                        >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                    </div>
                    <h3 class="mb-3 text-xl font-semibold text-white">Quality Experiences</h3>
                    <p class="text-gray-300">We curate exceptional travel experiences and experts that exceed expectations.</p>
                </div>
                <div class="rounded-xl bg-[#0F172A]/80 p-6 transition-transform hover:scale-105">
                    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-shield h-7 w-7 text-primary"
                        >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </div>
                    <h3 class="mb-3 text-xl font-semibold text-white">Trust &amp; Safety</h3>
                    <p class="text-gray-300">We prioritize creating a secure environment where travelers can connect with confidence.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">How Connecting Traveller Works</h2>
                <div class="mb-10 h-1 w-20 bg-primary mx-auto"></div>
                <p class="mb-12 text-gray-300">Our platform brings together three key elements to transform your travel experience.</p>
            </div>
            <div class="grid gap-8 md:grid-cols-3">
                <div class="rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 text-center">
                    <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-users h-10 w-10 text-primary"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3 class="mb-4 text-xl font-semibold text-white">Community Connection</h3>
                    <p class="mb-4 text-gray-300">Join a global network of like-minded travelers. Share experiences, find travel companions, and participate in local meetups worldwide.</p>
                    <a href="/community">
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-primary hover:text-primary/80"
                        >
                            Explore Community
                        </button>
                    </a>
                </div>
                <div class="rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 text-center">
                    <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-compass h-10 w-10 text-primary"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                    </div>
                    <h3 class="mb-4 text-xl font-semibold text-white">Local Expertise</h3>
                    <p class="mb-4 text-gray-300">Connect with verified local experts who provide personalized guidance, insider tips, and authentic experiences in destinations worldwide.</p>
                    <a href="/experts">
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-primary hover:text-primary/80"
                        >
                            Find Experts
                        </button>
                    </a>
                </div>
                <div class="rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 text-center">
                    <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-map-pin h-10 w-10 text-primary"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <h3 class="mb-4 text-xl font-semibold text-white">Destination Discovery</h3>
                    <p class="mb-4 text-gray-300">Explore curated destination guides, hidden gems, and authentic experiences recommended by our community and local experts.</p>
                    <a href="/destinations">
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-primary hover:text-primary/80"
                        >
                            Explore Destinations
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-[#1E293B] py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Meet Our Team</h2>
                <div class="mb-10 h-1 w-20 bg-primary mx-auto"></div>
                <p class="mb-12 text-gray-300">Our diverse team of travel enthusiasts is dedicated to building meaningful connections around the world.</p>
            </div>
            <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="group relative overflow-hidden rounded-xl bg-[#0F172A]/80 text-center">
                    <div class="aspect-square overflow-hidden">
                        <img
                            alt="Sarah Johnson"
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            class="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="mb-1 text-xl font-semibold text-white">Sarah Johnson</h3>
                        <p class="mb-3 text-primary">Founder &amp; CEO</p>
                        <p class="text-gray-300">Former solo backpacker with 50+ countries under her belt.</p>
                    </div>
                </div>
                <div class="group relative overflow-hidden rounded-xl bg-[#0F172A]/80 text-center">
                    <div class="aspect-square overflow-hidden">
                        <img
                            alt="Michael Chen"
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            class="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://v0.blob.com/Yd9Ij.png"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="mb-1 text-xl font-semibold text-white">Michael Chen</h3>
                        <p class="mb-3 text-primary">Co-Founder &amp; CTO</p>
                        <p class="text-gray-300">Tech innovator passionate about connecting people through technology.</p>
                    </div>
                </div>
                <div class="group relative overflow-hidden rounded-xl bg-[#0F172A]/80 text-center">
                    <div class="aspect-square overflow-hidden">
                        <img
                            alt="Priya Sharma"
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            class="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://v0.blob.com/Yd9Ij.png"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="mb-1 text-xl font-semibold text-white">Priya Sharma</h3>
                        <p class="mb-3 text-primary">Head of Community</p>
                        <p class="text-gray-300">Community building expert with a background in cultural anthropology.</p>
                    </div>
                </div>
                <div class="group relative overflow-hidden rounded-xl bg-[#0F172A]/80 text-center">
                    <div class="aspect-square overflow-hidden">
                        <img
                            alt="David Okafor"
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            class="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://v0.blob.com/Yd9Ij.png"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="mb-1 text-xl font-semibold text-white">David Okafor</h3>
                        <p class="mb-3 text-primary">Head of Experiences</p>
                        <p class="text-gray-300">Former tour guide who's visited every continent, including Antarctica.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-xl bg-[#1E293B] p-6 text-center">
                    <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-users h-8 w-8 text-primary"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <p class="mb-2 text-3xl font-bold text-white">500K+</p>
                    <p class="text-gray-300">Community Members</p>
                </div>
                <div class="rounded-xl bg-[#1E293B] p-6 text-center">
                    <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-globe h-8 w-8 text-primary"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                    </div>
                    <p class="mb-2 text-3xl font-bold text-white">120+</p>
                    <p class="text-gray-300">Countries Covered</p>
                </div>
                <div class="rounded-xl bg-[#1E293B] p-6 text-center">
                    <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-map-pin h-8 w-8 text-primary"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <p class="mb-2 text-3xl font-bold text-white">10K+</p>
                    <p class="text-gray-300">Local Experts</p>
                </div>
                <div class="rounded-xl bg-[#1E293B] p-6 text-center">
                    <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-clock h-8 w-8 text-primary"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <p class="mb-2 text-3xl font-bold text-white">5M+</p>
                    <p class="text-gray-300">Connections Made</p>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-[#1E293B] py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">What Our Community Says</h2>
                <div class="mb-10 h-1 w-20 bg-primary mx-auto"></div>
            </div>
            <div class="grid gap-8 md:grid-cols-3">
                <div class="rounded-xl bg-[#0F172A]/80 p-6">
                    <div class="mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.030-.18.056-.27.08l-2.03.6c.02-.93.09-1.79.2-2.6.36-.08.75-.19 1.16-.33.41-.14.8-.33 1.17-.57.37-.24.67-.52.9-.84.13-.15.22-.32.28-.5.06-.18.09-.37.09-.57 0-.38-.13-.7-.4-.96-.27-.26-.63-.39-1.09-.39-.43 0-.79.14-1.06.43-.27.29-.48.65-.63 1.09-.16.45-.28.93-.37 1.44-.08.5-.14 1.01-.19 1.52-.05.26-.09.51-.12.75l-.05.48c-.02.12-.04.22-.05.29l-.01.13v.04l1.67-.48c.04-.01.08-.03.12-.04.42-.13.8-.3 1.13-.51.33-.21.6-.45.8-.73.21-.27.31-.55.31-.84zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.030-.18.056-.27.08l-2.03.6c.02-.93.09-1.79.2-2.6.36-.08.75-.19 1.16-.33.41-.14.8-.33 1.17-.57.37-.24.67-.52.9-.84.13-.15.22-.32.28-.5.06-.18.09-.37.09-.57 0-.38-.13-.7-.4-.96-.27-.26-.63-.39-1.09-.39-.43 0-.79.14-1.06.43-.27.29-.48.65-.63 1.09-.16.45-.28.93-.37 1.44-.08.5-.14 1.01-.19 1.52-.05.26-.09.51-.12.75l-.05.48c-.02.12-.04.22-.05.29l-.01.13v.04l1.67-.48c.04-.01.08-.03.12-.04.42-.13.8-.3 1.13-.51.33-.21.6-.45.8-.73.21-.27.31-.55.31-.84z"
                            ></path>
                        </svg>
                    </div>
                    <p class="mb-6 text-gray-300">Connecting Traveller transformed my solo trip to Japan into an unforgettable social adventure. I met amazing people and discovered places I would have never found on my own.</p>
                    <div class="flex items-center">
                        <div class="mr-4 h-12 w-12 overflow-hidden rounded-full">
                            <img
                                alt="Emma S."
                                loading="lazy"
                                width="48"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                class="h-full w-full object-cover"
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-avatar-MOHPr7TbTXzKEubB3Vk3GxIENNM0eG.jpg"
                            />
                        </div>
                        <div>
                            <p class="font-semibold text-white">Emma S.</p>
                            <p class="text-sm text-gray-400">London, UK</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-xl bg-[#0F172A]/80 p-6">
                    <div class="mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.030-.18.056-.27.08l-2.03.6c.02-.93.09-1.79.2-2.6.36-.08.75-.19 1.16-.33.41-.14.8-.33 1.17-.57.37-.24.67-.52.9-.84.13-.15.22-.32.28-.5.06-.18.09-.37.09-.57 0-.38-.13-.7-.4-.96-.27-.26-.63-.39-1.09-.39-.43 0-.79.14-1.06.43-.27.29-.48.65-.63 1.09-.16.45-.28.93-.37 1.44-.08.5-.14 1.01-.19 1.52-.05.26-.09.51-.12.75l-.05.48c-.02.12-.04.22-.05.29l-.01.13v.04l1.67-.48c.04-.01.08-.03.12-.04.42-.13.8-.3 1.13-.51.33-.21.6-.45.8-.73.21-.27.31-.55.31-.84zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.030-.18.056-.27.08l-2.03.6c.02-.93.09-1.79.2-2.6.36-.08.75-.19 1.16-.33.41-.14.8-.33 1.17-.57.37-.24.67-.52.9-.84.13-.15.22-.32.28-.5.06-.18.09-.37.09-.57 0-.38-.13-.7-.4-.96-.27-.26-.63-.39-1.09-.39-.43 0-.79.14-1.06.43-.27.29-.48.65-.63 1.09-.16.45-.28.93-.37 1.44-.08.5-.14 1.01-.19 1.52-.05.26-.09.51-.12.75l-.05.48c-.02.12-.04.22-.05.29l-.01.13v.04l1.67-.48c.04-.01.08-.03.12-.04.42-.13.8-.3 1.13-.51.33-.21.6-.45.8-.73.21-.27.31-.55.31-.84z"
                            ></path>
                        </svg>
                    </div>
                    <p class="mb-6 text-gray-300">As a local expert in Bangkok, I've connected with travelers from around the world. It's rewarding to share my city and culture while making global friendships.</p>
                    <div class="flex items-center">
                        <div class="mr-4 h-12 w-12 overflow-hidden rounded-full">
                            <img alt="Somchai P." loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="https://v0.blob.com/Yd9Ij.png" />
                        </div>
                        <div>
                            <p class="font-semibold text-white">Somchai P.</p>
                            <p class="text-sm text-gray-400">Bangkok, Thailand</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-xl bg-[#0F172A]/80 p-6">
                    <div class="mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.030-.18.056-.27.08l-2.03.6c.02-.93.09-1.79.2-2.6.36-.08.75-.19 1.16-.33.41-.14.8-.33 1.17-.57.37-.24.67-.52.9-.84.13-.15.22-.32.28-.5.06-.18.09-.37.09-.57 0-.38-.13-.7-.4-.96-.27-.26-.63-.39-1.09-.39-.43 0-.79.14-1.06.43-.27.29-.48.65-.63 1.09-.16.45-.28.93-.37 1.44-.08.5-.14 1.01-.19 1.52-.05.26-.09.51-.12.75l-.05.48c-.02.12-.04.22-.05.29l-.01.13v.04l1.67-.48c.04-.01.08-.03.12-.04.42-.13.8-.3 1.13-.51.33-.21.6-.45.8-.73.21-.27.31-.55.31-.84zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.030-.18.056-.27.08l-2.03.6c.02-.93.09-1.79.2-2.6.36-.08.75-.19 1.16-.33.41-.14.8-.33 1.17-.57.37-.24.67-.52.9-.84.13-.15.22-.32.28-.5.06-.18.09-.37.09-.57 0-.38-.13-.7-.4-.96-.27-.26-.63-.39-1.09-.39-.43 0-.79.14-1.06.43-.27.29-.48.65-.63 1.09-.16.45-.28.93-.37 1.44-.08.5-.14 1.01-.19 1.52-.05.26-.09.51-.12.75l-.05.48c-.02.12-.04.22-.05.29l-.01.13v.04l1.67-.48c.04-.01.08-.03.12-.04.42-.13.8-.3 1.13-.51.33-.21.6-.45.8-.73.21-.27.31-.55.31-.84z"
                            ></path>
                        </svg>
                    </div>
                    <p class="mb-6 text-gray-300">The community meetups in New York introduced me to a network of travel enthusiasts who've become close friends. We've even planned group trips together!</p>
                    <div class="flex items-center">
                        <div class="mr-4 h-12 w-12 overflow-hidden rounded-full">
                            <img alt="Marcus J." loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="https://v0.blob.com/Nt9Ij.jpg" />
                        </div>
                        <div>
                            <p class="font-semibold text-white">Marcus J.</p>
                            <p class="text-sm text-gray-400">New York, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative overflow-hidden py-16 md:py-24">
        <div class="absolute inset-0 z-0">
            <img
                alt="Join our community"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover opacity-20"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/premium-travel-bg-QEFwEm4E3JDndSBOxwnGwgABkEVOmR.jpg"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-transparent"></div>
        </div>
        <div class="container relative z-10 mx-auto px-4 md:px-6">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Transform How You Travel?</h2>
                <p class="mb-8 text-lg text-gray-300">Join our global community today and start connecting with travelers and local experts worldwide.</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
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
                            class="lucide lucide-users mr-2 h-5 w-5"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Join Our Community
                    </button>
                    <a href="/experts">
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 border-white/20 bg-white/5 text-white hover:bg-white/10"
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
                                class="lucide lucide-globe mr-2 h-5 w-5"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            Explore Platform
                        </button>
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

export default Index;
