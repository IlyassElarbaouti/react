import React, { useEffect, useState } from 'react'

const Dimension = () => {
    const [dimensions,Setdimensions]=useState({
        width:null,
        height:null,
    })
    useEffect(() => {
      const { innerWidth, innerHeight } = window;
      Setdimensions({
        width: innerWidth,
        height: innerHeight,
      });
      const handleResize=e=>{
          const {innerHeight,innerWidth} = e.target
          Setdimensions({
            width: innerWidth,
            height: innerHeight,
          });
      }
      window.addEventListener("resize", handleResize);
      return(
          window.removeEventListener("resize", handleResize)
      )
      
    }, []);

    const {width,height}=dimensions;
    return <div class="dimensions">{`${width}px - ${height}px`}</div>;
}

export default Dimension
