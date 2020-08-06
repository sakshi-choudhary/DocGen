import { useContext } from "react";

import bgImage from "../../assets/ruled1.png";
import classes from "./Output.module.css";
import { EditContext } from "../../context/editContext";

const OutputComponent = () => {
  const editContext = useContext(EditContext);

  return (
    <>
      <div className={`${classes.wrapper} col-8 mx-auto mt-4 p-2`}>
        <div id="outputPage" className={`col-12 mx-auto px-0`}>
          <div className={`${classes.imgContainer} col-12 mx-auto px-0`}>
            <img src={bgImage} alt="bg-image" className="mx-auto px-0" />
          </div>
          <input
            type="text"
            className={classes.titleInput}
            placeholder="Welcome to your DocGen"
            style={{
              fontSize: `${editContext.headValues.headSize}px`,
              paddingTop: `${editContext.headValues.headTop}px`,
              paddingLeft: `${editContext.headValues.headLeft}px`,
              fontFamily: `${editContext.headValues.headFont}`,
            }}
          />
          <textarea
            name=""
            id=""
            className={classes.contentInput}
            placeholder="Paste your content here! You can type it too, but we know people."
            style={{
              fontSize: `${editContext.bodyValues.bodySize}px`,
              paddingTop: `${editContext.bodyValues.bodyTop}px`,
              paddingLeft: `${editContext.bodyValues.bodyLeft}px`,
              lineHeight: `${editContext.bodyValues.bodyLine}rem`,
              fontFamily: `${editContext.bodyValues.bodyFont}`,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default OutputComponent;

{
  /* <input
  type="text"
  placeholder="Enter Title"
 
></input>
<textarea
  type="text"
  placeholder="Enter Content"
 
/> */
}
