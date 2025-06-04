import { id } from "@nuxt/ui/runtime/locale/index.js";

export const bundle = [
    {
      id: 1,
      "name": "CINE",
      "price": 33000,
      "image": "/images/bundle/cine.png",
      "duration": 1,
      "devices": 2,
      "features": {
        "phim_bo_chau_a": true,
        "phim_le_anime_thieu_nhi": true,
        "kenh_truyen_hinh": false,
        "doc_quyen_the_thao": false,
        "esports": true,
        "kenh_kplus": false,
        "khong_quang_cao_vod": false
      }
    },
    {
      id: 2,
      "name": "PREMIUM",
      "price": 66000,
      "image": "/images/bundle/premium.png",
      "duration": 1,
      "devices": 3,
      "features": {
        "phim_bo_chau_a": true,
        "phim_le_anime_thieu_nhi": true,
        "kenh_truyen_hinh": true,
        "doc_quyen_the_thao": true,
        "esports": true,
        "kenh_kplus": false,
        "khong_quang_cao_vod": false
      }
    },
    {
      id: 3,
      "name": "K+",
      "price": 179000,
      "image": "/images/bundle/kplus.png",
      "duration": 1,
      "devices": 1,
      "features": {
        "phim_bo_chau_a": false,
        "phim_le_anime_thieu_nhi": true,
        "kenh_truyen_hinh": true,
        "doc_quyen_the_thao": true,
        "esports": true,
        "kenh_kplus": true,
        "khong_quang_cao_vod": false
      }
    },
    {
      id: 4,
      "name": "COMBO PREMIUM K+",
      "price": 219000,
      "image": "/images/bundle/combopremium.png",
      "duration": 1,
      "devices": 3,
      "features": {
        "phim_bo_chau_a": true,
        "phim_le_anime_thieu_nhi": true,
        "kenh_truyen_hinh": true,
        "doc_quyen_the_thao": true,
        "esports": true,
        "kenh_kplus": true,
        "khong_quang_cao_vod": false
      }
    },
    {
      id: 5,
      "name": "NO ADS",
      "price": 20000,
      "image": "/images/bundle/ads.png",
      "duration": 1,
      "devices": 2,
      "features": {
        "phim_bo_chau_a": false,
        "phim_le_anime_thieu_nhi": false,
        "kenh_truyen_hinh": false,
        "doc_quyen_the_thao": false,
        "esports": false,
        "kenh_kplus": false,
        "khong_quang_cao_vod": true
      }
    }
  ]
  