import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Content from "../component/Content";
import { useParams } from "react-router";

export default function Detail() {
  const [data, setData] = useState();
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://manga-scrapper.p.rapidapi.com/series/",
          {
            params: { provider: "flame" },
            headers: {
              "X-RapidAPI-Key":
                "78e0f59d42mshcce7793839230f2p11383ajsn2bf81f7ce0a1",
              "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setisLoaded(true);
          setIsLoading(false);
          localStorage.setItem("users1", JSON.stringify(response.data));
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        let collection = localStorage.getItem("users1");
        setData(JSON.parse(collection));
      }
    };
    if (!isLoaded) {
      fetchData();
    }
  }, [isLoaded, id]);
  return (
    <main>
      <p id="title">Overview</p>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="containerTop">
          <Fragment>
            <Content data={data.data.series[id]} />
          </Fragment>
        </div>
      )}
    </main>
  );
}
