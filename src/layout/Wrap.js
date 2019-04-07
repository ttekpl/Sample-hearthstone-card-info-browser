import React from "react";

const Wrap = ({ data }) => {
  return (
    <>
      <h1>Overview</h1>
      <div className="content">
        {data.err && data.species ? null : (
          <>
            <img src={data.img} alt="" />
            <h2>Card name: {data.name}</h2>
            <h2>Attack: {data.attack}</h2>
            <h2>Rarity{data.rarity}</h2>
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
