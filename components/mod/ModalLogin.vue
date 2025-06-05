<script setup lang="ts">

</script>
<template>
    <div class="bg-[#181818] rounded-2xl shadow-2xl p-10 sm:p-16 w-[90%] sm:w-[500px] h-auto sm:h-[450px]">
        <h1 class="text-[30px] font-bold text-white text-left mb-10">Đăng nhập hoặc đăng ký</h1>
        <div class="flex flex-col gap-6">
            <input type="text" placeholder="Số điện thoại"
                class="w-full rounded-xl bg-[#232323] text-white placeholder-gray-400 px-5 py-4 text-base outline-none border-none focus:ring-2 focus:ring-[#fe592a] transition" />
            <button
                class="w-full rounded-lg bg-gradient-to-r from-[#fe592a] to-[#ff4400] text-white font-bold text-lg py-3 transition hover:opacity-90">
                Tiếp tục
            </button>
            <div class="flex items-center gap-2 mt-2">
                <input id="agree" type="checkbox" checked
                    class="accent-[#fe592a] w-5 h-5 rounded border-none" />
                <label for="agree" class="text-[#FFFFFF99] text-[12px]">
                    Tôi đã đọc và đồng ý với
                    <a href="#" class="text-[#fe592a] underline hover:text-[#ff4400] transition">Điều khoản sử dụng FPT
                        Play.</a>
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped></style>