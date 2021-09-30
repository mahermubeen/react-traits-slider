import React, { useEffect, useState } from "react";
import "./Main.css";
import {
  FilterData,
  SetCategArr,
  setCategDesc,
  setAttrName,
  setAttrRarity,
  setAttrRarityNo,
} from "../../redux/reducers/general";
import { useDispatch, useSelector } from "react-redux";

import Desktop from "../Desktop";

//bg images
import salmon from "../../images/backgrounds/1_1.png";
import navy from "../../images/backgrounds/1_2.png";
import skyBlue from "../../images/backgrounds/1_3.png";
import lemon from "../../images/backgrounds/1_4.png";
import paleGreen from "../../images/backgrounds/1_5.png";
import darkGreen from "../../images/backgrounds/1_6.png";
import pearl from "../../images/backgrounds/1_7.png";
import chocolate from "../../images/backgrounds/1_8.png";
import black from "../../images/backgrounds/1_9.png";
import dimGrey from "../../images/backgrounds/1_10.png";
import gainsboro from "../../images/backgrounds/1_11.png";
import beige from "../../images/backgrounds/1_12.png";
import violet from "../../images/backgrounds/1_13.png";
import coral from "../../images/backgrounds/1_14.png";
import water from "../../images/backgrounds/1_15.png";
import fire from "../../images/backgrounds/1_16.png";
import solana from "../../images/backgrounds/1_17.png";
import dawn from "../../images/backgrounds/1_18.png";
import nerdFace from "../../images/backgrounds/1_19.png";
import deepSpace from "../../images/backgrounds/1_20.png";
import matrix from "../../images/backgrounds/1_21.png";
import tradingSetup from "../../images/backgrounds/1_22.png";
import holoSphere from "../../images/backgrounds/1_23.png";
import graffiti from "../../images/backgrounds/1_24.png";
import pizza4Life from "../../images/backgrounds/1_25.png";

//skin images
import lightBlonde from "../../images/skin/2_1.png";
import lightBlack from "../../images/skin/2_2.png";
import mid from "../../images/skin/2_3.png";
import dark from "../../images/skin/2_4.png";
import puberty from "../../images/skin/2_5.png";
import phantom from "../../images/skin/2_6.png";
import zombie from "../../images/skin/2_7.png";
import cyborg from "../../images/skin/2_8.png";
import intersteller from "../../images/skin/2_9.png";
import slime from "../../images/skin/2_10.png";
import ai from "../../images/skin/2_11.png";

//apparel images
import zipHoodie from "../../images/apparel/3_1.png";
import whiteTshirt from "../../images/apparel/3_2.png";
import blackTshirt from "../../images/apparel/3_3.png";
import whiteShirt from "../../images/apparel/3_4.png";
import suitVest from "../../images/apparel/3_5.png";
import sttngUniform from "../../images/apparel/3_6.png";
import ma1 from "../../images/apparel/3_7.png";
import bufferJacket from "../../images/apparel/3_8.png";
import wizardRobe from "../../images/apparel/3_9.png";
import collegeJacket from "../../images/apparel/3_10.png";
import plaidShirt from "../../images/apparel/3_11.png";
import denimJacket from "../../images/apparel/3_12.png";
import tracksuit from "../../images/apparel/3_13.png";
import turtleNeck from "../../images/apparel/3_14.png";
import tieDieShirt from "../../images/apparel/3_15.png";
import solanaUniform from "../../images/apparel/3_16.png";
import hawwainShirt from "../../images/apparel/3_17.png";
import bBallJersey from "../../images/apparel/3_18.png";
import soccerJersey from "../../images/apparel/3_19.png";
import bikerJacket from "../../images/apparel/3_20.png";
import slipOver from "../../images/apparel/3_21.png";
import suit from "../../images/apparel/3_22.png";
import spaceSuit from "../../images/apparel/3_23.png";
import thobe from "../../images/apparel/3_24.png";
import caesar from "../../images/apparel/3_25.png";
import diamondShirt from "../../images/apparel/3_26.png";
import holoZipHoodie from "../../images/apparel/3_27.png";
import vaderArmor from "../../images/apparel/3_28.png";
import lavaSet from "../../images/apparel/3_29.png";

//mouth images
import smirk from "../../images/mouth/4_1.png";
import grin from "../../images/mouth/4_2.png";
import surprised from "../../images/mouth/4_3.png";
import tongueOut from "../../images/mouth/4_4.png";
import braces from "../../images/mouth/4_5.png";
import mustache from "../../images/mouth/4_6.png";
import beard from "../../images/mouth/4_7.png";
import sendLove from "../../images/mouth/4_8.png";
import partyHorn from "../../images/mouth/4_9.png";
import redBandana from "../../images/mouth/4_10.png";
import blueBandana from "../../images/mouth/4_11.png";
import cubanCigar from "../../images/mouth/4_12.png";
import vampireTeeth from "../../images/mouth/4_13.png";
import joker from "../../images/mouth/4_14.png";
import diamondGrillz from "../../images/mouth/4_15.png";
import elonMusk from "../../images/mouth/4_16.png";

//face images
import blackFace from "../../images/face/5_1.png";
import brownFace from "../../images/face/5_2.png";
import blueFace from "../../images/face/5_3.png";
import greenFace from "../../images/face/5_4.png";
import sunglasses from "../../images/face/5_5.png";
import nerdViper from "../../images/face/5_6.png";
import solanaViper from "../../images/face/5_7.png";
import freckles from "../../images/face/5_8.png";
import exhausted from "../../images/face/5_9.png";
import nerdGlasses from "../../images/face/5_10.png";
import future from "../../images/face/5_11.png";
import psycho from "../../images/face/5_12.png";
import diamondFace from "../../images/face/5_13.png";
import laserFace from "../../images/face/5_14.png";
import bitcoin from "../../images/face/5_15.png";
import rainbow from "../../images/face/5_16.png";
import onyx from "../../images/face/5_17.png";

//head images
import none from "../../images/casual/none.PNG";
import blackBeanie from "../../images/head/6_2.png";
import orangeBeanie from "../../images/head/6_3.png";
import beigeBeanie from "../../images/head/6_4.png";
import snapback from "../../images/head/6_5.png";
import flatCap from "../../images/head/6_6.png";
import headset from "../../images/head/6_7.png";
import solanaHeadband from "../../images/head/6_8.png";
import cryptoHat from "../../images/head/6_9.png";
import devilHorns from "../../images/head/6_10.png";
import bowlCut from "../../images/head/6_11.png";
import crown from "../../images/head/6_12.png";
import spaceHelmet from "../../images/head/6_13.png";
import keffiyeh from "../../images/head/6_14.png";
import diamondHeadset from "../../images/head/6_15.png";
import warBonnet from "../../images/head/6_16.png";
import superBrain from "../../images/head/6_17.png";
import laurelWreath from "../../images/head/6_18.png";
import holoHalo from "../../images/head/6_19.png";
import vaderHelmet from "../../images/head/6_20.png";
import samHair from "../../images/head/6_21.png";

//extra images
import peace from "../../images/extra/7_2.png";
import coffee from "../../images/extra/7_3.png";
import cash from "../../images/extra/7_4.png";
import solanaChain from "../../images/extra/7_5.png";
import blueLightSaber from "../../images/extra/7_6.png";
import redLightSaber from "../../images/extra/7_7.png";
import cape from "../../images/extra/7_8.png";
import btcChain from "../../images/extra/7_9.png";
import jetPack from "../../images/extra/7_10.png";
import nerdChain from "../../images/extra/7_11.png";
import holoWings from "../../images/extra/7_12.png";
import holoChart from "../../images/extra/7_13.png";

function Main() {
  const dispatch = useDispatch();

  //reducer states
  const category = useSelector((state) => state.general.category);
  const selectedCateg = useSelector((state) => state.general.selectedCateg);

  //lifecycle
  useEffect(() => {
    //setting api categories data
    const categ = [
      {
        id: "32344",
        name: "background",
        description: "This is background category for the background of user.",
        attributes: [
          {
            name: "salmon",
            img: salmon,
            rarity_no: "572",
            rarity: "5,663",
          },
          {
            name: "navy",
            img: navy,
            rarity_no: "572",
            rarity: "5,663",
          },
          {
            name: "sky blue",
            img: skyBlue,
            rarity_no: "572",
            rarity: "5,663",
          },
          {
            name: "lemon",
            img: lemon,
            rarity_no: "572",
            rarity: "5,663",
          },
          {
            name: "pale green",
            img: paleGreen,
            rarity_no: "572",
            rarity: "5,663",
          },
          {
            name: "dark green",
            img: darkGreen,
            rarity_no: "572",
            rarity: "5,663",
          },
          {
            name: "pearl",
            img: pearl,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "chocolate",
            img: chocolate,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "black",
            img: black,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "dim grey",
            img: dimGrey,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "gainsboro",
            img: gainsboro,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "beige",
            img: beige,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "violet",
            img: violet,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "coral",
            img: coral,
            rarity_no: "571",
            rarity: "5,653",
          },
          {
            name: "water",
            img: water,
            rarity_no: "140",
            rarity: "4,950",
          },
          {
            name: "fire",
            img: fire,
            rarity_no: "140",
            rarity: "4,950",
          },
          {
            name: "solana",
            img: solana,
            rarity_no: "140",
            rarity: "4,950",
          },
          {
            name: "dawn",
            img: dawn,
            rarity_no: "140",
            rarity: "4,950",
          },
          {
            name: "nerd face",
            img: nerdFace,
            rarity_no: "24",
            rarity: "0,545",
          },
          {
            name: "deep space",
            img: deepSpace,
            rarity_no: "15",
            rarity: "0,149",
          },
          {
            name: "matrix",
            img: matrix,
            rarity_no: "12",
            rarity: "0,119",
          },
          {
            name: "trading setup",
            img: tradingSetup,
            rarity_no: "9",
            rarity: "0,089",
          },
          {
            name: "holo sphere",
            img: holoSphere,
            rarity_no: "6",
            rarity: "0,059",
          },
          {
            name: "graffiti",
            img: graffiti,
            rarity_no: "3",
            rarity: "0,030",
          },
          {
            name: "pizza4Life",
            img: pizza4Life,
            rarity_no: "1",
            rarity: "0,010",
          },
        ],
      },
      {
        id: "2343",
        name: "skin",
        description: "This is skin category for the user skin.",
        attributes: [
          {
            name: "light blonde",
            img: lightBlonde,
            rarity_no: "3577",
            rarity: "35,412",
          },
          {
            name: "light black",
            img: lightBlack,
            rarity_no: "3577",
            rarity: "35,412",
          },
          {
            name: "mid",
            img: mid,
            rarity_no: "1230",
            rarity: "12,177",
          },
          {
            name: "dark",
            img: dark,
            rarity_no: "1230",
            rarity: "12,177",
          },
          {
            name: "puberty",
            img: puberty,
            rarity_no: "134",
            rarity: "2,317",
          },
          {
            name: "phantom",
            img: phantom,
            rarity_no: "199",
            rarity: "0,980",
          },
          {
            name: "zombie",
            img: zombie,
            rarity_no: "199",
            rarity: "0,980",
          },
          {
            name: "cyborg",
            img: cyborg,
            rarity_no: "28",
            rarity: "0,277",
          },
          {
            name: "intersteller",
            img: intersteller,
            rarity_no: "18",
            rarity: "0,178",
          },
          {
            name: "slime",
            img: slime,
            rarity_no: "8",
            rarity: "0,079",
          },
          {
            name: "ai",
            img: ai,
            rarity_no: "1",
            rarity: "0,010",
          },
        ],
      },
      {
        id: "3234",
        name: "apparel",
        description: "This is apparel category for the user.",
        attributes: [
          {
            name: "zip hoodie",
            img: zipHoodie,
            rarity_no: "687",
            rarity: "6,801",
          },
          {
            name: "white Tshirt",
            img: whiteTshirt,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "black Tshirt",
            img: blackTshirt,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "white Shirt",
            img: whiteShirt,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "suit vest",
            img: suitVest,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "sttng uniform",
            img: sttngUniform,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "ma-1",
            img: ma1,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "buffer jacket",
            img: bufferJacket,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "wizard robe",
            img: wizardRobe,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "college jacket",
            img: collegeJacket,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "plaid shirt",
            img: plaidShirt,
            rarity_no: "682",
            rarity: "6,752",
          },
          {
            name: "denim jacket",
            img: denimJacket,
            rarity_no: "615",
            rarity: "6,089",
          },
          {
            name: "track suit",
            img: tracksuit,
            rarity_no: "543",
            rarity: "5,376",
          },
          {
            name: "turtle neck",
            img: turtleNeck,
            rarity_no: "58",
            rarity: "2,554",
          },
          {
            name: "tie die shirt",
            img: tieDieShirt,
            rarity_no: "103",
            rarity: "2,010",
          },
          {
            name: "solana uniform",
            img: solanaUniform,
            rarity_no: "148",
            rarity: "1,871",
          },
          {
            name: "hawaiian shirt",
            img: hawwainShirt,
            rarity_no: "136",
            rarity: "1,742",
          },
          {
            name: "b-ball jersey",
            img: bBallJersey,
            rarity_no: "151",
            rarity: "1,485",
          },
          {
            name: "soccer jersey",
            img: soccerJersey,
            rarity_no: "163",
            rarity: "1,317",
          },
          {
            name: "biker jacket",
            img: bikerJacket,
            rarity_no: "186",
            rarity: "0,851",
          },
          {
            name: "slip over",
            img: slipOver,
            rarity_no: "172",
            rarity: "0,713",
          },
          {
            name: "suit",
            img: suit,
            rarity_no: "159",
            rarity: "0,505",
          },
          {
            name: "space suit",
            img: spaceSuit,
            rarity_no: "35",
            rarity: "0,347",
          },
          {
            name: "thobe",
            img: thobe,
            rarity_no: "30",
            rarity: "0,297",
          },
          {
            name: "caesar",
            img: caesar,
            rarity_no: "22",
            rarity: "0,218",
          },
          {
            name: "diamond sweatshirt",
            img: diamondShirt,
            rarity_no: "28",
            rarity: "0,158",
          },
          {
            name: "holo zip hoodie",
            img: holoZipHoodie,
            rarity_no: "11",
            rarity: "0,109",
          },
          {
            name: "vader's armor",
            img: vaderArmor,
            rarity_no: "3",
            rarity: "0,030",
          },
          {
            name: "lava set",
            img: lavaSet,
            rarity_no: "1",
            rarity: "0,010",
          },
        ],
      },
      {
        id: "23231",
        name: "mouth",
        description: "This is mouth category for the user mouth.",
        attributes: [
          {
            name: "smirk",
            img: smirk,
            rarity_no: "2822",
            rarity: "27,938",
          },
          {
            name: "grin",
            img: grin,
            rarity_no: "2822",
            rarity: "27,938",
          },
          {
            name: "surprised",
            img: surprised,
            rarity_no: "2822",
            rarity: "27,938",
          },
          {
            name: "tongue out",
            img: tongueOut,
            rarity_no: "146",
            rarity: "3,425",
          },
          {
            name: "braces",
            img: braces,
            rarity_no: "112",
            rarity: "3,089",
          },
          {
            name: "mustache",
            img: mustache,
            rarity_no: "140",
            rarity: "240",
          },
          {
            name: "beard",
            img: beard,
            rarity_no: "130",
            rarity: "1,683",
          },
          {
            name: "send love",
            img: sendLove,
            rarity_no: "123",
            rarity: "1,495",
          },
          {
            name: "party horn",
            img: partyHorn,
            rarity_no: "154",
            rarity: "1,228",
          },
          {
            name: "red bandana",
            img: redBandana,
            rarity_no: "184",
            rarity: "0,832",
          },
          {
            name: "blue bandana",
            img: blueBandana,
            rarity_no: "184",
            rarity: "0,832",
          },
          {
            name: "cuban cigar",
            img: cubanCigar,
            rarity_no: "155",
            rarity: "0,545",
          },
          {
            name: "vampire teeth",
            img: vampireTeeth,
            rarity_no: "236",
            rarity: "0,356",
          },
          {
            name: "joker",
            img: joker,
            rarity_no: "21",
            rarity: "0,208",
          },
          {
            name: "diamond grillz",
            img: diamondGrillz,
            rarity_no: "13 ",
            rarity: "0,129",
          },
          {
            name: "elon musk",
            img: elonMusk,
            rarity_no: "1 ",
            rarity: "0,010",
          },
        ],
      },
      {
        id: "2323",
        name: "face",
        description: "This is face category for the user face.",
        attributes: [
          {
            name: "black",
            img: blackFace,
            rarity_no: "2009",
            rarity: "19,889",
          },
          {
            name: "brown",
            img: brownFace,
            rarity_no: "2007",
            rarity: "19,869",
          },
          {
            name: "blue",
            img: blueFace,
            rarity_no: "2007",
            rarity: "19,869",
          },
          {
            name: "green",
            img: greenFace,
            rarity_no: "2007",
            rarity: "19,869",
          },
          {
            name: "sunglasses",
            img: sunglasses,
            rarity_no: "100",
            rarity: "3,960",
          },
          {
            name: "nerd viper",
            img: nerdViper,
            rarity_no: "126",
            rarity: "3,227",
          },
          {
            name: "solana viper",
            img: solanaViper,
            rarity_no: "100",
            rarity: "2,970",
          },
          {
            name: "freckles",
            img: freckles,
            rarity_no: "89",
            rarity: "2,861",
          },
          {
            name: "exhausted",
            img: exhausted,
            rarity_no: "133",
            rarity: "2,307",
          },
          {
            name: "nerd glasses",
            img: nerdGlasses,
            rarity_no: "52",
            rarity: "1,505",
          },
          {
            name: "future",
            img: future,
            rarity_no: "151",
            rarity: "1,099",
          },
          {
            name: "psycho",
            img: psycho,
            rarity_no: "290",
            rarity: "0,891",
          },
          {
            name: "diamond",
            img: diamondFace,
            rarity_no: "278",
            rarity: "0,772",
          },
          {
            name: "laser",
            img: laserFace,
            rarity_no: "250",
            rarity: "0,495",
          },
          {
            name: "bitcoin",
            img: bitcoin,
            rarity_no: "27",
            rarity: "0,267",
          },
          {
            name: "rainbow",
            img: rainbow,
            rarity_no: "14",
            rarity: "0,139",
          },
          {
            name: "onyx",
            img: onyx,
            rarity_no: "1",
            rarity: "0,010",
          },
        ],
      },
      {
        id: "2323",
        name: "head",
        description: "This is head category for the user head.",
        attributes: [
          {
            name: "none",
            img: none,
            rarity_no: "1569",
            rarity: "15,533",
          },
          {
            name: "black beanie",
            img: blackBeanie,
            rarity_no: "1567",
            rarity: "15,513",
          },
          {
            name: "orange beanie",
            img: orangeBeanie,
            rarity_no: "1567",
            rarity: "15,513",
          },
          {
            name: "beige beanie",
            img: beigeBeanie,
            rarity_no: "1567",
            rarity: "15,513",
          },
          {
            name: "snap back",
            img: snapback,
            rarity_no: "1567",
            rarity: "15,513",
          },
          {
            name: "flat cap",
            img: flatCap,
            rarity_no: "1567",
            rarity: "15,513",
          },
          {
            name: "headset",
            img: headset,
            rarity_no: "151",
            rarity: "1,485",
          },
          {
            name: "solana headband",
            img: solanaHeadband,
            rarity_no: "220",
            rarity: "1,188",
          },
          {
            name: "quit crypto hat",
            img: cryptoHat,
            rarity_no: "201",
            rarity: "1,000",
          },
          {
            name: "devil horns",
            img: devilHorns,
            rarity_no: "266",
            rarity: "0,653",
          },
          {
            name: "bowl cut",
            img: bowlCut,
            rarity_no: "163",
            rarity: "0,624",
          },
          {
            name: "crown",
            img: crown,
            rarity_no: "250",
            rarity: "0,495",
          },
          {
            name: "space helmet",
            img: spaceHelmet,
            rarity_no: "35",
            rarity: "0,347",
          },
          {
            name: "keffiyeh",
            img: keffiyeh,
            rarity_no: "30",
            rarity: "0,297",
          },
          {
            name: "diamond headset",
            img: diamondHeadset,
            rarity_no: "27",
            rarity: "0,267",
          },
          {
            name: "war bonnet",
            img: warBonnet,
            rarity_no: "22",
            rarity: "0,218",
          },
          {
            name: "super brain",
            img: superBrain,
            rarity_no: "20",
            rarity: "0,158",
          },
          {
            name: "laurel wreath",
            img: laurelWreath,
            rarity_no: "9",
            rarity: "0,158",
          },
          {
            name: "holo halo",
            img: holoHalo,
            rarity_no: "4",
            rarity: "0,040",
          },
          {
            name: "vader's helmet",
            img: vaderHelmet,
            rarity_no: "3",
            rarity: "0,030",
          },
          {
            name: "sam's hair",
            img: samHair,
            rarity_no: "1",
            rarity: "0,010",
          },
        ],
      },
      {
        id: "232233",
        name: "extra",
        description: "This is extra category for extra traits.",
        attributes: [
          {
            name: "none",
            img: none,
            rarity_no: "8283",
            rarity: "82,002",
          },
          {
            name: "peace",
            img: peace,
            rarity_no: "722",
            rarity: "7,148",
          },
          {
            name: "coffee",
            img: coffee,
            rarity_no: "126",
            rarity: "4,217",
          },
          {
            name: "cash",
            img: cash,
            rarity_no: "108",
            rarity: "3,049",
          },
          {
            name: "solana chain",
            img: solanaChain,
            rarity_no: "132",
            rarity: "1,802",
          },
          {
            name: "blue lightsaber",
            img: blueLightSaber,
            rarity_no: "161",
            rarity: "0,604",
          },
          {
            name: "red lightsaber",
            img: redLightSaber,
            rarity_no: "261",
            rarity: "0,604",
          },
          {
            name: "cape",
            img: cape,
            rarity_no: "27",
            rarity: "0,267",
          },
          {
            name: "btc chain",
            img: btcChain,
            rarity_no: "12",
            rarity: "0,119",
          },
          {
            name: "jet pack",
            img: jetPack,
            rarity_no: "9",
            rarity: "0,089",
          },
          {
            name: "nerd chain",
            img: nerdChain,
            rarity_no: "6",
            rarity: "0,059",
          },
          {
            name: "holo wings",
            img: holoWings,
            rarity_no: "3",
            rarity: "0,030",
          },
          {
            name: "holo chart",
            img: holoChart,
            rarity_no: "1",
            rarity: "0,010",
          },
        ],
      },
    ];
    dispatch(SetCategArr(categ));
  }, []);

  //setting init attributes value
  var categNames = category.map((cat) => ({
    name: cat.name,
  }));
  var arr = [];
  var opts = categNames.map(({ name }) => arr.push(name));
  var initValue = arr[0];

  // filtering attributes
  var attributes;
  if (selectedCateg) {
    attributes = category.filter((cat) => cat.name === selectedCateg);
  } else {
    attributes = category.filter((cat) => cat.name === initValue);
  }

  //attributes Images
  var attrImgs = [];
  var aa = attributes.filter(({ attributes }) => {
    if (attributes) {
      for (var i = 0; i < attributes.length; i++) {
        attrImgs.push(attributes[i].img);
      }
    }
  });

  //selected category attributes
  var attrs = [];
  var bb = attributes.filter(({ attributes, description }) => {
    if ((attributes, description)) {
      for (var i = 0; i < attributes.length; i++) {
        attrs.push({
          name: attributes[i].name,
          rarity: attributes[i].rarity,
          rarity_no: attributes[i].rarity_no,
          img: attributes[i].img,
          desc: description,
        });
      }
    }
  });

  return (
    <Desktop
      {...desktopData}
      categNames={categNames}
      attrs={attrs}
      attrImgs={attrImgs}
    />
  );
}

export default Main;

const lOGOData = {
  vector2:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-1@2x.png",
  vector4:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-3@2x.png",
  vector5:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-4@2x.png",
  vector6:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-8@2x.png",
  vector8:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/61369c233cc601bc63696c4c/img/vector-5@2x.png",
};

const nAVLINKData = {
  children: "HOME",
};

const nAVLINK2Data = {
  children: "TRAITS",
};

const nAVLINK3Data = {
  children: "THE GRE4T PUZZLE",
  className: "nav-link-1",
};

const property1DefaultData = {
  x10101EverInExiste: "For the Culture",
  withAlmostTwoMill:
    "Each NFT has a deep sociocultural link to the history of the new digital era, both in its individual components and as a whole.",
};

const property1Variant3Data = {
  group:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/group@2x.png",
  address: "10101 Ever in Existence",
  text2: (
    <>
      With almost two million potential options, each nerd is unique and created
      algorithmically from 108 existing traits.
      <br />
      <br />
      There shall be just 10101 nerds, period.
      <br />
      <br />
      No next generation, no breads, and no further varieties.
    </>
  ),
};

const property1Variant2Data = {
  group:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/group-1@2x.png",
  x10101EverInExiste: "The Circle of Brilliance",
  withAlmostTwoMill:
    "The ownership of a Nerd offers a distinctive chance for the owner to join an exclusive club of like-minded individuals.",
};

const stateClosedSelectionSkinData = {
  text3: "Skin",
  arrowDownSvgrepoCom1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/arrow-down-svgrepo-com-1@2x.png",
};

// const frame16Data = {
//   stateClosedSelectionSkinProps: stateClosedSelectionSkinData,
// };

const cardTypeMainTweetDarkModeFalseYourTData = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/image@2x.png",
  ayabaOnileIreI25: "SBF",
  star1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/star-1@2x.png",
  vector12:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/vector-12@2x.png",
  ayabaoniile_I2598: "@SBF_Alameda",
  fiMoreHorizontal:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/fi-more-horizontal@2x.png",
  itWasPopularisedI: (
    <>
      I&#x27;ll buy as much SOL has you have, right now, at $3.
      <br />
      <br />
      Sell me all you want.
      <br />
      <br />
      Then go fuck off.
    </>
  ),
  x345PmApril120: "6:51PM - Jan 9, 2019 - Twitter Web App",
  vector15:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/vector-15@2x.png",
  x759KI2598168220: "880",
  text22: "Retweets",
  x759KI25981682202: "700",
  retweetsI25981682: "Quote Tweets",
  x759KI25981682203: "5420",
  retweetsI259816822: "Likes",
  vector16:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/vector-15@2x.png",
  union:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/union@2x.png",
  rtLine:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/rt-line@2x.png",
  heartSolid:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/heart-solid@2x.png",
  send: "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/send@2x.png",
  vector17:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/vector-15@2x.png",
};

const fOOTERData = {
  vector4:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-14@2x.png",
  vector5:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-18@2x.png",
  vector7:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-23@2x.png",
  vector8:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-19@2x.png",
};

const desktopData = {
  overlapGroup9:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/rectangle-10@1x.png",
  socials:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/socials@2x.png",
  selectWallet: "Select Wallet",
  address: "5 SOL each",
  overlapGroup10:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/rectangle-12@1x.png",
  spanText: "Discover our ",
  spanText2: "traits",
  x2_Zeichenflache11:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/61363b45e87edf415320f929/img/2-zeichenfla-che-1-1@2x.png",
  x3_Zeichenflache11:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/61363b45e87edf415320f929/img/3-zeichenfla-che-1-1@2x.png",
  unbenannt2_Zeichenflache11:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/61363b45e87edf415320f929/img/unbenannt-2-zeichenfla-che-1-1@2x.png",
  layer2:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/layer-2@2x.png",
  layer3:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/layer-3@2x.png",
  cyborg: "Cyborg",
  haveThisTrait: "∞% have this trait",
  uncommon: "UNCOMMON",
  common: "COMMON",
  rare: "RARE",
  superRare: "SUPER RARE",
  epic: "EPIC",
  legendary: "LEGENDARY",
  mythic: "MYTHIC",
  overlapGroup11:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/rectangle-11@1x.png",
  gehirn21:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/-gehirn2-1@2x.png",
  text17:
    "Nothing was left to chance; each particle, attribute, and number you encounter has a hidden meaning and maps a little piece of the larger jigsaw.",
  text18:
    "Inspired by Cicada 3301, we decided to create not only the first but also the biggest, most challenging and most rewarding NFT puzzle ever.",
  schmetterling1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/-schmetterling-1@2x.png",
  puzzel1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/-puzzel-1@2x.png",
  text19: (
    <>
      The puzzle is composed of several steps and is extremely difficult in and
      of itself. <br />
      <br />
      It necessitates a wide range of abilities and can only be solved by a
      highly intelligent individual or group of individuals.
    </>
  ),
  text20: (
    <>
      The winner of the puzzle is entitled to 50% of all revenues in the resale
      of Nasty Nerds for life. <br />
      <br />
      Because we expect it will take several years to solve the puzzle, the
      prize will continue to rise, incentivizing even more brilliant people to
      participate.
    </>
  ),
  pokal1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/-pokal-1@2x.png",
  herz1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/-herz-1@2x.png",
  text21:
    "To play the puzzle, you don’t need to buy or own a Nasty Nerd. The puzzle will expire in 10 years, if there is no winner, all the winnings will be donated to a charity chosen by the Circle of Brilliance.",
  hint1: "Hint #1",
  arrowDownSvgrepoCom1:
    "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/arrow-down-svgrepo-com-1@2x.png",
  lOGOProps: lOGOData,
  nAVLINKProps: nAVLINKData,
  nAVLINK2Props: nAVLINK2Data,
  nAVLINK2Props2: nAVLINK3Data,
  property1DefaultProps: property1DefaultData,
  property1Variant3Props: property1Variant3Data,
  property1Variant2Props: property1Variant2Data,
  // frame16Props: frame16Data,
  cardTypeMainTweetDarkModeFalseYourTProps:
    cardTypeMainTweetDarkModeFalseYourTData,
  fOOTERProps: fOOTERData,
};
