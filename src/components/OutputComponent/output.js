import { useRef } from "react";
import DomToImage from "dom-to-image";

import bgImage from "../../assets/ruled1.png";
import classes from "./Output.module.css";

const OutputComponent = () => {
  const outputPage = useRef(null);

  const getImg = (e) => {
    e.preventDefault();
    DomToImage.toPng(outputPage.current)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        downloadURI(dataUrl, "testImage.png");
      })
      .catch((error) => {
        console.error("oops,something went wrong", error);
      });
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={`${classes.wrapper} col-8 mx-auto mt-4 p-2`}>
        <div ref={outputPage} className={`col-12 mx-auto px-0`}>
          <div className={`${classes.imgContainer} col-12 mx-auto px-0`}>
            <img src={bgImage} alt="bg-image" className="mx-auto px-0" />
          </div>
          <input
            type="text"
            className={classes.titleInput}
            placeholder="Welcome to your DocGen"
            // style={{
            //   fontSize: `${headValues.headSize}px`,
            //   paddingTop: `${headValues.headTop}px`,
            //   paddingLeft: `${headValues.headLeft}px`,
            //   fontFamily: `${headValues.headFont}`,
            // }}
          />
          <textarea
            name=""
            id=""
            className={classes.contentInput}
            placeholder="Paste your content here! You can type it too, but we know people."
            // style={{
            //   fontSize: `${bodyValues.bodySize}px`,
            //   paddingTop: `${bodyValues.bodyTop}px`,
            //   paddingLeft: `${bodyValues.bodyLeft}px`,
            //   lineHeight: `${bodyValues.bodyLine}rem`,
            //   fontFamily: `${bodyValues.bodyFont}`,
            // }}
          />
        </div>
      </div>
      <button
        onClick={getImg}
        style={{ position: "fixed", right: "0", bottom: "0" }}
      >
        Download Png
      </button>
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
