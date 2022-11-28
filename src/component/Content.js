import "./Content.css";

export default function Content({ data }) {
  console.log("Hih masak aku masuk sini");
  return (
    <div className="containerBig" >
      {data ? (
        <>
        <div className="image-container">
          <img src={data.MangaCover} alt={data.l} className="pict" />
        </div>
        <div className="desc-container">
          <div>
            <h3 id="title">{data.MangaTitle}</h3>
            <p id="title">{data.MangaSynopsis}</p>

          </div>

        </div>
        </>
            ) : (
                <p>Loading..Nih Detail.</p>
            )}
    </div>
  );
}