import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  const get = useCallback((url) => {
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) throw Error("Could not fetch the data for that resource");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setError(null);
        setIsPending(false);
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") console.log("fetch aborted", err);
        else {
          //auto catching network/connection error
          setIsPending(false);
          setError(err.message);
        }
      });

    return { data, isPending, error };
  }, []);
  return { get };
};

export default useFetch;
