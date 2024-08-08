import { useEffect, useState } from 'react';
// const useCheckInternet = () => {
//   return fetch("https://www.example.com")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Not connected to the internet");
//       }
//       return true;
//     })
//     .catch((error) => {
//       console.error("Error checking internet connection:", error);
//       return false;
//     });
// };

const useCheckInternet = () => {
  const [onlineStatus, setOnlineStatus] = useState('green');
  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus('red');
    });

    window.addEventListener('online', () => {
      setOnlineStatus('green');
    });
  }, []);

  return onlineStatus;
};
export default useCheckInternet;
