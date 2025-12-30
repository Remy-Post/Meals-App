// Custom hook for handling HTTP requests with loading and error states
import { useState, useEffect, useCallback } from "react";


// Sends an HTTP request and returns response data
async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error(resData.message || 'Request failed, something went wrong.');
    }

    return resData;
}

// Hook for managing HTTP requests with loading, error, and data states
export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // Resets data to initial value
    function clearData() {
        setData(initialData);
    }

  // Sends an HTTP request with the provided data
  const sendRequest = useCallback(
    async function sendRequest(data) {
    setIsLoading(true);
    try {
        const resData = await sendHttpRequest(url, {...config, body: data});
        setData(resData);
    } catch (error) {
        setError(error.message || 'Something went wrong.');
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if (config && (config.method === 'GET' || !config.method) || !config) {
        sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  }
}