import tilt from "tilt.js";

const initTilt = () => {
  // Projects images
  $(".project-wrapper__image a div").tilt({
    maxTilt: 10
  });
};

export default initTilt;
