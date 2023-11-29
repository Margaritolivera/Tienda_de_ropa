import './Card.css';

function card(props) {
  const { image, text2, text } = props;

  return ( 
    <div className="card-container">
      <img src={image} alt="icon" className="card-image" />
      <p className="card-text">{text}</p>
      <h1>{text2}</h1>
    </div>
  );
}

export default card;
