import React, { createContext, useContext, useState } from "react";

type Coords = {
  lat: number;
  lng: number;
};

interface GeolocationContextType {
  position: Coords | null;
  error: string | null;
  date: Date | null;
  time: string | null;
  getPosition: () => void;
  getTimeDate: () => void;
}

const GeolocationContext = createContext<GeolocationContextType | null>(null);

function GeolocationProvider({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation) return setError("Doesn't support geolocation");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => {
        setError(err.message);
      }
    );
  }

  function getTimeDate() {
    const date = new Date();
    setDate(date);
    const hours = date.getHours();
    const min = date.getMinutes();
    setTime(`${hours}:${min}`);
  }

  return (
    <GeolocationContext.Provider
      value={{ position, error, date, time, getPosition, getTimeDate }}
    >
      {children}
    </GeolocationContext.Provider>
  );
}

function useGeolocation() {
  const context = useContext(GeolocationContext);
  if (!context)
    throw new Error("useGeolocation must be used within a GeolocationProvider");
  return context;
}

export { GeolocationProvider, useGeolocation };
