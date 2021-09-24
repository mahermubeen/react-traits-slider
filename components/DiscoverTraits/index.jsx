import React, { useState, useEffect } from "react";
import StateClosedSelectionSkin from "../StateClosedSelectionSkin";
import Input from "../input/index";
import "./discoverTraits.css";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  FilterData,
  SetCategArr,
  setCategDesc,
  setAttrName,
  setAttrRarity,
  setAttrRarityNo,
  setAttrInitState,
  setAttrProps,
  setActiveIndex,
  setLastIndex,
} from "../../redux/reducers/general";

import Carousel from "../Carousal/index";

const DiscoverTraits = ({
  arrowDownSvgrepoCom1,
  x2_Zeichenflache11,
  x3_Zeichenflache11,
  unbenannt2_Zeichenflache11,
  layer2,
  layer3,
  categNames,
  attrImgs,
  attrs,
}) => {
  const dispatch = useDispatch();

  //reducer states
  const initCategDesc = useSelector((state) => state.general.categDesc);
  const initAttrName = useSelector((state) => state.general.attrName);
  const initAttrRarity = useSelector((state) => state.general.attrRarity);
  const rarity = useSelector((state) => state.general.attrRarityNo);
  const category = useSelector((state) => state.general.category);
  const selectedCateg = useSelector((state) => state.general.selectedCateg);
  const activeIndex = useSelector((state) => state.general.activeIndex);

  //States
  const [val, setVal] = useState();
  const [initAttrName1, setInitAttrName1] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const [desc, setDesc] = useState(initCategDesc);
  const [name, setName] = useState(initAttrName);
  const [raritty, setRaritty] = useState(initAttrRarity);
  const [rarittyNo, setRarittyNo] = useState(rarity);

  //lifecycle
  useEffect(() => {
    setIsFetching(true);

    if (isFetching) {
      if (!activeIndex) {
        var gg = attrs.at(0);

        setDesc(gg.desc);
        setName(gg.name);
        setRaritty(gg.rarity);
        setRarittyNo(gg.rarity_no);
        dispatch(setActiveIndex());
      } else {
        var gg = attrs.at(activeIndex);

        setDesc(gg.desc);
        setName(gg.name);
        setRaritty(gg.rarity);
        setRarittyNo(gg.rarity_no);
      }
    }
  }, [isFetching, attrs, activeIndex]);

  return (
    <>
      <div className="frame-16">
        <Input
          type="dropdown"
          arrowDown={arrowDownSvgrepoCom1}
          options={categNames}
          attrs={attrs}
          className="selectDrop"
        />

        <div className="text-16 sfprodisplay-bold-white-18px">{desc}</div>
      </div>
      <div className="overlap-group">
        <Carousel
          imgs={attrImgs && attrImgs}
          active={0}
          layer2={layer2}
          layer3={layer3}
          attrs={attrs}
        />
        <div
          className={`frame-17 ${
            rarittyNo > 1000
              ? "rec2-active"
              : "" || (rarittyNo > 500 && rarittyNo <= 1000)
              ? "rec4-active"
              : "" || (rarittyNo > 150 && rarittyNo <= 500)
              ? "rec6-active"
              : "" || (rarittyNo > 50 && rarittyNo <= 150)
              ? "rec5-active"
              : "" || (rarittyNo > 16 && rarittyNo <= 50)
              ? "rec7-active"
              : "" || (Math.round(rarittyNo) >= 2 && rarittyNo <= 16)
              ? "rec8-active"
              : "" || Math.round(rarittyNo) <= 1
              ? "rec9-active"
              : ""
          }`}
        >
          <div className="cyborg sfprodisplay-heavy-normal-white-14px">
            {name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
          </div>
          <div className="have-this-trait sfprodisplay-regular-normal-white-14px">
            {raritty}%
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverTraits;
