import RectArea from "./RectArea";
import React, { useState } from "react";
import {
  defaultHeaderText,
  defaultTitleText,
  defaultContentText,
} from "./Default";
const App = () => {
  const [headerTextUp, setHeaderTextUp] = useState(defaultHeaderText);
  const [titleTextUp, setTitleTextUp] = useState(defaultTitleText); //state
  const [contentTextUp, setContentTextUp] = useState(defaultContentText);

  const [headerTextDown, setHeaderTextDown] = useState(defaultHeaderText);
  const [titleTextDown, setTitleTextDown] = useState(defaultTitleText);
  const [contentTextDown, setContentTextDown] = useState(defaultContentText);

  const sendFunc = () => {
    setHeaderTextDown(headerTextUp);
    setTitleTextDown(titleTextUp);
    setContentTextDown(contentTextUp);
    setHeaderTextUp(defaultHeaderText);
    setTitleTextUp(defaultTitleText);
    setContentTextUp(defaultContentText);
  };

  return (
    <>
      <RectArea
        headerText={headerTextUp}
        setHeaderText={setHeaderTextUp}
        titleText={titleTextUp}
        setTitleText={setTitleTextUp}
        contentText={contentTextUp}
        setContentText={setContentTextUp}
        readonly={false}
        onSendMethod={sendFunc}
      />
      <div
        style={{ height: "10px", backgroundColor: "#c4c4c4" }}
        className="border"
      />
      <RectArea
        headerText={headerTextDown}
        titleText={titleTextDown}
        contentText={contentTextDown}
        readonly={true}
      />
    </>
  );
};

export default App;
