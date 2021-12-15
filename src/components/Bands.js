import React from "react";
import Band from "./Band";

const Bands = ({bands, deleteBand}) => {

  const createBands = bands.map(band => <Band key={band.id} band={band} deleteBand={deleteBand} />)
  
  return (
    <ol>
      {createBands}
    </ol>
  )
}

export default Bands;