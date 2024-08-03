import { useEffect, useState } from "react";
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
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
export default useCheckInternet;
