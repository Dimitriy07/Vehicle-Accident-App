import { useEffect } from "react";

import { useLogicState } from "../../context/LogicStateContext";
import { useTranslation } from "react-i18next";

function CallManager() {
  const { setIsCallManagerDone } = useLogicState();
  const { t } = useTranslation();

  useEffect(() => {
    setIsCallManagerDone(true);
  }, [setIsCallManagerDone]);

  return <h1 style={{ fontSize: "3rem" }}>{t("callManager.callManager")}</h1>;
}

export default CallManager;
