import { useState, useEffect } from 'react';
function useApiCall(apiFunction, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiFunction(); // Gọi hàm API (apiFunction) ở đây
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunction]);

  return { data, loading, error };
}

export default useApiCall;
