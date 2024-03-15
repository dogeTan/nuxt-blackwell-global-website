<template>
  <div class="bg-no-repeat" :style="{ backgroundImage: `url(${backgroundImageUrl})` }"> 
      <nav class="bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <img src="../assets/images/logo-white.png" alt="Logo" class="h-8">
          </div>

          <!-- Promotion and Timer -->
          <div class="hidden md:flex items-center justify-center">
            <span class="text-white mr-4">PROMOTION <br/> ENDING IN</span> 
            
              <span class="text-white mr-4">71 <br/> Days</span>
              <span class="text-white mr-4">16 <br/> Hours</span>
              <span class="text-white mr-4">52 <br/> Minutes</span>
              <span class="text-white mr-4">17 <br/> Seconds</span>
          </div>

          <!-- Register Now Button -->
          <div class="hidden md:block">
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md">Register Now</button>
          </div>

          <!-- Guest Section -->
          <div class="flex items-center">
            <!-- Guest Logo -->
            <div class="hidden md:block mr-4">
              <img src="" alt="Guest Logo" class="h-8">
            </div>
            <!-- Login Button (visible only on small screens) -->
            <button class="md:hidden bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
            
            <!-- Mobile menu button -->
            <div class="-mr-2 flex items-center sm:hidden">
              <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed -->
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <!-- Icon when menu is open -->
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </nav>

      <!--FOR SECTION 1 -->
    <section class="bg-center flex items-center justify-center py-8 md:py-12" >
      <div class="text-white text-center flex flex-col md:flex-row md:items-center md:justify-center">
        <!-- Logo at the left -->
        <img src="../assets/images/logomark.png" alt="Logo" class="md:ml-auto h-15 w-1/4 md:h-auto">
        <!-- Text spans in the center, divided into three rows -->
        <div class="md:text-center md:ml-4">
          <h1 class="text-white block mb-2 text-4xl">TRADING TANGO</h1>
          <h1 class="text-white block mb-2 text-4xl">VALENTINE'S DAY PROMOTION</h1>
          <h2 class="text-white block mb-2 text-4xl">1 - 29 February 2024</h2>
          <span class="text-white block mb-2 text-1xl">*term & condition apply</span>
        </div>
      </div>
    </section>

    <!--FOR SECTION 2 -->
    <section class="bg-cover bg-center flex items-center justify-center py-8 md:py-12" >
        <!-- Text spans in the center, divided into three rows -->
        <div class="md:text-center md:ml-4">
            <h1 class="text-white text-4xl font-bold mb-8">Collect All Rewards</h1>
                <div class="grid grid-cols-2 gap-4">

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <span class="text-white text-2xl block mb-2">USD$200 credits</span>
                        <img src="~/assets/images/logo_side.png" alt="Logo" class="md:ml-auto mb-4">
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <span class="text-white text-2xl block mb-2">USD$400 credits</span>
                        <img src="~/assets/images/logo_side.png" alt="Logo" class="md:ml-auto mb-4">
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <span class="text-white text-2xl block mb-2">USD$2000 credits</span>
                        <img src="~/assets/images/logo_side.png" alt="Logo" class="md:ml-auto mb-4">
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <span class="text-white text-2xl block mb-2">USD$20000 credits</span>
                        <img src="~/assets/images/logo_side.png" alt="Logo" class="md:ml-auto mb-4">
                      </div>
                    </div>
              </div>
        </div>
      </section>


    <!--FOR SECTION 3 -->
  <section class="relative py-8 md:py-12">
    <div class="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <!-- Title -->
      <fieldset class="text-2xl font-bold mb-4 text-white">
        <legend  class="text-2xl font-bold mb-4">
          Free US$600 Credits!
        </legend>
        
        <div class="flex flex-col lg:flex-row items-start gap-8">
          <!-- Image -->
          <img src="~/assets/images/Promo-1B.png" alt="Logo" class="lg:w-1/2 lg:ml-auto mb-8 md:mb-0">

          <!-- Description -->
          <div class="lg:w-1/2">
            <p class="text-lg mb-4">1. US$ 200 credits</p>
            <p class="text-sm mb-8">when you open an account & deposit US$200</p>
            <p class="text-lg mb-4">2. US$20 credits</p>
            <p class="text-sm mb-8">for every lot you trade, up to 20 lots</p>

            <!-- Buttons -->
            <div class="grid grid-cols-2 gap-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Live Account</button>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Download MT4 Platform</button>
            </div>
          </div>

       </div>
    </fieldset>
  </div>
</section>


    <!--FOR SECTION 4 -->
    <section class="relative py-8 md:py-12">
      <div class="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <!-- Title -->
        <fieldset class="text-2xl font-bold mb-4 text-white">
          <legend  class="text-2xl font-bold mb-4">
            Free INR 22,0000 Gift Cards!
          </legend>
          
          <div class="flex flex-col lg:flex-row items-start gap-8">
            <!-- Image -->
            <img src="~/assets/images/Promo-2B.png" alt="Logo" class="lg:w-1/2 lg:ml-auto mb-8 md:mb-0">

            <!-- Description -->
            <div class="lg:w-1/2">
              <p class="text-lg mb-4">3. INR 2,000 Flipkart gift card</p>
              <p class="text-sm mb-8">when you refer someone to enjoy</p>
              <p class="text-lg mb-4">2. INR 20,000 Flipkart gift card</p>
              <p class="text-sm mb-8">when you refer a second person to enjoy</p>

              <!-- Buttons -->
              <div class="grid grid-cols-2 gap-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Live Account</button>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Download MT4 Platform</button>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </section>
  
    <!--FOR SECTION 5 -->>
    <section class="relative py-8 md:py-12 bg-no-repeat" :style="{ backgroundImage: `url(${easyStepBg})` }" >
      <div class="md:ml-4">
            <h1 class="text-white text-4xl font-bold mb-8">3 Easy Steps to Refer</h1>
                <div class="grid grid-cols-3 gap-11">
                    <div class="bg-gray-800 p-4 rounded-lg flex items-center bg-transparent">
                      <div>
                        <img src="~/assets/images/Step01.png" alt="Logo" class="md:ml-auto mb-4">
                        Create an account with Blackwell Blobal & log in to the Client Portal
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center bg-transparent">
                      <div>
                        <img src="~/assets/images/Step02.png" alt="Logo" class="md:ml-auto mb-4">
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center bg-transparent">
                      <div>
                        <img src="~/assets/images/Step03.png" alt="Logo" class="md:ml-auto mb-4">
                      </div>
                    </div>
              </div>
        </div>
    </section>

    <!--FOR SECTION 6 Register Now -->
    <section class="bg-cover bg-center flex items-center justify-center py-8 md:py-12">
      <div class="h-screen w-full flex justify-center">
            <div class="lg:pt-7 pt-3 lg:px-12 px-6 lg:w-2/3 w-full lg:min-w-[800px]">
                <main class="w-full">
                    <div class="w-full md:max-w-[550px] max-w-[360px] mx-auto">
                        <div class="mt-10">
                            <h1 class="lg:text-5xl text-3xl text-center font-extrabold">
                                Register Now
                            </h1>

                            <form class="mt-12" @submit.prevent="register()">
                                <div>
                                    <TextInput placeholder="First Name" v-model:input="firstName" inputType="text"
                                        :error="errors && errors.name ? errors.name[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Last Name" v-model:input="lastName" inputType="text"
                                        :error="errors && errors.name ? errors.name[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Email: link@gmail.com" v-model:input="email"
                                        inputType="email" :error="errors && errors.email ? errors.email[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Country" v-model:input="country"
                                        inputType="email" :error="errors && errors.email ? errors.email[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Phone" v-model:input="phone"
                                        inputType="email" :error="errors && errors.email ? errors.email[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Password" v-model:input="password" inputType="password"
                                        :error="errors && errors.password ? errors.password[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Confirm Password" v-model:input="confirmPassword"
                                        inputType="password" />
                                </div>

                                <div class="mt-4">
                                    I confirm that I am at least 18 years old.
                                </div>

                                <div class="mt-4">
                                   By joining and participating in the Competition, I ackowledge and confirm that I have read, understood and agreed to be bound by the Terms and Conditions of the
                                   Competition.
                                </div>

                                <div class="mt-10">
                                  This side is protected by reCAPICHA and the Google Privacy Policy and Terms of Service apply.
                                    <button type="submit" class="bg-gray-400 hover:bg-gray-700 rounded-full w-full p-3 font-bold"
                                        :disabled="(!name || !email || !password || !confirmPassword)"
                                        :class="(name && email && password && confirmPassword) ?
                                        'bg-[#8228D9] hover:bg-[#6c21b3] text-white' :
                                        'bg-[#EFF0EB] text-[#A7AAA2]'">
                                        Register Now
                                    </button>

                                    <div class="grid grid-cols-2 gap-4 m-5">
                                      <button class="bg-blue-500 hover:bg-blue-700 rounded-full w-full  p-3 font-bold">Signup Facebook</button>
                                      <button class="bg-red-500 hover:bg-red-700 rounded-full w-full  p-3 font-bold">Signup Google</button>
                                    </div>
                                </div>
                            </form>

                            <div class="text-[14px] text-center pt-12">
                                <NuxtLink to="/" class="text-[#8228D9] underline">
                                    Log in
                                </NuxtLink>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </section>

    <!--FOR SECTION 7 Trading Guides--> 
    <section class="bg-cover bg-center flex items-center justify-center py-8 md:py-12" >
        <div class="md:text-center md:ml-4">
            <h1 class="text-white text-4xl font-bold mb-8">Trading Guides</h1>
                <div class="grid grid-cols-3 gap-4">

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <img src="~/assets/images/guides_01.png" alt="Logo" class="md:ml-auto mb-4">
                        <span class="text-white text-2xl block mb-2">Forex For Beginners</span>
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <img src="~/assets/images/guides_02.png" alt="Logo" class="md:ml-auto mb-4">
                        <span class="text-white text-2xl block mb-2">Analysing Made Easy</span>
                      </div>
                    </div>

                    <div class="bg-gray-800 p-4 rounded-lg flex items-center">
                      <div>
                        <img src="~/assets/images/guides_03.png" alt="Logo" class="md:ml-auto mb-4">
                        <span class="text-white text-2xl block mb-2">CFDs Starter Kit</span>
                      </div>
                    </div>
                    
              </div>
        </div>
      </section>
  </div>

    <!--FOR SECTION 8  Footer-->
    <footer class="bg-blue-900 bg-cover bg-center flex items-center justify-center py-8 md:py-12" >
      <div>
          <span class="text-white text-2xl block mb-2">LOG IN TO MT4 DESKTOP APP</span>
      </div>


    </footer>
</template>

<script setup>
  import UserLayout from '~/layouts/UserLayout.vue';
  import backgroundImageUrl from '~/assets/images/TT-header.png';
  import easyStepBg from '~/assets/images/easy_step_bg.png';



</script>

<style lang="scss">
  @use "~/assets/css/main.scss";
</style>