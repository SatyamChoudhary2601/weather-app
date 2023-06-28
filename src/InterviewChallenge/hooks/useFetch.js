import axios from "axios";
import { useEffect, useState } from "react";
import { environment } from "../environment";

const useFetch = (url, searchText) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getWeatherData = async () => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const res = await axios.get(
        `${url}?key=${environment.API_KEY}&q=${searchText}`
      );
      setData(res.data);
    } catch (error) {
      setError(error.response);
    }
    setLoading(false);
  };
  useEffect(() => {
    searchText !== "" && getWeatherData();
  }, [url, searchText]);
  return {
    data,
    loading,
    error
  };
};

export default useFetch;
