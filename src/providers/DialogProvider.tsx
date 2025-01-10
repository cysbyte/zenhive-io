import React, { createContext, ReactNode, useContext, useState } from 'react';


interface DialogContextType {
    showMenu: boolean,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showZenHiveMenu: boolean,
    setShowZenHiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showGetInTouchDialog: boolean,
    setShowGetInTouchDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: DialogContextType = {
    showMenu: false,
    setShowMenu: () => { },
    showZenHiveMenu: false,
    setShowZenHiveMenu: () => { },
    showGetInTouchDialog: false,
    setShowGetInTouchDialog: ()=> {},
};

const DialogContext = createContext<DialogContextType>(defaultContext);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showZenHiveMenu, setShowZenHiveMenu] = useState(false);
    const [showGetInTouchDialog, setShowGetInTouchDialog] = useState(false);

    return (
        <DialogContext.Provider value={{
            showMenu,
            setShowMenu,
            showZenHiveMenu,
            setShowZenHiveMenu,
            showGetInTouchDialog,
            setShowGetInTouchDialog,
        }}>
            {children}
        </DialogContext.Provider>
    );
};

export const useDialogContext = () => useContext(DialogContext);
