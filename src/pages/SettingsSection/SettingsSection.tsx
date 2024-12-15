import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

function SettingsPage() {
  const navigate = useNavigate();
  return (
    <div className="container-input__form">
      <LanguageSelector />
      <div className="btn-container">
        <Button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Back
        </Button>
        <div></div>
      </div>
    </div>
  );
}

export default SettingsPage;
