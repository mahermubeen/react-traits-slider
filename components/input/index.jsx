import React, { createRef, useState, useEffect } from "react";
// import { FaCheck, FaChevronDown, FaMinus } from "react-icons/fa";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  FilterAttr,
  setAttrPropsInput,
  setAttrInitState,
  setAttrProps,
  setLastnActiveIndex,
} from "../../redux/reducers/general";

import "./input.css";

const Input = ({
  type,
  options,
  value,
  onChange,
  className,
  icon,
  arrowDown,
  state,
  attrs,
  ...others
}) => {
  const dispatch = useDispatch();

  //constants
  const arr = [];
  const opts = options.map(({ name }) => arr.push(name));
  const initValue = arr[0];

  // States
  const [val, setVal] = useState(type == "dropdown" ? arr[0] : value);
  const [isFetching, setIsFetching] = useState(false);

  //lifecycle
  useEffect(() => {
    setIsFetching(true);

    if (isFetching) {
      // console.log("attrs in input component", attrs);
      dispatch(setAttrPropsInput(attrs));
    }
  }, [isFetching, attrs]);

  // For dropdown
  const itemHeight = 48;
  const bufferFromViewPort = 30;
  const menuRef = createRef();
  const buttonRef = createRef();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offSet, setOffSet] = useState(-(options.length * itemHeight));

  const handleDropdownMenuClick = () => {
    const viewportHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const menuHeight = menuRef.current.getBoundingClientRect().height;
    const menuYposition = menuRef.current.getBoundingClientRect().y;
    const buttonYposition = buttonRef.current.getBoundingClientRect().y;
    const maxHeight = viewportHeight - bufferFromViewPort;
    const tempOffset = selectedIndex * itemHeight;

    if (buttonYposition + menuHeight - tempOffset > maxHeight) {
      // Check if position is exceeds
      setOffSet(maxHeight - buttonYposition - menuHeight);
    } else {
      setOffSet("-" + tempOffset);
    }

    setShowMenu(!showMenu);
  };

  switch (type) {
    case "text":
      return (
        <div className={`input ${className}`}>
          <input
            type="text"
            {...others}
            onChange={(val) => setVal(val.target.value)}
          />
        </div>
      );

    case "dropdown":
      const handleClickOutside = (event) => {
        setShowMenu(false);
      };
      return (
        <div
          ref={buttonRef}
          className={`dropdown-input ${className}`}
          onClick={() => handleDropdownMenuClick()}
        >
          <input value={val ? val : arr[0]} type="hidden" />

          <div className={`dropdown-selected`}>
            <span>
              {val
                ? val.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
                : initValue &&
                  initValue.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
            </span>
            <img className="arrow-down-svgrepo-com-1-hxiiGb" src={arrowDown} />
          </div>

          <ul className={showMenu ? "show" : "hide"} ref={menuRef}>
            {arr.map((n, i) => (
              <li
                key={i}
                value={n}
                className={selectedIndex == i ? "active" : ""}
                onClick={() => {
                  setVal(n);
                  setSelectedIndex(i);
                  dispatch(FilterAttr(n));
                }}
              >
                {n}
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return (
        <div className="dropdown-inpt">
          <input
            type={type}
            {...others}
            onChange={(val) => setVal(val.target.value)}
          />
        </div>
      );
  }
};

Input.defaultProps = {
  type: "text",
};

export default Input;
