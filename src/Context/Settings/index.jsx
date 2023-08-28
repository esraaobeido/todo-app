import React from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {
  const state = {
    items:5,
    completed:false,
    difficulty:'difficulty'
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}