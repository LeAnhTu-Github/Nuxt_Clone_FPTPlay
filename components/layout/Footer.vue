<template>
    <footer class="bg-black text-white pt-6 pb-4">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-t border-gray-700 my-4"></div>
            <!-- Top section -->
            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <!-- Logo & badges -->
                <div class="flex flex-col gap-4 w-full md:w-1/4 items-center md:items-start">
                    <div class="flex items-center gap-2">
                        <img src="/images/logo.png" alt="FPT Play" class="h-8 sm:h-10" />
                    </div>
                    <div class="flex gap-4">
                        <img src="/images/badge-bocongthuong.png" alt="Bộ Công Thương" class="h-6 sm:h-8 w-auto" />
                        <img src="/images/dmca-protected.png" alt="DMCA Protected" class="h-6 sm:h-8 w-auto" />
                    </div>
                </div>
                <!-- Column layout for Về FPT Play, Dịch vụ, Quy định -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-1/2 text-xs sm:text-sm text-center sm:text-left">
                    <!-- Về FPT Play -->
                    <div class="flex flex-col gap-2">
                        <span class="font-semibold mb-2">Về FPT Play</span>
                        <a href="#" class="hover:underline">Giới thiệu</a>
                        <a href="#" class="hover:underline">Các gói dịch vụ</a>
                        <a href="#" class="hover:underline">Liên hệ</a>
                        <a href="#" class="hover:underline">Trung tâm hỗ trợ</a>
                        <a href="#" class="hover:underline">Thông tin</a>
                    </div>
                    <!-- Dịch vụ -->
                    <div class="flex flex-col gap-2">
                        <span class="font-semibold mb-2">Dịch vụ</span>
                        <a href="#" class="hover:underline">Gói DATA</a>
                        <a href="#" class="hover:underline">Quảng cáo</a>
                        <a href="#" class="hover:underline">Mua gói</a>
                        <a href="#" class="hover:underline">Bảo hành</a>
                    </div>
                    <!-- Quy định -->
                    <div class="flex flex-col gap-2">
                        <span class="font-semibold mb-2">Quy định</span>
                        <a href="#" class="hover:underline">Điều khoản sử dụng</a>
                        <a href="#" class="hover:underline">Chính sách thanh toán</a>
                        <a href="#" class="hover:underline">Chính sách bảo mật thông tin dữ liệu</a>
                    </div>
                </div>
                <!-- Liên hệ & mạng xã hội -->
                <div class="flex flex-col gap-2 w-full md:w-1/4 items-center md:items-start">
                    <div class="flex items-center gap-2">
                        <svg viewBox="0 0 16 16" width="0.8em" height="0.8em" focusable="false" role="img" aria-label="telephone" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-telephone b-icon bi" style="margin-right: 5px; font-size: 140%;">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                        </svg>
                        <span>19006600</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg viewBox="0 0 16 16" width="0.8em" height="0.8em" focusable="false" role="img" aria-label="envelope" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-envelope b-icon bi" style="margin-right: 5px; font-size: 140%;">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path>
                        </svg>
                        <span>hotrofptplay@fpt.com</span>
                    </div>
                    <span class="mt-2 text-xs sm:text-sm">Theo dõi chúng tôi trên:</span>
                    <div class="flex gap-3 mt-1">
                        <a href="#" aria-label="Facebook" tabindex="0">
                            <svg class="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube" tabindex="0">
                            <svg class="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.8 8.001a2.75 2.75 0 00-1.94-1.94C18.08 6 12 6 12 6s-6.08 0-7.86.061a2.75 2.75 0 00-1.94 1.94C2 9.78 2 12 2 12s0 2.22.2 3.999a2.75 2.75 0 001.94 1.94C5.92 18 12 18 12 18s6.08 0 7.86-.061a2.75 2.75 0 001.94-1.94C22 14.22 22 12 22 12s0-2.22-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 my-4"></div>
            <div class="text-xs text-gray-300 space-y-4 md:flex md:gap-4 md:justify-between">
                <div class="w-full md:w-3/4 text-center md:text-left">
                    <div>
                        Công ty Cổ phần Viễn Thông FPT - Người đại diện: Ông Hoàng Việt Anh. Trụ sở: Tầng 2, Tòa nhà FPT Cầu Giấy, Số 17 Phố Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, TP.Hà Nội<br>
                        Địa chỉ liên lạc: Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội<br>
                        Số điện thoại liên hệ: 024 7300 2222. Thư điện tử: hotrokhachhang@fpt.com hoặc hotrofptplay@fpt.com
                    </div>
                    <div class="mt-4">
                        Giấy chứng nhận đăng ký doanh nghiệp số 0101778163 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 28/7/2005, cấp đăng ký thay đổi lần thứ 32 vào ngày 21/12/2023.<br>
                        Giấy phép cung cấp dịch vụ phát thanh, truyền hình trả tiền số 377/GP-BTTTT cấp sửa đổi bổ sung lần 1 ngày 10/10/2023.
                    </div>
                </div>
                <div class="flex flex-wrap justify-center md:justify-end gap-4 mt-2 w-full md:w-1/4">
                    <img src="/images/icon-box.png" alt="Box" class="h-5 w-5 sm:h-6 sm:w-auto" />
                    <img src="/images/icon-tv.png" alt="TV" class="h-5 w-5 sm:h-6 sm:w-auto" />
                    <img src="/images/icon-web.png" alt="Web" class="h-5 w-5 sm:h-6 sm:w-auto" />
                    <img src="/images/icon-apple.png" alt="Apple" class="h-5 w-5 sm:h-6 sm:w-auto" />
                    <img src="/images/icon-android.png" alt="Android" class="h-5 w-5 sm:h-6 sm:w-auto" />
                </div>
            </div>
            <button class="fixed bottom-4 right-4 bg-gray-800 hover:bg-orange-500 transition-colors rounded-lg p-2 sm:p-3 shadow-lg" aria-label="Lên đầu trang" tabindex="0" @click="handleScrollTop">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    </footer>
</template>

<script setup>
const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>