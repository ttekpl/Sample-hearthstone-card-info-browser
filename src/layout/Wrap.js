import React from "react";

const Wrap = ({ data }) => {
  return (
    <>
      <h1>work</h1>
      <div className="content">
        {data.err ? null : (
          <>
            <img src={data.img} alt="" />
            <h2>{data.name}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default Wrap;
