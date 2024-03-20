<template>
   <section class="bg-cover bg-center flex items-center justify-center py-8 md:py-12 relative">
      <!-- <div class="h-screen w-full flex justify-center"> -->
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
                                        :error="errors && errors.firstName ? errors.firstName[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Last Name" v-model:input="lastName" inputType="text"
                                        :error="errors && errors.lastName ? errors.lastName[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Email: link@gmail.com" v-model:input="email"
                                        inputType="email" :error="errors && errors.email ? errors.email[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Country" v-model:input="country"
                                        inputType="text" :error="errors && errors.country ? errors.country[0] : ''" />
                                </div>

                                <div class="mt-4">
                                    <TextInput placeholder="Phone" v-model:input="phone"
                                        inputType="text" :error="errors && errors.phone ? errors.phone[0] : ''" />
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
                                  <input type="checkbox" id="myCheckbox" class="form-checkbox text-blue-500 h-5 w-5">
                                    I confirm that I am at least 18 years old.
                                </div>

                                <div class="mt-4">
                                  <input type="checkbox" id="myCheckbox" class="form-checkbox text-blue-500 h-5 w-5">
                                   By joining and participating in the Competition, I ackowledge and confirm that I have read, understood and agreed to be bound by the Terms and Conditions of the
                                   Competition. 
                                   <br />
                                   <input type="checkbox" id="myCheckbox" class="form-checkbox text-blue-500 h-5 w-5">
                                  This side is protected by reCAPICHA and the Google Privacy Policy and Terms of Service apply.
                                </div>

                                <div class="mt-10">
                                  
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
            <!-- </div> -->
        </div>
    </section>
</template>

<script setup>

</script>
