import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("Online");
  useEffect(() => {
    window.addEventListener("offline", () => setStatus("Offline"));
    window.addEventListener("online", () => setStatus("Online"));
    return () => {
      window.removeEventListener("offline", () => setStatus("Offline"));
      window.removeEventListener("online", () => setStatus("Online"));
    };
  }, []);
  return (
    <div className={`status ${status === "Offline" ? "status_offline" : ""}`}>
      {status}
    </div>
  );
};

export default ConnectionStatus;
