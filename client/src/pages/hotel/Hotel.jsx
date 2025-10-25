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
import {  useState , useContext} from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const [OpenSlider , setOpenSlider] = useState(false); //'false'로 주면 문자열을 인식해서 true로 반영된다. 
  const [SlideNumber , setSlideNumber] = useState(0); 
  //i를 받아와서 이걸 어떤식으로 리턴 시켜줘야할지 모르겠었는데
  //useState 로 slideNumber을 정의해서 이걸 넘겨주는 방식... 활용함! 
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const {data , loading,error} = useFetch(`/api/hotels/find/${id}`);

 
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
  const {dates , options} =useContext(SearchContext);
  console.log(options)
  const dayCount = (dateA , dateB) => {
      const diffTime = dateA?.getTime() - dateB?.getTime();
      const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDay;
  }

  const days = dayCount(dates[0].endDate , dates[0].startDate);
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
      {loading ? "loading" : 
      <>
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
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
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
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
       
        
        <EmailList />
        <Footer />
      </div>
      </>}
    </div>
  );
};

export default Hotel;



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

// 처음에 난 id를 state로 정의하고 id 즉 url이 변경 될 때마다 useEffect를 통해서
// 업데이트 해주고 해당 id 주소로 db에 직접 접근해서 데이터를 가져오려고 했으나
// useFetch를 사용하는게 더 적합해보임. 즉, getHotel에 id를 params로 가져오는부분을 활용함 ! 
//   const [id , setId] = useState('');
  
//   useEffect(() => {
//     setId(location.pathname.split('/')[2]);  
//     console.log(id)
//   },[id]);
  

