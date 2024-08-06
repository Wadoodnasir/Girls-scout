const Card = (props) => {
  return (
    <div className='cards-container'>
      <div className='card' style={{ backgroundColor: props.color }}>
        <div className='card1'>
          <div>
            <h3 className='card-heading'>{props.heading}</h3>
            <img src={props.src} alt='Sorry' width={358} />
            <p className='card-detail'>{props.detail}</p>
            <button
              className='card-button'
              style={{ backgroundColor: props.btncolor }}
            >
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
