class calcPsycho {
  constructor (
    gender,
    oldMonth,
    weightNow,
    growthNow,
    indexPercent,
    indexGrowth,
    indexWeight
  ) {
    this.GENDER = gender
    this.OLD = oldMonth
    this.WEIGHT_NOW = weightNow
    this.GROWTH_NOW = growthNow
    this.INDEX_PERCENT = indexPercent
    this.INDEX_GROWTH = indexGrowth
    this.INDEX_WEIGHT = indexWeight
  }

  data () {
    return {
      ArrayGirlWeight: [
        [2.1, 2.5, 2.9, 3.3, 3.9, 4.4, 5.0],
        [2.9, 3.4, 3.9, 4.5, 5.1, 5.8, 6.6],
        [3.8, 4.3, 4.9, 5.6, 6.3, 7.1, 8.0],
        [4.4, 5.0, 5.7, 6.4, 7.2, 8.0, 9.0],
        [4.9, 5.6, 6.2, 7.0, 7.8, 8.7, 9.7],
        [5.3, 6.0, 6.7, 7.5, 8.4, 9.3, 10.4],
        [5.7, 6.4, 7.1, 7.9, 8.8, 9.8, 10.9],
        [5.9, 6.7, 7.4, 8.3, 9.2, 10.3, 11.4],
        [6.2, 6.9, 7.7, 8.6, 9.6, 10.7, 11.9],
        [6.4, 7.1, 8.0, 8.9, 9.9, 11.0, 12.3],
        [6.6, 7.4, 8.2, 9.2, 10.2, 11.4, 12.7],
        [6.8, 7.6, 8.4, 9.4, 10.5, 11.7, 13.0],
        [6.9, 7.7, 8.6, 9.6, 10.8, 12.0, 13.3],
        [7.4, 8.3, 9.2, 10.3, 11.5, 12.8, 14.3],
        [7.8, 8.8, 9.8, 10.9, 12.2, 13.7, 15.3],
        [8.2, 9.2, 10.3, 11.5, 12.9, 14.5, 16.2],
        [8.6, 9.7, 10.8, 12.2, 13.6, 15.3, 17.1],
        [9.0, 10.1, 11.3, 12.7, 14.3, 16.1, 18.1],
        [9.4, 10.5, 11.8, 13.3, 15.0, 16.9, 19.0],
        [9.7, 10.9, 12.3, 13.8, 15.6, 17.6, 19.9],
        [10.0, 11.3, 12.7, 14.3, 16.2, 18.3, 20.7]
      ],
      ArrayBoyWeight: [
        [2, 2.4, 2.8, 3.2, 3.7, 4.2, 4.8],
        [2.7, 3.2, 3.6, 4.2, 4.8, 5.5, 6.2],
        [3.4, 3.9, 4.5, 5.1, 5.8, 6.6, 7.5],
        [4.0, 4.5, 5.2, 5.8, 6.6, 7.5, 8.5],
        [4.4, 5.0, 5.7, 6.4, 7.3, 8.2, 9.3],
        [4.8, 5.4, 6.1, 6.9, 7.8, 8.8, 10.0],
        [5.1, 5.7, 6.5, 7.3, 8.2, 9.3, 10.6],
        [5.3, 6.0, 6.8, 7.6, 8.6, 9.8, 11.1],
        [5.6, 6.3, 7.0, 7.9, 9.0, 10.2, 11.6],
        [5.8, 6.5, 7.3, 8.2, 9.3, 10.5, 12.0],
        [5.9, 6.7, 7.5, 8.5, 9.6, 10.9, 12.4],
        [6.1, 6.9, 7.7, 8.7, 9.9, 11.2, 12.8],
        [6.3, 7.0, 7.9, 8.9, 10.1, 11.5, 13.1],
        [6.7, 7.6, 8.5, 9.6, 10.9, 12.4, 14.1],
        [7.2, 8.1, 9.1, 10.2, 11.6, 13.2, 15.1],
        [7.6, 8.6, 9.6, 10.9, 12.3, 14.0, 16.0],
        [8.1, 9.0, 10.2, 11.5, 13.0, 14.8, 17.0],
        [8.5, 9.5, 10.7, 12.1, 13.7, 15.7, 18.0],
        [8.9, 10.0, 11.2, 12.7, 14.4, 16.5, 19.0],
        [9.3, 10.4, 11.7, 13.3, 15.1, 17.3, 20.0],
        [9.6, 10.8, 12.2, 13.9, 15.8, 18.1, 20.9]
      ],
      ArrayGirlGrowth: [
        [43.6, 45.4, 47.3, 49.1, 51.0, 52.9, 54.7],
        [47.8, 49.8, 51.7, 53.7, 55.6, 57.6, 59.5],
        [51.0, 53.0, 55.0, 57.1, 59.1, 61.1, 63.2],
        [53.5, 55.6, 57.7, 59.8, 61.9, 64.0, 66.1],
        [55.6, 57.8, 59.9, 62.1, 64.3, 66.4, 68.6],
        [57.4, 59.6, 61.8, 64.0, 66.2, 68.5, 70.7],
        [58.9, 61.2, 63.5, 65.7, 68.0, 70.3, 72.5],
        [60.3, 62.7, 65.0, 67.3, 69.6, 71.9, 74.2],
        [61.7, 64.0, 66.4, 68.7, 71.1, 73.5, 75.8],
        [62.9, 65.3, 67.7, 70.1, 72.6, 75.0, 77.4],
        [64.1, 66.5, 69.0, 71.5, 73.9, 76.4, 78.9],
        [65.2, 67.7, 70.3, 72.8, 75.3, 77.8, 80.3],
        [66.3, 68.9, 71.4, 74.0, 76.6, 79.2, 81.7],
        [69.3, 72.0, 74.8, 77.5, 80.2, 83.0, 85.7],
        [72.0, 74.9, 77.8, 80.7, 83.6, 86.5, 89.4],
        [74.5, 77.5, 80.6, 83.7, 86.7, 89.8, 92.9],
        [76.7, 80.0, 83.2, 86.4, 89.6, 92.9, 96.1],
        [78.1, 81.5, 84.9, 88.3, 91.7, 95.0, 98.4],
        [80.1, 83.6, 87.1, 90.7, 94.2, 97.7, 101.3],
        [81.9, 85.6, 89.3, 92.9, 96.6, 100.3, 103.9],
        [83.6, 87.4, 91.2, 95.1, 98.9, 102.7, 106.0]
      ],
      ArrayBoyGrowth: [
        [44.2, 46.1, 48.0, 49.9, 51.8, 53.7, 55.6],
        [48.9, 50.8, 52.8, 54.7, 56.7, 58.6, 60.6],
        [52.4, 54.4, 56.4, 58.4, 60.4, 62.4, 64.4],
        [55.3, 57.3, 59.4, 61.4, 63.5, 65.5, 67.6],
        [57.6, 59.7, 61.8, 63.9, 66.0, 68.0, 70.1],
        [59.6, 61.7, 63.8, 65.9, 68.0, 70.1, 72.2],
        [61.2, 63.3, 65.5, 67.6, 69.8, 71.9, 74.0],
        [62.6, 64.8, 67.0, 69.2, 71.3, 73.5, 75.7],
        [64.0, 66.2, 68.4, 70.6, 72.8, 75.0, 77.2],
        [65.2, 67.5, 69.7, 72.0, 74.2, 76.5, 78.7],
        [66.4, 68.7, 71.0, 73.3, 75.6, 77.9, 80.1],
        [67.6, 69.9, 72.2, 74.5, 76.9, 79.2, 81.5],
        [68.6, 71.0, 73.4, 75.7, 78.1, 80.5, 82.9],
        [71.6, 74.1, 76.6, 79.1, 81.7, 84.2, 86.7],
        [74.2, 76.9, 79.6, 82.3, 85.0, 87.7, 90.4],
        [76.5, 79.4, 82.3, 85.1, 88.0, 90.9, 93.8],
        [78.7, 81.7, 84.8, 87.8, 90.9, 93.9, 97.0],
        [79.9, 83.1, 86.4, 89.6, 92.9, 96.1, 99.3],
        [81.7, 85.1, 88.5, 91.9, 95.3, 98.7, 102.1],
        [83.4, 86.9, 90.5, 94.1, 97.6, 101.2, 104.8],
        [85.0, 88.7, 92.4, 96.1, 99.8, 103.5, 107.2]
      ]
    }
  }

  data1 () {
    return {
      card_1: [
        [false, false, true, true, true, false, false],
        [false, false, true, true, true, false, false],
        [false, false, true, true]
      ],
      card_2: [
        [false, true, true, true, true, false, false],
        [false, false, true, true, true, false, false],
        [false, false, true, true]
      ],
      card_3: [
        [false, false, true, true, true, true, false],
        [false, false, true, true, true, true, false],
        [false, false, true, true]
      ],
      card_4: [
        [false, false, false, false, false, true, true],
        [false, false, false, true, true, true, true],
        [false, false, true, true]
      ],
      card_5: [
        [true, true, false, false, false, false, false],
        [false, true, true, true, false, false, false],
        [false, false, true, true]
      ],
      card_6: [
        [false, false, true, true, true, false, false],
        [false, true, true, false, false, false, false],
        [false, false, true, true]
      ],
      card_7: [
        [true, true, false, false, false, false, false],
        [true, true, false, false, false, false, false],
        [false, false, true, true]
      ],
      card_8: [
        [true, true, false, false, false, false, false],
        [true, true, false, false, false, false, false],
        [false, true, false, false]
      ],
      card_9: [
        [false, false, false, false, false, true, true],
        [false, false, false, false, false, true, true],
        [false, false, true, true]
      ],
      card_10: [
        [false, false, false, false, false, true, true],
        [false, false, false, false, false, true, true],
        [false, true, false, false]
      ],
      card_11: [
        [false, false, false, false, false, true, true],
        [false, false, false, false, false, true, true],
        [true, false, false, false]
      ],
      card_12: [
        [true, true, false, false, false, false, false],
        [true, true, false, false, false, false, false],
        [true, false, false, false]
      ],
      card_13: [
        [false, false, false, false, false, true, true],
        [true, true, false, false, false, false, false],
        [false, false, true, true]
      ],
      card_14: [
        [false, false, false, false, false, true, true],
        [true, true, false, false, false, false, false],
        [true, false, false, false]
      ],
      card_15: [
        [false, false, false, false, false, true, true],
        [true, true, false, false, false, false, false],
        [false, true, false, false]
      ],
      card_16: [
        [true, true, false, false, false, false, false],
        [false, false, false, false, false, true, true],
        [false, false, true, true]
      ],
      card_17: [
        [true, true, false, false, false, false, false],
        [false, false, false, false, true, true, true],
        [false, true, true, true]
      ],
      card_18: [
        [true, true, false, false, false, false, false],
        [false, false, false, false, false, true, true],
        [true, false, false, false]
      ],
      card_19: [
        [true, true, false, false, false, false, false],
        [false, false, true, true, true, false, false],
        [true, true, false, false]
      ],
      card_20: [
        [false, false, true, false, false, false, false],
        [true, true, false, false, false, false, false],
        [true, true, false, false]
      ],
      card_21: [
        [false, false, true, false, false, false, false],
        [true, false, false, false, false, false, false],
        [false, false, true, true]
      ],
      card_22: [
        [false, false, true, true, true, true, false],
        [false, false, true, true, true, true, false],
        [true, true, false, false]
      ],
      card_23: [
        [false, false, true, true, true, false, false],
        [false, false, false, false, false, false, true],
        [true, true, false, false]
      ],
      card_24: [
        [false, false, true, true, true, false, false],
        [false, false, false, false, false, false, true],
        [false, false, true, true]
      ],
      card_25: [
        [false, false, false, true, true, false, false],
        [true, true, false, false, false, false, false],
        [true, true, false, false]
      ],
      card_26: [
        [false, false, false, true, true, false, false],
        [true, false, false, false, false, false, false],
        [false, false, true, true]
      ],
      card_27: [
        [false, false, false, false, false, false, true],
        [false, false, true, true, true, false, false],
        [true, true, false, false]
      ],
      card_28: [
        [false, false, false, false, false, false, true],
        [false, false, true, true, true, false, false],
        [false, false, true, true]
      ]
    }
  }

  callIndex (old) {
    if (old <= 12) {
      return old
    }
    if (old > 12 && old <= 15) {
      return 13
    }
    if (old > 15 && old <= 18) {
      return 14
    }
    if (old > 18 && old <= 21) {
      return 15
    }
    if (old > 21 && old <= 24) {
      return 16
    }
    if (old > 24 && old <= 27) {
      return 17
    }
    if (old > 27 && old <= 30) {
      return 18
    }
    if (old > 30 && old <= 33) {
      return 19
    }
    if (old > 33 && old <= 36) {
      return 20
    }
  }

  tranferData () {
    const allData = []
    for (let i = 0; i < 21; i++) {
      const row = []
      row.push(this.data().long_for_boy[i].very_low)
      row.push(this.data().long_for_boy[i].low)
      row.push(this.data().long_for_boy[i].below_average)
      row.push(this.data().long_for_boy[i].average)
      row.push(this.data().long_for_boy[i].above_average)
      row.push(this.data().long_for_boy[i].tall)
      row.push(this.data().long_for_boy[i].very_tall)
      allData.push(row)
    }
    return allData
  }

  checkGrowth () {
    const key = Number(this.OLD)
    if (this.GENDER === 'boy') {
      return this.data().length_age_boy_all[key]
    }
    return this.data().length_age_girl_all[key]
  }

  checkWeight () {
    const key = Number(this.OLD)
    if (this.GENDER === 'boy') {
      return this.data().weight_age_boy_all[key]
    }
    return this.data().weight_age_girl_all[key]
  }

  contains (arr, elem) {
    // alert(elem)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return true
      }
    }
    return false
  }

  findArray (data) {
    switch (this.GENDER) {
      case 'boy':
        if (data === 'growth') {
          return this.data().ArrayBoyGrowth[this.OLD]
        }
        return this.data().ArrayBoyWeight[this.OLD]

      case 'girl':
        if (data === 'growth') {
          return this.data().ArrayGirlGrowth[this.OLD]
        }
        return this.data().ArrayGirlWeight[this.OLD]

      default:
        return null
    }
  }

  findArraySimple (data, index) {
    switch (this.GENDER) {
      case 'boy':
        if (data === 'growth') {
          return this.data().ArrayBoyGrowth[index]
        }
        return this.data().ArrayBoyWeight[index]

      case 'girl':
        if (data === 'growth') {
          return this.data().ArrayGirlGrowth[index]
        }
        return this.data().ArrayGirlWeight[index]

      default:
        return null
    }
  }

  findIndexExpress () {
    const index = this.callIndex(this.OLD)
    // console.log('index - ' + index);
    const arrayGrowth = this.findArraySimple('growth', index)
    const arrayWeight = this.findArraySimple('weight', index)

    const findGrowth = this.findNumber(arrayGrowth, this.GROWTH_NOW)
    const findWeight = this.findNumber(arrayWeight, this.WEIGHT_NOW / 1000)
    // console.log(arrayWeight);
    // console.log(arrayWeight);
    return { arrayGrowth, arrayWeight, findGrowth, findWeight }
  }

  findIndex () {
    const arrayGrowth = this.findArray('growth')
    const arrayWeight = this.findArray('weight')
    const findGrowth = this.findNumber(arrayGrowth, this.GROWTH_NOW)
    const findWeight = this.findNumber(arrayWeight, this.WEIGHT_NOW / 1000)
    // console.log(arrayWeight);
    // console.log(arrayGrowth);
    return { arrayGrowth, arrayWeight, findGrowth, findWeight }
  }

  findNumber (a, g) {
    const { abs } = Math
    const closest = (a, g) =>
      a.reduce((p, c) => (abs(c - g) < abs(p - g) ? c : p))
    return [a.indexOf(closest(a, g)), closest(a, g)]
  }

  check (key) {
    const input = [this.INDEX_GROWTH, this.INDEX_WEIGHT, this.INDEX_PERCENT]
    for (const j in input) {
      const answer = input[j]
      if (this.data1()[key][j][answer]) {
        continue
      } else {
        return false
      }
    }
    return true
  }

  calcBalls () {
    const keys = Object.keys(this.data1())
    for (let key = 0; key < keys.length; key++) {
      const x = keys[key]
      const isMatching = this.check(x)
      if (isMatching) {
        return keys[key]
      }
    }
  }
}

module.exports = calcPsycho
