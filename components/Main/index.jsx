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
import salmon from "../../images/salmon.PNG";
import navy from "../../images/navy.PNG";
import skyBlue from "../../images/sky-blue.PNG";
import lemon from "../../images/lemon.PNG";
import paleGreen from "../../images/pale-green.PNG";
import darkGreen from "../../images/dark-green.PNG";
import pearl from "../../images/pearl.PNG";
import chocolate from "../../images/chocolate.PNG";
import black from "../../images/black.PNG";
import dimGrey from "../../images/dim-grey.PNG";
import gainsboro from "../../images/gainsboro.PNG";
import beige from "../../images/beige.PNG";
import violet from "../../images/violet.PNG";
import coral from "../../images/coral.PNG";
import water from "../../images/water.PNG";
import fire from "../../images/fire.PNG";
import solana from "../../images/solana.PNG";
import dawn from "../../images/dawn.PNG";
import nerdFace from "../../images/nerd-face.PNG";
import deepSpace from "../../images/deep-space.PNG";
import matrix from "../../images/matrix.PNG";
import tradingSetup from "../../images/trading-setup.PNG";
import holoSphere from "../../images/holo-sphere.PNG";
import graffiti from "../../images/graffiti.PNG";
import pizza4Life from "../../images/pizza4life.PNG";

//skin images
import lightBlonde from "../../images/light-blonde.PNG";
import lightBlack from "../../images/light-black.PNG";
import mid from "../../images/mid.PNG";
import dark from "../../images/dark.PNG";
import puberty from "../../images/puberty.PNG";
import phantom from "../../images/phantom.PNG";
import zombie from "../../images/zombie.PNG";
import cyborg from "../../images/cyborg.PNG";
import intersteller from "../../images/intersteller.PNG";
import slime from "../../images/slime.PNG";
import ai from "../../images/ai.PNG";

//apparel images
import zipHoodie from "../../images/zip-hoodie.PNG";
import whiteTshirt from "../../images/white-tshirt.PNG";
import blackTshirt from "../../images/black-tshirt.PNG";
import whiteShirt from "../../images/white-shirt.PNG";
import suitVest from "../../images/suit-vest.PNG";
import sttngUniform from "../../images/sttng-uniform.PNG";
import ma1 from "../../images/ma-1.PNG";
import bufferJacket from "../../images/buffer-jacket.PNG";
import wizardRobe from "../../images/wizard-robe.PNG";
import collegeJacket from "../../images/college-jacket.PNG";
import plaidShirt from "../../images/plaid-shirt.PNG";
import denimJacket from "../../images/denim-jacket.PNG";
import tracksuit from "../../images/tracksuit.PNG";
import turtleNeck from "../../images/turtleneck.PNG";
import tieDieShirt from "../../images/tie-die-tshirt.PNG";
import solanaUniform from "../../images/solana-uniform.PNG";
import hawwainShirt from "../../images/hawaiian-shirt.PNG";
import bBallJersey from "../../images/b-ball-jersey.PNG";
import soccerJersey from "../../images/soccer-jersey.PNG";
import bikerJacket from "../../images/biker-jacket.PNG";
import slipOver from "../../images/slip-over.PNG";
import suit from "../../images/suit.PNG";
import spaceSuit from "../../images/space-suit.PNG";
import thobe from "../../images/thobe.PNG";
import caesar from "../../images/caesar.PNG";
import diamondShirt from "../../images/diamond-sweatshirt.PNG";
import holoZipHoodie from "../../images/holo-zip-hoodie.PNG";
import vaderArmor from "../../images/vader's-armor.PNG";
import lavaSet from "../../images/lava-set.PNG";

//mouth images
import smirk from "../../images/smirk.PNG";
import grin from "../../images/grin.PNG";
import surprised from "../../images/surprised.PNG";
import tongueOut from "../../images/tongue-out.PNG";
import braces from "../../images/braces.PNG";
import mustache from "../../images/mustache.PNG";
import beard from "../../images/beard.PNG";
import sendLove from "../../images/send-love.PNG";
import partyHorn from "../../images/party-horn.PNG";
import redBandana from "../../images/red-bandana.PNG";
import blueBandana from "../../images/blue-bandana.PNG";
import cubanCigar from "../../images/cuban-cigar.PNG";
import vampireTeeth from "../../images/vampire-teeth.PNG";
import joker from "../../images/joker.PNG";
import diamondGrillz from "../../images/diamond-grillz.PNG";
import elonMusk from "../../images/elon-musk.PNG";

//face images
import blackFace from "../../images/black-face.PNG";
import brownFace from "../../images/brown-face.PNG";
import blueFace from "../../images/blue-face.PNG";
import greenFace from "../../images/green-face.PNG";
import sunglasses from "../../images/sunglasses.PNG";
import nerdViper from "../../images/nerd-viper.PNG";
import solanaViper from "../../images/solana-summer.PNG";
import freckles from "../../images/freckles.PNG";
import exhausted from "../../images/exhausted.PNG";
import nerdGlasses from "../../images/nerd-glasses.PNG";
import future from "../../images/future.PNG";
import psycho from "../../images/psycho.PNG";
import diamondFace from "../../images/diamond-face.PNG";
import laserFace from "../../images/laser-face.PNG";
import bitcoin from "../../images/bitcoin.PNG";
import rainbow from "../../images/rainbow.PNG";
import onyx from "../../images/onyx.PNG";

//head images
import none from "../../images/none.PNG";
import blackBeanie from "../../images/black-beanie.PNG";
import orangeBeanie from "../../images/orange-beanie.PNG";
import beigeBeanie from "../../images/beige-beanie.PNG";
import snapback from "../../images/snapback.PNG";
import flatCap from "../../images/flat-cap.PNG";
import headset from "../../images/headset.PNG";
import solanaHeadband from "../../images/solana-headband.PNG";
import cryptoHat from "../../images/quit-crypto-hat.PNG";
import devilHorns from "../../images/devil-horns.PNG";
import bowlCut from "../../images/bowl-cut.PNG";
import crown from "../../images/crown.PNG";
import spaceHelmet from "../../images/space-helmet.PNG";
import keffiyeh from "../../images/keffiyeh.PNG";
import diamondHeadset from "../../images/diamond-headset.PNG";
import warBonnet from "../../images/war-bonnet.PNG";
import superBrain from "../../images/super-brain.PNG";
import laurelWreath from "../../images/laurel-wreath.PNG";
import holoHalo from "../../images/holo-halo.PNG";
import vaderHelmet from "../../images/vader's-helmet.PNG";
import samHair from "../../images/sam's-hair.PNG";

//extra images
import peace from "../../images/peace.PNG";
import coffee from "../../images/coffee.PNG";
import cash from "../../images/cash.PNG";
import solanaChain from "../../images/solana-chain.PNG";
import blueLightSaber from "../../images/blue-light-saber.PNG";
import redLightSaber from "../../images/red-light-saber.PNG";
import cape from "../../images/cape.PNG";
import btcChain from "../../images/btc-chain.PNG";
import jetPack from "../../images/jetpack.PNG";
import nerdChain from "../../images/nerd-chain.PNG";
import holoWings from "../../images/holo-wings.PNG";
import holoChart from "../../images/holo-chart.PNG";

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
            rarity_no: "500",
            rarity: "4,950",
          },
          {
            name: "fire",
            img: fire,
            rarity_no: "500",
            rarity: "4,950",
          },
          {
            name: "fire",
            img: fire,
            rarity_no: "500",
            rarity: "4,950",
          },
          {
            name: "solana",
            img: solana,
            rarity_no: "500",
            rarity: "4,950",
          },
          {
            name: "dawn",
            img: dawn,
            rarity_no: "500",
            rarity: "4,950",
          },
          {
            name: "nerd face",
            img: nerdFace,
            rarity_no: "55",
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
            rarity_no: "3.577",
            rarity: "35,412",
          },
          {
            name: "light black",
            img: lightBlack,
            rarity_no: "3.577",
            rarity: "35,412",
          },
          {
            name: "mid",
            img: mid,
            rarity_no: "1.230",
            rarity: "12,177",
          },
          {
            name: "dark",
            img: dark,
            rarity_no: "1.230",
            rarity: "12,177",
          },
          {
            name: "puberty",
            img: puberty,
            rarity_no: "234",
            rarity: "2,317",
          },
          {
            name: "phantom",
            img: phantom,
            rarity_no: "99",
            rarity: "0,980",
          },
          {
            name: "zombie",
            img: zombie,
            rarity_no: "99",
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
            rarity_no: "258",
            rarity: "2,554",
          },
          {
            name: "tie die shirt",
            img: tieDieShirt,
            rarity_no: "203",
            rarity: "2,010",
          },
          {
            name: "solana uniform",
            img: solanaUniform,
            rarity_no: "189",
            rarity: "1,871",
          },
          {
            name: "hawaiian shirt",
            img: hawwainShirt,
            rarity_no: "176",
            rarity: "1,742",
          },
          {
            name: "b-ball jersey",
            img: bBallJersey,
            rarity_no: "150",
            rarity: "1,485",
          },
          {
            name: "soccer jersey",
            img: soccerJersey,
            rarity_no: "133",
            rarity: "1,317",
          },
          {
            name: "biker jacket",
            img: bikerJacket,
            rarity_no: "86",
            rarity: "0,851",
          },
          {
            name: "slip over",
            img: slipOver,
            rarity_no: "72",
            rarity: "0,713",
          },
          {
            name: "suit",
            img: suit,
            rarity_no: "51",
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
            rarity_no: "16",
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
            rarity_no: "2.822",
            rarity: "27,938",
          },
          {
            name: "grin",
            img: grin,
            rarity_no: "2.822",
            rarity: "27,938",
          },
          {
            name: "surprised",
            img: surprised,
            rarity_no: "2.822",
            rarity: "27,938",
          },
          {
            name: "tongue out",
            img: tongueOut,
            rarity_no: "346",
            rarity: "3,425",
          },
          {
            name: "braces",
            img: braces,
            rarity_no: "312",
            rarity: "3,089",
          },
          {
            name: "mustache",
            img: mustache,
            rarity_no: "240",
            rarity: "240",
          },
          {
            name: "beard",
            img: beard,
            rarity_no: "170",
            rarity: "1,683",
          },
          {
            name: "send love",
            img: sendLove,
            rarity_no: "151",
            rarity: "1,495",
          },
          {
            name: "party horn",
            img: partyHorn,
            rarity_no: "124",
            rarity: "1,228",
          },
          {
            name: "red bandana",
            img: redBandana,
            rarity_no: "84",
            rarity: "0,832",
          },
          {
            name: "blue bandana",
            img: blueBandana,
            rarity_no: "84",
            rarity: "0,832",
          },
          {
            name: "cuban cigar",
            img: cubanCigar,
            rarity_no: "55",
            rarity: "0,545",
          },
          {
            name: "vampire teeth",
            img: vampireTeeth,
            rarity_no: "36",
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
            rarity_no: "2.009",
            rarity: "19,889",
          },
          {
            name: "brown",
            img: brownFace,
            rarity_no: "2.007",
            rarity: "19,869",
          },
          {
            name: "blue",
            img: blueFace,
            rarity_no: "2.007",
            rarity: "19,869",
          },
          {
            name: "green",
            img: greenFace,
            rarity_no: "2.007",
            rarity: "19,869",
          },
          {
            name: "sunglasses",
            img: sunglasses,
            rarity_no: "400",
            rarity: "3,960",
          },
          {
            name: "nerd viper",
            img: nerdViper,
            rarity_no: "326",
            rarity: "3,227",
          },
          {
            name: "solana viper",
            img: solanaViper,
            rarity_no: "300",
            rarity: "2,970",
          },
          {
            name: "freckles",
            img: freckles,
            rarity_no: "289",
            rarity: "2,861",
          },
          {
            name: "exhausted",
            img: exhausted,
            rarity_no: "233",
            rarity: "2,307",
          },
          {
            name: "nerd glasses",
            img: nerdGlasses,
            rarity_no: "152",
            rarity: "1,505",
          },
          {
            name: "future",
            img: future,
            rarity_no: "111",
            rarity: "1,099",
          },
          {
            name: "psycho",
            img: psycho,
            rarity_no: "90",
            rarity: "0,891",
          },
          {
            name: "diamond",
            img: diamondFace,
            rarity_no: "78",
            rarity: "0,772",
          },
          {
            name: "laser",
            img: laserFace,
            rarity_no: "50",
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
            rarity_no: "1.569",
            rarity: "15,533",
          },
          {
            name: "black beanie",
            img: blackBeanie,
            rarity_no: "1.567",
            rarity: "15,513",
          },
          {
            name: "orange beanie",
            img: orangeBeanie,
            rarity_no: "1.567",
            rarity: "15,513",
          },
          {
            name: "beige beanie",
            img: beigeBeanie,
            rarity_no: "1.567",
            rarity: "15,513",
          },
          {
            name: "snap back",
            img: snapback,
            rarity_no: "1.567",
            rarity: "15,513",
          },
          {
            name: "flat cap",
            img: flatCap,
            rarity_no: "1.567",
            rarity: "15,513",
          },
          {
            name: "headset",
            img: headset,
            rarity_no: "150",
            rarity: "1,485",
          },
          {
            name: "solana headband",
            img: solanaHeadband,
            rarity_no: "120",
            rarity: "1,188",
          },
          {
            name: "quit crypto hat",
            img: cryptoHat,
            rarity_no: "101",
            rarity: "1,000",
          },
          {
            name: "devil horns",
            img: devilHorns,
            rarity_no: "66",
            rarity: "0,653",
          },
          {
            name: "bowl cut",
            img: bowlCut,
            rarity_no: "63",
            rarity: "0,624",
          },
          {
            name: "crown",
            img: crown,
            rarity_no: "50",
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
            rarity_no: "16",
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
            rarity_no: "426",
            rarity: "4,217",
          },
          {
            name: "cash",
            img: cash,
            rarity_no: "308",
            rarity: "3,049",
          },
          {
            name: "solana chain",
            img: solanaChain,
            rarity_no: "182",
            rarity: "1,802",
          },
          {
            name: "blue lightsaber",
            img: blueLightSaber,
            rarity_no: "61",
            rarity: "0,604",
          },
          {
            name: "red lightsaber",
            img: redLightSaber,
            rarity_no: "61",
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
