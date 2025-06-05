import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Index = () => {
  return (
    <>
      <Header />

        <main className="min-h-screen overflow-hidden mobile-optimized">
          <section className="relative w-full overflow-hidden hero-banner mb-2 sm:mb-0">
              <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A] to-[#0F172A]/90"></div>
              </div>
              <div className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-primary/10 backdrop-blur-xl transition-all duration-1000 ease-out opacity-70 translate-y-0" style={{
                animationDelay: '0.2s',
                transform: 'translateZ(100px)',
              }}  ></div>
                  <div className="absolute bottom-1/3 right-[15%] w-24 h-24 rounded-full bg-primary/5 backdrop-blur-xl transition-all duration-1000 ease-out opacity-50 translate-y-0" style={{
                animationDelay: '0.4s',
                transform: 'translateZ(50px)',
              }}></div>
                  <div className="absolute top-2/3 left-[20%] w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl transition-all duration-1000 ease-out opacity-30 translate-y-0" style={{
                animationDelay: '0.6s',
                transform: 'translateZ(75px)',
              }}>
            </div>
              <div className="relative min-h-[60vh] sm:min-h-[90vh] flex items-center py-4 sm:py-0">
                  <div className="container mx-auto px-4 md:px-6">
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                          <div>
                              <div
                                  className="mb-2 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md transition-all duration-700 ease-out opacity-100 translate-x-0"
                              >
                                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span><span className="hidden sm:inline">India's Travel Community Platform</span><span className="sm:hidden">Travel Community</span>
                              </div>
                              <h1 className="mb-2 sm:mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl transition-all duration-700 delay-100 ease-out opacity-100 translate-y-0">
                                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/90">Connecting</span> <span className="sm:inline">Travelers &amp; Experts</span>
                                  <span className="inline sm:hidden">Travelers</span>
                              </h1>
                              <p className="mb-3 sm:mb-8 text-base sm:text-lg text-white/90 max-w-md transition-all duration-700 delay-200 ease-out opacity-100 translate-y-0">
                                  <span className="hidden sm:inline">Experience authentic travel through local connections and expert guidance</span><span className="sm:hidden">Connect with locals &amp; experts</span>
                              </p>
                              <div className="clickme mb-3 sm:mb-8 p-1 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl transition-all duration-700 delay-300 ease-out opacity-100 translate-y-0">
                                  <div className="grid grid-cols-2 gap-2">
                                      <a className="activelink" href="#" data-tag="community">
                                          <button
                                              className="w-full flex items-center justify-center gap-1 sm:gap-2 rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-500 bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 scale-105 transform"
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
                                                  className="lucide lucide-users h-5 w-5 transition-transform duration-500 scale-110"
                                              >
                                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                  <circle cx="9" cy="7" r="4"></circle>
                                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                              </svg>
                                              <div className="text-left">
                                                  <div className="font-medium">Travel Community</div>
                                                  <div className="text-xs opacity-80 hidden sm:block">Connect with travelers</div>
                                              </div>
                                          </button>
                                      </a>
                                      <a href="#" data-tag="experts">
                                          <button
                                              className="w-full flex items-center justify-center gap-1 sm:gap-2 rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-500 text-white hover:bg-white/10 hover:scale-105 transform"
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
                                                  className="lucide lucide-video h-5 w-5 transition-transform duration-500"
                                              >
                                                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                              </svg>
                                              <div className="text-left">
                                                  <div className="font-medium">Travel Experts</div>
                                                  <div className="text-xs opacity-80 hidden sm:block">Get personalized guidance</div>
                                              </div>
                                          </button>
                                      </a>
                                  </div>
                              </div>
                              <div className="space-y-4 sm:space-y-6 transition-all duration-700 delay-400 ease-out opacity-100 translate-y-0">
                                  <div className="hidden sm:flex items-center gap-3 sm:gap-6">
                                      <div className="text-center group hover:scale-110 transition-transform duration-300">
                                          <div className="text-2xl font-bold text-primary group-hover:animate-bounce-subtle">10K+</div>
                                          <div className="text-xs text-white/70">Members</div>
                                      </div>
                                      <div className="h-10 w-px bg-white/20"></div>
                                      <div className="text-center group hover:scale-110 transition-transform duration-300">
                                          <div className="text-2xl font-bold text-primary group-hover:animate-bounce-subtle">25+</div>
                                          <div className="text-xs text-white/70">Cities</div>
                                      </div>
                                      <div className="h-10 w-px bg-white/20"></div>
                                      <div className="text-center group hover:scale-110 transition-transform duration-300">
                                          <div className="text-2xl font-bold text-primary group-hover:animate-bounce-subtle">500+</div>
                                          <div className="text-xs text-white/70">Meetups</div>
                                      </div>
                                  </div>
                                  <a href="/community">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary h-10 px-4 py-2 w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 group text-sm sm:text-base"
                                      >
                                          Join Our Community
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                          <div className="custom-tab mt-6 md:mt-0 transition-all duration-1000 delay-500 ease-out opacity-100 translate-y-0">
                              <div className="relative tab-list active" id="community">
                                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-pulse-soft"></div>
                                  <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 max-w-[95%] mx-auto">
                                      <div className="h-1 w-full bg-gradient-to-r from-primary/30 via-primary to-primary/30"></div>
                                      <div className="p-0">
                                          <div className="relative h-24 sm:h-32 w-full overflow-hidden">
                                              <img
                                                  alt="Travel community gathering"
                                                  loading="lazy"
                                                  decoding="async"
                                                  data-nimg="fill"
                                                  className="object-cover transition-transform duration-700 hover:scale-110"
                                                  style={{
                                                    position: 'absolute',
                                                    height: '100%',
                                                    width: '100%',
                                                    inset: 0,
                                                    color: 'transparent',
                                                  }}
                                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/community-gathering-UlZYUJCTevTyq0hH1sSVKq0LzbMlPR.jpg"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>
                                              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                                                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">Join Our Travel Community</h3>
                                                  <p className="text-white/90 text-sm max-w-md drop-shadow-md">Connect with passionate travelers across India</p>
                                              </div>
                                          </div>
                                          <div className="p-3 sm:p-6 bg-gradient-to-b from-[#0F172A]/95 to-[#0F172A]/80">
                                              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-6">
                                                  <div className="flex items-start gap-3 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-users h-4 w-4"
                                                          >
                                                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                              <circle cx="9" cy="7" r="4"></circle>
                                                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">Local Meetups</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">Connect with travelers in your city</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-start gap-3 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-map-pin h-4 w-4"
                                                          >
                                                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                              <circle cx="12" cy="10" r="3"></circle>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">City Groups</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">25+ active city communities</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-start gap-3 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-calendar h-4 w-4"
                                                          >
                                                              <path d="M8 2v4"></path>
                                                              <path d="M16 2v4"></path>
                                                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                              <path d="M3 10h18"></path>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">Events</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">500+ monthly meetups</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-start gap-3 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-message-circle h-4 w-4"
                                                          >
                                                              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">Travel Forums</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">Share tips and experiences</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="bg-white/5 rounded-xl p-4 mb-5 backdrop-blur-sm border border-white/10">
                                                  <div className="flex items-center justify-between mb-3">
                                                      <h4 className="text-sm font-medium text-white">Active Members</h4>
                                                      <div className="flex items-center gap-1">
                                                          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                                                          <span className="text-xs text-primary">2,500+ online</span>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-center gap-3">
                                                      <div className="flex -space-x-3">
                                                          <div
                                                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-[#0F172A] ring-1 ring-primary/20 transition-all duration-300 hover:scale-110 hover:z-10"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('/member-1.jpg')",
                                                                backgroundSize: 'cover',
                                                                zIndex: 5,
                                                              }}
                                                          ></div>
                                                          <div
                                                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-[#0F172A] ring-1 ring-primary/20 transition-all duration-300 hover:scale-110 hover:z-10"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('/member-2.jpg')",
                                                                backgroundSize: 'cover',
                                                                zIndex: 4,
                                                              }}
                                                          ></div>
                                                          <div
                                                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-[#0F172A] ring-1 ring-primary/20 transition-all duration-300 hover:scale-110 hover:z-10"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('/member-3.jpg')",
                                                                backgroundSize: 'cover',
                                                                zIndex: 3,
                                                              }}
                                                          ></div>
                                                          <div
                                                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-[#0F172A] ring-1 ring-primary/20 transition-all duration-300 hover:scale-110 hover:z-10"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('/member-4.jpg')",
                                                                backgroundSize: 'cover',
                                                                zIndex: 2,
                                                              }}
                                                          ></div>
                                                          <div
                                                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-[#0F172A] ring-1 ring-primary/20 transition-all duration-300 hover:scale-110 hover:z-10"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('/member-5.jpg')",
                                                                backgroundSize: 'cover',
                                                                zIndex: 1,
                                                              }}
                                                          ></div>
                                                      </div>
                                                      <div className="text-xs text-white/80">
                                                          <p>Join <span className="text-primary font-medium">10,000+</span> <span className="hidden sm:inline">travelers across India</span><span className="sm:hidden">travelers</span></p>
                                                          <p className="hidden sm:block">across India</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <a href="/community">
                                                  <button
                                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary h-10 px-4 py-2 w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 group text-xs sm:text-sm"
                                                  >
                                                      Explore Community
                                                      <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="24"
                                                          height="24"
                                                          viewBox="0 0 24 24"
                                                          fill="none"
                                                          stroke="currentColor"
                                                          stroke-width="2"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                                                      >
                                                          <path d="M5 12h14"></path>
                                                          <path d="m12 5 7 7-7 7"></path>
                                                      </svg>
                                                  </button>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="relative tab-list" id="experts" style={{display: 'none'}}>
                                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-pulse-soft"></div>
                                  <div
                                      className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 max-w-[95%] mx-auto"
                                      style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}
                                  >
                                      <div className="h-1 w-full bg-gradient-to-r from-primary/30 via-primary to-primary/30"></div>
                                      <div className="p-0">
                                          <div className="relative h-24 sm:h-32 w-full overflow-hidden">
                                              <img
                                                  alt="Travel expert consultation"
                                                  loading="lazy"
                                                  decoding="async"
                                                  data-nimg="fill"
                                                  className="object-cover transition-transform duration-700 hover:scale-110"
                                                  style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/premium-travel-bg-QEFwEm4E3JDndSBOxwnGwgABkEVOmR.jpg"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/70"></div>
                                              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                                                  <img
                                                      alt=""
                                                      loading="lazy"
                                                      decoding="async"
                                                      data-nimg="fill"
                                                      className="object-cover"
                                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/subtle-pattern-4mbjcNBH2Uzr6sXj5BWnHjLfCLJfLW.png"
                                                  />
                                              </div>
                                              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                                                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">Connect with Travel Experts</h3>
                                                  <p className="text-white/90 text-sm max-w-md drop-shadow-md">Get personalized guidance from local experts</p>
                                              </div>
                                          </div>
                                          <div className="p-3 sm:p-6 bg-gradient-to-b from-[#0F172A]/95 to-[#0F172A]/80">
                                              <div className="flex items-center gap-2 mb-4">
                                                  <div className="relative group cursor-pointer">
                                                      <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-all duration-300">
                                                          <img
                                                              alt="Rahul"
                                                              loading="lazy"
                                                              decoding="async"
                                                              data-nimg="fill"
                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                              style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-1-Qd5JOMBYLc4AZ6oNEzdBL9WGqL2r4L.jpg"
                                                          />
                                                      </div>
                                                      <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-primary/90 text-white text-[10px] px-1 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-star h-2 w-2 fill-current"
                                                          >
                                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                          </svg>
                                                          <span>4.9</span>
                                                      </div>
                                                  </div>
                                                  <div className="relative group cursor-pointer">
                                                      <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-all duration-300">
                                                          <img
                                                              alt="Priya"
                                                              loading="lazy"
                                                              decoding="async"
                                                              data-nimg="fill"
                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                              style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-2-VCbwS3dhFwX7lXBulVgC1MsEDZ1ZvO.jpg"
                                                          />
                                                      </div>
                                                      <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-primary/90 text-white text-[10px] px-1 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-star h-2 w-2 fill-current"
                                                          >
                                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                          </svg>
                                                          <span>4.8</span>
                                                      </div>
                                                  </div>
                                                  <div className="relative group cursor-pointer">
                                                      <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-all duration-300">
                                                          <img
                                                              alt="Arjun"
                                                              loading="lazy"
                                                              decoding="async"
                                                              data-nimg="fill"
                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                              style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-3-zBcUxckhZXxm4jHFWu4RXyHuDeZ0Ky.jpg"
                                                          />
                                                      </div>
                                                      <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-primary/90 text-white text-[10px] px-1 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-star h-2 w-2 fill-current"
                                                          >
                                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                          </svg>
                                                          <span>4.7</span>
                                                      </div>
                                                  </div>
                                                  <div className="relative group cursor-pointer">
                                                      <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-all duration-300">
                                                          <img
                                                              alt="Meera"
                                                              loading="lazy"
                                                              decoding="async"
                                                              data-nimg="fill"
                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                              style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-profile-4-FVf48Lvgw3x1fFeTAN4jjXTeQ6Olf0.jpg"
                                                          />
                                                      </div>
                                                      <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-primary/90 text-white text-[10px] px-1 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-star h-2 w-2 fill-current"
                                                          >
                                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                          </svg>
                                                          <span>4.9</span>
                                                      </div>
                                                  </div>
                                                  <div className="h-14 w-14 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/70 text-xs hover:bg-white/10 transition-colors duration-300 cursor-pointer">500+</div>
                                              </div>
                                              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                                                  <div className="flex items-start gap-2 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-video h-4 w-4"
                                                          >
                                                              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                              <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">Video Consultations</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">One-on-one planning</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-start gap-2 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-map-pin h-4 w-4"
                                                          >
                                                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                              <circle cx="12" cy="10" r="3"></circle>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">Local Insights</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">Hidden gems and tips</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-start gap-2 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-calendar h-4 w-4"
                                                          >
                                                              <path d="M8 2v4"></path>
                                                              <path d="M16 2v4"></path>
                                                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                              <path d="M3 10h18"></path>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">Custom Itineraries</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">Personalized plans</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-start gap-2 group">
                                                      <div className="mt-0.5 rounded-full bg-primary/20 p-1 sm:p-2 text-primary group-hover:bg-primary/30 transition-colors duration-300">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-message-circle h-4 w-4"
                                                          >
                                                              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                                          </svg>
                                                      </div>
                                                      <div>
                                                          <p className="text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">24/7 Support</p>
                                                          <p className="text-xs text-white/70 hidden sm:block">During your travels</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="flex items-center justify-between mb-5">
                                                  <div className="flex items-center gap-2">
                                                      <div className="flex">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              viewBox="0 0 24 24"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              stroke-width="2"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              className="lucide lucide-star h-3 w-3 text-primary fill-current"
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
                                                              className="lucide lucide-star h-3 w-3 text-primary fill-current"
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
                                                              className="lucide lucide-star h-3 w-3 text-primary fill-current"
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
                                                              className="lucide lucide-star h-3 w-3 text-primary fill-current"
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
                                                              className="lucide lucide-star h-3 w-3 text-primary fill-current"
                                                          >
                                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                          </svg>
                                                      </div>
                                                      <span className="text-xs text-white/80">4.9/5</span>
                                                  </div>
                                                  <div className="text-xs text-white/80"><span className="text-primary font-medium">2,000+</span> <span className="hidden sm:inline">satisfied travelers</span><span className="sm:hidden">travelers</span></div>
                                              </div>
                                              <a href="/experts">
                                                  <button
                                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary h-10 px-4 py-2 w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 group text-xs sm:text-sm"
                                                  >
                                                      Find an Expert
                                                      <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="24"
                                                          height="24"
                                                          viewBox="0 0 24 24"
                                                          fill="none"
                                                          stroke="currentColor"
                                                          stroke-width="2"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                                                      >
                                                          <path d="M5 12h14"></path>
                                                          <path d="m12 5 7 7-7 7"></path>
                                                      </svg>
                                                  </button>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative bg-white -mb-1 sm:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto -mt-1 animate-wave">
                      <path
                          fill="#fff"
                          fill-opacity="1"
                          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                      ></path>
                  </svg>
              </div>
          </section>
          <div className="mt-2 sm:mt-4 md:-mt-1 discover-city">
              <section className="relative w-full bg-white py-4 md:py-6">
                  <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                  <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
                  <div className="container mx-auto px-4 md:px-6">
                      <div className="mb-2 md:mb-6 reveal-on-scroll revealed">
                          <div className="flex flex-col items-start justify-between gap-2 md:gap-4 md:flex-row md:items-end">
                              <div>
                                  <h2 className="mb-1 md:mb-2 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-4xl">Discover <span className="text-gradient">India</span> City by City</h2>
                              </div>
                              <a href="experts.html" className="hidden md:block">
                                  <button
                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-9 rounded-md px-3 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                  >
                                      View All Cities
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-chevron-right ml-1 h-4 w-4"
                                      >
                                          <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                  </button>
                              </a>
                          </div>
                      </div>
                      <div className="relative -mx-4 px-4 reveal-on-scroll revealed">
                          <button
                              className="customPrevBtn absolute -left-1 md:-left-2 top-1/2 z-10 flex h-8 w-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
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
                                  className="lucide lucide-chevron-left h-4 w-4 md:h-5 md:w-5"
                              >
                                  <path d="m15 18-6-6 6-6"></path>
                              </svg>
                          </button>
                          <div className="flex snap-x snap-mandatory gap-3 md:gap-4 overflow-x-auto pb-6 scrollbar-hide owl-carousel 4_5owlCarouselstyle" >
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover-lift cursor-pointer group"
                                  style={{ transitionDelay: '0ms' }}>
                                  <a href="">
                                      <div className="absolute inset-0 w-full h-full">
                                      <img
                                          alt="Delhi travel experiences"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/london-premium-8jeoTGo78lLM8UyAaEM58O7L1pk3IK.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  </div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <div>
                                          <div className="flex items-center gap-2 mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">
                                              <div className="bg-primary/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle"
                                                      style={{ transitionDelay: '0ms' }}
                                                      
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <h3 className="text-xl md:text-2xl font-bold text-white">Delhi</h3>
                                          </div>
                                          <div className="w-full">
                                              <button
                                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full text-sm md:text-base bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                              >
                                                  Explore Delhi
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                  >
                                                      <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                                  </a>
                              </div>
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover-lift cursor-pointer group"
                                  style={{ transitionDelay: '50ms' }}
                              >
                                  <div className="absolute inset-0 w-full h-full">
                                      <img
                                          alt="Mumbai travel experiences"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/new-york-premium-HQS1Nz3fo9al4YHlydjjn7jB22qfsY.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  </div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <div>
                                          <div className="flex items-center gap-2 mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">
                                              <div className="bg-primary/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle"
                                                      style={{ animationDelay: '0.2s' }}
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <h3 className="text-xl md:text-2xl font-bold text-white">Mumbai</h3>
                                          </div>
                                          <div className="w-full">
                                              <button
                                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full text-sm md:text-base bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                              >
                                                  Explore Mumbai
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                  >
                                                      <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover-lift cursor-pointer group"
                                  style={{ transitionDelay: '100ms' }}
                              >
                                  <div className="absolute inset-0 w-full h-full">
                                      <img
                                          alt="Jaipur travel experiences"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/paris-premium-KRxmtU7XnvAoZD5QnMjcCj6anBcJ32.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  </div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <div>
                                          <div className="flex items-center gap-2 mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">
                                              <div className="bg-primary/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle"
                                                      style={{ transitionDelay: '0.4s' }}
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <h3 className="text-xl md:text-2xl font-bold text-white">Jaipur</h3>
                                          </div>
                                          <div className="w-full">
                                              <button
                                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full text-sm md:text-base bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                              >
                                                  Explore Jaipur
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                  >
                                                      <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover-lift cursor-pointer group"
                                  style={{ transitionDelay: '150ms' }}
                              >
                                  <div className="absolute inset-0 w-full h-full">
                                      <img
                                          alt="Goa travel experiences"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/barcelona-premium-jIqylTxnl7GAfqWMHqRHt7FbLQYMgj.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  </div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <div>
                                          <div className="flex items-center gap-2 mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">
                                              <div className="bg-primary/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle"
                                                      style={{ transitionDelay: '0.6s' }}
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <h3 className="text-xl md:text-2xl font-bold text-white">Goa</h3>
                                          </div>
                                          <div className="w-full">
                                              <button
                                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full text-sm md:text-base bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                              >
                                                  Explore Goa
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                  >
                                                      <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover-lift cursor-pointer group"
                                  style={{ transitionDelay: '200ms' }}
                              >
                                  <div className="absolute inset-0 w-full h-full">
                                      <img
                                          alt="Varanasi travel experiences"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tokyo-premium-QP12TkkIL0YeIX4LSGHtSn8zXYPV9p.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  </div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <div>
                                          <div className="flex items-center gap-2 mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">
                                              <div className="bg-primary/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle"
                                                      style={{ transitionDelay: '0.8s' }}
                                                      
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <h3 className="text-xl md:text-2xl font-bold text-white">Varanasi</h3>
                                          </div>
                                          <div className="w-full">
                                              <button
                                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full text-sm md:text-base bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                              >
                                                  Explore Varanasi
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                  >
                                                      <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover-lift cursor-pointer group"
                                  style={{ transitionDelay: '250ms' }}
                              >
                                  <div className="absolute inset-0 w-full h-full">
                                      <img
                                          alt="Kochi travel experiences"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sydney-premium-prJY3YIRtvcGBUfn40iraQmlgA9y6O.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  </div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <div>
                                          <div className="flex items-center gap-2 mb-3 group-hover:translate-y-[-5px] transition-transform duration-300">
                                              <div className="bg-primary/20 backdrop-blur-sm p-1.5 md:p-2 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle"
                                                      style={{ transitionDelay: '1s' }}

                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <h3 className="text-xl md:text-2xl font-bold text-white">Kochi</h3>
                                          </div>
                                          <div className="w-full">
                                              <button
                                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full text-sm md:text-base bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                              >
                                                  Explore Kochi
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                  >
                                                      <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="relative h-[180px] md:h-[350px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-4 md:p-6 text-center hover-lift"
                              >
                                  <div className="mb-3 md:mb-6 rounded-full bg-primary/10 p-3 md:p-4">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-map-pin h-6 w-6 md:h-8 md:w-8 text-primary"
                                      >
                                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                  </div>
                                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1 md:mb-2">Explore All Cities</h3>
                                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 hidden md:block">Discover experts and experiences in 25+ cities across India</p>
                                  <a href="/experts">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 text-sm md:text-base bg-primary text-white hover:bg-primary/90 btn-pulse"
                                      >
                                          View All Cities
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                          <button
                              className="customNextBtn absolute -right-1 md:-right-2 top-1/2 z-10 flex h-8 w-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
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
                                  className="lucide lucide-chevron-right h-4 w-4 md:h-5 md:w-5"
                              >
                                  <path d="m9 18 6-6-6-6"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
              </section>
          </div>

        
          <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-12 md:py-20 overflow-hidden meet-section">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover opacity-30"
                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/subtle-pattern-4mbjcNBH2Uzr6sXj5BWnHjLfCLJfLW.png"
                  />
              </div>
              <div className="container mx-auto px-4 md:px-6 relative">
                  <div className="mb-8 md:mb-16 reveal-on-scroll">
                      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                          <div className="relative">
                              <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Travel Experts
                              </div>
                              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl">
                                  Meet Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Local Experts</span>
                              </h2>
                              <p className="text-slate-600 max-w-xl text-lg">Connect with verified local experts who can make your travel experience truly exceptional</p>
                              <div className="absolute -right-16 -top-10 h-20 w-20 rounded-full bg-primary/5 blur-xl hidden md:block"></div>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="hidden md:flex items-center gap-2">
                                  <button
                                      className="customPrevBtnMeet flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
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
                                          className="lucide lucide-chevron-left h-4 w-4"
                                      >
                                          <path d="m15 18-6-6 6-6"></path>
                                      </svg>
                                  </button>
                                  <button
                                      className="customNextBtnMeet flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
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
                                          className="lucide lucide-chevron-right h-4 w-4"
                                          >
                                          <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                  </button>
                              </div>
                              <a href="experts.html" className="relative group">
                                  <div className="absolute -inset-4 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                                  <button
                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 border-primary/30 bg-white text-primary hover:bg-primary/10 btn-pulse relative"
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
                                          className="lucide lucide-chevron-right ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                                      >
                                          <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                  </button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="relative reveal-on-scroll">
                      <div className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 md:hidden">
                          <button className="customPrevBtnMeet flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg hover:bg-primary/10 hover:text-primary transition-all duration-300" aria-label="Previous expert">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-chevron-left h-5 w-5"
                              >
                                  <path d="m15 18-6-6 6-6"></path>
                              </svg>
                          </button>
                      </div>
                      <div className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 md:hidden">
                          <button className="customNextBtnMeet flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg hover:bg-primary/10 hover:text-primary transition-all duration-300" aria-label="Next expert">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-chevron-right h-5 w-5"
                              >
                                  <path d="m9 18 6-6-6-6"></path>
                              </svg>
                          </button>
                      </div>
                      <div className="flex snap-x snap-mandatory gap-3 md:gap-4 overflow-x-auto pb-6 px-1 scrollbar-hide owl-carousel foutHalfowlCarouselstyle"  style={{ scrollbarWidth: 'none' }}>
                          <div className="snap-start" style={{ transitionDelay: '0ms' }}>
                              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover-lift h-full border border-slate-100 cursor-pointer">
                                  <div className="relative h-40 md:h-64 w-full overflow-hidden">
                                      <img
                                          alt="Rahul Sharma"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                                      <div className="absolute top-2 md:top-4 right-2 md:right-4 flex items-center gap-1 bg-primary/90 text-white text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-star h-3 w-3 md:h-3.5 md:w-3.5 fill-current"
                                          >
                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                          <span className="font-medium">4.9</span>
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                                          <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                              <div className="bg-white/20 backdrop-blur-sm p-0.5 md:p-1 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-3 w-3 md:h-3.5 md:w-3.5 text-white"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <span className="text-xs md:text-sm font-medium text-white/90">Delhi</span>
                                          </div>
                                          <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary/90 transition-colors duration-300 line-clamp-1">Rahul Sharma</h3>
                                          <div className="flex flex-wrap gap-1 md:gap-1.5">
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  Himalayan Treks
                                              </div>
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  +1
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="p-2 md:p-5">
                                      <div className="flex items-center justify-between mb-1 md:mb-3">
                                          <div className="text-xs md:text-sm text-primary font-medium group-hover:underline flex items-center">
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
                                                  className="lucide lucide-arrow-right inline h-3 w-3 md:h-3.5 md:w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                              >
                                                  <path d="M5 12h14"></path>
                                                  <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                          </div>
                                      </div>
                                      <div className="text-xs md:text-sm text-slate-600 line-clamp-1 md:line-clamp-2">Himalayan Treks, Adventure expert</div>
                                  </div>
                              </div>
                          </div>
                          <div className="snap-start" style={{transitionDelay: '50ms'}}>
                              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover-lift h-full border border-slate-100 cursor-pointer">
                                  <div className="relative h-40 md:h-64 w-full overflow-hidden">
                                      <img
                                          alt="Priya Patel"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-avatar-MOHPr7TbTXzKEubB3Vk3GxIENNM0eG.jpg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                                      <div className="absolute top-2 md:top-4 right-2 md:right-4 flex items-center gap-1 bg-primary/90 text-white text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-star h-3 w-3 md:h-3.5 md:w-3.5 fill-current"
                                          >
                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                          <span className="font-medium">4.8</span>
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                                          <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                              <div className="bg-white/20 backdrop-blur-sm p-0.5 md:p-1 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-3 w-3 md:h-3.5 md:w-3.5 text-white"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <span className="text-xs md:text-sm font-medium text-white/90">Mumbai</span>
                                          </div>
                                          <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary/90 transition-colors duration-300 line-clamp-1">Priya Patel</h3>
                                          <div className="flex flex-wrap gap-1 md:gap-1.5">
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  Cultural Tours
                                              </div>
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  +1
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="p-2 md:p-5">
                                      <div className="flex items-center justify-between mb-1 md:mb-3">
                                          <div className="text-xs md:text-sm text-primary font-medium group-hover:underline flex items-center">
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
                                                  className="lucide lucide-arrow-right inline h-3 w-3 md:h-3.5 md:w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                              >
                                                  <path d="M5 12h14"></path>
                                                  <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                          </div>
                                      </div>
                                      <div className="text-xs md:text-sm text-slate-600 line-clamp-1 md:line-clamp-2">Cultural Tours, Food expert</div>
                                  </div>
                              </div>
                          </div>
                          <div className="snap-start" style={{transitionDelay: '100ms'}}>
                              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover-lift h-full border border-slate-100 cursor-pointer">
                                  <div className="relative h-40 md:h-64 w-full overflow-hidden">
                                      <img
                                          alt="Vikram Singh"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://v0.blob.com/Yd9Ij.png"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                                      <div className="absolute top-2 md:top-4 right-2 md:right-4 flex items-center gap-1 bg-primary/90 text-white text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-star h-3 w-3 md:h-3.5 md:w-3.5 fill-current"
                                          >
                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                          <span className="font-medium">4.9</span>
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                                          <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                              <div className="bg-white/20 backdrop-blur-sm p-0.5 md:p-1 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-3 w-3 md:h-3.5 md:w-3.5 text-white"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <span className="text-xs md:text-sm font-medium text-white/90">Jaipur</span>
                                          </div>
                                          <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary/90 transition-colors duration-300 line-clamp-1">Vikram Singh</h3>
                                          <div className="flex flex-wrap gap-1 md:gap-1.5">
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  Heritage
                                              </div>
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  +1
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="p-2 md:p-5">
                                      <div className="flex items-center justify-between mb-1 md:mb-3">
                                          <div className="text-xs md:text-sm text-primary font-medium group-hover:underline flex items-center">
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
                                                  className="lucide lucide-arrow-right inline h-3 w-3 md:h-3.5 md:w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                              >
                                                  <path d="M5 12h14"></path>
                                                  <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                          </div>
                                      </div>
                                      <div className="text-xs md:text-sm text-slate-600 line-clamp-1 md:line-clamp-2">Heritage, Desert Safaris expert</div>
                                  </div>
                              </div>
                          </div>
                          <div className="snap-start" style={{transitionDelay: '150ms'}}>
                              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover-lift h-full border border-slate-100 cursor-pointer">
                                  <div className="relative h-40 md:h-64 w-full overflow-hidden">
                                      <img
                                          alt="Ananya Desai"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://v0.blob.com/Yd9Ij.png"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                                      <div className="absolute top-2 md:top-4 right-2 md:right-4 flex items-center gap-1 bg-primary/90 text-white text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-star h-3 w-3 md:h-3.5 md:w-3.5 fill-current"
                                          >
                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                          <span className="font-medium">4.7</span>
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                                          <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                              <div className="bg-white/20 backdrop-blur-sm p-0.5 md:p-1 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-3 w-3 md:h-3.5 md:w-3.5 text-white"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <span className="text-xs md:text-sm font-medium text-white/90">Goa</span>
                                          </div>
                                          <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary/90 transition-colors duration-300 line-clamp-1">Ananya Desai</h3>
                                          <div className="flex flex-wrap gap-1 md:gap-1.5">
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  Beach Life
                                              </div>
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  +1
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="p-2 md:p-5">
                                      <div className="flex items-center justify-between mb-1 md:mb-3">
                                          <div className="text-xs md:text-sm text-primary font-medium group-hover:underline flex items-center">
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
                                                  className="lucide lucide-arrow-right inline h-3 w-3 md:h-3.5 md:w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                              >
                                                  <path d="M5 12h14"></path>
                                                  <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                          </div>
                                      </div>
                                      <div className="text-xs md:text-sm text-slate-600 line-clamp-1 md:line-clamp-2">Beach Life, Water Sports expert</div>
                                  </div>
                              </div>
                          </div>
                          <div className="snap-start" style={{transitionDelay: '200ms'}}>
                              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover-lift h-full border border-slate-100 cursor-pointer">
                                  <div className="relative h-40 md:h-64 w-full overflow-hidden">
                                      <img
                                          alt="Arjun Mehta"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://v0.blob.com/Yd9Ij.png"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                                      <div className="absolute top-2 md:top-4 right-2 md:right-4 flex items-center gap-1 bg-primary/90 text-white text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-star h-3 w-3 md:h-3.5 md:w-3.5 fill-current"
                                          >
                                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                          <span className="font-medium">4.9</span>
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                                          <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                              <div className="bg-white/20 backdrop-blur-sm p-0.5 md:p-1 rounded-full">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      className="lucide lucide-map-pin h-3 w-3 md:h-3.5 md:w-3.5 text-white"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                      <circle cx="12" cy="10" r="3"></circle>
                                                  </svg>
                                              </div>
                                              <span className="text-xs md:text-sm font-medium text-white/90">Varanasi</span>
                                          </div>
                                          <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary/90 transition-colors duration-300 line-clamp-1">Arjun Mehta</h3>
                                          <div className="flex flex-wrap gap-1 md:gap-1.5">
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  Spiritual
                                              </div>
                                              <div
                                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs border-none backdrop-blur-sm"
                                                  data-v0-t="badge"
                                              >
                                                  +1
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="p-2 md:p-5">
                                      <div className="flex items-center justify-between mb-1 md:mb-3">
                                          <div className="text-xs md:text-sm text-primary font-medium group-hover:underline flex items-center">
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
                                                  className="lucide lucide-arrow-right inline h-3 w-3 md:h-3.5 md:w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                              >
                                                  <path d="M5 12h14"></path>
                                                  <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                          </div>
                                      </div>
                                      <div className="text-xs md:text-sm text-slate-600 line-clamp-1 md:line-clamp-2">Spiritual, River Cruises expert</div>
                                  </div>
                              </div>
                          </div>
                          <div className="snap-start overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-4 md:p-8 text-center hover-lift relative"
                              >
                              <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-primary/10 rounded-full blur-2xl"></div>
                              <div className="absolute bottom-0 left-0 w-12 md:w-24 h-12 md:h-24 bg-primary/10 rounded-full blur-2xl"></div>
                              <div className="mb-3 md:mb-6 rounded-full bg-white/80 backdrop-blur-sm p-3 md:p-5 shadow-lg relative">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-star h-5 w-5 md:h-8 md:w-8 text-primary"
                                  >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                  <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-primary text-[8px] md:text-[10px] text-white">+</span>
                              </div>
                              <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-1 md:mb-3">500+ Experts</h3>
                              <p className="text-xs md:text-base text-slate-600 mb-3 md:mb-6 hidden md:block">Get personalized guidance from local experts who know their destinations inside out</p>
                              <a href="/experts" className="group">
                                  <button
                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 text-xs md:text-base bg-primary text-white hover:bg-primary/90 btn-pulse shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
                                  >
                                      Find Your Expert
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-chevron-right ml-1 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform duration-300"
                                      >
                                          <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                  </button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 reveal-on-scroll">
                      <a href="/experts/all?selectedSpecialty=Adventure" className="group">
                          <div
                              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] text-center border border-slate-100 group-hover:border-primary/20"
                          >
                              <div className="text-2xl md:text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">🏔️</div>
                              <h4 className="font-medium text-slate-800 text-xs md:text-sm">Adventure</h4>
                          </div>
                      </a>
                      <a href="/experts/all?selectedSpecialty=Cultural" className="group">
                          <div
                              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] text-center border border-slate-100 group-hover:border-primary/20"
                          >
                              <div className="text-2xl md:text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">🏛️</div>
                              <h4 className="font-medium text-slate-800 text-xs md:text-sm">Cultural</h4>
                          </div>
                      </a>
                      <a href="/experts/all?selectedSpecialty=Food" className="group">
                          <div
                              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] text-center border border-slate-100 group-hover:border-primary/20"
                          >
                              <div className="text-2xl md:text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">🍲</div>
                              <h4 className="font-medium text-slate-800 text-xs md:text-sm">Culinary</h4>
                          </div>
                      </a>
                      <a href="/experts/all?selectedSpecialty=Wildlife" className="group">
                          <div
                              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] text-center border border-slate-100 group-hover:border-primary/20"
                          >
                              <div className="text-2xl md:text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">🐯</div>
                              <h4 className="font-medium text-slate-800 text-xs md:text-sm">Wildlife</h4>
                          </div>
                      </a>
                      <a href="/experts/all?selectedSpecialty=Photography" className="group">
                          <div
                              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] text-center border border-slate-100 group-hover:border-primary/20"
                          >
                              <div className="text-2xl md:text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">📸</div>
                              <h4 className="font-medium text-slate-800 text-xs md:text-sm">Photography</h4>
                          </div>
                      </a>
                      <a href="/experts/all?selectedSpecialty=Yoga" className="group">
                          <div
                              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] text-center border border-slate-100 group-hover:border-primary/20"
                          >
                              <div className="text-2xl md:text-3xl mb-1 transform transition-transform duration-300 group-hover:scale-110">🧘</div>
                              <h4 className="font-medium text-slate-800 text-xs md:text-sm">Wellness</h4>
                          </div>
                      </a>
                  </div>
                  <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden shadow-xl reveal-on-scroll">
                      <div className="relative h-48 md:h-64">
                          <img
                              alt="Connect with experts"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover"
                              style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/community-gathering-UlZYUJCTevTyq0hH1sSVKq0LzbMlPR.jpg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
                          <div className="absolute inset-0 flex items-center">
                              <div className="w-full md:w-1/2 p-6 md:p-10">
                                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready for your next adventure?</h3>
                                  <p className="text-white/90 mb-6 text-sm md:text-base">Get personalized guidance from local experts who can transform your travel experience</p>
                                  <a href="/experts" className="group">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-white text-primary hover:bg-white/90 btn-pulse shadow-lg group-hover:shadow-white/20 transition-all duration-300"
                                      >
                                          Explore Experts
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
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
          </section>
          <section className="py-16 md:py-24 bg-white">
              <div className="container mx-auto px-4 md:px-6">
                  <div className="text-center mb-12">
                      <div
                          className="border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
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
                              className="lucide lucide-globe mr-1 h-3 w-3"
                          >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                          </svg>
                          Explore By Category
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Discover Destinations <span className="text-primary">Your Way</span></h2>
                      <p className="text-slate-600 max-w-2xl mx-auto">From pristine beaches to majestic mountains, ancient temples to modern cities, find your perfect destination based on your travel style and interests.</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                          <a href="/destinations/categories#international" className="block">
                              <div className="relative h-48 overflow-hidden">
                                  <img
                                      alt="International"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/global-wonders-LhT8F4U940aZy81mGDCrpxuKJV8Dh8.png"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                                      <div className="mb-3">
                                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg mb-2">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  className="lucide lucide-globe h-5 w-5"
                                              >
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                  <path d="M2 12h20"></path>
                                              </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-white">International</h3>
                                      </div>
                                      <p className="text-sm text-white/80 mb-3 line-clamp-2">Explore exciting destinations around the world</p>
                                      <div className="flex items-center text-white text-sm font-medium">
                                          <span>Explore</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right h-4 w-4 ml-1 transition-transform duration-300"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                          <a href="/destinations/categories#india" className="block">
                              <div className="relative h-48 overflow-hidden">
                                  <img
                                      alt="India Destinations"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/taj-mahal-serenity-FVxipiLuTBAGtnJ37eXtZDeUV1n5aS.png"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                                      <div className="mb-3">
                                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg mb-2">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  className="lucide lucide-map-pin h-5 w-5"
                                              >
                                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                  <circle cx="12" cy="10" r="3"></circle>
                                              </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-white">India Destinations</h3>
                                      </div>
                                      <p className="text-sm text-white/80 mb-3 line-clamp-2">Discover the diverse beauty of incredible India</p>
                                      <div className="flex items-center text-white text-sm font-medium">
                                          <span>Explore</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right h-4 w-4 ml-1 transition-transform duration-300"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                          <a href="/destinations/categories#spiritual" className="block">
                              <div className="relative h-48 overflow-hidden">
                                  <img
                                      alt="Spiritual Retreats"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/serene-mountain-sanctuary-7ema4wVV6H1YxkAV0812MseoEJfnLp.png"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                                      <div className="mb-3">
                                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg mb-2">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  className="lucide lucide-heart h-5 w-5"
                                              >
                                                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                              </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-white">Spiritual Retreats</h3>
                                      </div>
                                      <p className="text-sm text-white/80 mb-3 line-clamp-2">Find peace and reconnect with yourself</p>
                                      <div className="flex items-center text-white text-sm font-medium">
                                          <span>Explore</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right h-4 w-4 ml-1 transition-transform duration-300"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 border border-slate-100">
                          <a href="/destinations/categories#adventure" className="block">
                              <div className="relative h-48 overflow-hidden">
                                  <img
                                      alt="Adventure Travel"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mountain-vista-hike-jjrGbhIbgsXG9voF8oOhdyTSPxI4XD.png"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                                      <div className="mb-3">
                                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg mb-2">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  className="lucide lucide-compass h-5 w-5"
                                              >
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                                              </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-white">Adventure Travel</h3>
                                      </div>
                                      <p className="text-sm text-white/80 mb-3 line-clamp-2">Thrilling experiences for the daring traveler</p>
                                      <div className="flex items-center text-white text-sm font-medium">
                                          <span>Explore</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right h-4 w-4 ml-1 transition-transform duration-300"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div className="text-center mt-10">
                      <a
                          href="/destinations/categories"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-6"
                      >
                          View All Destination Categories
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-chevron-right ml-1 h-4 w-4"
                          >
                              <path d="m9 18 6-6-6-6"></path>
                          </svg>
                      </a>
                  </div>
              </div>
          </section>
          <section className="relative w-full bg-slate-50 py-12 md:py-24 travel-community-section">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
              <div className="container mx-auto px-4 md:px-6">
                  <div className="mb-6 md:mb-10 reveal-on-scroll">
                      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                          <div>
                              <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Travel Community
                              </div>
                              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl">Join Our <span className="text-gradient">Travel Community</span></h2>
                              <p className="max-w-[700px] text-sm text-slate-600 md:text-base">Connect with fellow travelers, share experiences, and discover hidden gems. Our community brings together passionate travelers from across India.</p>
                          </div>
                          <div className="flex items-center gap-4 text-sm font-medium">
                              <a href="community.html" className="hidden text-primary md:inline">Explore community</a>
                              <a href="meetups.html" className="hidden text-primary md:inline">View all meetups</a>
                              <div className="flex gap-2">
                                  <a href="community.html">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-9 rounded-md px-3 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                      >
                                          <span className="md:hidden">Explore community</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right h-4 w-4"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </button>
                                  </a>
                                  <a href="meetups.html">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-9 rounded-md px-3 border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                      >
                                          <span className="md:hidden">View meetups</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-calendar h-4 w-4"
                                          >
                                              <path d="M8 2v4"></path>
                                              <path d="M16 2v4"></path>
                                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                              <path d="M3 10h18"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="relative -mx-4 px-4 reveal-on-scroll">
                      <button
                          className="customPrevBtnCommunity absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
                          aria-label="Previous highlight"
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
                              className="lucide lucide-chevron-left h-5 w-5"
                          >
                              <path d="m15 18-6-6 6-6"></path>
                          </svg>
                      </button>
                      <div className="flex snap-x snap-mandatory gap-3 md:gap-4 overflow-x-auto pb-6 scrollbar-hide owl-carousel 4travel_community" >
                          <div
                              className="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{transitionDelay: '0ms'}}
                              data-v0-t="card"
                          >
                              <div className="relative h-36 md:h-40 w-full overflow-hidden">
                                  <img
                                      alt="Mumbai Heritage Walk"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://v0.blob.com/Nt9Ij.jpg"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  <div className="absolute bottom-4 left-4 right-4">
                                      <h3 className="text-lg font-bold text-white mb-1">Mumbai Heritage Walk</h3>
                                      <div className="flex items-center gap-1.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-calendar h-3 w-3 text-primary"
                                          >
                                              <path d="M8 2v4"></path>
                                              <path d="M16 2v4"></path>
                                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                              <path d="M3 10h18"></path>
                                          </svg>
                                          <span className="text-sm text-slate-200">May 12, 2024</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="p-3 md:p-4">
                                  <div className="mb-3 space-y-2">
                                      <div className="flex items-center gap-2">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-map-pin h-4 w-4 text-primary"
                                          >
                                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                              <circle cx="12" cy="10" r="3"></circle>
                                          </svg>
                                          <span className="text-sm text-slate-600">CSMT, Mumbai</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-users h-4 w-4 text-primary"
                                          >
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="9" cy="7" r="4"></circle>
                                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                          </svg>
                                          <span className="text-sm text-slate-600">38 attendees</span>
                                      </div>
                                  </div>
                                  <a href="/meetups">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                      >
                                          View Details
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-arrow-right ml-2 h-4 w-4"
                                          >
                                              <path d="M5 12h14"></path>
                                              <path d="m12 5 7 7-7 7"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                          <div
                              className="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{transitionDelay: '50ms'}}
                              data-v0-t="card"
                          >
                              <div className="relative h-36 md:h-40 w-full overflow-hidden">
                                  <img
                                      alt="Delhi Food Tour"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://v0.blob.com/Nt9Ij.jpg"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  <div className="absolute bottom-4 left-4 right-4">
                                      <h3 className="text-lg font-bold text-white mb-1">Delhi Food Tour</h3>
                                      <div className="flex items-center gap-1.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-calendar h-3 w-3 text-primary"
                                          >
                                              <path d="M8 2v4"></path>
                                              <path d="M16 2v4"></path>
                                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                              <path d="M3 10h18"></path>
                                          </svg>
                                          <span className="text-sm text-slate-200">April 28, 2024</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="p-3 md:p-4">
                                  <div className="mb-3 space-y-2">
                                      <div className="flex items-center gap-2">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-map-pin h-4 w-4 text-primary"
                                          >
                                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                              <circle cx="12" cy="10" r="3"></circle>
                                          </svg>
                                          <span className="text-sm text-slate-600">Chandni Chowk, Delhi</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-users h-4 w-4 text-primary"
                                          >
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="9" cy="7" r="4"></circle>
                                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                          </svg>
                                          <span className="text-sm text-slate-600">25 attendees</span>
                                      </div>
                                  </div>
                                  <a href="/meetups">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                      >
                                          View Details
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-arrow-right ml-2 h-4 w-4"
                                          >
                                              <path d="M5 12h14"></path>
                                              <path d="m12 5 7 7-7 7"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                          <div
                              className="text-card-foreground group flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{transitionDelay: '100ms'}}
                              data-v0-t="card"
                          >
                              <div className="relative h-36 md:h-40 w-full overflow-hidden">
                                  <img
                                      alt="Goa Beach Cleanup"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/barcelona-event-v8qNb2lZHt1WzNdU6KnSuuIg8g0ybm.jpg"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-70"></div>
                                  <div className="absolute bottom-4 left-4 right-4">
                                      <h3 className="text-lg font-bold text-white mb-1">Goa Beach Cleanup</h3>
                                      <div className="flex items-center gap-1.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-calendar h-3 w-3 text-primary"
                                          >
                                              <path d="M8 2v4"></path>
                                              <path d="M16 2v4"></path>
                                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                              <path d="M3 10h18"></path>
                                          </svg>
                                          <span className="text-sm text-slate-200">June 15, 2024</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="p-3 md:p-4">
                                  <div className="mb-3 space-y-2">
                                      <div className="flex items-center gap-2">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-map-pin h-4 w-4 text-primary"
                                          >
                                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                              <circle cx="12" cy="10" r="3"></circle>
                                          </svg>
                                          <span className="text-sm text-slate-600">Anjuna Beach, Goa</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-users h-4 w-4 text-primary"
                                          >
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="9" cy="7" r="4"></circle>
                                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                          </svg>
                                          <span className="text-sm text-slate-600">42 attendees</span>
                                      </div>
                                  </div>
                                  <a href="/meetups">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 w-full border-primary/30 bg-transparent text-primary hover:bg-primary/10 btn-pulse"
                                      >
                                          View Details
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-arrow-right ml-2 h-4 w-4"
                                          >
                                              <path d="M5 12h14"></path>
                                              <path d="m12 5 7 7-7 7"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                          <div
                              className="travel-community-bg bg-card text-card-foreground group flex-shrink-0 flex-shrink-0 snap-start overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-white p-6 shadow-sm transition-all duration-500 hover-lift hover:shadow-md"
                              data-v0-t="card"
                          >
                              <div className="flex flex-col items-center text-center">
                                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-users h-8 w-8"
                                      >
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="9" cy="7" r="4"></circle>
                                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                      </svg>
                                  </div>
                                  <h3 className="mb-2 text-xl font-bold text-slate-800">Explore Our Full Community</h3>
                                  <p className="mb-4 text-slate-600">Discover all our city groups, upcoming meetups, and connect with thousands of travelers across India.</p>
                                  <a href="/community">
                                      <button
                                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-primary text-white hover:bg-primary/90 btn-pulse"
                                      >
                                          Visit Community Page
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="lucide lucide-chevron-right ml-2 h-4 w-4"
                                          >
                                              <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                      </button>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <button
                          className="customNextBtnCommunity absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
                          aria-label="Next highlight"
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
                              className="lucide lucide-chevron-right h-5 w-5"
                          >
                              <path d="m9 18 6-6-6-6"></path>
                          </svg>
                      </button>
                  </div>
                  <div className="mt-8 text-center">
                      <a href="/meetups">
                          <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-primary text-white hover:bg-primary/90 btn-pulse"
                          >
                              View All Upcoming Meetups
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-calendar ml-2 h-4 w-4"
                              >
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                              </svg>
                          </button>
                      </a>
                  </div>
                  <div className="mt-12 grid gap-4 md:gap-6 md:grid-cols-3 reveal-on-scroll">
                      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                          <div className="mb-3 md:mb-4 flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-map-pin h-5 md:h-6 w-5 md:w-6"
                              >
                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                          </div>
                          <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-bold text-slate-800">Connect Locally</h3>
                          <p className="mb-3 md:mb-4 text-sm md:text-base text-slate-600">Meet like-minded travelers in your city through regular meetups and events.</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                          <div className="mb-3 md:mb-4 flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-users h-5 md:h-6 w-5 md:w-6"
                              >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              </svg>
                          </div>
                          <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-bold text-slate-800">Travel Together</h3>
                          <p className="mb-3 md:mb-4 text-sm md:text-base text-slate-600">Find companions for your next adventure through our travel buddy matching system.</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-all duration-300 hover-lift">
                          <div className="mb-3 md:mb-4 flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-calendar h-5 md:h-6 w-5 md:w-6"
                              >
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                              </svg>
                          </div>
                          <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-bold text-slate-800">Exclusive Events</h3>
                          <p className="mb-3 md:mb-4 text-sm md:text-base text-slate-600">Get access to member-only trips, workshops, and special travel opportunities.</p>
                      </div>
                  </div>
                  <div className="mt-8 md:mt-12 rounded-xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm reveal-on-scroll">
                      <div className="grid gap-6 md:grid-cols-2">
                          <div>
                              <h3 className="mb-4 text-2xl font-bold text-slate-800">Our Growing Community</h3>
                              <p className="mb-6 text-slate-600">Join thousands of travelers who are already part of our vibrant community. Share experiences, make friends, and discover new destinations together.</p>
                              <div className="mb-6 grid grid-cols-3 gap-4">
                                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                                      <p className="text-2xl font-bold text-primary">10K+</p>
                                      <p className="text-xs text-slate-600">Members</p>
                                  </div>
                                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                                      <p className="text-2xl font-bold text-primary">120+</p>
                                      <p className="text-xs text-slate-600">City Groups</p>
                                  </div>
                                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                                      <p className="text-2xl font-bold text-primary">500+</p>
                                      <p className="text-xs text-slate-600">Monthly Meetups</p>
                                  </div>
                              </div>
                              <a href="/community">
                                  <button
                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-primary text-white hover:bg-primary/90 btn-pulse"
                                  >
                                      Join Our Community
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-chevron-right ml-2 h-4 w-4"
                                      >
                                          <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                  </button>
                              </a>
                          </div>
                          <div className="relative hidden md:block">
                              <div className="relative h-full w-full rounded-lg overflow-hidden">
                                  <img
                                      alt="Travel community gathering"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover"
                                      style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/community-gathering-UlZYUJCTevTyq0hH1sSVKq0LzbMlPR.jpg"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                  <div className="absolute bottom-4 left-4 right-4">
                                      <div className="rounded-lg border border-white/10 bg-black/50 p-3 backdrop-blur-sm">
                                          <p className="text-sm italic text-white">"This community changed how I travel. I've made lifelong friends across India and discovered hidden gems I never would have found on my own."</p>
                                          <p className="mt-2 text-xs font-medium text-primary">Priya S., Member since 2022</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="relative w-full bg-white py-8 md:py-16 testimonials-section">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft"></div>
              <div className="container mx-auto px-4 md:px-6">
                  <div className="mb-4 md:mb-6 text-center reveal-on-scroll">
                      <div className="mb-2 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover-lift">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"></span>Testimonials
                      </div>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">What Our <span className="text-gradient">Users</span> Say</h2>
                  </div>
                  <div className="relative -mx-4 px-4 reveal-on-scroll">
                      <button
                          className="customPrevBtn absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:left-2"
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
                              className="lucide lucide-chevron-left h-5 w-5"
                          >
                              <path d="m15 18-6-6 6-6"></path>
                          </svg>
                      </button>
                      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hide owl-carousel 3_5owlCarouselstyle" >
                          <div
                              className="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-3 md:p-5 shadow-sm transition-all duration-300 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{ transitionDelay: '0ms' }}
                              data-v0-t="card"
                          >
                              <div className="flex items-center gap-3 mb-3">
                                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                                      <img
                                          alt="Rahul Mehta"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/member-1-bOpGjZCsPuoiXPcWozfOLLcloeHRto.jpg"
                                      />
                                  </div>
                                  <div>
                                      <h4 className="font-medium text-slate-800">Rahul Mehta</h4>
                                      <p className="text-xs text-primary">Community Member</p>
                                  </div>
                              </div>
                              <div className="relative mb-3 rounded-lg bg-slate-50 p-4">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20"
                                  >
                                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                  </svg>
                                  <p className="pl-2 text-sm italic text-slate-600">Connecting Traveller transformed my trips in India. The local experts helped me discover hidden gems I would have never found on my own. Highly recommended!</p>
                              </div>
                              <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
                                      >
                                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                      </svg>
                                  </div>
                                  <p className="text-xs text-slate-500">Mumbai, India</p>
                              </div>
                          </div>
                          <div
                              className="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-3 md:p-5 shadow-sm transition-all duration-300 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{ transitionDelay: '50ms' }}
                              data-v0-t="card"
                          >
                              <div className="flex items-center gap-3 mb-3">
                                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                                      <img
                                          alt="Anjali Sharma"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-avatar-MOHPr7TbTXzKEubB3Vk3GxIENNM0eG.jpg"
                                      />
                                  </div>
                                  <div>
                                      <h4 className="font-medium text-slate-800">Anjali Sharma</h4>
                                      <p className="text-xs text-primary">Expert User</p>
                                  </div>
                              </div>
                              <div className="relative mb-3 rounded-lg bg-slate-50 p-4">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20"
                                  >
                                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                  </svg>
                                  <p className="pl-2 text-sm italic text-slate-600">The video consultations with local experts were invaluable. They provided authentic insights that no guidebook could offer. My Kerala trip was unforgettable!</p>
                              </div>
                              <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
                                      >
                                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                      </svg>
                                  </div>
                                  <p className="text-xs text-slate-500">Delhi, India</p>
                              </div>
                          </div>
                          <div
                              className="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-3 md:p-5 shadow-sm transition-all duration-300 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{ transitionDelay: '100ms' }}
                              
                              data-v0-t="card"
                          >
                              <div className="flex items-center gap-3 mb-3">
                                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                                      <img
                                          alt="Vikram Patel"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://v0.blob.com/Yd9Ij.png"
                                      />
                                  </div>
                                  <div>
                                      <h4 className="font-medium text-slate-800">Vikram Patel</h4>
                                      <p className="text-xs text-primary">Travel Expert</p>
                                  </div>
                              </div>
                              <div className="relative mb-3 rounded-lg bg-slate-50 p-4">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20"
                                  >
                                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                  </svg>
                                  <p className="pl-2 text-sm italic text-slate-600">As a travel expert on this platform, I've connected with travelers from across the world. Sharing my knowledge of India has been incredibly rewarding.</p>
                              </div>
                              <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
                                      >
                                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                      </svg>
                                  </div>
                                  <p className="text-xs text-slate-500">Bangalore, India</p>
                              </div>
                          </div>
                          <div
                              className="text-card-foreground flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-3 md:p-5 shadow-sm transition-all duration-300 hover-lift hover:border-primary/30 hover:shadow-md"
                              style={{ transitionDelay: '150ms' }}
                              data-v0-t="card"
                          >
                              <div className="flex items-center gap-3 mb-3">
                                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                                      <img
                                          alt="Meera Iyer"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover"
                                          style={{position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent'}}
                                          src="https://v0.blob.com/Yd9Ij.png"
                                      />
                                  </div>
                                  <div>
                                      <h4 className="font-medium text-slate-800">Meera Iyer</h4>
                                      <p className="text-xs text-primary">Community Member</p>
                                  </div>
                              </div>
                              <div className="relative mb-3 rounded-lg bg-slate-50 p-4">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-quote absolute -left-1 -top-1 h-6 w-6 text-primary/20"
                                  >
                                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                  </svg>
                                  <p className="pl-2 text-sm italic text-slate-600">I was hesitant to join at first, but it's been the best travel decision I've made. The community is supportive and I've made lifelong friends across India.</p>
                              </div>
                              <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
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
                                          className="lucide lucide-star h-4 w-4 fill-primary text-primary"
                                      >
                                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                      </svg>
                                  </div>
                                  <p className="text-xs text-slate-500">Chennai, India</p>
                              </div>
                          </div>
                          <div className="flex-shrink-0 snap-start overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-white p-6 flex flex-col items-center justify-center text-center">
                              <div className="mb-4 rounded-full bg-primary/10 p-3">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-quote h-6 w-6 text-primary"
                                  >
                                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                                  </svg>
                              </div>
                              <h3 className="text-xl font-bold text-slate-800 mb-2">Share Your Experience</h3>
                              <p className="text-slate-600 mb-4 text-sm">Join thousands of travelers who have found their perfect travel companions</p>
                              <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-primary text-white hover:bg-primary/90"
                              >
                                  Join Now
                              </button>
                          </div>
                      </div>
                      <button
                          className="customNextBtn absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 md:right-2"
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
                              className="lucide lucide-chevron-right h-5 w-5"
                          >
                              <path d="m9 18 6-6-6-6"></path>
                          </svg>
                      </button>
                  </div>
              </div>
          </section>
          <section className="relative w-full bg-[#0F172A] py-8 sm:py-12 md:py-24 text-white">
              <div className="absolute inset-0 z-0 bg-[url('/subtle-pattern.png')] opacity-5 animate-shimmer"></div>
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-shimmer"></div>
              <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-6">
                  <div className="mx-auto max-w-4xl text-center reveal-on-scroll">
                      <h2 className="mb-3 sm:mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Ready to Transform Your <span className="text-gradient">Travel Experience</span>?</h2>
                      <p className="mb-4 sm:mb-6 md:mb-8 mx-auto max-w-2xl text-sm md:text-base text-slate-300">
                          Whether you're looking to connect with fellow travelers or get personalized guidance from experts, Connecting Traveller has everything you need for authentic and memorable travel experiences.
                      </p>
                      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                          <a href="community.html">
                              <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 w-full sm:w-auto bg-white text-[#0F172A] hover:bg-white/90 transition-all duration-300 hover:scale-105 btn-pulse"
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
                                      className="lucide lucide-users mr-2 h-5 w-5"
                                  >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="9" cy="7" r="4"></circle>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                  </svg>
                                  Join Community
                              </button>
                          </a>
                          <a href="experts.html">
                              <button
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 w-full sm:w-auto bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 btn-pulse"
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
                                      className="lucide lucide-video mr-2 h-5 w-5"
                                  >
                                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                  </svg>
                                  Find an Expert
                              </button>
                          </a>
                      </div>
                      <div className="mt-6 mb-4 sm:mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
                          <span className="text-sm text-slate-400">Already a member?</span>
                          <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-auto p-0 text-primary hover:text-primary/80"
                          >
                              Sign in to your account
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-chevron-right ml-1 h-4 w-4"
                              >
                                  <path d="m9 18 6-6-6-6"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                      <path
                          fill="#fff"
                          fill-opacity="1"
                          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
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
