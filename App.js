import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './src/Components/Header';
import Body from './src/components/Body';


const AppLayout = () => {
    return (
      <div className="App">
  
        <Header />
        <Body />
      </div>
  
    );
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);


// const RestaurantCard = (props)=>{
//   return(
//     <div className="res-card">
//       <div className='food-log'>
//         <img className='fLogo' src='https://tse1.mm.bing.net/th?id=OIP.qG94KlkEjkJpkN4VTcJNpgHaFS&pid=Api&P=0&h=180' />
//       </div>
//       <h3>{props.resName}</h3><br/>
//       <h4>{props.cuisins}</h4><br/>
//       <h4>{props.rating}</h4><br/>
//       <h4>{props.min}</h4>
//     </div>
//   );
// };

// const RestaurantCard = (props) => {

//   const { resData } = props
//   return (
    
    
//     <div className="res-card">
//       <div className='food-log'>
//         <img className='fLogo'src={resData.info.o2FeaturedImage.url} />
//       </div>
//       <h3>RestName:-{resData.info.name}</h3><br />
//       <h4>AggregateRating:-{resData.info.rating.aggregate_rating}</h4><br/>
//       <h4>locality:-{resData.info.locality.name}</h4><br/>
      
//       <h4>cuisine:-{resData.cuisine}</h4>
      
     
//     </div>
//   );
// };


//OR


// const RestaurantCard = (props) => {

//   const { resData } = props

// const {name,}=resData.info

//   return (
    
    
//     <div className="res-card">
//       <div className='food-log'>
//         <img className='fLogo'src={resData.info.o2FeaturedImage.url} />
//       </div>
//       <h3>RestName:-{name}</h3><br />
//       <h4>AggregateRating:-{resData.info.rating.aggregate_rating}</h4><br/>
//       <h4>locality:-{resData.info.locality.name}</h4><br/>

//        {<h4>cuisine:-{resData.cuisine}</h4>}
      
     
//     </div>
//   );
// };






// const resObj = {
//   "type": "restaurant",
//   "info": {
//     "resId": 18664124,
//     "name": "La Sicilia Bistro & Patisserie",
//     "image": {
//       "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/18664124\/24c0f5c70816a9ee6e6c4200efcad212_featured_v2.jpg",
//       "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/18664124\/24c0f5c70816a9ee6e6c4200efcad212_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//     },
//     "o2FeaturedImage": {
//       "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/18664124\/8d28f65d3dfb670f69c35273fc9a3e1a_o2_featured_v2.jpg"
//     },
//     "rating": {
//       "has_fake_reviews": 0,
//       "aggregate_rating": "4.2",
//       "rating_text": "4.2",
//       "rating_subtitle": "Very Good",
//       "rating_color": "5BA829",
//       "votes": "3,291",
//       "subtext": "REVIEWS",
//       "is_new": false
//     },
//     "ratingNew": {
//       "newlyOpenedObj": null,
//       "suspiciousReviewObj": null,
//       "ratings": {
//         "DINING": {
//           "rating_type": "DINING",
//           "rating": "4.3",
//           "reviewCount": "1,259",
//           "reviewTextSmall": "1,259 Reviews",
//           "subtext": "1,259 Dining Reviews",
//           "color": "#1C1C1C",
//           "ratingV2": "4.3",
//           "subtitle": "DINING",
//           "sideSubTitle": "Dining Ratings",
//           "bgColorV2": {
//             "type": "green",
//             "tint": "700"
//           },
//           "newOnDining": false
//         },
//         "DELIVERY": {
//           "rating_type": "DELIVERY",
//           "rating": "4.1",
//           "reviewCount": "2,032",
//           "reviewTextSmall": "2,032 Reviews",
//           "subtext": "2,032 Delivery Reviews",
//           "color": "#E23744",
//           "ratingV2": "4.1",
//           "subtitle": "DELIVERY",
//           "sideSubTitle": "Delivery Ratings",
//           "bgColorV2": {
//             "type": "green",
//             "tint": "700"
//           },
//           "newOnDelivery": false
//         }
//       }
//     },
//     "cft": {
//       "text": "\u20b91,400 for two"
//     },
//     "cfo": {
//       "text": "\u20b9350 for one"
//     },
//     "locality": {
//       "name": "Kothrud, Pune",
//       "address": "128\/2, Mayur Colony, Solaris Club, Kothrud, Pune",
//       "localityUrl": "pune\/kothrud-restaurants"
//     },
//     "timing": {
//       "text": "",
//       "color": ""
//     },
//     "cuisine": [
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
//         "name": "Continental"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
//         "name": "Italian"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
//         "name": "Salad"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
//         "name": "Sandwich"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/burger\/",
//         "name": "Burger"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
//         "name": "Desserts"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
//         "name": "Coffee"
//       },
//       {
//         "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
//         "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
//         "name": "Beverages"
//       }
//     ],
//     "should_ban_ugc": false,
//     "costText": {
//       "text": "\u20b91,400 for two"
//     }
//   },
//   "order": [],
//   "gold": {
//     "instant": 15,
//     "welcome_offer": false,
//     "gold_offer": true,
//     "text": "Flat",
//     "offerValue": "15% OFF",
//     "isGoldIcon": true
//   },
//   "takeaway": [],
//   "cardAction": {
//     "text": "",
//     "clickUrl": "\/pune\/la-sicilia-bistro-patisserie-kothrud\/info",
//     "clickActionDeeplink": ""
//   },
//   "distance": "3.5 km",
//   "isPromoted": true,
//   "promotedText": "Promoted",
//   "trackingData": [
//     {
//       "table_name": "jadtracking",
//       "payload": "{\"banner_id\":\"3730430\",\"bzone\":\"0\",\"campaign_id\":\"12624565\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18664124\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":14,\\\"boosted_rank\\\":10,\\\"subzone_id\\\":3013,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.013980956972399662\\\",\\\"cost_per_unit\\\":\\\"18.88\\\",\\\"distance\\\":\\\"3.5191986560821533\\\",\\\"organic_ctr\\\":\\\"0.03904577979003147\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"146\\\"},\\\"search_id\\\":\\\"01e738b7-a062-4000-8eb0-6934ac34e8f2\\\",\\\"section_name\\\":\\\"featured\\\"}\",\"subzone_id\":\"3013\"}",
//       "event_names": {
//         "tap": "{\"action\":\"click\"}",
//         "impression": "{\"action\":\"impression\"}",
//         "served": "{\"action\":\"serve\"}"
//       }
//     },
//     {
//       "table_name": "zsearch_events_log",
//       "payload": "{\"search_id\":\"01e738b7-a062-4000-8eb0-6934ac34e8f2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215831454351360\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18664124\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
//       "event_names": {
//         "tap": "{\"action\":\"tap\"}",
//         "impression": "{\"action\":\"impression\"}"
//       }
//     }
//   ],
//   "allCTA": [
//     {
//       "type": "booking_cta",
//       "text": "Book a Table",
//       "clickUrl": "\/pune\/la-sicilia-bistro-patisserie-kothrud\/book"
//     }
//   ],
//   "promoOffer": "",
//   "checkBulkOffers": false,
//   "bulkOffers": [],
//   "isDisabled": false,
//   "bottomContainers": []
// }
// const secObj={
//   "type": "restaurant",
// "info": {
//     "resId": 20129141,
//     "name": "Wok Toss",
//     "image": {
//         "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20129141\/ca8ee4ffe41886cf03707027947f9d1f_featured_v2.jpg",
//         "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20129141\/ca8ee4ffe41886cf03707027947f9d1f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//     },
//     "o2FeaturedImage": {
//         "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20129141\/36161a90dcbcdd479ae5e2572ef84b5c_o2_featured_v2.jpg"
//     },
//     "rating": {
//         "has_fake_reviews": 0,
//         "aggregate_rating": "4.2",
//         "rating_text": "4.2",
//         "rating_subtitle": "Very Good",
//         "rating_color": "5BA829",
//         "votes": "200",
//         "subtext": "REVIEWS",
//         "is_new": false
//     },
//     "ratingNew": {
//         "newlyOpenedObj": null,
//         "suspiciousReviewObj": null,
//         "ratings": {
//             "DINING": {
//                 "rating_type": "DINING",
//                 "rating": "4.3",
//                 "reviewCount": "171",
//                 "reviewTextSmall": "171 Reviews",
//                 "subtext": "171 Dining Reviews",
//                 "color": "#1C1C1C",
//                 "ratingV2": "4.3",
//                 "subtitle": "DINING",
//                 "sideSubTitle": "Dining Ratings",
//                 "bgColorV2": {
//                     "type": "green",
//                     "tint": "700"
//                 },
//                 "newOnDining": false
//             },
//             "DELIVERY": {
//                 "rating_type": "DELIVERY",
//                 "rating": "4.0",
//                 "reviewCount": "29",
//                 "reviewTextSmall": "29 Reviews",
//                 "subtext": "29 Delivery Reviews",
//                 "color": "#E23744",
//                 "ratingV2": "4.0",
//                 "subtitle": "DELIVERY",
//                 "sideSubTitle": "Delivery Ratings",
//                 "bgColorV2": {
//                     "type": "green",
//                     "tint": "700"
//                 },
//                 "newOnDelivery": false
//             }
//         }
//     },
//     "cft": {
//         "text": "\u20b9700 for two"
//     },
//     "cfo": {
//         "text": "\u20b9500 for one"
//     },
//     "locality": {
//         "name": "Shivaji Nagar, Pune",
//         "address": "132, 2\/2A\/1, University Road, Shivaji Nagar, Pune",
//         "localityUrl": "pune\/shivaji-nagar-restaurants"
//     },
//     "timing": {
//         "text": "Closes in 13 minutes",
//         "color": "#ab000d"
//     },
//     "cuisine": [
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
//             "name": "Chinese"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/thai\/",
//             "name": "Thai"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sushi\/",
//             "name": "Sushi"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
//             "name": "Desserts"
//         }
//     ],
//     "should_ban_ugc": false,
//     "costText": {
//         "text": "\u20b9700 for two"
//     }
// },
// "order": [],
// "gold": {
//     "instant": 30,
//     "welcome_offer": false,
//     "gold_offer": true,
//     "text": "Flat",
//     "offerValue": "30% OFF",
//     "isGoldIcon": true
// },
// "takeaway": [],
// "cardAction": {
//     "text": "",
//     "clickUrl": "\/pune\/wok-toss-shivaji-nagar\/info",
//     "clickActionDeeplink": ""
// },
// "distance": "2.2 km",
// "isPromoted": true,
// "promotedText": "Promoted",
// "trackingData": [
//     {
//         "table_name": "jadtracking",
//         "payload": "{\"banner_id\":\"3662612\",\"bzone\":\"0\",\"campaign_id\":\"12556714\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20129141\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":73,\\\"boosted_rank\\\":10,\\\"subzone_id\\\":3013,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.010493477027793534\\\",\\\"cost_per_unit\\\":\\\"15.93\\\",\\\"distance\\\":\\\"2.1506447792053223\\\",\\\"organic_ctr\\\":\\\"0.02791507981524998\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"363\\\"},\\\"search_id\\\":\\\"c1224c9a-9f46-4e0b-8b4e-318f38649b6d\\\",\\\"section_name\\\":\\\"featured\\\"}\",\"subzone_id\":\"3013\"}",
//         "event_names": {
//             "tap": "{\"action\":\"click\"}",
//             "impression": "{\"action\":\"impression\"}",
//             "served": "{\"action\":\"serve\"}"
//         }
//     },
//     {
//         "table_name": "zsearch_events_log",
//         "payload": "{\"search_id\":\"c1224c9a-9f46-4e0b-8b4e-318f38649b6d\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215831454351360\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20129141\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
//         "event_names": {
//             "tap": "{\"action\":\"tap\"}",
//             "impression": "{\"action\":\"impression\"}"
//         }
//     }
// ],
// "allCTA": [
//     {
//         "type": "booking_cta",
//         "text": "Book a Table",
//         "clickUrl": "\/pune\/wok-toss-shivaji-nagar\/book"
//     }
// ],
// "promoOffer": "",
// "checkBulkOffers": false,
// "bulkOffers": [],
// "isDisabled": false,
// "bottomContainers": []
// }
// const ThirdObj=
// {
// "type": "restaurant",
// "info": {
//     "resId": 19860482,
//     "name": "High Garden",
//     "image": {
//         "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/19860482\/d91cf871907d964c80aff9117c0c65cc_featured_v2.jpg",
//         "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/19860482\/d91cf871907d964c80aff9117c0c65cc_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//     },
//     "o2FeaturedImage": {
//         "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/19860482\/7cab5ce1dac4b339bb7693121f93a0c4_o2_featured_v2.jpg"
//     },
//     "rating": {
//         "has_fake_reviews": 0,
//         "aggregate_rating": "4.0",
//         "rating_text": "4.0",
//         "rating_subtitle": "Very Good",
//         "rating_color": "5BA829",
//         "votes": "308",
//         "subtext": "REVIEWS",
//         "is_new": false
//     },
//     "ratingNew": {
//         "newlyOpenedObj": null,
//         "suspiciousReviewObj": null,
//         "ratings": {
//             "DINING": {
//                 "rating_type": "DINING",
//                 "rating": "4.3",
//                 "reviewCount": "261",
//                 "reviewTextSmall": "261 Reviews",
//                 "subtext": "261 Dining Reviews",
//                 "color": "#1C1C1C",
//                 "ratingV2": "4.3",
//                 "subtitle": "DINING",
//                 "sideSubTitle": "Dining Ratings",
//                 "bgColorV2": {
//                     "type": "green",
//                     "tint": "700"
//                 },
//                 "newOnDining": false
//             },
//             "DELIVERY": {
//                 "rating_type": "DELIVERY",
//                 "rating": "3.7",
//                 "reviewCount": "47",
//                 "reviewTextSmall": "47 Reviews",
//                 "subtext": "47 Delivery Reviews",
//                 "color": "#E23744",
//                 "ratingV2": "3.7",
//                 "subtitle": "DELIVERY",
//                 "sideSubTitle": "Delivery Ratings",
//                 "bgColorV2": {
//                     "type": "green",
//                     "tint": "600"
//                 },
//                 "newOnDelivery": false
//             }
//         }
//     },
//     "cft": {
//         "text": "\u20b91,400 for two"
//     },
//     "cfo": {
//         "text": "\u20b9500 for one"
//     },
//     "locality": {
//         "name": "Senapati Bapat Road, Pune",
//         "address": "8th Floor, Next Gen Avenue, Bahiratwadi, Near LCC Trade Tower, Senapati Bapat Road, Pune",
//         "localityUrl": "pune\/senapati-bapat-road-restaurants"
//     },
//     "timing": {
//         "text": "Closes in 43 minutes",
//         "color": "#e5521f"
//     },
//     "cuisine": [
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
//             "name": "North Indian"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
//             "name": "Chinese"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
//             "name": "Italian"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/biryani\/",
//             "name": "Biryani"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
//             "name": "Desserts"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
//             "name": "Bar Food"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/finger-food\/",
//             "name": "Finger Food"
//         },
//         {
//             "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
//             "url": "https:\/\/www.zomato.com\/pune\/restaurants\/kebab\/",
//             "name": "Kebab"
//         }
//     ],
//     "should_ban_ugc": false,
//     "costText": {
//         "text": "\u20b91,400 for two"
//     }
// },
// "order": [],
// "gold": {
//     "instant": 10,
//     "welcome_offer": false,
//     "gold_offer": true,
//     "text": "Flat",
//     "offerValue": "10% OFF",
//     "isGoldIcon": true
// },
// "takeaway": [],
// "cardAction": {
//     "text": "",
//     "clickUrl": "\/pune\/high-garden-1-senapati-bapat-road\/info",
//     "clickActionDeeplink": ""
// },
// "distance": "2.5 km",
// "isPromoted": true,
// "promotedText": "Promoted",
// "trackingData": [
//     {
//         "table_name": "jadtracking",
//         "payload": "{\"banner_id\":\"3830222\",\"bzone\":\"0\",\"campaign_id\":\"12724464\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19860482\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":74,\\\"boosted_rank\\\":11,\\\"subzone_id\\\":3013,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.011541381928625664\\\",\\\"cost_per_unit\\\":\\\"10.03\\\",\\\"distance\\\":\\\"2.481813907623291\\\",\\\"organic_ctr\\\":\\\"0.0324081556043881\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"299\\\"},\\\"search_id\\\":\\\"c1224c9a-9f46-4e0b-8b4e-318f38649b6d\\\",\\\"section_name\\\":\\\"more\\\"}\",\"subzone_id\":\"3013\"}",
//         "event_names": {
//             "tap": "{\"action\":\"click\"}",
//             "impression": "{\"action\":\"impression\"}",
//             "served": "{\"action\":\"serve\"}"
//         }
//     },
//     {
//         "table_name": "zsearch_events_log",
//         "payload": "{\"search_id\":\"c1224c9a-9f46-4e0b-8b4e-318f38649b6d\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215831454351360\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19860482\",\"element_type\":\"listing\",\"rank\":11,\"metadata\":{\"is_ad\":\"true\"}}",
//         "event_names": {
//             "tap": "{\"action\":\"tap\"}",
//             "impression": "{\"action\":\"impression\"}"
//         }
//     }
// ],
// "allCTA": [
//     {
//         "type": "booking_cta",
//         "text": "Book a Table",
//         "clickUrl": "\/pune\/high-garden-1-senapati-bapat-road\/book"
//     }
// ],
// "promoOffer": "",
// "checkBulkOffers": false,
// "bulkOffers": [],
// "isDisabled": false,
// "bottomContainers": []
// }
/*

const RestaurantCard = ({resName , cuisins,rating,min})=>{
  return(
    <div className="res-card">
      <div className='food-log'>
        <img className='fLogo' src='https://tse1.mm.bing.net/th?id=OIP.qG94KlkEjkJpkN4VTcJNpgHaFS&pid=Api&P=0&h=180' />
      </div>
      <h3>{resName}</h3><br/>
      <h4>{cuisins}</h4><br/>
      <h4>{rating}</h4><br/>
      <h4>{min}</h4>
    </div>
  );
};


*/


// const resList=[
//   {
//       "type": "restaurant",
//       "info": {
//           "resId": 20129141,
//           "name": "Wok Toss",
//           "image": {
//               "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20129141\/ca8ee4ffe41886cf03707027947f9d1f_featured_v2.jpg",
//               "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20129141\/ca8ee4ffe41886cf03707027947f9d1f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//           },
//           "o2FeaturedImage": {
//               "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20129141\/36161a90dcbcdd479ae5e2572ef84b5c_o2_featured_v2.jpg"
//           },
//           "rating": {
//               "has_fake_reviews": 0,
//               "aggregate_rating": "4.2",
//               "rating_text": "4.2",
//               "rating_subtitle": "Very Good",
//               "rating_color": "5BA829",
//               "votes": "200",
//               "subtext": "REVIEWS",
//               "is_new": false
//           },
//           "ratingNew": {
//               "newlyOpenedObj": null,
//               "suspiciousReviewObj": null,
//               "ratings": {
//                   "DINING": {
//                       "rating_type": "DINING",
//                       "rating": "4.3",
//                       "reviewCount": "171",
//                       "reviewTextSmall": "171 Reviews",
//                       "subtext": "171 Dining Reviews",
//                       "color": "#1C1C1C",
//                       "ratingV2": "4.3",
//                       "subtitle": "DINING",
//                       "sideSubTitle": "Dining Ratings",
//                       "bgColorV2": {
//                           "type": "green",
//                           "tint": "700"
//                       },
//                       "newOnDining": false
//                   },
//                   "DELIVERY": {
//                       "rating_type": "DELIVERY",
//                       "rating": "4.0",
//                       "reviewCount": "29",
//                       "reviewTextSmall": "29 Reviews",
//                       "subtext": "29 Delivery Reviews",
//                       "color": "#E23744",
//                       "ratingV2": "4.0",
//                       "subtitle": "DELIVERY",
//                       "sideSubTitle": "Delivery Ratings",
//                       "bgColorV2": {
//                           "type": "green",
//                           "tint": "700"
//                       },
//                       "newOnDelivery": false
//                   }
//               }
//           },
//           "cft": {
//               "text": "\u20b9700 for two"
//           },
//           "cfo": {
//               "text": "\u20b9500 for one"
//           },
//           "locality": {
//               "name": "Shivaji Nagar, Pune",
//               "address": "132, 2\/2A\/1, University Road, Shivaji Nagar, Pune",
//               "localityUrl": "pune\/shivaji-nagar-restaurants"
//           },
//           "timing": {
//               "text": "Opens tomorrow at 12:30pm",
//               "color": "#ab000d"
//           },
//           "cuisine": [
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
//                   "name": "Chinese"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/thai\/",
//                   "name": "Thai"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sushi\/",
//                   "name": "Sushi"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
//                   "name": "Desserts"
//               }
//           ],
//           "should_ban_ugc": false,
//           "costText": {
//               "text": "\u20b9700 for two"
//           }
//       },
//       "order": [],
//       "gold": {
//           "instant": 30,
//           "welcome_offer": false,
//           "gold_offer": true,
//           "text": "Flat",
//           "offerValue": "30% OFF",
//           "isGoldIcon": true
//       },
//       "takeaway": [],
//       "cardAction": {
//           "text": "",
//           "clickUrl": "\/pune\/wok-toss-shivaji-nagar\/info",
//           "clickActionDeeplink": ""
//       },
//       "distance": "2.2 km",
//       "isPromoted": true,
//       "promotedText": "Promoted",
//       "trackingData": [
//           {
//               "table_name": "jadtracking",
//               "payload": "{\"banner_id\":\"3662612\",\"bzone\":\"0\",\"campaign_id\":\"12556714\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20129141\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":72,\\\"boosted_rank\\\":10,\\\"subzone_id\\\":3013,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.010493477027793534\\\",\\\"cost_per_unit\\\":\\\"15.93\\\",\\\"distance\\\":\\\"2.1506447792053223\\\",\\\"organic_ctr\\\":\\\"0.02791507981524998\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"362\\\"},\\\"search_id\\\":\\\"41b34f6c-fa23-418f-b4c2-b623830450e0\\\",\\\"section_name\\\":\\\"featured\\\"}\",\"subzone_id\":\"3013\"}",
//               "event_names": {
//                   "tap": "{\"action\":\"click\"}",
//                   "impression": "{\"action\":\"impression\"}",
//                   "served": "{\"action\":\"serve\"}"
//               }
//           },
//           {
//               "table_name": "zsearch_events_log",
//               "payload": "{\"search_id\":\"41b34f6c-fa23-418f-b4c2-b623830450e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215831454351360\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20129141\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
//               "event_names": {
//                   "tap": "{\"action\":\"tap\"}",
//                   "impression": "{\"action\":\"impression\"}"
//               }
//           }
//       ],
//       "allCTA": [
//           {
//               "type": "booking_cta",
//               "text": "Book a Table",
//               "clickUrl": "\/pune\/wok-toss-shivaji-nagar\/book"
//           }
//       ],
//       "promoOffer": "",
//       "checkBulkOffers": false,
//       "bulkOffers": [],
//       "isDisabled": false,
//       "bottomContainers": []
//   },
//   {
//       "type": "restaurant",
//       "info": {
//           "resId": 19860482,
//           "name": "High Garden",
//           "image": {
//               "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/19860482\/d91cf871907d964c80aff9117c0c65cc_featured_v2.jpg",
//               "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/19860482\/d91cf871907d964c80aff9117c0c65cc_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//           },
//           "o2FeaturedImage": {
//               "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/19860482\/7cab5ce1dac4b339bb7693121f93a0c4_o2_featured_v2.jpg"
//           },
//           "rating": {
//               "has_fake_reviews": 0,
//               "aggregate_rating": "4.0",
//               "rating_text": "4.0",
//               "rating_subtitle": "Very Good",
//               "rating_color": "5BA829",
//               "votes": "308",
//               "subtext": "REVIEWS",
//               "is_new": false
//           },
//           "ratingNew": {
//               "newlyOpenedObj": null,
//               "suspiciousReviewObj": null,
//               "ratings": {
//                   "DINING": {
//                       "rating_type": "DINING",
//                       "rating": "4.3",
//                       "reviewCount": "261",
//                       "reviewTextSmall": "261 Reviews",
//                       "subtext": "261 Dining Reviews",
//                       "color": "#1C1C1C",
//                       "ratingV2": "4.3",
//                       "subtitle": "DINING",
//                       "sideSubTitle": "Dining Ratings",
//                       "bgColorV2": {
//                           "type": "green",
//                           "tint": "700"
//                       },
//                       "newOnDining": false
//                   },
//                   "DELIVERY": {
//                       "rating_type": "DELIVERY",
//                       "rating": "3.7",
//                       "reviewCount": "47",
//                       "reviewTextSmall": "47 Reviews",
//                       "subtext": "47 Delivery Reviews",
//                       "color": "#E23744",
//                       "ratingV2": "3.7",
//                       "subtitle": "DELIVERY",
//                       "sideSubTitle": "Delivery Ratings",
//                       "bgColorV2": {
//                           "type": "green",
//                           "tint": "600"
//                       },
//                       "newOnDelivery": false
//                   }
//               }
//           },
//           "cft": {
//               "text": "\u20b91,400 for two"
//           },
//           "cfo": {
//               "text": "\u20b9500 for one"
//           },
//           "locality": {
//               "name": "Senapati Bapat Road, Pune",
//               "address": "8th Floor, Next Gen Avenue, Bahiratwadi, Near LCC Trade Tower, Senapati Bapat Road, Pune",
//               "localityUrl": "pune\/senapati-bapat-road-restaurants"
//           },
//           "timing": {
//               "text": "Closes in 16 minutes",
//               "color": "#ab000d"
//           },
//           "cuisine": [
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
//                   "name": "North Indian"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
//                   "name": "Chinese"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
//                   "name": "Italian"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/biryani\/",
//                   "name": "Biryani"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
//                   "name": "Desserts"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
//                   "name": "Bar Food"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/finger-food\/",
//                   "name": "Finger Food"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/kebab\/",
//                   "name": "Kebab"
//               }
//           ],
//           "should_ban_ugc": false,
//           "costText": {
//               "text": "\u20b91,400 for two"
//           }
//       },
//       "order": [],
//       "gold": {
//           "instant": 10,
//           "welcome_offer": false,
//           "gold_offer": true,
//           "text": "Flat",
//           "offerValue": "10% OFF",
//           "isGoldIcon": true
//       },
//       "takeaway": [],
//       "cardAction": {
//           "text": "",
//           "clickUrl": "\/pune\/high-garden-1-senapati-bapat-road\/info",
//           "clickActionDeeplink": ""
//       },
//       "distance": "2.5 km",
//       "isPromoted": true,
//       "promotedText": "Promoted",
//       "trackingData": [
//           {
//               "table_name": "jadtracking",
//               "payload": "{\"banner_id\":\"3830222\",\"bzone\":\"0\",\"campaign_id\":\"12724464\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19860482\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":73,\\\"boosted_rank\\\":11,\\\"subzone_id\\\":3013,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.011541381928625664\\\",\\\"cost_per_unit\\\":\\\"10.03\\\",\\\"distance\\\":\\\"2.481813907623291\\\",\\\"organic_ctr\\\":\\\"0.0324081556043881\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"299\\\"},\\\"search_id\\\":\\\"41b34f6c-fa23-418f-b4c2-b623830450e0\\\",\\\"section_name\\\":\\\"more\\\"}\",\"subzone_id\":\"3013\"}",
//               "event_names": {
//                   "tap": "{\"action\":\"click\"}",
//                   "impression": "{\"action\":\"impression\"}",
//                   "served": "{\"action\":\"serve\"}"
//               }
//           },
//           {
//               "table_name": "zsearch_events_log",
//               "payload": "{\"search_id\":\"41b34f6c-fa23-418f-b4c2-b623830450e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215831454351360\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19860482\",\"element_type\":\"listing\",\"rank\":11,\"metadata\":{\"is_ad\":\"true\"}}",
//               "event_names": {
//                   "tap": "{\"action\":\"tap\"}",
//                   "impression": "{\"action\":\"impression\"}"
//               }
//           }
//       ],
//       "allCTA": [
//           {
//               "type": "booking_cta",
//               "text": "Book a Table",
//               "clickUrl": "\/pune\/high-garden-1-senapati-bapat-road\/book"
//           }
//       ],
//       "promoOffer": "",
//       "checkBulkOffers": false,
//       "bulkOffers": [],
//       "isDisabled": false,
//       "bottomContainers": []
//   },
//   {
//       "type": "restaurant",
//       "info": {
//           "resId": 19111915,
//           "name": "Retox",
//           "image": {
//               "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/19111915\/8f96a796c2a2f8d2e42d3cf972e76496_featured_v2.jpg",
//               "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/19111915\/8f96a796c2a2f8d2e42d3cf972e76496_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
//           },
//           "o2FeaturedImage": {
//               "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18315730\/0902579c0824c6070d1ac28dc23474b9_o2_featured_v2.jpg"
//           },
//           "rating": {
//               "has_fake_reviews": 0,
//               "aggregate_rating": "4.3",
//               "rating_text": "4.3",
//               "rating_subtitle": "Very Good",
//               "rating_color": "5BA829",
//               "votes": "2,571",
//               "subtext": "REVIEWS",
//               "is_new": false
//           },
//           "ratingNew": {
//               "newlyOpenedObj": null,
//               "suspiciousReviewObj": null,
//               "ratings": {
//                   "DINING": {
//                       "rating_type": "DINING",
//                       "rating": "4.5",
//                       "reviewCount": "1,995",
//                       "reviewTextSmall": "1,995 Reviews",
//                       "subtext": "1,995 Dining Reviews",
//                       "color": "#1C1C1C",
//                       "ratingV2": "4.5",
//                       "subtitle": "DINING",
//                       "sideSubTitle": "Dining Ratings",
//                       "bgColorV2": {
//                           "type": "green",
//                           "tint": "800"
//                       },
//                       "newOnDining": false
//                   },
//                   "DELIVERY": {
//                       "rating_type": "DELIVERY",
//                       "rating": "4.1",
//                       "reviewCount": "576",
//                       "reviewTextSmall": "576 Reviews",
//                       "subtext": "576 Delivery Reviews",
//                       "color": "#E23744",
//                       "ratingV2": "4.1",
//                       "subtitle": "DELIVERY",
//                       "sideSubTitle": "Delivery Ratings",
//                       "bgColorV2": {
//                           "type": "green",
//                           "tint": "700"
//                       },
//                       "newOnDelivery": false
//                   }
//               }
//           },
//           "cft": {
//               "text": "\u20b91,200 for two"
//           },
//           "cfo": {
//               "text": "\u20b9500 for one"
//           },
//           "locality": {
//               "name": "Erandwane, Pune",
//               "address": "Cts 136, Plot 8, First Floor, Ekdant Apartment, Mazanine, Karve Road, Erandwane, Pune",
//               "localityUrl": "pune\/erandwane-restaurants"
//           },
//           "timing": {
//               "text": "Closes in 45 minutes",
//               "color": "#e5521f"
//           },
//           "cuisine": [
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
//                   "name": "North Indian"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
//                   "name": "Chinese"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
//                   "name": "Continental"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
//                   "name": "Italian"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
//                   "name": "Salad"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
//                   "name": "Bar Food"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sichuan\/",
//                   "name": "Sichuan"
//               },
//               {
//                   "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
//                   "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
//                   "name": "Beverages"
//               }
//           ],
//           "should_ban_ugc": false,
//           "costText": {
//               "text": "\u20b91,200 for two"
//           }
//       },
//       "order": [],
//       "gold": {
//           "instant": 30,
//           "welcome_offer": false,
//           "gold_offer": true,
//           "text": "Flat",
//           "offerValue": "30% OFF",
//           "isGoldIcon": true
//       },
//       "takeaway": [],
//       "cardAction": {
//           "text": "",
//           "clickUrl": "\/pune\/retox-erandwane\/info",
//           "clickActionDeeplink": ""
//       },
//       "distance": "3 km",
//       "isPromoted": false,
//       "promotedText": "",
//       "trackingData": [
//           {
//               "table_name": "zsearch_events_log",
//               "payload": "{\"search_id\":\"41b34f6c-fa23-418f-b4c2-b623830450e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215831454351360\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19111915\",\"element_type\":\"listing\",\"rank\":12}",
//               "event_names": {
//                   "tap": "{\"action\":\"tap\"}",
//                   "impression": "{\"action\":\"impression\"}"
//               }
//           }
//       ],
//       "allCTA": [
//           {
//               "type": "booking_cta",
//               "text": "Book a Table",
//               "clickUrl": "\/pune\/retox-erandwane\/book"
//           },
//           {
//               "type": "chain_cta",
//               "text": "View all outlets",
//               "clickUrl": "\/pune\/restaurants\/retox?subzone=3013&category=2"
//           }
//       ],
//       "promoOffer": "",
//       "checkBulkOffers": false,
//       "bulkOffers": [],
//       "isDisabled": false,
//       "bottomContainers": []
//   }]

// const Body = () => {
//   return (
//     <div className='body'>
//       <div className='search'>search</div>
//       <div className='res-container'>
//         <RestaurantCard resData={resList[0]} />
//         <RestaurantCard resData={resList[1]} />
//         <RestaurantCard resData={resList[2]} />

        
     
//       </div>
//     </div>
//   );

// };

//OR

// const Body = () => {
//   return (
//     <div className='body'>
//       <div className='search'>search</div>
//       <div className='res-container'>
//         {resList.map((res)=>
//       ( <RestaurantCard key={res.info.resId} resData={res}/>))}

        
     
//       </div>
//     </div>
//   );

// };















