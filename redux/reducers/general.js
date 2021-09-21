import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  selectedCateg: "",
  categDesc: "",
  attrName: "",
  attrRarity: "",
  attrRarityNo: "",
  activeImg: "",
  activeIndex: "",
  lastIndex: "",
};

const counterSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    SetCategArr(state, arr) {
      var catArr = arr.payload;
      state.category = catArr;

      var attrs = [];
      var bb = catArr.filter(({ attributes, description }) => {
        if ((attributes, description)) {
          attrs.push({
            name: attributes[0].name,
            rarity: attributes[0].rarity,
            rarity_no: attributes[0].rarity_no,
            img: attributes[0].img,
            desc: description,
          });
        }
      });

      // setting active and last index
      // state.lastIndex = attrs.length - 1;
      // state.activeIndex = 0;

      state.categDesc = attrs[0].desc;
      state.attrName = attrs[0].name;
      state.attrRarity = attrs[0].rarity;
      state.attrRarityNo = attrs[0].rarity_no;
    },
    FilterAttr(state, value) {
      var selVal = value.payload.toLowerCase();
      state.selectedCateg = selVal;
    },
    setActiveImg(state, value) {
      var actImg = value.payload;
      state.activeImg = actImg.img;
      // console.log("active img", actImg.img);
    },
    setAttrInitState(state, arr) {
      var attArr = arr.payload;
      const imgS = attArr[0].img;

      var hello = attArr.filter((x) => x.img === imgS);

      state.categDesc = hello[0].desc;
      state.attrName = hello[0].name;
      state.attrRarity = hello[0].rarity;
      state.attrRarityNo = hello[0].rarity_no;
    },
    setAttrProps(state, arr) {
      var attrArr = arr.payload;
      var activeImg = state.activeImg;
      var lastIndex = state.lastIndex;

      if (activeImg) {
        // console.log("lastIndex left", lastIndex);

        var index = attrArr.findIndex((obj) => obj.img === activeImg);
        // console.log("org index", index);

        if (index === 0) {
          index = lastIndex;
          state.activeIndex = index;
          var tt = attrArr[index];
          // console.log("index < 0", tt.name);

          state.attrName = attrArr.name;
          state.attrName = attrArr.img;
          state.attrRarity = attrArr.rarity;
          state.attrRarityNo = attrArr.rarity_no;
        } else if (index >= 0) {
          index = index - 1;
          state.activeIndex = index;
          var bb = attrArr[index];
          // console.log("index - 1", bb.name);

          state.attrName = attrArr.name;
          state.attrName = attrArr.img;
          state.attrRarity = attrArr.rarity;
          state.attrRarityNo = attrArr.rarity_no;
        }
      }
    },

    setAttrPropsR(state, arr) {
      var attrArr = arr.payload;
      var activeImg = state.activeImg;
      var lastIndex = state.lastIndex;

      if (activeImg) {
        // console.log("lastIndex right", lastIndex);

        var index = attrArr.findIndex((obj) => obj.img === activeImg);
        // console.log("org index", index);

        if (index === lastIndex) {
          index = 0;
          state.activeIndex = index;
          var tt = attrArr[index];
          // console.log("index = last", tt.name);

          state.attrName = attrArr.name;
          state.attrName = attrArr.img;
          state.attrRarity = attrArr.rarity;
          state.attrRarityNo = attrArr.rarity_no;
        } else {
          index = index + 1;
          state.activeIndex = index;
          var bb = attrArr[index];
          // console.log("index + 1", bb.name);

          state.attrName = attrArr.name;
          state.attrName = attrArr.img;
          state.attrRarity = attrArr.rarity;
          state.attrRarityNo = attrArr.rarity_no;
        }
      }
    },
    setAttrPropsInput(state, arr) {
      var attrArr = arr.payload;
      var categ = state.selectedCateg;
      var cati = state.category;
      // console.log("attr in reducer", attrArr);

      // setting active and last index
      state.lastIndex = attrArr.length - 1;
      state.activeIndex = 0;

      // console.log("last index updateed in input reducer", state.lastIndex)

      if (cati && categ && attrArr) {
        var ati = cati.filter((cat) => cat.name === categ);

        var alu = [];
        var bb = ati.filter(({ attributes, description }) => {
          if ((attributes, description)) {
            for (var i = 0; i < attributes.length; i++) {
              alu.push({
                name: attributes[i].name,
                rarity: attributes[i].rarity,
                rarity_no: attributes[i].rarity_no,
                img: attributes[i].img,
                desc: description,
              });
            }
          }
        });

        var gg = alu.at(0);

        state.categDesc = gg.desc;
        state.attrName = gg.name;
        state.attrRarity = gg.rarity;
        state.attrRarityNo = gg.rarity_no;
        state.activeIndex = 0;
      }
    },
    setActiveIndex(state) {
      state.activeIndex = 0;
    },
    setLastIndex(state, value) {
      state.lastIndex = value.payload;
    },
    setLastnActiveIndex(state, arr) {
      var arrAttribt = arr.payload;

      // console.log("hello", arrAttribt);
    },
  },
});

export const {
  FilterAttr,
  SetCategArr,
  setAttrInitState,
  setAttrProps,
  setActiveImg,
  setAttrPropsInput,
  setAttrPropsR,
  setActiveIndex,
  setLastIndex,
  setLastnActiveIndex,
} = counterSlice.actions;
export default counterSlice.reducer;
