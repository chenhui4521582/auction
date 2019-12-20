import $http from './http/http'
import Api from './Api/Api'
/**
 * @description 首页获取banner图
 */
const getBanner = function() {
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        code: 200,
        data: [
          {
            id: 46,
            name: '特惠购-首单0元购',
            link: 'beepaiapp://dispatcher/goodsMall/newUserList?activityId=12',
            image: '/group1/M00/41/5C/CmcEHV3OBU2ATbfbAANgnNEDNO8040.png',
            type: 'banner',
            businessId: null
          },
          {
            id: 40,
            name: '竞拍攻略',
            link: 'https://pai.beepai.com/auctionH5App/strategy',
            image: '/group1/M00/41/5B/CmcEHV3NTXqAHqztAAFE0aGDH70435.png',
            type: 'banner',
            businessId: null
          }
        ],
        message: null,
        serverTime: 1575344915585,
        success: true
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}
/**
 * @description 首页获取跑马灯
 */
const getNotice = function() {
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        code: 200,
        data: [
          '小蜜蜂爱跳舞1 拍中Apple iPhone 11 Pro Max 256GB全网通版',
          '小蜜蜂爱跳舞2 拍中Apple iPhone 11 Pro Max 256GB全网通版',
          '小蜜蜂爱跳舞3 拍中Apple iPhone 11 Pro Max 256GB全网通版',
          '小蜜蜂爱跳舞4 拍中Apple iPhone 11 Pro Max 256GB全网通版',
          '小蜜蜂爱跳舞5 拍中Apple iPhone 11 Pro Max 256GB全网通版',
          '小蜜蜂爱跳舞6 拍中Apple iPhone 11 Pro Max 256GB全网通版',
          '小蜜蜂爱跳舞7 拍中Apple iPhone 11 Pro Max 256GB全网通版'
        ],
        message: ''
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}
/**
 * @description 最近成交记录
 */

const getDealLog = function() {
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        code: 200,
        data: [
          {
            auctionId: 961183,
            auctionClass: 0,
            goodsName: '500元京东卡',
            nickname: '风追烟花雨',
            endTime: 1576206339791,
            currentPrice: 62.6,
            marketPrice: 500,
            priceRate: '87.4%',
            defaultGoodsImage: '/group1/M00/41/46/CmcEHV3BHumATgPgAADRBLEWT6s047_400.png',
            audit: 0
          },
          {
            auctionId: 961513,
            auctionClass: 0,
            goodsName: '50元话费充值卡',
            nickname: '黑白照',
            endTime: 1576206331557,
            currentPrice: 7.5,
            marketPrice: 50,
            priceRate: '85.0%',
            defaultGoodsImage: '/group1/M00/3E/88/CmcEHF14wu6AYzFbAABfzTYyPBY521_400.png',
            audit: 0
          },
          {
            auctionId: 961143,
            auctionClass: 0,
            goodsName: '三只松鼠2020新春三松坚果类礼A款（祝福礼）',
            nickname: '五百万奖池获得者',
            endTime: 1576206307310,
            currentPrice: 25.89,
            marketPrice: 108,
            priceRate: '76.0%',
            defaultGoodsImage: '/group1/M00/3F/D1/CmcEHF3x14iAMMbVABLgXp_VUkA465_400.png',
            audit: 0
          },
          {
            auctionId: 961319,
            auctionClass: 0,
            goodsName: '黑人 薄旋洁软性牙刷二支装',
            nickname: '这是一个好名字啊',
            endTime: 1576206298348,
            currentPrice: 3.14,
            marketPrice: 39.9,
            priceRate: '92.1%',
            defaultGoodsImage: '/group1/M00/41/5E/CmcEHV3Q1k6APa1YAALPE3PDBEw915_400.jpg',
            audit: 0
          },
          {
            auctionId: 961546,
            auctionClass: 0,
            goodsName: '【爆款】三合一数据线苹果安卓type-c一拖三充电线华为快充oppo小米通用（颜色随机发）',
            nickname: '171****9980',
            endTime: 1576206280709,
            currentPrice: 1.07,
            marketPrice: 9.9,
            priceRate: '89.1%',
            defaultGoodsImage: '/group1/M00/3E/2F/CmcEHF1eNv2AFFvaAAD6_40FUrs842_400.jpg',
            audit: 0
          },
          {
            auctionId: 961356,
            auctionClass: 0,
            goodsName: '爱奇艺视频月卡',
            nickname: '南巷清风',
            endTime: 1576206274426,
            currentPrice: 4.01,
            marketPrice: 19,
            priceRate: '78.8%',
            defaultGoodsImage: '/group1/M00/3E/5A/CmcEHVz_WqSAGVP1AAGWTBhAN-0665_400.png',
            audit: 0
          },
          {
            auctionId: 961515,
            auctionClass: 0,
            goodsName: '2元话费券',
            nickname: '189****7762',
            endTime: 1576206247427,
            currentPrice: 0.48,
            marketPrice: 2,
            priceRate: '76.0%',
            defaultGoodsImage: '/group1/M00/3F/B4/CmcEHF3wuuKAFNSKAABLODlLrMs894_400.png',
            audit: 0
          },
          {
            auctionId: 961330,
            auctionClass: 0,
            goodsName: '100元京东卡',
            nickname: '西北故人',
            endTime: 1576206240440,
            currentPrice: 9.15,
            marketPrice: 100,
            priceRate: '90.8%',
            defaultGoodsImage: '/group1/M00/41/46/CmcEHV3BHr2AKVf0AADKVLxBdc0091_400.png',
            audit: 0
          },
          {
            auctionId: 961544,
            auctionClass: 0,
            goodsName: '【爆款】三合一数据线苹果安卓type-c一拖三充电线华为快充oppo小米通用（颜色随机发）',
            nickname: '189****7762',
            endTime: 1576206238547,
            currentPrice: 1.01,
            marketPrice: 9.9,
            priceRate: '89.7%',
            defaultGoodsImage: '/group1/M00/3E/2F/CmcEHF1eNv2AFFvaAAD6_40FUrs842_400.jpg',
            audit: 0
          },
          {
            auctionId: 961543,
            auctionClass: 0,
            goodsName: '【爆款】三合一数据线苹果安卓type-c一拖三充电线华为快充oppo小米通用（颜色随机发）',
            nickname: '代表月亮消灭你',
            endTime: 1576206216418,
            currentPrice: 1.01,
            marketPrice: 9.9,
            priceRate: '89.7%',
            defaultGoodsImage: '/group1/M00/3E/2F/CmcEHF1eNv2AFFvaAAD6_40FUrs842_400.jpg',
            audit: 0
          },
          {
            auctionId: 961526,
            auctionClass: 0,
            goodsName: '【爆款】三合一数据线苹果安卓type-c一拖三充电线华为快充oppo小米通用（颜色随机发）',
            nickname: '133****0380',
            endTime: 1576206193307,
            currentPrice: 1.28,
            marketPrice: 9.9,
            priceRate: '87.0%',
            defaultGoodsImage: '/group1/M00/3E/2F/CmcEHF1eNv2AFFvaAAD6_40FUrs842_400.jpg',
            audit: 0
          },
          {
            auctionId: 960892,
            auctionClass: 0,
            goodsName: 'Bose SoundSport Free 真无线蓝牙耳机',
            nickname: '好景',
            endTime: 1576206165380,
            currentPrice: 258.6,
            marketPrice: 1699,
            priceRate: '84.7%',
            defaultGoodsImage: '/group1/M00/2F/07/CmcEHFy4IcqAMYe6AAFmwXAPyFw619_400.jpg',
            audit: 0
          },
          {
            auctionId: 961215,
            auctionClass: 0,
            goodsName: '三只松鼠2020新春三松坚果类礼C款（尊享礼）',
            nickname: '刚哥',
            endTime: 1576206154785,
            currentPrice: 33.75,
            marketPrice: 208,
            priceRate: '83.7%',
            defaultGoodsImage: '/group1/M00/3F/D1/CmcEHF3x11KARk0iABMZvE0r4lE628_400.png',
            audit: 0
          },
          {
            auctionId: 960665,
            auctionClass: 0,
            goodsName: '享遊日报JOURNAL des LOISIRS 2瓶装',
            nickname: '突然少了一个',
            endTime: 1576206111989,
            currentPrice: 20.13,
            marketPrice: 259,
            priceRate: '92.2%',
            defaultGoodsImage: '/group1/M00/40/A7/CmcEHV2gLpaAFYQqAACfhrzQJU8386_400.png',
            audit: 0
          },
          {
            auctionId: 961485,
            auctionClass: 0,
            goodsName: '10元话费充值卡',
            nickname: '九二一三',
            endTime: 1576206107550,
            currentPrice: 9.5,
            marketPrice: 10,
            priceRate: '5.0%',
            defaultGoodsImage: '/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780_400.png',
            audit: 0
          },
          {
            auctionId: 961415,
            auctionClass: 0,
            goodsName: '贵州茅台酒厂习酒52度习酒庄园1952浓香500ML',
            nickname: '155****5698',
            endTime: 1576206077601,
            currentPrice: 504,
            marketPrice: 499,
            priceRate: '-1.0%',
            defaultGoodsImage: '/group1/M00/41/14/CmcEHV2u5vuAPWSCAAxYdgf6FTg720_400.jpg',
            audit: 0
          },
          {
            auctionId: 961503,
            auctionClass: 0,
            goodsName: '【爆款】三合一数据线苹果安卓type-c一拖三充电线华为快充oppo小米通用（颜色随机发）',
            nickname: '再见是否如初',
            endTime: 1576206049821,
            currentPrice: 1.38,
            marketPrice: 9.9,
            priceRate: '86.0%',
            defaultGoodsImage: '/group1/M00/3E/2F/CmcEHF1eNv2AFFvaAAD6_40FUrs842_400.jpg',
            audit: 0
          },
          {
            auctionId: 958556,
            auctionClass: 0,
            goodsName: '华为 HUAWEI Mate30pro 5G全网通8G+256G（颜色随机发）',
            nickname: '186****6174',
            endTime: 1576206018175,
            currentPrice: 0.2,
            marketPrice: 6899,
            priceRate: '99.9%',
            defaultGoodsImage: '/group1/M00/3E/EB/CmcEHF2ztnSAH0IuAAHYNjcNt-c644_400.jpg',
            audit: 0
          },
          {
            auctionId: 961422,
            auctionClass: 0,
            goodsName: '10元话费充值卡',
            nickname: '三无先森',
            endTime: 1576205989077,
            currentPrice: 1.29,
            marketPrice: 10,
            priceRate: '87.1%',
            defaultGoodsImage: '/group1/M00/3E/88/CmcEHF14wiGABZ8tAABX5qB4XCw780_400.png',
            audit: 0
          },
          {
            auctionId: 961276,
            auctionClass: 0,
            goodsName: '九阳电热水壶不锈钢内胆1.3L自动断电防干烧',
            nickname: '安分男人',
            endTime: 1576205979738,
            currentPrice: 7.2,
            marketPrice: 96,
            priceRate: '92.5%',
            defaultGoodsImage: '/group1/M00/41/52/CmcEHV3JPbWARY23AATK7QJXQtA209_400.jpg',
            audit: 0
          }
        ],
        message: null,
        serverTime: 1576206342889,
        success: true
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}

export { getBanner, getNotice, getDealLog }

const Services = { getBanner, getNotice, getDealLog }
export default Services
