<template>
  <div>
  <h1 class="mb-4 text-xl font-bold">Login</h1>
    <form>
      <input
        class="w-full border p-2 rounded-lg mb-4"
        type="text"
        name="email"
        placeholder="e.g. example@email.com"
      />

      <input
        class="w-full border p-2 rounded-lg mb-4"
        type="password"
        placeholder="Password"
      />

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 transition-all duration-200 w-full text-blue-50 rounded-lg p-2"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script  setup>

</script>

<style>

</style>