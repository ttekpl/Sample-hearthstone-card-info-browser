import React from "react";

const Wrap = ({ data }) => {
  return (
    <>
      <h1>Overview</h1>
      <div className="content">
        {data.err && data.species ? null : (
          <>
            <img src={data.img} alt="" />
            <h2>{data.name}</h2>
            <h2>{data.origin}</h2>
            <h2>{data.species}</h2>
            <h2>{data.status}</h2>
          </>
        )}
        {data.err && data.dimesnsion ? null : (
          <>
            <h2>{data.name}</h2>
            <h2>{data.type}</h2>
            <h2>{data.dimesnsion}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default Wrap;
