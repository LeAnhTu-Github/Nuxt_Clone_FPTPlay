<script setup lang="ts">
import { bundle } from '~/lib/bundle-data'
import type { Bundle } from '~/types/Bundle'
import BundleComparison from '~/components/bundle/BundleComparison.vue'
const bundles = ref<Bundle[]>(bundle)

</script>

<template>
    <div class=" my-container mx-auto min-h-screen bg-black text-white">
        <BundleComparison :bundles="bundles" />
        <hr class="w-full h-[1px] bg-[#2C2C2C]">
        <div class="flex flex-col wrap w-full h-auto text-sm py-4">
            <p class="w-full h-auto text-left font-normal">
                (* ) Một số dòng TV và thiết bị đời cũ có thể không hỗ trợ nội dung K+ và thể thao đỉnh cao do yêu cầu
                mã hóa bản quyền.
            </p>
            <p class="w-full h-auto text-left font-normal">
                (** ) Nhóm kênh K+ chỉ xem được trên 1 thiết bị tại cùng thời điểm.
            </p>
            <p class="w-full h-auto text-left font-normal">
                - Gói Cine chỉ hỗ trợ xem trên Mobile & Web
            </p>
            <p class="w-full h-auto text-left font-normal">
                - Nội dung các gói dịch vụ có thể thay đổi theo quy định của đơn vị cung cấp bản quyền và chỉ phát hành
                ở lãnh thổ Việt Nam.
            </p>
            <div class="flex flex-col sm:flex-row sm:items-center justify-start">
                <p class="w-auto h-auto text-left font-normal mr-4 min-w-40">
                    Các nền tảng hỗ trợ
                </p>
                <div class="flex justify-start gap-4 mt-2 w-full md:w-1/4">
                    <NuxtImg src="/images/icon-box.png" alt="Box" class="h-5 w-5 sm:h-6 sm:w-auto" draggable="false" />
                    <NuxtImg src="/images/icon-tv.png" alt="TV" class="h-5 w-5 sm:h-6 sm:w-auto" draggable="false" />
                    <NuxtImg src="/images/icon-web.png" alt="Web" class="h-5 w-5 sm:h-6 sm:w-auto" draggable="false" />
                    <NuxtImg src="/images/icon-apple.png" alt="Apple" class="h-5 w-5 sm:h-6 sm:w-auto" draggable="false" />
                    <NuxtImg src="/images/icon-android.png" alt="Android" class="h-5 w-5 sm:h-6 sm:w-auto" draggable="false" />
                </div>
            </div>
            <NuxtLink
                to="https://fpt.vn/shop/internet?utm_source=Seo&utm_medium=FPTPlayMuaGoi&utm_campaign=Internet"
                target="_blank"
                class="w-full h-auto mt-8 rounded-2xl
                    bg-[url('/images/bundle/package_mobile.jpg')] bg-cover bg-no-repeat bg-center
                    aspect-[25/7] md:bg-[url('/images/bundle/package_desktop.jpg')] md:aspect-[159/13]"
            >
            </NuxtLink>

        </div>
    </div>
</template>
<style scoped></style>