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
        name: "face",
        description: "This is face category for the face of user.",
        attributes: [
          {
            name: "sunglasses",
            img: "https://toppng.com/uploads/preview/sunglasses-vector-gangster-cartoon-sunglasses-11563023582m2onhravmx.png",
            rarity_no: "400",
            rarity: "3,960",
          },
          {
            name: "nerd viper",
            img: "https://toppng.com/uploads/preview/the-night-falls-black-and-purple-pit-viper-sunglasses-sunglasses-11563034992xclldfrim1.png",
            rarity_no: "520",
            rarity: "3,227",
          },
          {
            name: "solana summer",
            img: "https://icon2.cleanpng.com/20180220/cbe/kisspng-goggles-sunglasses-vector-sunglasses-5a8cf29849f683.953114341519186584303.jpg",
            rarity_no: "60",
            rarity: "2,970",
          },
          {
            name: "black shades",
            img: "https://www.freeiconspng.com/thumbs/deal-with-it-glasses-png/deal-with-it-glasses-png-clip-art-3.png",
            rarity_no: "18",
            rarity: "2,231",
          },
        ],
      },
      {
        id: "2343",
        name: "skin",
        description: "This is skin category for the user skin.",
        attributes: [
          {
            name: "cyborg",
            img: "https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/61363b45e87edf415320f929/img/unbenannt-2-zeichenfla-che-1-1@2x.png",
            rarity_no: "1",
            rarity: "3,245",
          },
          {
            name: "zombie",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzo8xOYYCuXR7Haj5rfk_8eUUPFSszZYXjg&usqp=CAU",
            rarity_no: "1005",
            rarity: "2,542",
          },
          {
            name: "intersteller",
            img: "https://e7.pngegg.com/pngimages/587/764/png-clipart-q-version-of-the-interstellar-figures-us-man-american-comics-thumbnail.png",
            rarity_no: "600",
            rarity: "1,002",
          },
        ],
      },
      {
        id: "3234",
        name: "mouth",
        description: "This is mouth category for the mouth of user.",
        attributes: [
          {
            name: "smiley",
            img: "https://c.neh.tw/thumb/f/720/comdlpng6950199.jpg",
            rarity_no: "4",
            rarity: "2,222",
          },
          {
            name: "sad",
            img: "https://www.pngfind.com/pngs/m/6-66546_cartoon-lips-mouth-sad-mouth-clip-art-hd.png",
            rarity_no: "24",
            rarity: "456",
          },
          {
            name: "laugh",
            img: "https://p.kindpng.com/picc/s/2-21709_mouth-lip-tooth-illustration-smile-mouth-cartoon-hd.png",
            rarity_no: "160",
            rarity: "100",
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
