import React, { createContext, useContext, useState } from "react";

interface ItemSelectionContextType<T> {
  items: T[];
  selectedItemId: number | null;
  setItems: (newItems: T[]) => void;
  selectItem: (id: number) => void;
  getSelectedItem: () => T | undefined;
}

export function createItemSelectionContext<T extends { id: number }>(
  initialItems: T[]
) {
  //prettier-ignore
  const ItemSelectionContext = createContext<ItemSelectionContextType<T> | null>(null);

  function ItemSelectionProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<T[]>(initialItems);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const selectItem = (id: number) => setSelectedItemId(id);
    const getSelectedItem = () =>
      items.find((item) => item.id === selectedItemId);
    return (
      <ItemSelectionContext.Provider
        value={{ items, selectedItemId, setItems, selectItem, getSelectedItem }}
      >
        {children}
      </ItemSelectionContext.Provider>
    );
  }

  function useItemSelection() {
    const context = useContext(ItemSelectionContext);
    if (!context) throw new Error("Use context inside ItemSelection Context");
    return context;
  }
  return { ItemSelectionProvider, useItemSelection };
}
