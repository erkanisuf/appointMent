//useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError(false);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.

        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err, "Error useFetch");
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
