import React, { useState, useEffect } from 'react';
import { fetchExhibtionDetails } from 'components/ExhibitorDashboard/service';

export const ExhibitionContext = React.createContext();

export const ExhibitionProvider = ({ children }) => {
  const [exhibitionDetails, setExhibitionDetails] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetchExhibtionDetails();
      const result = await response.json();
      switch (response.status) {
        case 404:
          console.error(result);
          break;
        case 200:
          setExhibitionDetails(result);
          break;
        default:
          break;
      }
    }
    fetchData();
  }, []);

  return (
    <ExhibitionContext.Provider value={{ exhibitionDetails }}>
      {children}
    </ExhibitionContext.Provider>
  );
};
