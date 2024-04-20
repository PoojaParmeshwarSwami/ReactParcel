
const RestaurantCard = (props) => {

    const { resData } = props
  
  const {name,}=resData.info
  
    return (
      
      
      <div className="res-card">
        <div className='food-log'>
          <img className='fLogo'src={resData.info.o2FeaturedImage.url} />
        </div>
        <h3>RestName:-{name}</h3><br />
        <h4>AggregateRating:-{resData.info.rating.aggregate_rating}</h4><br/>
        <h4>locality:-{resData.info.locality.name}</h4><br/>
  
         {<h4>cuisine:-{resData.cuisine}</h4>}
        
       
      </div>
    );
  };

  export default RestaurantCard;