import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [OpenSlider , setOpenSlider] = useState(false); //'false'로 주면 문자열을 인식해서 true로 반영된다. 
  const [SlideNumber , setSlideNumber] = useState(0); 
  //i를 받아와서 이걸 어떤식으로 리턴 시켜줘야할지 모르겠었는데
  //useState 로 slideNumber을 정의해서 이걸 넘겨주는 방식... 활용함! 
  const handleClick = (i) =>{
    // setOpenSlider(() => !OpenSlider);
    setOpenSlider(true);
    setSlideNumber(i);
  }
  const handleArrow = (direction) => {
    if (direction === "left") {
      setSlideNumber(SlideNumber === 0 ? photos.length - 1 : SlideNumber - 1);
    } else {
      setSlideNumber(SlideNumber === photos.length - 1 ? 0 : SlideNumber + 1);
    }
  };
  // const handleArrow = (type) => {
  //   if(type === 'left'){
  //     if(SlideNumber === 0){
  //       setSlideNumber(photos.length -1);
  //       return;
  //     }
  //     setSlideNumber((prev) => prev - 1);
  //     return;
  //   }
  //   if(SlideNumber === photos.length -1){
  //     setSlideNumber(0);
  //     return;
  //   }
  //   setSlideNumber((prev) => prev + 1);
  //   // type === 'left' ? setSlideNumber((prev) => prev - 1) : setSlideNumber((prev) => prev + 1);
  // }
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {OpenSlider && <>
      <div className="slider">
       <div className="sliderWrapper"  >
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => {handleArrow('left')}}/>
              <img src={photos[SlideNumber].src} alt="" className="sliderImg"></img> 
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => {handleArrow('right')}}/>
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpenSlider(() => !OpenSlider)}/>
              <div className="sliderPageNum">{SlideNumber + 1}/{photos.length}</div>
       </div>
      </div>
      </>}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) =>{
              return(
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="" className="hotelImg" onClick={() => handleClick(i)}/>
                </div>
              )
            } )}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow,
                Tower Street Apartments has accommodations with air
                conditioning and free WiFi. The units come with hardwood floors
                and feature a fully equipped kitchenette with a microwave, a
                flat-screen TV, and a private bathroom with shower and a
                hairdryer. A fridge is also offered, as well as an electric tea
                pot and a coffee machine. Popular points of interest near the
                apartment include Cloth Hall, Main Market Square and Town Hall
                Tower. The nearest airport is John Paul II International
                Kraków–Balice, 16.1 km from Tower Street Apartments, and the
                property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <EmailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
