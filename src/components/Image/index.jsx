import React from "react";

const Image = ({ source, description, width, ...rest }) => {
  return (
    <div className="w-full">
      <img
        {...rest}
        src={source}
        alt={description}
        style={{
          maxWidth: width ?? "",
        }}
      />
    </div>
  );
};

export default Image;
