import "./CardBig.css";


export default function CardBig(props) {
   
  return (
    <div className="containerBig">
      <img src={props.img} alt="" className="posterBig"/>
      <div className="descriptionBig">
        <div>
          <p id="tile">{props.title}</p>
          <p id="type_comic">{props.type_comic}</p>
        </div>
      </div>
    </div>
  );
}
