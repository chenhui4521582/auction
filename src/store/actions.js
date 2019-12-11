import _get from 'lodash.get'
import address from './address'
export default {
  ...address.actions,
  getAuctionInfo({ commit }) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        let res = {
          data: {
            code: 200,
            data: {
              auctionInfo: {
                auctionId: 892267,
                goodsId: 457,
                startTime: 1575338400000,
                endTime: 1575357169946,
                currentPrice: 117.78,
                currentUserId: -520,
                nickname: '152****5978',
                headImg: '',
                vipLevel: 1,
                city: null,
                paymentEndTime: null,
                status: 1,
                paymentStatus: 0,
                paymentTime: null,
                nextAuctionId: null,
                goodsName: '爱仕达破壁机 1.75L/800W',
                defaultGoodsImage:
                  '/group1/M00/41/53/CmcEHV3JP4aATpPxABcF1G620NM939.jpg',
                goodsImages:
                  '/group1/M00/41/53/CmcEHV3JP4aATpPxABcF1G620NM939.jpg,/group1/M00/41/53/CmcEHV3JP4mAabmQABcF1G620NM075.jpg',
                marketPrice: 1299,
                startPrice: 0,
                auctionFee: 300,
                auctionFeePrice: 0.03,
                canDeposit: 1,
                auctionClass: 0,
                freeEntryFee: null,
                freeRaisePrice: null,
                goodsType: 1,
                chipPiece: 0,
                paymentOrderId: null,
                rollAuctionId: 257,
                goodsAvePrice: 144.7,
                goodsDetailList: [
                  {
                    type: 1,
                    content:
                      'https://file.beepai.com/group1/M00/41/53/CmcEHV3JP7yARvYfANetX3aAGN4140.jpg'
                  }
                ],
                entryFee: null,
                delayPeriod: null,
                auctionTimes: 3926,
                delayTimes: null,
                validAuctionPeriod: null,
                shouldPayAmount: 0,
                voucherAmount: null,
                activityDiscounts: null,
                hotRecommend: 0,
                sort: null,
                tag: 'default'
              },
              auctionUserCount: 123,
              bailAmount: null,
              isAuction: null,
              isEnroll: null,
              isFirstEnter: null,
              isViolationUser: null,
              latestAuctionedUserCount: null,
              myAuctionPrice: null,
              onlookerCount: 182,
              settlingSeconds: null,
              violationTime: null,
              violationGoodsName: null,
              depositUserInfo: null,
              winAuctionNum: 0,
              smallUser: true,
              newUserPopup: false,
              sendTime: 1575357165306
            },
            message: null,
            serverTime: 1575357165314,
            success: true
          }
        }
        let { code, data, message } = _get(res, 'data')
        if (code == 200) {
          let sliderList = _get(res, 'data.data.auctionInfo.goodsImages', '')
          commit('SET_AUCTION_SLIDERLIST', sliderList.split(','))
          commit(
            'SET_AUCTION_AUCTIONINFO',
            _get(res, 'data.data.auctionInfo', {})
          )
          commit(
            'SET_AUCTION_ONLOOKERCOUNT',
            _get(res, 'data.data.onlookerCount', 0)
          )
          commit(
            'SET_AUCTION_AUCTIONUSERCOUNT',
            _get(res, 'data.data.auctionUserCount', 0)
          )
          commit(
            'SET_AUCTION_DETAILIMG',
            _get(res, 'data.data.auctionInfo.goodsDetailList', [])
          )
          resolve('aaa')
        }
      }, 2000)
    })
  },
  getHistoryAuctionList({ commit }) {
    setTimeout(() => {
      let res = {
        data: {
          code: 200,
          data: [
            {
              id: 930251,
              userId: -995,
              nickname: '180****8527',
              headImg: null,
              price: 80.86,
              endTime: 1575836146000
            },
            {
              id: 928724,
              userId: -887,
              nickname: '185****5260',
              headImg: null,
              price: 79.7,
              endTime: 1575816284000
            },
            {
              id: 927495,
              userId: -14,
              nickname: '练习说再见',
              headImg:
                'http://file.beepai.com/group1/M00/40/5F/CmcEHV2Jy66AAEz0AAAeqrPG0rk173.jpg',
              price: 57.66,
              endTime: 1575799586000
            },
            {
              id: 926407,
              userId: -1035,
              nickname: '158****6248',
              headImg: null,
              price: 44.78,
              endTime: 1575786717000
            },
            {
              id: 924166,
              userId: -931,
              nickname: '186****3176',
              headImg: null,
              price: 48.34,
              endTime: 1575775414000
            },
            {
              id: 923384,
              userId: -94,
              nickname: '读卜懂你的忧伤',
              headImg:
                'http://file.beepai.com/group1/M00/40/61/CmcEHV2J4lOAQernAABWkT6wRac441.jpg',
              price: 43,
              endTime: 1575736678000
            },
            {
              id: 921192,
              userId: -1842,
              nickname: '188****3561',
              headImg: null,
              price: 92.34,
              endTime: 1575725549000
            },
            {
              id: 920286,
              userId: -1043,
              nickname: '137****7184',
              headImg: null,
              price: 36.3,
              endTime: 1575702953000
            },
            {
              id: 917258,
              userId: -396,
              nickname: '我的雷神',
              headImg:
                'https://file.beepai.com/group1/M00/2B/B9/CmcEHFyckDuAbJNoAAAZ6mF_sd4689.jpg',
              price: 51.2,
              endTime: 1575693396000
            },
            {
              id: 915085,
              userId: -4,
              nickname: '黄金啥时候拍',
              headImg:
                'https://file.beepai.com/group1/M00/2B/BA/CmcEHFycmA-AALBmAABtdQja-co131.jpg',
              price: 95.06,
              endTime: 1575643726000
            },
            {
              id: 913973,
              userId: -1857,
              nickname: '155****3891',
              headImg: null,
              price: 46.68,
              endTime: 1575620241000
            },
            {
              id: 911098,
              userId: -53,
              nickname: '打豆豆',
              headImg:
                'http://file.beepai.com/group1/M00/40/60/CmcEHV2J2nqAbhTcAAA4SSP5aGI495.jpg',
              price: 64.12,
              endTime: 1575609153000
            },
            {
              id: 910430,
              userId: -1859,
              nickname: '158****3161',
              headImg: null,
              price: 41.8,
              endTime: 1575564033000
            },
            {
              id: 908758,
              userId: -213,
              nickname: '余生请你指教',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D3/CmcEHFyTeXaACNDxAAA944gDVr8226.jpg',
              price: 71.72,
              endTime: 1575553742000
            },
            {
              id: 906832,
              userId: -982,
              nickname: '189****9437',
              headImg: null,
              price: 81.18,
              endTime: 1575535848000
            },
            {
              id: 904759,
              userId: -422,
              nickname: '落兮裳翩舞',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D7/CmcEHFyTgaGAHIN-AAAsDl5WLgs552.jpg',
              price: 36.18,
              endTime: 1575515734000
            },
            {
              id: 903834,
              userId: -285,
              nickname: '巨齿鲨',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D5/CmcEHFyTfJaAU8JtAABKaDtHqvw628.jpg',
              price: 61.38,
              endTime: 1575481690000
            },
            {
              id: 903024,
              userId: -1873,
              nickname: '158****3724',
              headImg: null,
              price: 32.58,
              endTime: 1575465379000
            },
            {
              id: 900672,
              userId: -952,
              nickname: '139****2122',
              headImg: null,
              price: 95.62,
              endTime: 1575456719000
            },
            {
              id: 898340,
              userId: -953,
              nickname: '139****9068',
              headImg: null,
              price: 50.04,
              endTime: 1575433179000
            }
          ],
          message: null,
          serverTime: 1575871893292,
          success: true
        }
      }
      let { code, data, message } = _get(res, 'data')
      if (code == 200) {
        commit('SET_HISTORY_AUCTION', _get(res, 'data.data', []))
      }
    }, 2000)
  },
  getOfferLog({ commit }) {
    setTimeout(() => {
      let res = {
        data: {
          code: 200,
          data: [
            {
              userId: -228,
              nickname: '任凭寂寞沸腾',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D4/CmcEHFyTegCASSm1AABVLz0eTh8972.jpg',
              vipLevel: null,
              afterPrice: 1456.2,
              createTime: 1575895462506
            },
            {
              userId: -1023,
              nickname: '159****5009',
              headImg: '',
              vipLevel: null,
              afterPrice: 1456,
              createTime: 1575895456573
            },
            {
              userId: -454,
              nickname: '醉扶月',
              headImg:
                'https://file.beepai.com/group1/M00/2B/B8/CmcEHFycgpWAPrf0AABPMVkbEeg138.jpg',
              vipLevel: null,
              afterPrice: 1455.8,
              createTime: 1575895455568
            },
            {
              userId: -1876,
              nickname: '186****5762',
              headImg: '',
              vipLevel: null,
              afterPrice: 1455.6,
              createTime: 1575895454488
            },
            {
              userId: -11,
              nickname: '孤独是有情人',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D5/CmcEHFyTfMCAAhsKAAByHSr6RCk693.jpg',
              vipLevel: null,
              afterPrice: 1455.4,
              createTime: 1575895452481
            },
            {
              userId: -228,
              nickname: '任凭寂寞沸腾',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D4/CmcEHFyTegCASSm1AABVLz0eTh8972.jpg',
              vipLevel: null,
              afterPrice: 1455.2,
              createTime: 1575895450543
            },
            {
              userId: -45,
              nickname: '老姊',
              headImg:
                'https://file.beepai.com/group1/M00/2B/B9/CmcEHFycimqAB-l3AAArJhxtZsM620.jpg',
              vipLevel: null,
              afterPrice: 1455,
              createTime: 1575895449539
            },
            {
              userId: -1905,
              nickname: 'yschenwei',
              headImg:
                'https://file.beepai.com/group1/M00/3F/3A/CmcEHF3bUuWAPSNoAAE5-Fwf8w8534.jpg',
              vipLevel: null,
              afterPrice: 1454.8,
              createTime: 1575895447531
            },
            {
              userId: -4,
              nickname: '黄金啥时候拍',
              headImg:
                'https://file.beepai.com/group1/M00/2B/BA/CmcEHFycmA-AALBmAABtdQja-co131.jpg',
              vipLevel: null,
              afterPrice: 1454.6,
              createTime: 1575895444524
            },
            {
              userId: -1896,
              nickname: '137****6513',
              headImg: '',
              vipLevel: null,
              afterPrice: 1454.4,
              createTime: 1575895439450
            },
            {
              userId: -1906,
              nickname: 'chensr45',
              headImg:
                'https://file.beepai.com/group1/M00/3F/3A/CmcEHF3bUzuAe5zZAAEzvW4HO64281.jpg',
              vipLevel: null,
              afterPrice: 1454.2,
              createTime: 1575895432443
            },
            {
              userId: -1856,
              nickname: '155****4051',
              headImg: '',
              vipLevel: null,
              afterPrice: 1454,
              createTime: 1575895425495
            },
            {
              userId: -10,
              nickname: '孤独患者',
              headImg:
                'http://file.beepai.com/group1/M00/40/61/CmcEHV2J34eABq_UAAA3-8ELGlg803.jpg',
              vipLevel: null,
              afterPrice: 1453.8,
              createTime: 1575895423428
            },
            {
              userId: -905,
              nickname: '189****6980',
              headImg: '',
              vipLevel: null,
              afterPrice: 1453.6,
              createTime: 1575895421480
            },
            {
              userId: -974,
              nickname: '186****2015',
              headImg: '',
              vipLevel: null,
              afterPrice: 1453.4,
              createTime: 1575895413472
            },
            {
              userId: -936,
              nickname: '186****1001',
              headImg: '',
              vipLevel: null,
              afterPrice: 1453.2,
              createTime: 1575895408411
            },
            {
              userId: -963,
              nickname: '170****1230',
              headImg: '',
              vipLevel: null,
              afterPrice: 1453,
              createTime: 1575895401408
            },
            {
              userId: -1845,
              nickname: '131****6621',
              headImg: '',
              vipLevel: null,
              afterPrice: 1452.8,
              createTime: 1575895394450
            },
            {
              userId: -1920,
              nickname: '陈真不习武',
              headImg:
                'https://file.beepai.com/group1/M00/3F/3A/CmcEHF3bVpGAe7X8AABaA1Xx2N0701.jpg',
              vipLevel: null,
              afterPrice: 1452.6,
              createTime: 1575895392399
            },
            {
              userId: -1903,
              nickname: '188****8625',
              headImg: '',
              vipLevel: null,
              afterPrice: 1452.4,
              createTime: 1575895385210
            },
            {
              userId: -228,
              nickname: '任凭寂寞沸腾',
              headImg:
                'https://file.beepai.com/group1/M00/2A/D4/CmcEHFyTegCASSm1AABVLz0eTh8972.jpg',
              vipLevel: null,
              afterPrice: 1452.2,
              createTime: 1575895378244
            }
          ],
          message: null,
          serverTime: 1575895467372,
          success: true
        }
      }
      let { code, data, message } = _get(res, 'data')
      if (code == 200) {
        commit('SET_OFFERLOG', _get(res, 'data.data', []))
      }
    }, 2000)
  }
}
