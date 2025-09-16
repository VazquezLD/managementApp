import { useState, createContext, useContext } from "react";

const ToggleContext = createContext();

export function ToggleProvider({children}){
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(prev => !prev)
    const openForm = () => setOpen(true)
    const closeForm = () => setOpen(false)

    return(
        <ToggleContext.Provider value={{open, toggle, openForm, closeForm}}>
            {children}
        </ToggleContext.Provider>
    )
}

export function useToggle(){
    return useContext(ToggleContext)
}
