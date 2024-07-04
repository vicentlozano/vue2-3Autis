<template>
  <button @click="idToNameOptimized(objectProvided)">Optimized</button>
  <button @click="idToName(objectProvided)">Not Optimized</button>
  <p v-if="noOptimized">No optimized: {{idToName(objectProvided)}}</p>
  <p v-if="optimized">Optimized: {{idToNameOptimized(objectProvided)}}</p>

</template>
<script>
export default {
  methods: {
    idToName(object) {
      let myFinalObject = {};

      const modelObject = this.myObject.modelOptions.find(
        (element) => element.modelId === object.model
      );
      myFinalObject.model = modelObject ? modelObject.modelName : object.model;
      const bodyStyleObject = this.myObject.bodyStyleOptions.find(
        (element) => element.id === object.bodyStyle
      );
      myFinalObject.bodyStyle = bodyStyleObject
        ? bodyStyleObject.name
        : object.bodyStyle;

      const colorObject = this.myObject.colorOptions.find(
        (element) => element.colorId === object.color
      );
      myFinalObject.color = colorObject ? colorObject.colorName : object.color;

      const panelObject = this.myObject.panelOptions.find(
        (element) => element.panelId === object.panel
      );
      myFinalObject.panel = panelObject ? panelObject.panelName : object.panel;

      myFinalObject.specificGrid = object.specificGrid;
      myFinalObject.grid = object.grid;
      myFinalObject.timePeriod = object.timePeriod;

      const shiftObject = this.myObject.shiftOptions.find(
        (element) => element.shiftId === object.shift
      );
      myFinalObject.shift = shiftObject ? shiftObject.shiftName : object.shift;

      const defectSizeObject = this.myObject.defectSizeOptions.find(
        (element) => element.id === object.defectSize
      );
      myFinalObject.defectSize = defectSizeObject
        ? defectSizeObject.name
        : object.defectSize;

      const defectTypeObject = this.myObject.defectTypeOptions.find(
        (element) => element.id === object.defectType
      );
      myFinalObject.defectType = defectTypeObject
        ? defectTypeObject.name
        : object.defectType;

      const defectStatusOptionsObject = this.myObject.defectStatusOptions.find(
        (element) => element.id === object.defectStatus
      );
      myFinalObject.defectStatus = defectStatusOptionsObject
        ? defectStatusOptionsObject.name
        : object.defectStatus;

      console.log({ myFinalObject });
      this.noOptimized = true;
      return myFinalObject;
    },

    idToNameOptimized(object) {
      let myFinalObject = {};

      const findAndAssign = (options, key, idKey, nameKey) => {
        const foundObject = options.find(
          (element) => element[idKey] === object[key]
        );
        myFinalObject[key] = foundObject ? foundObject[nameKey] : object[key];
      };

      findAndAssign(
        this.myObject.modelOptions,
        'model',
        'modelId',
        'modelName'
      );
      findAndAssign(this.myObject.bodyStyleOptions, 'bodyStyle', 'id', 'name');
      findAndAssign(
        this.myObject.colorOptions,
        'color',
        'colorId',
        'colorName'
      );
      findAndAssign(
        this.myObject.panelOptions,
        'panel',
        'panelId',
        'panelName'
      );
      findAndAssign(
        this.myObject.shiftOptions,
        'shift',
        'shiftId',
        'shiftName'
      );
      findAndAssign(
        this.myObject.defectSizeOptions,
        'defectSize',
        'id',
        'name'
      );
      findAndAssign(
        this.myObject.defectTypeOptions,
        'defectType',
        'id',
        'name'
      );
      findAndAssign(
        this.myObject.defectStatusOptions,
        'defectStatus',
        'id',
        'name'
      );

      myFinalObject.specificGrid = object.specificGrid;
      myFinalObject.grid = object.grid;
      myFinalObject.timePeriod = object.timePeriod;

      console.log({ myFinalObject });
      this.optimized = true;
      return myFinalObject;
    },
  },

  data() {
    return {
      noOptimized: false,
      optimized: false,
      objectProvided: {
        model: 10,

        bodyStyle: -1,

        color: -1,

        panel: 4,

        specificGrid: false,

        grid: false,

        shift: 3,

        timePeriod: ['2021-07-01 13:56:35.378', '2024-08-08 13:56:35.378'],

        defectSize: [
          1.5,

          50,
        ],

        defectType: -1,

        customFilter: 0,

        wSVSDefects: true,

        defectStatus: -1,
      },
      myObject: {
        modelOptions: [
          {
            modelId: -1,

            modelName: 'All',
          },

          {
            modelId: 10,

            modelName: 'CAMRY',
          },

          {
            modelId: 11,

            modelName: 'RAV4',
          },
        ],

        bodyStyleOptions: [],

        colorOptions: [
          {
            colorId: -1,

            colorName: 'All',
          },

          {
            colorId: '34',

            colorName: 'UNDEFINED',
          },

          {
            colorId: '35',

            colorName: 'WHITE',
          },

          {
            colorId: '36',

            colorName: 'BLACK',
          },

          {
            colorId: '38',

            colorName: 'COLOR_10',
          },

          {
            colorId: '39',

            colorName: 'COLOR_20',
          },

          {
            colorId: '40',

            colorName: 'COLOR_30',
          },

          {
            colorId: '41',

            colorName: 'COLOR_40',
          },

          {
            colorId: '42',

            colorName: 'COLOR_50',
          },

          {
            colorId: '43',

            colorName: 'COLOR_60',
          },

          {
            colorId: '44',

            colorName: 'COLOR_70',
          },

          {
            colorId: '45',

            colorName: 'COLOR_80',
          },

          {
            colorId: '46',

            colorName: 'COLOR_90',
          },

          {
            colorId: '47',

            colorName: 'COLOR_100',
          },

          {
            colorId: '48',

            colorName: 'COLOR_65',
          },

          {
            colorId: '49',

            colorName: 'COLOR_75',
          },

          {
            colorId: '50',

            colorName: 'SILVER',
          },

          {
            colorId: '54',

            colorName: 'COLOR_45',
          },

          {
            colorId: '55',

            colorName: 'DARK BLUE',
          },

          {
            colorId: '56',

            colorName: 'DARK GRAY',
          },

          {
            colorId: '57',

            colorName: 'LIGHT GRAY',
          },

          {
            colorId: '58',

            colorName: 'RED',
          },

          {
            colorId: '59',

            colorName: 'BROWN',
          },

          {
            colorId: '60',

            colorName: 'WHITE PLATINUM',
          },

          {
            colorId: '61',

            colorName: 'REF_BLACK',
          },

          {
            colorId: '62',

            colorName: 'REF_WHITE',
          },

          {
            colorId: '63',

            colorName: 'DEFAULT',
          },

          {
            colorId: '64',

            colorName: 'LIGHT BLUE MICA',
          },

          {
            colorId: '65',

            colorName: 'GREY STRAIGHT',
          },

          {
            colorId: '66',

            colorName: 'UNKNOWN',
          },

          {
            colorId: '67',

            colorName: 'WHITE PEARL',
          },

          {
            colorId: '68',

            colorName: 'SILVER METALLIC',
          },

          {
            colorId: '69',

            colorName: 'DARK GRAY MICA',
          },

          {
            colorId: '70',

            colorName: 'DARK METALLIC BLUE',
          },

          {
            colorId: '71',

            colorName: 'COLOR_TT_2QY',
          },

          {
            colorId: '72',

            colorName: 'COLOR_TT_2RA',
          },

          {
            colorId: '73',

            colorName: 'COLOR_TT_2QZ',
          },

          {
            colorId: '74',

            colorName: 'COLOR_TT_2QJ',
          },

          {
            colorId: '75',

            colorName: 'CALVARY BLUE',
          },

          {
            colorId: '76',

            colorName: 'COLOR_TT_2VV',
          },

          {
            colorId: '77',

            colorName: 'COLOR_TT_2PS',
          },
        ],

        panelOptions: [
          {
            areaId: 1,

            modelId: 10,

            pieceIds: '-1',

            locationId: 1,

            areaName: 'CAMRY - Left Side',

            surface: 2475892.15,
          },

          {
            areaId: 2,

            modelId: 10,

            pieceIds: '-1',

            locationId: 2,

            areaName: 'CAMRY - Right Side',

            surface: 2519749.86,
          },

          {
            areaId: 3,

            modelId: 10,

            pieceIds: '-1',

            locationId: 3,

            areaName: 'CAMRY - Hood & Roof',

            surface: 3282560.66,
          },

          {
            areaId: 4,

            modelId: 10,

            pieceIds: '-1',

            locationId: 5,

            areaName: 'CAMRY - Full',

            surface: 8906516.9,
          },

          {
            areaId: 5,

            modelId: 10,

            pieceIds: '1',

            locationId: -1,

            areaName: 'RH Front Fender Up',

            surface: 158701.49,
          },

          {
            areaId: 6,

            modelId: 10,

            pieceIds: '2',

            locationId: -1,

            areaName: 'RH Front Fender Down',

            surface: 127206.71,
          },

          {
            areaId: 7,

            modelId: 10,

            pieceIds: '3',

            locationId: -1,

            areaName: 'LH Front Fender Up',

            surface: 158817.15,
          },

          {
            areaId: 8,

            modelId: 10,

            pieceIds: '4',

            locationId: -1,

            areaName: 'LH Front Fender Down',

            surface: 127089.4,
          },

          {
            areaId: 9,

            modelId: 10,

            pieceIds: '5',

            locationId: -1,

            areaName: 'RH Hood',

            surface: 828576.43,
          },

          {
            areaId: 10,

            modelId: 10,

            pieceIds: '6',

            locationId: -1,

            areaName: 'LH Hood',

            surface: 828595.24,
          },

          {
            areaId: 11,

            modelId: 10,

            pieceIds: '7',

            locationId: -1,

            areaName: 'RH Front Door Up',

            surface: 159666.76,
          },

          {
            areaId: 12,

            modelId: 10,

            pieceIds: '8',

            locationId: -1,

            areaName: 'RH Front Door Down',

            surface: 672189.74,
          },

          {
            areaId: 13,

            modelId: 10,

            pieceIds: '9',

            locationId: -1,

            areaName: 'LH Front Door Up',

            surface: 159800.4,
          },

          {
            areaId: 14,

            modelId: 10,

            pieceIds: '10',

            locationId: -1,

            areaName: 'LH Front Door Down',

            surface: 672055.8,
          },

          {
            areaId: 15,

            modelId: 10,

            pieceIds: '11',

            locationId: -1,

            areaName: 'RH Rear Door Up',

            surface: 140565.13,
          },

          {
            areaId: 16,

            modelId: 10,

            pieceIds: '12',

            locationId: -1,

            areaName: 'RH Rear Door Down',

            surface: 506936.24,
          },

          {
            areaId: 17,

            modelId: 10,

            pieceIds: '13',

            locationId: -1,

            areaName: 'LH Rear Door Up',

            surface: 140682.3,
          },

          {
            areaId: 18,

            modelId: 10,

            pieceIds: '14',

            locationId: -1,

            areaName: 'LH Rear Door Down',

            surface: 506820.62,
          },

          {
            areaId: 19,

            modelId: 10,

            pieceIds: '15',

            locationId: -1,

            areaName: 'RH Ditch',

            surface: 342903.74,
          },

          {
            areaId: 20,

            modelId: 10,

            pieceIds: '16',

            locationId: -1,

            areaName: 'LH Ditch',

            surface: 340373.46,
          },

          {
            areaId: 21,

            modelId: 10,

            pieceIds: '17',

            locationId: -1,

            areaName: 'RH Rear Fender Up',

            surface: 154505.97,
          },

          {
            areaId: 22,

            modelId: 10,

            pieceIds: '18',

            locationId: -1,

            areaName: 'RH Rear Fender Down',

            surface: 257074.08,
          },

          {
            areaId: 23,

            modelId: 10,

            pieceIds: '19',

            locationId: -1,

            areaName: 'LH Rear Fender Up',

            surface: 126495.3,
          },

          {
            areaId: 24,

            modelId: 10,

            pieceIds: '20',

            locationId: -1,

            areaName: 'LH Rear Fender Down',

            surface: 243757.72,
          },

          {
            areaId: 25,

            modelId: 10,

            pieceIds: '21',

            locationId: -1,

            areaName: 'RH Roof',

            surface: 884296.95,
          },

          {
            areaId: 26,

            modelId: 10,

            pieceIds: '22',

            locationId: -1,

            areaName: 'LH Roof',

            surface: 884236.12,
          },

          {
            areaId: 27,

            modelId: 10,

            pieceIds: '23',

            locationId: -1,

            areaName: 'RH Tailgate Up',

            surface: 332167.33,
          },

          {
            areaId: 28,

            modelId: 10,

            pieceIds: '24',

            locationId: -1,

            areaName: 'LH Tailgate Up',

            surface: 332172.43,
          },

          {
            areaId: 29,

            modelId: 10,

            pieceIds: '25',

            locationId: -1,

            areaName: 'RH Tailgate Down',

            surface: 118072.64,
          },

          {
            areaId: 30,

            modelId: 10,

            pieceIds: '26',

            locationId: -1,

            areaName: 'LH Tailgate Down',

            surface: 118072.75,
          },

          {
            areaId: 31,

            modelId: 10,

            pieceIds: '1,2',

            locationId: -1,

            areaName: 'RH Front Fender',

            surface: 1,
          },

          {
            areaId: 32,

            modelId: 10,

            pieceIds: '-1',

            locationId: 6,

            areaName: 'CAMRY - Interior',

            surface: 1,
          },

          {
            areaId: 38,

            modelId: 11,

            pieceIds: '-1',

            locationId: 5,

            areaName: 'Full',

            surface: 8436803.3,
          },
        ],

        lineOptions: [],

        ovenOptions: [],

        boothOptions: [],

        shiftOptions: [
          {
            shiftId: 0,

            shiftName: 'Custom',

            initTime: '00:00:00',

            endTime: '00:00:00',
          },

          {
            shiftId: 1,

            shiftName: '1st Shift',

            initTime: '07:30:00',

            endTime: '19:30:00',
          },

          {
            shiftId: 2,

            shiftName: '2nd Shift',

            initTime: '19:30:00',

            endTime: '07:30:00',
          },

          {
            shiftId: 3,

            shiftName: 'All',

            initTime: '07:30:00',

            endTime: '07:29:59',
          },
        ],

        defectSizeOptions: [],

        defectTypeOptions: [
          {
            id: -1,

            name: 'All',
          },

          {
            id: 15,

            name: 'Orange Peel',
          },

          {
            id: 4,

            name: 'Lint',
          },

          {
            id: 3,

            name: 'Crater',
          },

          {
            id: 2,

            name: 'Seed',
          },

          {
            id: 1,

            name: 'Unclassified',
          },
        ],

        defectStatusOptions: [
          {
            id: -1,

            name: 'All',
          },
        ],
      },
    };
  },
};
</script>
