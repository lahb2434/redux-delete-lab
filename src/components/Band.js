import React from "react";

const Band = ({band, deleteBand}) => {
  return (
    <li>
      <text>{band.name}</text>
      <button onClick={() => deleteBand(band.id)}>DELETE</button>
    </li>
  )
}

export default Band;