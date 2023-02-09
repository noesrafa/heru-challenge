import { useEffect, useState } from "react";

const api_url: string = "http://api.giphy.com/v1/gifs/";
const api_key: string = "GdHnCi2zey9Ye9JGmQcS5bNdXZiQREnR";
const api_limit: number = 24;

const randomWords = ["cat", "coding", "ryan gos", "money", "fire"];

export const useGifs = (search: string) => {
  const [gifs, setGifs] = useState<any[]>([]);

  useEffect(() => {
    const fetchGifs = async () =>
      // --- Si el input esta vacío hace una busqueda random --- //
      await fetch(
        api_url +
          `search?q=${
            search.length > 1
              ? search
              : randomWords[Math.floor(Math.random() * randomWords.length)]
          }&api_key=${api_key}&limit=${api_limit}`
      )
        .then((response) => response.json())
        .then((response) => setGifs(response.data));
    fetchGifs();
  }, [search]);

  return gifs;
};

interface Details {
  [key: string]: any;
}

export const useGifById = (id: string) => {
  const [details, setDetails] = useState<Details | undefined>({});

  useEffect(() => {
    const fetchDetails = async () =>
      await fetch(api_url + `${id}?api_key=${api_key}`)
        .then((response) => response.json())
        .then((response) => setDetails(response.data))
        .catch((error) => {
          setDetails({});
          console.log(error);
        });
    fetchDetails();
  }, [id]);

  return details;
};
