import { useState } from "react";
import { useEffect } from "react";
const InfiniteScrolling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async (lat, lng, page) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add other headers as needed
            Authorization: "Bearer your_access_token", // Example of an authorization header
          },
          body: JSON.stringify({ lat, lng, page }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newData = await response.json();
      setPage(page + 1);
      console.log(newData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData(12.9715987, 77.5945627, 1);
  }, []);

  return <div></div>;
};
export default InfiniteScrolling;
