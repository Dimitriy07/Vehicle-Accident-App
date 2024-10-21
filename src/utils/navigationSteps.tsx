export interface NavigationHandlers {
  setStepsScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setTpDetailsForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPictureDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

// Utility function to handle navigation
export const handleBack = (navObj: NavigationHandlers) => {
  navObj.setStepsScreen(true);
  navObj.setTpDetailsForm(false);
  navObj.setPictureDetails(false);
};

export interface MainNavigationHandlers {
  setSteps: React.Dispatch<React.SetStateAction<boolean>>;
  setForms: React.Dispatch<React.SetStateAction<boolean>>;
  setMainScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function handleBackToMain(navObj: MainNavigationHandlers) {
  navObj.setForms(false);
  navObj.setSteps(false);
  navObj.setMainScreen(true);
}
