import React, { createContext, ReactNode, useContext, useState } from 'react';


interface DialogContextType {
    showMenu: boolean,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: DialogContextType = {
    showMenu: false,
    setShowMenu: () => { },
};

const DialogContext = createContext<DialogContextType>(defaultContext);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <DialogContext.Provider value={{
            showMenu,
            setShowMenu,

        }}>
            {children}
        </DialogContext.Provider>
    );
};

export const useDialogContext = () => useContext(DialogContext);
