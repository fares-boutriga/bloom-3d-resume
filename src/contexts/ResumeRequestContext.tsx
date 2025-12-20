import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResumeRequestContextType {
  isResumeRequest: boolean;
  setIsResumeRequest: (value: boolean) => void;
}

const ResumeRequestContext = createContext<ResumeRequestContextType | undefined>(undefined);

export const ResumeRequestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isResumeRequest, setIsResumeRequest] = useState(false);

  return (
    <ResumeRequestContext.Provider value={{ isResumeRequest, setIsResumeRequest }}>
      {children}
    </ResumeRequestContext.Provider>
  );
};

export const useResumeRequest = () => {
  const context = useContext(ResumeRequestContext);
  if (!context) {
    throw new Error('useResumeRequest must be used within a ResumeRequestProvider');
  }
  return context;
};
