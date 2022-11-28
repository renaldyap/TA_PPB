import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import Modal from "../component/Modal";
import "./Movie.css";
import { NavLink } from 'react-router-dom';
import axios from "axios";

export default function Movie(props) {
  const [data, setData] = useState();
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const { history } = props
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
        }
      } catch (err) {
        console.log(err);
        setisLoaded(true);
      }
    };
    if (!isLoaded) {
      fetchData();
    }
  });

  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 10;
  const comics = [
    {
      title: "Solo Leveling",
      id: 1,
      type_comic: "Action, Adventure, Super Power",
      img: "https://www.asurascans.com/wp-content/uploads/2021/03/Solo_Leveling_Title_Cover_-_Barak.jpg",
    },
    {
      title: "Nine Heavens Swordmaster",
      id: 2,
      type_comic: "Action, Adventure, Martial Arts",
      img: "https://flamescans.org/wp-content/uploads/2022/10/resource.jpg",
    },
    {
      title: "FFF-Class Trash Hero",
      id: 3,
      type_comic: "Adventure, Magic, Isekai",
      img: "https://luminousscans.com/wp-content/uploads/2021/06/FFF-Class-Trash-Hero-Cover-copy-1.jpg",
    },
    {
      title: "Omniscient Readers Viewpoint",
      id: 4,
      type_comic: "Action, Fantasy, Drama",
      img: "https://flamescans.org/wp-content/uploads/2021/01/ORV-COVER-2.png",
    },
    {
      title: "The Novels Extra (Remake)",
      id: 5,
      type_comic: "Action, Adventure, School Life",
      img: "https://www.asurascans.com/wp-content/uploads/2022/06/novelextraCover01.png",
    },
    {
      title: "Solo Max-Level Newbie",
      id: 6,
      type_comic: "Action, Adventure, Fantasy",
      img: "https://www.asurascans.com/wp-content/uploads/2021/07/solomaxlevelnewbie.jpg",
    },
    {
      title: "Worn and Torn Newbie",
      id: 7,
      type_comic: "Action, Adventure, Shounen",
      img: "https://www.asurascans.com/wp-content/uploads/2020/11/cover-worn.jpg",
    },
  ];

  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };

  /*  <p id="movies">All Manga</p>
      {data.data.series.map((item, index) => {
        <Fragment data={item} key={index}>
          <CardSmall
            title={item.MangaTitle}
            img={item.MangaCover}
            genre={item._type}
            onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>

        
})} */

  return (
    <>
      <p id="movies">Popular Manga</p>
      <div className="containerTop">
        {comics.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              type_comic={item.type_comic}
              onClick={() => alert("item id = " + item.id)}
            />
            {comics.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p id="movies">All Manga</p>
          <div className="card-container">
            {data.data.series.map((item, index) => {
              return (
                <Fragment>
                  <NavLink to={`/movie/${index}`}
                  onClick={() => history.push({pathname:`/movie/${index}`, data: index})}
                 >
                <CardSmall
                  data={item}
                  key={index}
                  
                />
                </NavLink>
                </Fragment>
              );
             
            })}
            
          </div>
          <Modal
            data={modalItem}
            isShow={modalShow}
            onCancel={() => setModalShow(false)}
          />
        </div>
      )}
    </>
  );
}
