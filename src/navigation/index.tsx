import React, { useState } from 'react';
import { AppNavigation } from './AppNavigation';
import { AuthNavigation } from './AuthNavigation';

export const Navigation: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(true);
  return authenticated ? <AppNavigation /> : <AuthNavigation />
}
