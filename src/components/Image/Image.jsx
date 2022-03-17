import { memo } from "react";

const Image = memo(({ url }) => {
  console.log("Image mounted");

  return <img src={url} alt="" />;
});

export default Image;
