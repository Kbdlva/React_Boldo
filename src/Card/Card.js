import "./Card.css";

function Card(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.alt} />
      <p>{props.featureName} feature </p>

      <p>Explore page <i className="fa fa-arrow-right"></i></p>

    </div>
  );
}
export default Card;

