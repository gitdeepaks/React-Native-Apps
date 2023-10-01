// import {Text, View} from 'react-native';

import Appwrite from './service';
import React, {FC, PropsWithChildren, createContext, useState} from 'react';

type AppContextType = {
  appwrite: Appwrite;
  isLogged: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContextType>({
  appwrite: new Appwrite(),
  isLogged: false,
  setIsLoggedIn: () => {},
});

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultValues = {
    appwrite: new Appwrite(),
    isLogged: isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppwriteContext.Provider value={defaultValues}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteContext;
