import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppwriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';

//Routes
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export const Router = () => {
  const [IsLoading, setIsLoading] = useState<boolean>(true);
  const {appwrite, isLogged, setIsLoggedIn} = useContext(AppwriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(res => {
        setIsLoading(false);
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);

  if (IsLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLogged ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
