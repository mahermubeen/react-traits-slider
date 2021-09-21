import React, { useState, useEffect } from "react";
import StateClosedSelectionSkin from "../StateClosedSelectionSkin";
import "./carousal.css";
import {
  setCategDesc,
  setAttrName,
  setAttrRarity,
  setAttrRarityNo,
  setAttrProps,
  setActiveImg,
  setAttrInitState,
  setAttrPropsR,
} from "../../redux/reducers/general";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { FilterData } from "../../redux/reducers/general";
import Item from "./item";

const Carousel = ({ imgs, active, attrs, layer3, layer2 }) => {
  const dispatch = useDispatch();

  //States
  const [imgs1, setImgs1] = useState();
  const [attrs1, setAttrs1] = useState();
  const [active1, setActive1] = useState();
  const [direction, setDirection] = useState("");
  const [initImgSrc, setInitImgSrc] = useState();
  const [isFetching, setIsFetching] = useState(false);

  //reducer states
  const activeImg = useSelector((state) => state.general.activeImg);
  const activeIndex = useSelector((state) => state.general.activeIndex);

  //lifecycle
  useEffect(() => {
    setIsFetching(true);

    if (isFetching) {
      setImgs1(imgs);
      setAttrs1(attrs);
      setActive1(active);
      setInitImgSrc(imgs[active]);

      dispatch(setAttrProps(attrs));
    }
  }, [isFetching, attrs]);

  function generateItems() {
    var items = [];
    var level;

    var imgState = imgs;
    var attribs = attrs;

    if (imgState) {
      for (var i = active1 - 1; i < active1 + 2; i++) {
        var index = i;

        if (i < 0) {
          index = imgState.length + i;
        } else if (i >= imgState.length) {
          index = i % imgState.length;
        }
        level = active1 - i;

        items.push(
          <Item
            key={index}
            attrs={attribs}
            imgSrc={imgState[index]}
            level={level}
          />
        );
      }
    }

    return items;
  }

  const leftClick = () => {
    var imgSrc;
    var newActive = active1;

    imgSrc = imgs1[newActive];

    if (imgSrc) {
      var selAttrDetail = attrs1.filter((x) => x.img === imgSrc);

      if (selAttrDetail) {
        var aa = selAttrDetail[0];
        dispatch(setActiveImg(aa));
        dispatch(setAttrProps(attrs1));
      }
    }

    newActive--;
    setActive1(newActive < 0 ? imgs1.length - 1 : newActive);
    setDirection("left");
  };

  const rightClick = () => {
    var imgSrc;
    var newActive = active1;

    imgSrc = imgs1[newActive];

    if (imgSrc) {
      var selAttrDetail = attrs1.filter((x) => x.img === imgSrc);

      if (selAttrDetail) {
        var aa = selAttrDetail[0];
        dispatch(setActiveImg(aa));
        dispatch(setAttrPropsR(attrs1));
      }
    }

    newActive++;

    setActive1(newActive % imgs1.length);
    setDirection("right");
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={() => leftClick()}>
        <img className="layer-2" src={layer3} />
      </div>
      <ReactCSSTransitionGroup
        transitionName={direction}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {generateItems()}
      </ReactCSSTransitionGroup>
      <div className="arrow arrow-right" onClick={() => rightClick()}>
        <img className="layer-3" src={layer2} />
      </div>
    </div>
  );
};

export default Carousel;
