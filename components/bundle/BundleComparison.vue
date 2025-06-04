<script setup lang="ts">
import type { Bundle } from '~/types/Bundle'
import { defineProps, ref } from 'vue'

const props = defineProps<{
    bundles: Bundle[]
}>()

const data = ref<Bundle[]>(props.bundles)
const toast = useToast()
const sections = [
    { title: 'Giá dịch vụ', key: 'price' },
    { title: 'Số thiết bị xem đồng thời', key: 'devices' },
    { title: 'Phim bộ châu Á mới nhất, chiếu song song', key: 'phim_bo_chau_a' },
    { title: 'Phim lẻ, anime, thiếu nhi, show đặc sắc', key: 'phim_le_anime_thieu_nhi' },
    { title: '110+ kênh truyền hình trong nước, quốc tế', key: 'kenh_truyen_hinh' },
    { title: 'Độc quyền các giải thể thao đỉnh cao (*)', key: 'doc_quyen_the_thao' },
    { title: 'Trực tiếp các giải Esports hàng đầu', key: 'esports' },
    { title: '5 kênh K+ (**)', key: 'kenh_kplus' },
    { title: 'Không quảng cáo trong VOD', key: 'khong_quang_cao_vod' }
]
const handleClick = (idPackage: number) => {
    const selectedBundle: Bundle | undefined = data.value.find(bundle => bundle.id === idPackage)
    if (selectedBundle) {
        toast.add({
        title: 'Gói đã được chọn',
        description: `Bạn đã chọn gói ${selectedBundle.name}`,
        
        })
    } else {
        toast.add({
            title: 'Gói không tồn tại',
            description: 'Vui lòng chọn gói khác',
        })
    }
}

</script>
    <template>
        <div class="w-full overflow-x-auto">
            <div class="flex w-full h-auto bg-black text-white min-w-[600px]">
                <div class="w-3/10 flex flex-col">
                    <div class="flex items-end pb-4 w-full h-[90px] text-2xl font-bold">Mua gói</div>
                    <div v-for="(section, index) in sections" :key="index" class="flex flex-start px-4 even:bg-[#0F0F0F]">
                        <div class="flex flex-start w-full min-h-[56px] items-center text-xs md:text-sm">
                            {{ section.title }}
                        </div>
                    </div>
                </div>
                <div class="w-7/10 flex">
                    <div v-for="(bundle) in data" :key="bundle.id" class="flex flex-col w-1/5 min-h-[56px]">
                        <div class="flex flex-col w-full min-h-[56px] ">
                            <div class="h-[90px] flex items-center justify-center">
                                <img :src="bundle.image" alt="" class="w-full h-auto max-h-[90px] object-contain md:object-cover">
                            </div>
                            <div class="flex flex-col items-center justify-center w-full min-h-[56px] px-4 text-sm bg-[#0F0F0F]">
                                <p class="text-sm sm:text-base md:text-lg">{{ bundle.price.toLocaleString('vi-VN') }}vnđ</p>
                                <p class="text-xs sm:text-sm md:text-base">{{ bundle.duration }} tháng</p>
                            </div>
                            <div class="flex justify-center items-center w-full min-h-[56px] px-4 text-xs md:text-sm">{{ bundle.devices }}</div>
                            <div v-for="(feature, index) in bundle.features" :key="index" class="flex flex-col w-full min-h-[56px] even:bg-[#0F0F0F] odd:bg-black">
                                <div class="flex justify-center items-center w-full min-h-[56px] text-xs md:text-sm">
                                    <span
                                        v-if="feature"
                                        class="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500"
                                        aria-label="Đã có"
                                        tabindex="0"
                                    >
                                        <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </span>
                                    <span
                                        v-else
                                        class="flex items-center justify-center w-5 h-5 rounded-full bg-[#222]"
                                        aria-label="Chưa có"
                                        tabindex="0"
                                    >
                                        <svg class="w-3 h-3 text-[#444]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="flex justify-center items-center w-full h-auto px-2 py-4">
                                <button
                                    class="w-full md:w-9/10 px-2 py-3 bg-[#0F0F0F] text-white rounded-xl text-xs md:text-sm font-medium flex items-center justify-center transition-colors duration-200 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    tabindex="0"
                                    aria-label="Chọn gói này"
                                    @click="handleClick(bundle.id)"
                                    @keydown.enter="handleClick(bundle.id)"
                                >
                                    Chọn gói này
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template> 