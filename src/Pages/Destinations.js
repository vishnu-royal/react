import React, { useState } from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const categories = [
  {
    label: 'All Categories',
    key: 'All',
    description: 'Explore all destinations across the globe',
    bg: 'from-gray-500 to-gray-700',
    icon: (
      <svg className="lucide lucide-globe mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: 'International',
    key: 'International',
    description: 'Explore exciting destinations around the world',
    bg: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="lucide lucide-globe mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: 'India Destinations',
    key: 'India',
    description: 'Discover the diverse beauty of incredible India',
    bg: 'from-orange-500 to-red-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-1 h-4 w-4">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Spiritual Retreats',
    key: 'Spiritual',
    description: 'Find peace and reconnect with yourself',
    bg: 'from-purple-500 to-violet-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart mr-1 h-4 w-4">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    label: 'Adventure Travel',
    key: 'Adventure',
    description: 'Thrilling experiences for the daring traveler',
    bg: 'from-emerald-500 to-green-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass mr-1 h-4 w-4">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

const destinations = {
  International: [
    {
      name: 'Paris',
      country: 'France',
      description: 'The city of lights and romance',
      rating: 4.8,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/eiffel-glow-yTtYE6wudXHE9u7ieOGAcxQ8EFQZC6.png',
      category: 'International',
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      description: 'A blend of traditional and ultramodern',
      rating: 4.9,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-night-panorama-zuUw3hdj6DpgLwNtVEeGrECFnTRfpB.png',
      category: 'International',
    },
  ],
  India: [
    {
      name: 'Rajasthan',
      country: 'India',
      description: 'Land of kings and magnificent forts',
      rating: 4.7,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/majestic-rajasthani-palace-f5GyVylxkRSig5YmLdU1mBlhkNO1uR.png',
      category: 'India',
    },
    {
      name: 'Kerala',
      country: 'India',
      description: 'God’s own country with serene backwaters',
      rating: 4.8,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/kerala-houseboat-serenity-2mZ7isMoTtL9KsCcGSovaDzRHspcz1.png',
      category: 'India',
    },
  ],
  Spiritual: [
    {
      name: 'Varanasi',
      country: 'India',
      description: 'One of the world’s oldest living cities',
      rating: 4.6,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/varanasi-ganges-boats-x1F7wORcx2bzgixfmmrA3PAf4Ym8F3.png',
      category: 'Spiritual',
    },
  ],
  Adventure: [
    {
      name: 'Rishikesh',
      country: 'India',
      description: 'White water rafting and trekking',
      rating: 4.0,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/rishikesh-himalayan-vista-fLAiD9JdAsuY7yksOTY6BfErbpO5It.png',
      category: 'Adventure',
    },
  ],
};

const summaryBadgeClassMap = {
  'International': 'bg-blue-50 text-blue-600 border-blue-200',
  'India': 'bg-orange-50 text-orange-600 border-orange-200',
  'Spiritual': 'bg-purple-50 text-purple-600 border-purple-200',
  'Adventure': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'All': 'bg-gray-50 text-gray-600 border-gray-200',
};

const categoryBadgeClassMap = {
  International: 'bg-blue-100 text-blue-600 border-blue-200',
  India: 'bg-orange-100 text-orange-600 border-orange-200',
  Spiritual: 'bg-green-100 text-green-600 border-green-200',
  Adventure: 'bg-red-100 text-red-600 border-red-200',
};

const DestinationCard = ({ item }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 transition-all duration-300">
    <a href={`/destinations/${item.name.toLowerCase()}`} className="block h-full">
      <div className="flex flex-col h-full">
        <div className="relative h-44 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            Trending
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2 py-0.5">
            <svg className="h-3 w-3 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-xs font-medium text-white">{item.rating}</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
              <div className="flex items-center gap-1">
                <svg className="h-3 w-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p>{item.country}</p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-col flex-1">
          <p className="text-xs text-slate-600 mb-2 line-clamp-2 flex-1">{item.description}</p>
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className={`inline-flex items-center rounded-full border font-semibold text-xs px-2 py-0 h-5 ${categoryBadgeClassMap[item.category] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                {item.category}
              </span>
            </div>
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');

  const [searchInput, setSearchInput] = useState('');

  // Calculate total count
  const totalCount =
    activeCategory === 'All'
      ? Object.values(destinations).reduce((acc, list) => acc + list.length, 0)
      : destinations[activeCategory]?.length || 0;

  // Render category section
  const renderCategory = (key, label) => {
    const cat = categories.find((c) => c.key === key);
    const items = destinations[key] || [];
    return (
        <div className='py-8 md:py-12 bg-white'>
      <div key={key} className="container mx-auto px-4 md:px-6 custom-tab">
        {/* Category Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${cat?.bg} text-white shadow-lg`}>
              {cat?.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{label}</h2>
              <p className="text-slate-600">{cat?.description}</p>
            </div>
          </div>
          {activeCategory !== 'All' && (
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50 text-gray-600 border-gray-200">
              {totalCount}+ Destinations
            </div>
          )}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <DestinationCard key={index} item={item} />
          ))}
        </div>
      </div>
      </div>
    );
  };

  return (
    <>
      {/* Header */}
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
        {/* Tabs */}
        <section class="py-8 bg-white horizontal-navTabs">
            <div className="container mx-auto px-4 md:px-6">
                <div className="clickme inline-flex h-10 items-center rounded-md bg-muted text-muted-foreground w-full justify-start overflow-x-auto p-1 sm:justify-center scrollbar-hide">
                {categories.map((cat) => (
                    <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex items-center px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                        activeCategory === cat.key ? 'bg-primary/10 text-primary shadow-sm' : 'text-muted-foreground'
                    }`}
                    >
                    {cat.icon}
                    {cat.label}
                    </button>
                ))}
                </div>
            </div>
        </section>
        {/* Overall count for All category */}
        {activeCategory === 'All' && (
            <div className="all-destination">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50 text-gray-600 border-gray-200">
                    {totalCount}+ Destinations
                </div>
            </div>
        )}

        {/* Destination Sections */}
        {activeCategory === 'All'
            ? Object.keys(destinations).map((key) =>
                renderCategory(key, categories.find((c) => c.key === key)?.label || key)
            )
            : renderCategory(activeCategory, categories.find((c) => c.key === activeCategory)?.label)}

        {/* Optional: You can add your subscription, start journey, etc., sections here, similar to your original code */}


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
}