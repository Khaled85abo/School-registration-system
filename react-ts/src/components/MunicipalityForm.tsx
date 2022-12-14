import { Wrapper } from "./StyledComponents";
import sweden from "../assets/svg/sweden.svg";
import { useEffect, useState } from "react";
const MunicipalityForm = () => {
  const [svgHeight, setSvgHeight] = useState(window.innerHeight);
  const setInnerHeight = () => {
    setSvgHeight(window.innerHeight);
    console.log("inner Height: ", svgHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setInnerHeight);

    return () => window.removeEventListener("resize", setInnerHeight);
  }, []);
  return (
    <>
      <Wrapper>
        <h2>World</h2>
        <img src={sweden} alt="" height={svgHeight / 1.5} />
      </Wrapper>
    </>
  );
};

export default MunicipalityForm;
