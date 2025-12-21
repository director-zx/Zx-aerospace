import React from "react";
import ScrollVelocity from "../layouts/ScrollVelocity";
const AutoScroll = () => {
    const velocity = 100;
  return (
    <>
      <ScrollVelocity
        texts={["ZX AeroSpace * Manufacturing of Drone Propellers * ", "Precision * Indigenous * Carbon Fibre *" ]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
};

export default AutoScroll;
