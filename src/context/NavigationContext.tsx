import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type MyNavigationContextValue = [boolean, Dispatch<SetStateAction<boolean>>];

const defaultValue: MyNavigationContextValue = [false, () => {}];

const MyNavigationContext =
    createContext<MyNavigationContextValue>(defaultValue);

export const useMyNavigationContext = () => {
    const context = useContext(MyNavigationContext);

    if (context) return context;
    return [];
};

const NavigationContext = ({ children }: any) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <MyNavigationContext.Provider value={[isNavOpen, setIsNavOpen]}>
            {children}
        </MyNavigationContext.Provider>
    );
};

export default NavigationContext;
