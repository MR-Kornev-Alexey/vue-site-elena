
class MainCheck {
  constructor (gIndex, wIndex, gender, oldMonth, weightNow, growthNow) {
    this.W_INDEX = wIndex
    this.G_INDEX = gIndex
    this.GENDER = gender
    this.OLD = oldMonth
    this.WEIGHT_NOW = weightNow
    this.GROWTH_NOW = growthNow
  }

  data () {
    return {
      weight_for_girl: [
        {
          id: '0',
          very_low: '2.1',
          low: '2.5',
          below_average: '2.9',
          average: '3.3',
          above_average: '3.9',
          tall: '4.4',
          very_tall: '5.0'
        },
        {
          id: '1',
          very_low: '2.9',
          low: '3.4',
          below_average: '3.9',
          average: '4.5',
          above_average: '5.1',
          tall: '5.8',
          very_tall: '6.6'
        },
        {
          id: '2',
          very_low: '3.8',
          low: '4.3',
          below_average: '4.9',
          average: '5.6',
          above_average: '6.3',
          tall: '7.1',
          very_tall: '8.0'
        },
        {
          id: '3',
          very_low: '4.4',
          low: '5.0',
          below_average: '5.7',
          average: '6.4',
          above_average: '7.2',
          tall: '8.0',
          very_tall: '9.0'
        },
        {
          id: '4',
          very_low: '4.9',
          low: '5.6',
          below_average: '6.2',
          average: '7.0',
          above_average: '7.8',
          tall: '8.7',
          very_tall: '9.7'
        },
        {
          id: '5',
          very_low: '5.3',
          low: '6.0',
          below_average: '6.7',
          average: '7.5',
          above_average: '8.4',
          tall: '9.3',
          very_tall: '10.4'
        },
        {
          id: '6',
          very_low: '5.7',
          low: '6.4',
          below_average: '7.1',
          average: '7.9',
          above_average: '8.8',
          tall: '9.8',
          very_tall: '10.9'
        },
        {
          id: '7',
          very_low: '5.9',
          low: '6.7',
          below_average: '7.4',
          average: '8.3',
          above_average: '9.2',
          tall: '10.3',
          very_tall: '11.4'
        },
        {
          id: '8',
          very_low: '6.2',
          low: '6.9',
          below_average: '7.7',
          average: '8.6',
          above_average: '9.6',
          tall: '10.7',
          very_tall: '11.9'
        },
        {
          id: '9',
          very_low: '6.4',
          low: '7.1',
          below_average: '8.0',
          average: '8.9',
          above_average: '9.9',
          tall: '11.0',
          very_tall: '12.3'
        },
        {
          id: '10',
          very_low: '6.6',
          low: '7.4',
          below_average: '8.2',
          average: '9.2',
          above_average: '10.2',
          tall: '11.4',
          very_tall: '12.7'
        },
        {
          id: '11',
          very_low: '6.8',
          low: '7.6',
          below_average: '8.4',
          average: '9.4',
          above_average: '10.5',
          tall: '11.7',
          very_tall: '13.0'
        },
        {
          id: '12',
          very_low: '6.9',
          low: '7.7',
          below_average: '8.6',
          average: '9.6',
          above_average: '10.8',
          tall: '12.0',
          very_tall: '13.3'
        },
        {
          id: '15',
          very_low: '7.4',
          low: '8.3',
          below_average: '9.2',
          average: '10.3',
          above_average: '11.5',
          tall: '12.8',
          very_tall: '14.3'
        },
        {
          id: '18',
          very_low: '7.8',
          low: '8.8',
          below_average: '9.8',
          average: '10.9',
          above_average: '12.2',
          tall: '13.7',
          very_tall: '15.3'
        },
        {
          id: '21',
          very_low: '8.2',
          low: '9.2',
          below_average: '10.3',
          average: '11.5',
          above_average: '12.9',
          tall: '14.5',
          very_tall: '16.2'
        },
        {
          id: '24',
          very_low: '8.6',
          low: '9.7',
          below_average: '10.8',
          average: '12.2',
          above_average: '13.6',
          tall: '15.3',
          very_tall: '17.1'
        },
        {
          id: '27',
          very_low: '9.0',
          low: '10.1',
          below_average: '11.3',
          average: '12.7',
          above_average: '14.3',
          tall: '16.1',
          very_tall: '18.1'
        },
        {
          id: '30',
          very_low: '9.4',
          low: '10.5',
          below_average: '11.8',
          average: '13.3',
          above_average: '15.0',
          tall: '16.9',
          very_tall: '19.0'
        },
        {
          id: '33',
          very_low: '9.7',
          low: '10.9',
          below_average: '12.3',
          average: '13.8',
          above_average: '15.6',
          tall: '17.6',
          very_tall: '19.9'
        },
        {
          id: '36',
          very_low: '10.0',
          low: '11.3',
          below_average: '12.7',
          average: '14.3',
          above_average: '16.2',
          tall: '18.3',
          very_tall: '20.7'
        }
      ],
      weight_for_boy: [
        {
          id: '0',
          very_low: '2',
          low: '2.4',
          below_average: '2.8',
          average: '3.2',
          above_average: '3.7',
          tall: '4.2',
          very_tall: '4.8'
        },
        {
          id: '1',
          very_low: '2.7',
          low: '3.2',
          below_average: '3.6',
          average: '4.2',
          above_average: '4.8',
          tall: '5.5',
          very_tall: '6.2'
        },
        {
          id: '2',
          very_low: '3.4',
          low: '3.9',
          below_average: '4.5',
          average: '5.1',
          above_average: '5.8',
          tall: '6.6',
          very_tall: '7.5'
        },
        {
          id: '3',
          very_low: '4.0',
          low: '4.5',
          below_average: '5.2',
          average: '5.8',
          above_average: '6.6',
          tall: '7.5',
          very_tall: '8.5'
        },
        {
          id: '4',
          very_low: '4.4',
          low: '5.0',
          below_average: '5.7',
          average: '6.4',
          above_average: '7.3',
          tall: '8.2',
          very_tall: '9.3'
        },
        {
          id: '5',
          very_low: '4.8',
          low: '5.4',
          below_average: '6.1',
          average: '6.9',
          above_average: '7.8',
          tall: '8.8',
          very_tall: '10.0'
        },
        {
          id: '6',
          very_low: '5.1',
          low: '5.7',
          below_average: '6.5',
          average: '7.3',
          above_average: '8.2',
          tall: '9.3',
          very_tall: '10.6'
        },
        {
          id: '7',
          very_low: '5.3',
          low: '6.0',
          below_average: '6.8',
          average: '7.6',
          above_average: '8.6',
          tall: '9.8',
          very_tall: '11.1'
        },
        {
          id: '8',
          very_low: '5.6',
          low: '6.3',
          below_average: '7.0',
          average: '7.9',
          above_average: '9.0',
          tall: '10.2',
          very_tall: '11.6'
        },
        {
          id: '9',
          very_low: '5.8',
          low: '6.5',
          below_average: '7.3',
          average: '8.2',
          above_average: '9.3',
          tall: '10.5',
          very_tall: '12.0'
        },
        {
          id: '10',
          very_low: '5.9',
          low: '6.7',
          below_average: '7.5',
          average: '8.5',
          above_average: '9.6',
          tall: '10.9',
          very_tall: '12.4'
        },
        {
          id: '11',
          very_low: '6.1',
          low: '6.9',
          below_average: '7.7',
          average: '8.7',
          above_average: '9.9',
          tall: '11.2',
          very_tall: '12.8'
        },
        {
          id: '12',
          very_low: '6.3',
          low: '7.0',
          below_average: '7.9',
          average: '8.9',
          above_average: '10.1',
          tall: '11.5',
          very_tall: '13.1'
        },
        {
          id: '15',
          very_low: '6.7',
          low: '7.6',
          below_average: '8.5',
          average: '9.6',
          above_average: '10.9',
          tall: '12.4',
          very_tall: '14.1'
        },
        {
          id: '18',
          very_low: '7.2',
          low: '8.1',
          below_average: '9.1',
          average: '10.2',
          above_average: '11.6',
          tall: '13.2',
          very_tall: '15.1'
        },
        {
          id: '21',
          very_low: '7.6',
          low: '8.6',
          below_average: '9.6',
          average: '10.9',
          above_average: '12.3',
          tall: '14.0',
          very_tall: '16.0'
        },
        {
          id: '24',
          very_low: '8.1',
          low: '9.0',
          below_average: '10.2',
          average: '11.5',
          above_average: '13.0',
          tall: '14.8',
          very_tall: '17.0'
        },
        {
          id: '27',
          very_low: '8.5',
          low: '9.5',
          below_average: '10.7',
          average: '12.1',
          above_average: '13.7',
          tall: '15.7',
          very_tall: '18.0'
        },
        {
          id: '30',
          very_low: '8.9',
          low: '10.0',
          below_average: '11.2',
          average: '12.7',
          above_average: '14.4',
          tall: '16.5',
          very_tall: '19.0'
        },
        {
          id: '33',
          very_low: '9.3',
          low: '10.4',
          below_average: '11.7',
          average: '13.3',
          above_average: '15.1',
          tall: '17.3',
          very_tall: '20.0'
        },
        {
          id: '36',
          very_low: '9.6',
          low: '10.8',
          below_average: '12.2',
          average: '13.9',
          above_average: '15.8',
          tall: '18.1',
          very_tall: '20.9'
        }
      ],
      long_for_girl: [
        {
          id: '0',
          very_low: '43.6',
          low: '45.4',
          below_average: '47.3',
          average: '49.1',
          above_average: '51.0',
          tall: '52.9',
          very_tall: '54.7'
        },
        {
          id: '1',
          very_low: '47.8',
          low: '49.8',
          below_average: '51.7',
          average: '53.7',
          above_average: '55.6',
          tall: '57.6',
          very_tall: '59.5'
        },
        {
          id: '2',
          very_low: '51.0',
          low: '53.0',
          below_average: '55.0',
          average: '57.1',
          above_average: '59.1',
          tall: '61.1',
          very_tall: '63.2'
        },
        {
          id: '3',
          very_low: '53.5',
          low: '55.6',
          below_average: '57.7',
          average: '59.8',
          above_average: '61.9',
          tall: '64.0',
          very_tall: '66.1'
        },
        {
          id: '4',
          very_low: '55.6',
          low: '57.8',
          below_average: '59.9',
          average: '62.1',
          above_average: '64.3',
          tall: '66.4',
          very_tall: '68.6'
        },
        {
          id: '5',
          very_low: '57.4',
          low: '59.6',
          below_average: '61.8',
          average: '64.0',
          above_average: '66.2',
          tall: '68.5',
          very_tall: '70.7'
        },
        {
          id: '6',
          very_low: '58.9',
          low: '61.2',
          below_average: '63.5',
          average: '65.7',
          above_average: '68.0',
          tall: '70.3',
          very_tall: '72.5'
        },
        {
          id: '7',
          very_low: '60.3',
          low: '62.7',
          below_average: '65.0',
          average: '67.3',
          above_average: '69.6',
          tall: '71.9',
          very_tall: '74.2'
        },
        {
          id: '8',
          very_low: '61.7',
          low: '64.0',
          below_average: '66.4',
          average: '68.7',
          above_average: '71.1',
          tall: '73.5',
          very_tall: '75.8'
        },
        {
          id: '9',
          very_low: '62.9',
          low: '65.3',
          below_average: '67.7',
          average: '70.1',
          above_average: '72.6',
          tall: '75.0',
          very_tall: '77.4'
        },
        {
          id: '10',
          very_low: '64.1',
          low: '66.5',
          below_average: '69.0',
          average: '71.5',
          above_average: '73.9',
          tall: '76.4',
          very_tall: '78.9'
        },
        {
          id: '11',
          very_low: '65.2',
          low: '67.7',
          below_average: '70.3',
          average: '72.8',
          above_average: '75.3',
          tall: '77.8',
          very_tall: '80.3'
        },
        {
          id: '12',
          very_low: '66.3',
          low: '68.9',
          below_average: '71.4',
          average: '74.0',
          above_average: '76.6',
          tall: '79.2',
          very_tall: '81.7'
        },
        {
          id: '15',
          very_low: '69.3',
          low: '72.0',
          below_average: '74.8',
          average: '77.5',
          above_average: '80.2',
          tall: '83.0',
          very_tall: '85.7'
        },
        {
          id: '18',
          very_low: '72.0',
          low: '74.9',
          below_average: '77.8',
          average: '80.7',
          above_average: '83.6',
          tall: '86.5',
          very_tall: '89.4'
        },
        {
          id: '21',
          very_low: '74.5',
          low: '77.5',
          below_average: '80.6',
          average: '83.7',
          above_average: '86.7',
          tall: '89.8',
          very_tall: '92.9'
        },
        {
          id: '24',
          very_low: '76.7',
          low: '80.0',
          below_average: '83.2',
          average: '86.4',
          above_average: '89.6',
          tall: '92.9',
          very_tall: '96.1'
        },
        {
          id: '27',
          very_low: '78.1',
          low: '81.5',
          below_average: '84.9',
          average: '88.3',
          above_average: '91.7',
          tall: '95.0',
          very_tall: '98.4'
        },
        {
          id: '30',
          very_low: '80.1',
          low: '83.6',
          below_average: '87.1',
          average: '90.7',
          above_average: '94.2',
          tall: '97.7',
          very_tall: '101.3'
        },
        {
          id: '33',
          very_low: '81.9',
          low: '85.6',
          below_average: '89.3',
          average: '92.9',
          above_average: '96.6',
          tall: '100.3',
          very_tall: '103.9'
        },
        {
          id: '36',
          very_low: '83.6',
          low: '87.4',
          below_average: '91.2',
          average: '95.1',
          above_average: '98.9',
          tall: '102.7',
          very_tall: '106.0'
        }
      ],
      long_for_boy: [
        {
          id: '0',
          very_low: '44.2',
          low: '46.1',
          below_average: '48.0',
          average: '49.9',
          above_average: '51.8',
          tall: '53.7',
          very_tall: '55.6'
        },
        {
          id: '1',
          very_low: '48.9',
          low: '50.8',
          below_average: '52.8',
          average: '54.7',
          above_average: '56.7',
          tall: '58.6',
          very_tall: '60.6'
        },
        {
          id: '2',
          very_low: '52.4',
          low: '54.4',
          below_average: '56.4',
          average: '58.4',
          above_average: '60.4',
          tall: '62.4',
          very_tall: '64.4'
        },
        {
          id: '3',
          very_low: '55.3',
          low: '57.3',
          below_average: '59.4',
          average: '61.4',
          above_average: '63.5',
          tall: '65.5',
          very_tall: '67.6'
        },
        {
          id: '4',
          very_low: '57.6',
          low: '59.7',
          below_average: '61.8',
          average: '63.9',
          above_average: '66.0',
          tall: '68.0',
          very_tall: '70.1'
        },
        {
          id: '5',
          very_low: '59.6',
          low: '61.7',
          below_average: '63.8',
          average: '65.9',
          above_average: '68.0',
          tall: '70.1',
          very_tall: '72.2'
        },
        {
          id: '6',
          very_low: '61.2',
          low: '63.3',
          below_average: '65.5',
          average: '67.6',
          above_average: '69.8',
          tall: '71.9',
          very_tall: '74.0'
        },
        {
          id: '7',
          very_low: '62.6',
          low: '64.8',
          below_average: '67.0',
          average: '69.2',
          above_average: '71.3',
          tall: '73.5',
          very_tall: '75.7'
        },
        {
          id: '8',
          very_low: '64.0',
          low: '66.2',
          below_average: '68.4',
          average: '70.6',
          above_average: '72.8',
          tall: '75.0',
          very_tall: '77.2'
        },
        {
          id: '9',
          very_low: '65.2',
          low: '67.5',
          below_average: '69.7',
          average: '72.0',
          above_average: '74.2',
          tall: '76.5',
          very_tall: '78.7'
        },
        {
          id: '10',
          very_low: '66.4',
          low: '68.7',
          below_average: '71.0',
          average: '73.3',
          above_average: '75.6',
          tall: '77.9',
          very_tall: '80.1'
        },
        {
          id: '11',
          very_low: '67.6',
          low: '69.9',
          below_average: '72.2',
          average: '74.5',
          above_average: '76.9',
          tall: '79.2',
          very_tall: '81.5'
        },
        {
          id: '12',
          very_low: '68.6',
          low: '71.0',
          below_average: '73.4',
          average: '75.7',
          above_average: '78.1',
          tall: '80.5',
          very_tall: '82.9'
        },
        {
          id: '15',
          very_low: '71.6',
          low: '74.1',
          below_average: '76.6',
          average: '79.1',
          above_average: '81.7',
          tall: '84.2',
          very_tall: '86.7'
        },
        {
          id: '18',
          very_low: '74.2',
          low: '76.9',
          below_average: '79.6',
          average: '82.3',
          above_average: '85.0',
          tall: '87.7',
          very_tall: '90.4'
        },
        {
          id: '21',
          very_low: '76.5',
          low: '79.4',
          below_average: '82.3',
          average: '85.1',
          above_average: '88.0',
          tall: '90.9',
          very_tall: '93.8'
        },
        {
          id: '24',
          very_low: '78.7',
          low: '81.7',
          below_average: '84.8',
          average: '87.8',
          above_average: '90.9',
          tall: '93.9',
          very_tall: '97.0'
        },
        {
          id: '27',
          very_low: '79.9',
          low: '83.1',
          below_average: '86.4',
          average: '89.6',
          above_average: '92.9',
          tall: '96.1',
          very_tall: '99.3'
        },
        {
          id: '30',
          very_low: '81.7',
          low: '85.1',
          below_average: '88.5',
          average: '91.9',
          above_average: '95.3',
          tall: '98.7',
          very_tall: '102.1'
        },
        {
          id: '33',
          very_low: '83.4',
          low: '86.9',
          below_average: '90.5',
          average: '94.1',
          above_average: '97.6',
          tall: '101.2',
          very_tall: '104.8'
        },
        {
          id: '36',
          very_low: '85.0',
          low: '88.7',
          below_average: '92.4',
          average: '96.1',
          above_average: '99.8',
          tall: '103.5',
          very_tall: '107.2'
        }
      ],
      g_sector_1: [
        'g_dad_1_g_mom_1_g_baby_1',
        'g_dad_1_g_mom_2_g_baby_1',
        'g_dad_1_g_mom_1_g_baby_2',
        'g_dad_2_g_mom_1_g_baby_1'
      ],
      w_sector_1: [
        'w_dad_1_w_mom_1_w_baby_1',
        'w_dad_1_w_mom_2_w_baby_1',
        'w_dad_1_w_mom_1_w_baby_2',
        'w_dad_2_w_mom_1_w_baby_1'
      ],
      weight_age_boy_all: [
        [2.26, 2.63, 2.95, 3.25, 3.53, 3.79, 4.04, 4.27, 4.5],
        [3.12, 3.47, 3.8, 4.12, 4.44, 4.75, 5.06, 5.35, 5.65],
        [3.9, 4.24, 4.58, 4.93, 5.28, 5.63, 5.98, 6.34, 6.7],
        [4.58, 4.93, 5.29, 5.65, 6.03, 6.42, 6.82, 7.23, 7.65],
        [5.2, 5.55, 5.93, 6.31, 6.72, 7.14, 7.58, 8.03, 8.51],
        [5.75, 6.12, 6.5, 6.91, 7.34, 7.79, 8.26, 8.76, 9.28],
        [6.24, 6.62, 7.02, 7.45, 7.9, 8.37, 8.88, 9.41, 9.98],
        [6.68, 7.07, 7.49, 7.93, 8.4, 8.9, 9.43, 10.0, 10.6],
        [7.08, 7.48, 7.91, 8.37, 8.86, 9.38, 9.94, 10.53, 11.16],
        [7.43, 7.85, 8.3, 8.77, 9.28, 9.82, 10.4, 11.01, 11.67],
        [7.75, 8.18, 8.64, 9.13, 9.66, 10.21, 10.81, 11.45, 12.13],
        [8.04, 8.49, 8.96, 9.46, 10.0, 10.57, 11.18, 11.84, 12.54],
        [8.3, 8.76, 9.24, 9.76, 10.31, 10.9, 11.53, 12.2, 12.92],
        [8.54, 9.01, 9.5, 10.03, 10.59, 11.2, 11.84, 12.52, 13.26],
        [8.76, 9.23, 9.74, 10.28, 10.86, 11.47, 12.12, 12.82, 13.57],
        [8.95, 9.44, 9.96, 10.51, 11.09, 11.72, 12.39, 13.1, 13.86],
        [9.14, 9.63, 10.16, 10.72, 11.32, 11.95, 12.63, 13.35, 14.12],
        [9.31, 9.81, 10.34, 10.91, 11.52, 12.17, 12.85, 13.59, 14.37],
        [9.46, 9.97, 10.52, 11.1, 11.71, 12.37, 13.07, 13.81, 14.6],
        [9.61, 10.13, 10.68, 11.27, 11.89, 12.56, 13.26, 14.02, 14.82],
        [9.75, 10.28, 10.83, 11.43, 12.06, 12.73, 13.45, 14.22, 15.03],
        [9.88, 10.42, 10.98, 11.58, 12.22, 12.9, 13.63, 14.41, 15.23],
        [10.01, 10.55, 11.12, 11.73, 12.38, 13.07, 13.8, 14.59, 15.43],
        [10.13, 10.68, 11.26, 11.87, 12.53, 13.23, 13.97, 14.77, 15.62],
        [10.25, 10.8, 11.39, 12.01, 12.67, 13.38, 14.13, 14.94, 15.81],
        [10.37, 10.92, 11.51, 12.14, 12.81, 13.53, 14.29, 15.12, 16.0],
        [10.49, 11.04, 11.64, 12.27, 12.95, 13.68, 14.45, 15.29, 16.18],
        [10.6, 11.16, 11.76, 12.4, 13.09, 13.82, 14.61, 15.46, 16.37],
        [10.71, 11.28, 11.88, 12.53, 13.22, 13.97, 14.77, 15.63, 16.56],
        [10.83, 11.39, 12.0, 12.66, 13.36, 14.11, 14.93, 15.8, 16.75],
        [10.94, 11.51, 12.12, 12.78, 13.49, 14.26, 15.09, 15.98, 16.95],
        [11.05, 11.63, 12.24, 12.91, 13.63, 14.41, 15.25, 16.16, 17.15],
        [11.16, 11.74, 12.37, 13.04, 13.77, 14.55, 15.41, 16.34, 17.35],
        [11.28, 11.86, 12.49, 13.17, 13.9, 14.7, 15.57, 16.52, 17.56],
        [11.39, 11.98, 12.61, 13.3, 14.04, 14.86, 15.74, 16.71, 17.77],
        [11.51, 12.1, 12.74, 13.43, 14.19, 15.01, 15.91, 16.9, 17.99],
        [11.62, 12.22, 12.86, 13.56, 14.33, 15.17, 16.09, 17.1, 18.21]
      ],
      weight_age_girl_all: [
        [2.35, 2.63, 2.9, 3.15, 3.4, 3.64, 3.87, 4.09, 4.31],
        [3.0, 3.31, 3.6, 3.89, 4.17, 4.45, 4.73, 5.0, 5.27],
        [3.62, 3.94, 4.26, 4.57, 4.89, 5.2, 5.52, 5.84, 6.15],
        [4.19, 4.52, 4.86, 5.2, 5.55, 5.89, 6.25, 6.6, 6.96],
        [4.72, 5.06, 5.42, 5.78, 6.15, 6.53, 6.91, 7.3, 7.7],
        [5.2, 5.56, 5.93, 6.31, 6.7, 7.11, 7.52, 7.94, 8.38],
        [5.65, 6.02, 6.4, 6.8, 7.21, 7.64, 8.08, 8.53, 9.0],
        [6.06, 6.44, 6.84, 7.25, 7.68, 8.12, 8.59, 9.07, 9.57],
        [6.45, 6.83, 7.24, 7.66, 8.11, 8.57, 9.06, 9.57, 10.1],
        [6.8, 7.19, 7.61, 8.04, 8.5, 8.99, 9.49, 10.02, 10.58],
        [7.12, 7.52, 7.95, 8.4, 8.87, 9.37, 9.89, 10.44, 11.03],
        [7.42, 7.83, 8.26, 8.72, 9.2, 9.72, 10.26, 10.83, 11.44],
        [7.7, 8.11, 8.55, 9.02, 9.52, 10.04, 10.6, 11.19, 11.83],
        [7.96, 8.38, 8.82, 9.3, 9.81, 10.34, 10.92, 11.53, 12.19],
        [8.2, 8.62, 9.07, 9.56, 10.07, 10.63, 11.22, 11.85, 12.53],
        [8.42, 8.85, 9.31, 9.8, 10.32, 10.89, 11.49, 12.14, 12.84],
        [8.62, 9.06, 9.52, 10.02, 10.56, 11.14, 11.76, 12.43, 13.15],
        [8.81, 9.25, 9.73, 10.23, 10.78, 11.37, 12.0, 12.69, 13.44],
        [8.99, 9.44, 9.92, 10.43, 10.99, 11.59, 12.24, 12.95, 13.71],
        [9.16, 9.61, 10.1, 10.62, 11.18, 11.8, 12.46, 13.19, 13.98],
        [9.32, 9.77, 10.27, 10.8, 11.37, 12.0, 12.68, 13.42, 14.24],
        [9.47, 9.93, 10.43, 10.97, 11.55, 12.19, 12.89, 13.65, 14.49],
        [9.61, 10.08, 10.58, 11.13, 11.73, 12.38, 13.09, 13.88, 14.74],
        [9.75, 10.22, 10.73, 11.28, 11.89, 12.56, 13.29, 14.09, 14.99],
        [9.87, 10.35, 10.87, 11.44, 12.05, 12.73, 13.48, 14.31, 15.23],
        [10.0, 10.48, 11.01, 11.58, 12.21, 12.91, 13.67, 14.52, 15.47],
        [10.12, 10.61, 11.14, 11.73, 12.37, 13.08, 13.86, 14.73, 15.71],
        [10.23, 10.73, 11.27, 11.87, 12.52, 13.24, 14.05, 14.94, 15.95],
        [10.35, 10.85, 11.4, 12.0, 12.67, 13.41, 14.23, 15.15, 16.19],
        [10.46, 10.97, 11.53, 12.14, 12.82, 13.58, 14.42, 15.36, 16.43],
        [10.57, 11.08, 11.65, 12.28, 12.97, 13.74, 14.6, 15.58, 16.68],
        [10.67, 11.2, 11.78, 12.41, 13.12, 13.91, 14.79, 15.79, 16.93],
        [10.78, 11.31, 11.9, 12.55, 13.27, 14.07, 14.98, 16.0, 17.18],
        [10.89, 11.43, 12.02, 12.68, 13.41, 14.24, 15.16, 16.22, 17.43],
        [10.99, 11.54, 12.14, 12.82, 13.56, 14.4, 15.35, 16.44, 17.68],
        [11.1, 11.65, 12.27, 12.95, 13.71, 14.57, 15.55, 16.66, 17.94],
        [11.2, 11.77, 12.39, 13.09, 13.87, 14.74, 15.74, 16.88, 18.21]
      ],
      length_age_boy_all: [
        [44.6, 45.96, 47.31, 48.66, 49.99, 51.31, 52.63, 53.93, 55.23],
        [49.81, 50.98, 52.18, 53.41, 54.66, 55.94, 57.26, 58.6, 59.97],
        [53.47, 54.57, 55.71, 56.89, 58.12, 59.39, 60.71, 62.08, 63.51],
        [56.24, 57.32, 58.45, 59.62, 60.84, 62.12, 63.46, 64.86, 66.33],
        [58.52, 59.6, 60.73, 61.91, 63.15, 64.44, 65.8, 67.23, 68.73],
        [60.49, 61.58, 62.72, 63.92, 65.17, 66.49, 67.87, 69.32, 70.86],
        [62.23, 63.34, 64.5, 65.72, 66.99, 68.33, 69.74, 71.21, 72.77],
        [63.8, 64.93, 66.12, 67.36, 68.66, 70.02, 71.45, 72.95, 74.53],
        [65.23, 66.4, 67.61, 68.88, 70.2, 71.59, 73.04, 74.56, 76.16],
        [66.56, 67.76, 69.0, 70.3, 71.65, 73.06, 74.53, 76.08, 77.69],
        [67.8, 69.03, 70.3, 71.63, 73.01, 74.44, 75.94, 77.5, 79.13],
        [68.97, 70.23, 71.53, 72.89, 74.29, 75.76, 77.27, 78.85, 80.5],
        [70.07, 71.36, 72.7, 74.09, 75.52, 77.01, 78.55, 80.14, 81.8],
        [71.11, 72.44, 73.81, 75.23, 76.69, 78.2, 79.76, 81.38, 83.05],
        [72.11, 73.47, 74.88, 76.33, 77.82, 79.35, 80.93, 82.56, 84.24],
        [73.06, 74.46, 75.9, 77.38, 78.9, 80.46, 82.06, 83.7, 85.39],
        [73.97, 75.41, 76.88, 78.39, 79.94, 81.52, 83.14, 84.8, 86.51],
        [74.85, 76.33, 77.83, 79.37, 80.95, 82.55, 84.19, 85.87, 87.58],
        [75.69, 77.21, 78.75, 80.32, 81.92, 83.55, 85.21, 86.9, 88.62],
        [76.51, 78.06, 79.64, 81.25, 82.87, 84.52, 86.2, 87.9, 89.63],
        [77.3, 78.89, 80.51, 82.14, 83.79, 85.47, 87.16, 88.88, 90.61],
        [78.06, 79.7, 81.35, 83.01, 84.69, 86.39, 88.1, 89.83, 91.57],
        [78.81, 80.48, 82.16, 83.86, 85.56, 87.28, 89.01, 90.75, 92.5],
        [79.53, 81.24, 82.96, 84.68, 86.42, 88.16, 89.9, 91.65, 93.41],
        [80.23, 81.98, 83.74, 85.49, 87.25, 89.01, 90.77, 92.54, 94.3],
        [80.95, 82.72, 84.5, 86.28, 88.06, 89.84, 91.63, 93.42, 95.21],
        [81.69, 83.46, 85.24, 87.04, 88.84, 90.65, 92.47, 94.29, 96.13],
        [82.41, 84.18, 85.97, 87.78, 89.6, 91.43, 93.28, 95.14, 97.02],
        [83.12, 84.89, 86.69, 88.51, 90.34, 92.2, 94.08, 95.97, 97.89],
        [83.81, 85.59, 87.39, 89.22, 91.07, 92.95, 94.85, 96.77, 98.73],
        [84.5, 86.27, 88.08, 89.92, 91.78, 93.68, 95.6, 97.55, 99.54],
        [85.17, 86.95, 88.76, 90.6, 92.48, 94.39, 96.33, 98.31, 100.33],
        [85.83, 87.61, 89.42, 91.27, 93.16, 95.08, 97.05, 99.05, 101.1],
        [86.48, 88.26, 90.08, 91.93, 93.83, 95.77, 97.75, 99.77, 101.85],
        [87.13, 88.9, 90.72, 92.58, 94.48, 96.43, 98.43, 100.48, 102.58],
        [87.76, 89.54, 91.35, 93.22, 95.13, 97.09, 99.1, 101.17, 103.29],
        [88.39, 90.16, 91.98, 93.84, 95.76, 97.73, 99.76, 101.84, 103.98]
      ],
      length_age_girl_all: [
        [44.86, 45.88, 46.95, 48.09, 49.29, 50.56, 51.91, 53.34, 54.87],
        [48.95, 50.03, 51.15, 52.3, 53.48, 54.71, 55.98, 57.29, 58.64],
        [52.02, 53.16, 54.32, 55.49, 56.69, 57.91, 59.14, 60.4, 61.68],
        [54.46, 55.65, 56.85, 58.06, 59.28, 60.5, 61.74, 62.98, 64.23],
        [56.54, 57.78, 59.02, 60.26, 61.5, 62.74, 63.98, 65.23, 66.47],
        [58.37, 59.65, 60.93, 62.2, 63.47, 64.73, 65.99, 67.25, 68.5],
        [60.03, 61.35, 62.66, 63.97, 65.26, 66.55, 67.83, 69.1, 70.36],
        [61.55, 62.91, 64.25, 65.59, 66.91, 68.22, 69.53, 70.82, 72.1],
        [62.96, 64.36, 65.73, 67.1, 68.45, 69.79, 71.11, 72.42, 73.73],
        [64.29, 65.71, 67.12, 68.51, 69.89, 71.26, 72.61, 73.94, 75.27],
        [65.54, 66.99, 68.43, 69.85, 71.26, 72.65, 74.02, 75.39, 76.73],
        [66.73, 68.21, 69.67, 71.12, 72.55, 73.97, 75.37, 76.76, 78.14],
        [67.86, 69.37, 70.86, 72.33, 73.79, 75.23, 76.66, 78.08, 79.48],
        [68.94, 70.48, 71.99, 73.49, 74.98, 76.45, 77.9, 79.35, 80.78],
        [69.98, 71.54, 73.08, 74.61, 76.12, 77.61, 79.1, 80.57, 82.02],
        [70.99, 72.57, 74.13, 75.68, 77.22, 78.74, 80.25, 81.75, 83.23],
        [71.95, 73.56, 75.14, 76.72, 78.28, 79.83, 81.37, 82.89, 84.4],
        [72.89, 74.51, 76.12, 77.72, 79.31, 80.88, 82.45, 84.0, 85.54],
        [73.8, 75.44, 77.07, 78.7, 80.31, 81.91, 83.5, 85.08, 86.65],
        [74.68, 76.34, 78.0, 79.64, 81.28, 82.9, 84.52, 86.13, 87.73],
        [75.53, 77.22, 78.9, 80.56, 82.22, 83.87, 85.51, 87.15, 88.78],
        [76.37, 78.07, 79.77, 81.46, 83.14, 84.82, 86.49, 88.15, 89.8],
        [77.18, 78.91, 80.62, 82.33, 84.04, 85.74, 87.43, 89.12, 90.81],
        [77.98, 79.72, 81.46, 83.19, 84.92, 86.64, 88.36, 90.08, 91.79],
        [78.75, 80.51, 82.27, 84.02, 85.77, 87.52, 89.27, 91.01, 92.75],
        [79.52, 81.31, 83.09, 84.87, 86.64, 88.42, 90.19, 91.97, 93.74],
        [80.3, 82.1, 83.91, 85.72, 87.52, 89.33, 91.13, 92.93, 94.74],
        [81.06, 82.89, 84.72, 86.55, 88.38, 90.21, 92.04, 93.87, 95.7],
        [81.8, 83.65, 85.5, 87.35, 89.2, 91.06, 92.91, 94.77, 96.63],
        [82.53, 84.39, 86.26, 88.12, 90.0, 91.87, 93.75, 95.64, 97.52],
        [83.24, 85.11, 86.99, 88.87, 90.76, 92.66, 94.56, 96.47, 98.38],
        [83.92, 85.8, 87.69, 89.59, 91.49, 93.41, 95.33, 97.26, 99.2],
        [84.57, 86.46, 88.36, 90.27, 92.2, 94.13, 96.07, 98.03, 99.99],
        [85.2, 87.09, 89.01, 90.93, 92.87, 94.82, 96.78, 98.76, 100.75],
        [85.79, 87.7, 89.62, 91.56, 93.51, 95.48, 97.46, 99.46, 101.47],
        [86.37, 88.28, 90.22, 92.17, 94.13, 96.11, 98.11, 100.13, 102.16],
        [86.92, 88.84, 90.78, 92.74, 94.72, 96.72, 98.74, 100.77, 102.83]
      ],
      checking: {
        baby_1: [true, true, false, false, false, false, false],
        baby_2: [false, false, true, true, false, false, false],
        baby_3: [false, false, false, false, true, true, true]
      }
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

  compareGrowth (array, lowIndex, topIndex, sector, data) {
    const keyOld = Number(this.OLD)
    for (let key = lowIndex; key < topIndex + 1; key++) {
      // eslint-disable-next-line no-empty
      if (Number(array[keyOld][key]) < data) {
      } else {
        return {
          index: sector,
          key,
          data: array[keyOld][key]
        }
      }
    }
  }

  checkMinMaxLong (array, data, lowIndex, topIndex) {
    const month = Math.ceil(Number(this.OLD))
    // alert('внизу значение - ' + Number(array[month][lowIndex]) + ' || ' + data)
    if (data < Number(array[month][lowIndex])) {
      return {
        index: 'min',
        key: lowIndex,
        data: array[month][lowIndex]
      }
    }
    if (data > Number(array[month][topIndex])) {
      return {
        index: 'max',
        key: 6,
        data: array[month][topIndex]
      }
    }
    return false
  }

  calcResultWeight () {
    const weight = Number(this.WEIGHT_NOW) / 1000
    let res = null
    let arrayWeight = null
    let lowIndex = null
    let topIndex = null
    let sector = null
    if (this.GENDER === 'boy') {
      arrayWeight = this.data().weight_age_boy_all
    } else {
      arrayWeight = this.data().weight_age_girl_all
    }
    const found = this.contains(this.data().w_sector_1, this.W_INDEX)
    // alert('found-weight -' + found)
    if (found) {
      lowIndex = 0
      topIndex = 5
      sector = 'low'
      // alert('weight - ' + weight)
      res = this.checkMinMaxLong(arrayWeight, weight, lowIndex, topIndex)
      if (res === false) {
        return this.compareGrowth(
          arrayWeight,
          lowIndex,
          topIndex,
          sector,
          weight
        )
      }
      return res
    }
    lowIndex = 2
    topIndex = 8
    sector = 'top'
    res = this.checkMinMaxLong(arrayWeight, weight, lowIndex, topIndex)
    if (res === false) {
      return this.compareGrowth(
        arrayWeight,
        lowIndex,
        topIndex,
        sector,
        weight
      )
    }
    return res
  }

  calcResultGrowth () {
    const long = Number(this.GROWTH_NOW)
    let res = null
    let array = null
    let lowIndex = null
    let topIndex = null
    let sector = null
    if (this.GENDER === 'boy') {
      array = this.data().length_age_boy_all
    } else {
      array = this.data().length_age_girl_all
    }
    const found = this.contains(this.data().g_sector_1, this.G_INDEX)
    // alert('found' + found)
    if (found) {
      lowIndex = 0
      topIndex = 5
      sector = 'low'
      res = this.checkMinMaxLong(array, long, lowIndex, topIndex)
      if (res === false) {
        return this.compareGrowth(array, lowIndex, topIndex, sector, long)
      }
      return res
    }
    lowIndex = 2
    topIndex = 8
    sector = 'top'
    res = this.checkMinMaxLong(array, long, lowIndex, topIndex)
    if (res === false) {
      return this.compareGrowth(array, lowIndex, topIndex, sector, long)
    }
    return res
  }
}

module.exports = MainCheck
