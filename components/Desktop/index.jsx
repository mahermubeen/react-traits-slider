import React, { useEffect, useState } from "react";
import LOGO from "../LOGO";
import NAVLINK from "../NAVLINK";
import NAVLINK2 from "../NAVLINK2";
import Frame13 from "../Frame13";
import Property1Default from "../Property1Default";
import Property1Variant3 from "../Property1Variant3";
import Property1Variant2 from "../Property1Variant2";
import DiscoverTraits from "../DiscoverTraits";
import Frame38 from "../Frame38";
import CardTypeMainTweetDarkModeFalseYourT from "../CardTypeMainTweetDarkModeFalseYourT";
import FOOTER from "../FOOTER";
import "./Desktop.css";
import {
  FilterData,
  SetCategArr,
  setCategDesc,
  setAttrName,
  setAttrRarity,
  setAttrRarityNo,
  setActiveIndex,
  setAttrProps,
  setAttrInitState,
  setLastIndex,
} from "../../redux/reducers/general";
import { useDispatch, useSelector } from "react-redux";

function Desktop(props) {
  const {
    overlapGroup9,
    socials,
    selectWallet,
    address,
    overlapGroup10,
    spanText,
    spanText2,
    x2_Zeichenflache11,
    x3_Zeichenflache11,
    unbenannt2_Zeichenflache11,
    arrowDownSvgrepoCom1,
    layer2,
    layer3,
    cyborg,
    haveThisTrait,
    uncommon,
    common,
    rare,
    superRare,
    epic,
    legendary,
    mythic,
    overlapGroup11,
    gehirn21,
    text17,
    text18,
    schmetterling1,
    puzzel1,
    text19,
    text20,
    pokal1,
    herz1,
    text21,
    hint1,
    lOGOProps,
    nAVLINKProps,
    nAVLINK2Props,
    nAVLINK2Props2,
    property1DefaultProps,
    property1Variant3Props,
    property1Variant2Props,
    cardTypeMainTweetDarkModeFalseYourTProps,
    fOOTERProps,
    categNames,
    attrImgs,
    attrs,
  } = props;

  const dispatch = useDispatch();

  //reducer states
  const category = useSelector((state) => state.general.category);
  const selectedCateg = useSelector((state) => state.general.selectedCateg);
  const rarity = useSelector((state) => state.general.attrRarityNo);
  const initCategDesc = useSelector((state) => state.general.categDesc);
  const initAttrName = useSelector((state) => state.general.attrName);
  const initAttrRarity = useSelector((state) => state.general.attrRarity);
  const activeIndex = useSelector((state) => state.general.activeIndex);

  //States
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
      } else if (attrs) {
        var gg = attrs.at(activeIndex);

        setDesc(gg.desc);
        setName(gg.name);
        setRaritty(gg.rarity);
        setRarittyNo(gg.rarity_no);
      } else if (activeIndex) {
        var gg = attrs.at(activeIndex);

        setDesc(gg.desc);
        setName(gg.name);
        setRaritty(gg.rarity);
        setRarittyNo(gg.rarity_no);
      }
    }
  }, [isFetching, attrs, activeIndex]);

  return (
    <div className="container-center-horizontal">
      <div className="desktop screen">
        <div
          className="overlap-group9"
          style={{ backgroundImage: `url(${overlapGroup9})` }}
        >
          <div className="overlap-group12">
            <div className="navbar animate-enter">
              <LOGO
                vector2={lOGOProps.vector2}
                vector4={lOGOProps.vector4}
                vector5={lOGOProps.vector5}
                vector6={lOGOProps.vector6}
                vector8={lOGOProps.vector8}
              />
              <div className="frame-1">
                <NAVLINK>{nAVLINKProps.children}</NAVLINK>
                <NAVLINK2>{nAVLINK2Props.children}</NAVLINK2>
                <NAVLINK className={nAVLINK2Props2.className}>
                  {nAVLINK2Props2.children}
                </NAVLINK>
              </div>
              <img className="socials" src={socials} />
            </div>
            <div className="home animate-enter1" id="home" show-on-scroll>
              <Frame13 />
              <div className="frame-10">
                <div className="rectangle-14">
                  <img
                    width="100%"
                    height="100%"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/files/ezgif-7-94b7a369a480.gif"
                  />
                </div>
                <div className="frame-12">
                  <a href="https://twitter.com/nasty_nerds" target="_blank">
                    <div className="frame-15">
                      <div className="select-wallet sfprodisplay-bold-white-14px">
                        {selectWallet}
                      </div>
                    </div>
                  </a>
                  <div className="address sfprodisplay-bold-white-14px">
                    {address}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="facts animate-enter2" show-on-scroll>
            <Property1Default
              x10101EverInExiste={property1DefaultProps.x10101EverInExiste}
              withAlmostTwoMill={property1DefaultProps.withAlmostTwoMill}
            />
            <Property1Variant3
              group={property1Variant3Props.group}
              address={property1Variant3Props.address}
              text2={property1Variant3Props.text2}
            />
            <Property1Variant2
              group={property1Variant2Props.group}
              x10101EverInExiste={property1Variant2Props.x10101EverInExiste}
              withAlmostTwoMill={property1Variant2Props.withAlmostTwoMill}
            />
          </div>
        </div>
        <div
          className="overlap-group10"
          style={{ backgroundImage: `url(${overlapGroup10})` }}
        >
          <div className="traits animate-enter3" id="traits" show-on-scroll>
            <div className="discover-our-traits sfprodisplay-bold-white-36px">
              <span className="sfprodisplay-bold-white-36px">{spanText}</span>
              <span className="sfprodisplay-black-white-36px">{spanText2}</span>
            </div>
            <div className="frame-18">
              <DiscoverTraits
                arrowDownSvgrepoCom1={arrowDownSvgrepoCom1}
                x2_Zeichenflache11={x2_Zeichenflache11}
                x3_Zeichenflache11={x3_Zeichenflache11}
                unbenannt2_Zeichenflache11={unbenannt2_Zeichenflache11}
                layer2={layer2}
                layer3={layer3}
                categNames={categNames}
                attrImgs={attrImgs}
                attrs={attrs}
              />
            </div>
            <div className="frame-22">
              <div className="frame-40">
                <div
                  className={`rectangle-2 smart-layers-pointers ${
                    rarittyNo > 1000 ? "rec2-active" : ""
                  }`}
                ></div>
                <div
                  className={`rectangle-4 smart-layers-pointers ${
                    rarittyNo > 500 && rarittyNo <= 1000 ? "rec4-active" : ""
                  }`}
                ></div>
                <div
                  className={`rectangle-6 smart-layers-pointers ${
                    rarittyNo > 150 && rarittyNo <= 500 ? "rec6-active" : ""
                  }`}
                ></div>
                <div
                  className={`rectangle-5 smart-layers-pointers ${
                    rarittyNo > 50 && rarittyNo <= 150 ? "rec5-active" : ""
                  }`}
                ></div>
                <div
                  className={`rectangle-7 smart-layers-pointers ${
                    rarittyNo > 16 && rarittyNo <= 50 ? "rec7-active" : ""
                  }`}
                ></div>
                <div
                  className={`rectangle-8 smart-layers-pointers ${
                    rarittyNo > 1 && rarittyNo <= 16 ? "rec8-active" : ""
                  }`}
                ></div>
                <div
                  className={`rectangle-9 smart-layers-pointers ${
                    rarity === 1 ? "rec9-active" : ""
                  }`}
                ></div>
              </div>
              <div className="flex-row sfprodisplay-heavy-normal-white-12px">
                <div className="uncommon">{uncommon}</div>
                <div className="common">{common}</div>
                <div className="rare">{rare}</div>
                <div className="super-rare">{superRare}</div>
                <div className="epic">{epic}</div>
                <div className="legendary">{legendary}</div>
                <div className="mythic">{mythic}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlap-group11"
          style={{ backgroundImage: `url(${overlapGroup11})` }}
        >
          <div className="puzzle" id="puzzle">
            <Frame38 />
            <div className="explainer">
              <div className="brain animate-enter5" show-on-scroll>
                <img className="gehirn2-1" src={gehirn21} />
                <div className="text-17 sfprodisplay-bold-white-18px">
                  {text17}
                </div>
              </div>
              <div className="cicada animate-enter6" show-on-scroll>
                <div className="text-18 sfprodisplay-bold-white-18px">
                  {text18}
                </div>
                <img className="schmetterling-1" src={schmetterling1} />
              </div>
              <div className="steps animate-enter7" show-on-scroll>
                <img className="puzzel-1" src={puzzel1} />
                <div className="text-19 sfprodisplay-bold-white-18px">
                  {text19}
                </div>
              </div>
              <div className="trophy animate-enter8" show-on-scroll>
                <div className="text-20 sfprodisplay-bold-white-18px">
                  {text20}
                </div>
                <img className="pokal-1" src={pokal1} />
              </div>
              <div className="heart animate-enter9" show-on-scroll>
                <img className="herz-1" src={herz1} />
                <div className="text-21 sfprodisplay-bold-white-18px">
                  {text21}
                </div>
              </div>
            </div>
            <div className="frame-37">
              <div className="thint animate-enter10" show-on-scroll>
                <div className="hint-1 sfprodisplay-bold-white-36px">
                  {hint1}
                </div>
              </div>
              <CardTypeMainTweetDarkModeFalseYourT
                {...cardTypeMainTweetDarkModeFalseYourTProps}
              />
            </div>
          </div>
          <FOOTER
            vector4={fOOTERProps.vector4}
            vector5={fOOTERProps.vector5}
            vector7={fOOTERProps.vector7}
            vector8={fOOTERProps.vector8}
          />
        </div>
      </div>
    </div>
  );
}

export default Desktop;
