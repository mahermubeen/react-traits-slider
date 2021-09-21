import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./CardTypeMainTweetDarkModeFalseYourT.css";

function CardTypeMainTweetDarkModeFalseYourT(props) {
  const {
    image,
    ayabaOnileIreI25,
    star1,
    vector12,
    ayabaoniile_I2598,
    fiMoreHorizontal,
    itWasPopularisedI,
    x345PmApril120,
    vector15,
    x759KI2598168220,
    text22,
    x759KI25981682202,
    retweetsI25981682,
    x759KI25981682203,
    retweetsI259816822,
    vector16,
    union,
    rtLine,
    heartSolid,
    send,
    vector17,
  } = props;

  useEffect(() => {
    loadTimelineData(x25981TimelineData);
  }, []);

  return (
    <a href="https://twitter.com/SBF_FTX/status/1347964322459262977" target="_blank">
      <div className="x25981 animate-enter11 component component-wrapper not-ready" show-on-scroll>
        <div className="name-handle-photo-more-icon-Zm96jL">
          <div className="name-handle-and-photo-BIMuy0">
            <img className="image-BIw79Y" src={image} />
            <div className="name-and-handle-BIw79Y">
              <div className="name-and-verified-tick-EbsOwD">
                <div className="ayaba-onile-ire-i25-2GUCD9">{ayabaOnileIreI25}</div>
                <div className="fdrame-2GUCD9">
                  <img className="star-1-KVZ7Ct" src={star1} />
                  <img className="vector-12-KVZ7Ct" src={vector12} />
                </div>
              </div>
              <div className="ayabaoniile-i2598-EbsOwD">{ayabaoniile_I2598}</div>
            </div>
          </div>
          <img className="fimore-horizontal-BIMuy0" src={fiMoreHorizontal} />
        </div>
        <div className="it-was-popularised-i-Zm96jL">{itWasPopularisedI}</div>
        <div className="x345-pm-april-1-20-Zm96jL">{x345PmApril120}</div>
        <div className="engagement-counter-Zm96jL">
          <img className="vector-15-mR8adX" src={vector15} />
          <div className="engagement-counter-mR8adX">
            <div className="engagement-tag-rXWOP7">
              <div className="x759-k-i2598168220-CTete0">{x759KI2598168220}</div>
              <div className="text-22-CTete0">{text22}</div>
            </div>
            <div className="engagement-tag-VzFPvf">
              <div className="x759-k-i2598168220-rfnaZb">{x759KI25981682202}</div>
              <div className="retweets-i25981682-rfnaZb">{retweetsI25981682}</div>
            </div>
            <div className="engagement-tag-3nciY2">
              <div className="x759-k-i2598168220-75TxN8">{x759KI25981682203}</div>
              <div className="retweets-i25981682-75TxN8">{retweetsI259816822}</div>
            </div>
          </div>
          <img className="vector-16-mR8adX" src={vector16} />
          <div className="frame-13-mR8adX">
            <div className="comment-waTgjT">
              <img className="union-4ZLTfg" src={union} />
            </div>
            <img className="rt-line-waTgjT" src={rtLine} />
            <img className="heart-solid-waTgjT" src={heartSolid} />
            <img className="send-waTgjT" src={send} />
          </div>
          <img className="vector-17-mR8adX" src={vector17} />
        </div>
      </div>
    </a>
  );
}

const x25981TimelineData = [
  {
    initial_state_name: "Card-Type=Main-Tweet-Dark-mode=False-Your-Tweet=False",
    root_element: ".x25981",
    states_flow: {
      "Card-Type=Main-Tweet-Dark-mode=False-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-Dark-mode=False-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-Dark-mode=True-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-Dark-mode=True-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-w/-reply-Dark-mode=False-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-w/-reply-Dark-mode=False-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-w/-reply-Dark-mode=True-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Main-Tweet-w/-reply-Dark-mode=True-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Tweet-w/-media-&-reply-Dark-mode=False-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Tweet-w/-media-&-reply-Dark-mode=False-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Tweet-w/-media-&-reply-Dark-mode=True-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Tweet-w/-media-&-reply-Dark-mode=True-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Tweet-w/-media-Dark-mode=False-Your-Tweet=False": {
        listeners: [],
        overrides: {},
      },
      "Card-Type=Tweet-w/-media-Dark-mode=False-Your-Tweet=True": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default CardTypeMainTweetDarkModeFalseYourT;
