import "./RectArea.css";
import { EditText, EditTextarea } from "react-edit-text";
import Aim from "./Aim.svg";
import React from "react";
const RectArea = ({
  headerText, //props
  titleText,
  contentText,
  imageSrc,
  readonly,
  setHeaderText,
  setTitleText,
  setContentText,
  onSendMethod,
}) => {
  
  return (
      <div className="container">
        <div className="tab">
          <div className="tab-header">
            <EditText
              style={{ width: "80px" }}
              value={headerText}
              onChange={setHeaderText}
              readonly={readonly}
            />
          </div>
          <div className="tab-layout">
            <div className="tab-title">
              <EditText
                style={{ width: "100%" }}
                value={titleText}
                onChange={setTitleText}
                readonly={readonly}
              />
            </div>
            <div className="tab-content">
              <EditTextarea
                style={{ width: "100%", height: "90%", resize: "none" }}
                value={contentText}
                onChange={setContentText}
                readonly={readonly}
              />
            </div>
            <div style={readonly ? { backgroundColor: "#d0cccc" }:{}} className="tab-image">
              {!readonly && <img src={Aim} alt=""/>}
            </div>
            <div className="tab-action">
              {!readonly && <button onClick={onSendMethod}>Send!</button>}
            </div>
          </div>
        </div>
      </div>
  );
};

export default RectArea;
