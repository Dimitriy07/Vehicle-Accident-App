import { useEffect } from "react";

import { useLogicState } from "../../context/LogicStateContext";

function CallManager() {
  const { setIsCallManagerDone } = useLogicState();

  useEffect(() => {
    setIsCallManagerDone(true);
  }, [setIsCallManagerDone]);

  return <h1 style={{ fontSize: "3rem" }}>Call Manager</h1>;
}

export default CallManager;
