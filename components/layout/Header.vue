<template>
  <header class="fixed top-0 left-0 right-0 w-full bg-black text-white shadow-[0_1px_0_#222] z-[50] overflow-x-hidden box-border">
    <nav class="my-container mx-auto h-16 sm:h-20 flex items-center justify-between">
      <div class="flex items-center flex-shrink-0 w-full max-w-[150px]">
        <button
          class="lg:hidden text-white bg-none border-none cursor-pointer p-1 flex items-center mr-2 order-1"
          aria-label="Mở menu"
          tabindex="0"
          @click="toggleMobileMenu"
          @keydown.enter="toggleMobileMenu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-width="2" stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-width="2" stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> 
        <NuxtLink
          to="/"
          class="flex items-center font-bold text-[#ff6600] text-xl sm:text-2xl order-2 mr-4"
        >
          <img
            src="/images/logo.png"
            alt="FPT Play"
            class="h-12 w-full sm:h-14 pt-2"
          />
        </NuxtLink>
      </div>

      <ul class="hidden lg:flex gap-2 xl:gap-4 list-none m-0 pt-4 flex-1">
        <li v-for="nav in navList" :key="nav.label" class="relative">
          <NuxtLink 
            :to="nav.to" 
            :class="`
              text-sm xl:text-base font-medium whitespace-nowrap hover:text-[#fe592a] hover:opacity-100 hover:font-medium no-underline
              ${nav.to === '/' ? 'opacity-100 font-bold text-[#A6A6A6]' : 'text-gray-400'}
            `"
          >
            {{ nav.label }}
          </NuxtLink>
        </li>
        <li class="cursor-pointer relative">
          <span
            class="text-gray-400 text-sm xl:text-base font-medium hover:text-[#fe592a] hover:opacity-100 hover:font-medium whitespace-nowrap more-trigger"
            tabindex="0"
            aria-haspopup="true"
            :aria-expanded="isMoreOpen"
            @click="handleToggleMore"
            @keydown.enter="handleToggleMore"
            aria-label="Xem thêm"
          >
            Xem thêm ▼
          </span>
          <div
            v-if="isMoreOpen"
            class="more-modal absolute left-1/2 -translate-x-1/2 mt-3 max-w-[calc(100vw-32px)] w-fit bg-[#232323] rounded-xl shadow-lg p-4 sm:p-6 flex gap-4 sm:gap-8 z-[9999]"
            role="menu"
            tabindex="0"
            aria-label="Danh sách xem thêm"
          >
            <div class="flex flex-col gap-2 sm:gap-3 flex-1">
              <span 
                v-for="item in moreMenu.map(i => i[0])" 
                :key="item" 
                class="text-white text-sm sm:text-base cursor-pointer hover:text-[#fe592a]"
              >
                {{ item }}
              </span>
            </div>
            <div class="flex flex-col gap-2 sm:gap-3 flex-1">
              <span 
                v-for="item in moreMenu.map(i => i[1])" 
                :key="item" 
                class="text-white text-sm sm:text-base cursor-pointer hover:text-[#fe592a]"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </li>
      </ul>

      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-[200] flex"
          aria-modal="true"
          role="dialog"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300"
            @click="toggleMobileMenu"
          ></div>
          <div
            class="relative h-full w-3/4 max-w-[300px] bg-[#232323] p-4 sm:p-6 flex flex-col gap-4 overflow-y-auto transition-transform duration-300 ease-in-out"
            :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
          >
            <ul class="flex flex-col gap-3 list-none m-0 p-0">
              <li v-for="nav in navList" :key="nav.label" class="shrink-0">
                <NuxtLink
                  :to="nav.to"
                  class="block text-white text-base sm:text-lg font-medium whitespace-nowrap py-2 hover:text-[#fe592a] transition"
                  @click="toggleMobileMenu"
                >
                  {{ nav.label }}
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <span
                  class="block text-white text-base sm:text-lg font-medium whitespace-nowrap py-2 hover:text-[#fe592a] transition more-trigger"
                  tabindex="0"
                  aria-haspopup="true"
                  :aria-expanded="isMoreOpen"
                  @click="handleToggleMore"
                  @keydown.enter="handleToggleMore"
                  aria-label="Xem thêm"
                >
                  Xem thêm ▼
                </span>
                <div
                  v-if="isMoreOpen"
                  class="more-modal bg-[#2a2a2a] rounded-lg p-4 flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2 max-w-full w-fit"
                  role="menu"
                  tabindex="0"
                  aria-label="Danh sách xem thêm"
                >
                  <div class="flex flex-col gap-2 sm:gap-3 flex-1">
                    <span 
                      v-for="item in moreMenu.map(i => i[0])" 
                      :key="item" 
                      class="text-white text-sm sm:text-base cursor-pointer hover:text-[#fe592a]"
                      @click="toggleMobileMenu"
                    >
                      {{ item }}
                    </span>
                  </div>
                  <div class="flex flex-col gap-2 sm:gap-3 flex-1">
                    <span 
                      v-for="item in moreMenu.map(i => i[1])" 
                      :key="item" 
                      class="text-white text-sm sm:text-base cursor-pointer hover:text-[#fe592a]"
                      @click="toggleMobileMenu"
                    >
                      {{ item }}
                    </span>
                  </div>
                </div>
              </li>
              <li class="shrink-0">
                <NuxtLink to="/bundle" class="block text-white text-base sm:text-lg font-medium whitespace-nowrap py-2 hover:text-[#fe592a] transition"></NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </transition>

      <div class="flex items-center gap-1 sm:gap-2 ml-2 shrink-0">
        <button 
          class="hidden lg:flex text-white bg-none border-none cursor-pointer p-1 items-center" 
          aria-label="Tìm kiếm" 
          tabindex="0"
        >
          <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" fill="none" stroke="currentColor">
            <circle cx="10" cy="10" r="7" stroke-width="2" />
            <path d="M15 15l4 4" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
        <button 
          class="hidden lg:flex text-white bg-none border-none cursor-pointer p-1 items-center" 
          aria-label="Thông báo" 
          tabindex="0"
        >
          <svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" fill="none" stroke="currentColor">
            <path d="M18 16v-5a6 6 0 10-12 0v5l-1 1v1h14v-1l-1-1z" stroke-width="2" />
            <path d="M13.73 21a2 2 0 01-3.46 0" stroke-width="2" />
          </svg>
        </button>
        <button 
          class="hidden lg:flex bg-[#ff6600] text-white rounded-lg py-1 px-3 sm:py-2 sm:px-5 sm:text-base mr-1 sm:mr-2 cursor-pointer items-center transition-colors duration-200 hover:bg-[#ff4400] text-sm font-bold"
        >
          Mua gói
        </button>
        <NuxtLink 
          to="/login" 
          class="text-white text-sm sm:text-base no-underline opacity-85 hover:opacity-100 transition-opacity duration-200  rounded-lg py-1 px-3 sm:py-2 sm:px-5 mr-1 sm:mr-2"
        >
          Đăng nhập
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMoreOpen = ref(false)
const isMobileMenuOpen = ref(false)

const navList = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Truyền hình', to: '/' },
  { label: 'Phim bộ', to: '/' },
  { label: 'V.League', to: '/' },
  { label: 'Anime', to: '/' }
]

const moreMenu = [
  ['Trực tiếp', 'Galaxy Play'],
  ['Thiếu nhi', 'K+'],
  ['Âm nhạc', 'Karaoke'],
  ['Giải trí', 'ASEAN Cup'],
  ['NBA', 'Phim lẻ'],
  ['Podcast', 'Học tập'],
  ['Thể thao', 'FA Cup'],
]

const handleToggleMore = () => {
  isMoreOpen.value = !isMoreOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    isMoreOpen.value = false
  }
}

const handleCloseMore = (e) => {
  if (!e.target.closest('.more-modal') && !e.target.closest('.more-trigger')) {
    isMoreOpen.value = false
  }
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    isMobileMenuOpen.value = false
    isMoreOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousedown', handleCloseMore)
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', handleCloseMore)
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.translate-x-0 {
  transition: transform 0.3s ease-in-out;
}
.-translate-x-full {
  transition: transform 0.3s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.max-w-screen {
  max-width: 100vw;
  overflow-x: hidden;
}
</style>