// ConsentContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the Context
const ConsentContext = createContext();

// Create a Provider Component
export const ConsentProvider = ({ children }) => {
    const [consent, setConsent] = useState();
    const [prolificId, setProlificId] = useState('');

    const value = {
        consent,
        setConsent,
        prolificId,
        setProlificId,
    };

    return (
        <ConsentContext.Provider value={value}>
            {children}
        </ConsentContext.Provider>
    );
};

// Create a custom hook to use the context
export const useConsent = () => useContext(ConsentContext);
