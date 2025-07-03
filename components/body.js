const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Restaurant"
      />
      <button type="submit" className="search-icon-button">
        <img
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="Search icon"
          className="search-icon-img"
        />
      </button>
    </div>
  );
};

const resObj = {
  imgURL:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
};

const NameRating = (props) => {
  return (
    <div className="rating-container">
      <h3>{props.rating} </h3>
      <h2>☆</h2>
    </div>
  );
};

const ResDetails = (props) => {
  return (
    <div className="food-rate-detail">
      <span className="food-detail">{props.foodType}</span>
      <div className="rate-detail">{props.resRate}</div>
    </div>
  );
};

const ResContainer = (props) => {
  return (
    <div className="card-container">
      <img src={`${resObj.imgURL}${props.imgID}`} />
      <div className="res-details">
        <div className="res-detail">
          <div className="name-rating">
            <h3>{props.resName}</h3>
            <NameRating rating={props.rating} />
          </div>
          <ResDetails resRate={props.price} foodType={props.foodType} />
        </div>
      </div>
    </div>
  );
};
export const Body = () => {
  return (
    <div className="body">
      <div className="search-res">
        <Search />
      </div>
      <div className="res-container">
        <ResContainer
          resName="Anna Dosa Point"
          foodType="Dosa, Idli, Rasam, Sambar"
          rating="4.2"
          price="150 for two"
          imgID="226e1ae9bf9fa4536a23b4194e048bfe"
        />
        <ResContainer
          resName="KFC"
          foodType="Burger, Rolls, Fast Food"
          rating="4.1"
          price="200 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5bfe1062-dbda-4cea-962f-ecd60a1d1764_17301.JPG"
        />
        <ResContainer
          resName="Rolls Mania"
          foodType="Rolls, Fast Food, Wraps, Beverages"
          rating="4.9"
          price="250 for two"
          imgID="d69e799b0e0d77a9635d910df94e08de"
        />
        <ResContainer
          resName="Sloppy Seigneur"
          foodType="Burger, Grilled Chicken"
          rating="4.5"
          price="400 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/f9db52d4-a35a-4d71-a1e2-18789ad65f38_591680.jpg"
        />
        <ResContainer
          resName="Pizza Hut"
          foodType="Pizza, Pasta, Burger, Sandwich, Fast Food, Beverages"
          rating="3.0"
          price="350 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/611f45a5-52b7-4ad0-84d7-f605643f46ea_10892.JPG"
        />
        <ResContainer
          resName="Dairy Day Ice Creams"
          foodType="Ice Cream"
          rating="4.3"
          price="110 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/5/23/ae355b77-8fbe-48e0-a110-71e5f62151e2_959147%20(1).jpg"
        />
        <ResContainer
          resName="Cheesiano Pizza"
          foodType="Pizza, Italian, Pasta"
          rating="3.9"
          price="450 for two"
          imgID="0335dd45be555d0a4187255e57d2ca88"
        />
        <ResContainer
          resName="Chinese Wok"
          foodType="Chinese, Momos"
          rating="4.0"
          price="190 for two"
          imgID="e0839ff574213e6f35b3899ebf1fc597"
        />
        <ResContainer
          resName="Theobroma"
          foodType="Bakery, Desserts"
          rating="4.4"
          price="240 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG"
        />
        <ResContainer
          resName="The Belgian Waffle Co."
          foodType="Waffle, Pancake, Desserts, Ice Cream, Beverages"
          rating="3.2"
          price="180 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/271c8ee2-d153-4106-b81a-05d347085ca0_476594.JPG"
        />
        <ResContainer
          resName="LeanCrust Pizza "
          foodType="Fast Food, Cafe, Burger, Pizza"
          rating="4.2"
          price="500 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/9981e910-f172-48ba-b08f-c7e5141e7983_770772.JPG"
        />
        <ResContainer
          resName="NIC Ice Creams"
          foodType="Ice Cream, Desserts"
          rating="4.7"
          price="150 for two"
          imgID="RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/2dc3b714-f0b8-4a86-8be9-73fb095102fc_29673.jpg"
        />
      </div>
    </div>
  );
};
