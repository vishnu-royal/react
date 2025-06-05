import React from 'react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Otp = () => {
  return (
    <>
      <Header />


<main class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col md:flex-row">
    <div class="hidden md:flex md:w-1/2 relative">
        <div class="absolute inset-0 bg-black/30 z-10"></div>
        <img
            alt="Travel community"
            decoding="async"
            data-nimg="fill"
            class="object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mountain-sunset-travelers-PrcbvP1kP0WHo5IoQV36WsEd8F1iOn.png"
        />
        <div class="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
            <h1 class="text-4xl font-bold mb-6">Join Our Travel Community</h1>
            <p class="text-xl max-w-md text-center">Connect with fellow travelers, share experiences, and discover new destinations together.</p>
        </div>
    </div>
    <div class="w-full md:w-1/2 flex items-center justify-center p-6">
        <div class="w-full max-w-md">
            <div class="text-center mb-8">
                <img
                    alt="Connecting Traveller"
                    loading="lazy"
                    width="180"
                    height="60"
                    decoding="async"
                    data-nimg="1"
                    class="mx-auto mb-6"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CT%20Logo%20White%20new-vCVo5eHynY5CcFBM1Dz5u7hOrmpgl2.png"
                />
                <h2 class="text-2xl font-bold text-white mb-2">Welcome to Connecting Traveller</h2>
                <p class="text-gray-300">Login or sign up with your mobile number</p>
            </div>
            <div class="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                <form class="space-y-4">
                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <label class="block text-sm font-medium text-gray-200">Enter OTP</label><button type="button" class="text-xs text-primary hover:text-primary/90">Change number</button>
                        </div>
                        <p class="text-sm text-gray-400 mb-3">We've sent a 4-digit code to 8005731125</p>
                        <div class="flex justify-between gap-2 mb-2">
                            <input
                                class="flex rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-14 h-14 text-center text-xl bg-gray-700/50 border-gray-600 text-white"
                                inputmode="numeric"
                                maxlength="1"
                                autocomplete="one-time-code"
                                type="text"
                                value=""
                            />
                            <input
                                class="flex rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-14 h-14 text-center text-xl bg-gray-700/50 border-gray-600 text-white"
                                inputmode="numeric"
                                maxlength="1"
                                autocomplete="one-time-code"
                                type="text"
                                value=""
                            />
                            <input
                                class="flex rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-14 h-14 text-center text-xl bg-gray-700/50 border-gray-600 text-white"
                                inputmode="numeric"
                                maxlength="1"
                                autocomplete="one-time-code"
                                type="text"
                                value=""
                            />
                            <input
                                class="flex rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-14 h-14 text-center text-xl bg-gray-700/50 border-gray-600 text-white"
                                inputmode="numeric"
                                maxlength="1"
                                autocomplete="one-time-code"
                                type="text"
                                value=""
                            />
                        </div>
                        <p class="text-sm text-gray-400 mt-2">Didn't receive the OTP? <button type="button" class="text-primary hover:text-primary/90">Resend</button></p>
                    </div>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90 text-white"
                        type="submit"
                    >
                        Verify &amp; Continue
                    </button>
                </form>
            </div>
        </div>
    </div>
</main>


      <Footer />
    </>
  );
};

export default Otp;
