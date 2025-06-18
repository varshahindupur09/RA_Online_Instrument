// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useConsent } from '../pages/ConsentContext';

const ProtectedRoute = ({ children, requiredStep }) => {
  const { consent, currentStep } = useConsent();

  const canAccess = () => {
    if (!consent || !currentStep) return false;
    return currentStep === requiredStep || currentStep === 'complete';
  };

  return canAccess() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;