import React, { createContext, ReactNode, useContext, useState } from 'react';


interface DialogContextType {
    showMenu: boolean,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showZenHiveMenu: boolean,
    setShowZenHiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: DialogContextType = {
    showMenu: false,
    setShowMenu: () => { },
    showZenHiveMenu: false,
    setShowZenHiveMenu: () => { },
};

const DialogContext = createContext<DialogContextType>(defaultContext);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showZenHiveMenu, setShowZenHiveMenu] = useState(false);

    return (
        <DialogContext.Provider value={{
            showMenu,
            setShowMenu,
            showZenHiveMenu,
            setShowZenHiveMenu,
        }}>
            {children}
        </DialogContext.Provider>
    );
};

export const useDialogContext = () => useContext(DialogContext);
