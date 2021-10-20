import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
    const [status,setStatus]= useState('Online')
    useEffect(()=>{
       window.addEventListener('offline',()=>setStatus('Offline')) 
       window.addEventListener('online',()=>setStatus('Online')) 
    },[])
  return <div class="status">
      {status}
      </div>;
};

export default ConnectionStatus;
