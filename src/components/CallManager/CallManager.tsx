import { useEffect } from "react";
import { useFormContext } from "../../context/FormContext";

function CallManager() {
  const { setCallManager } = useFormContext();

  useEffect(() => {
    setCallManager(true);
  }, [setCallManager]);

  return <h1 style={{ fontSize: "3rem" }}>Call Manager</h1>;
}

export default CallManager;
