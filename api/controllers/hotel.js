import Hotel from '../models/Hotel.js';

// CREATE
export const createHotel = async (req, res, next) => {
  // console.log("Creating a new hotel with data:", req.body);
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    // console.log("Saved hotel:", savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    // console.error("Error saving hotel:", err);
    next(err);
  }
};

// UPDATE
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

// GET
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// GET ALL + ) req.query
export const getHotels = async (req, res, next) => {
  const { min, max, limit , ...others } = req.query;
  try {
    // const hotels = await Hotel.find(req.query).limit(req.query.limit);
    const hotels = await Hotel.find({...others , cheapestPrice : {$gt : min || 1 , $lt : max || 9999}}).limit(parseInt(req.query.limit));
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};


export const getHotel_city = async (req, res, next) => {
  const { city,min, max, limit , ...others } = req.query;
  try {
    // const hotels = await Hotel.find(req.query).limit(req.query.limit);
    const hotels = await Hotel.find({...others , city : city, cheapestPrice : {$gt : min || 1 , $lt : max || 9999}}).limit(parseInt(req.query.limit));
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {

  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({ city: city });
    }));
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({type : "hotel"});
    const apartmentCount = await Hotel.countDocuments({type : "apartment"});
    const resortCount = await Hotel.countDocuments({type : "resort"});
    const villaCount = await Hotel.countDocuments({type : "villa"});
    const cabinCount = await Hotel.countDocuments({type : "cabin"});
    //dv 쿼리는 딘수 json반환은 복수여서 type을 못가져왔엇음.
    res.status(200).json([
      {type : "hotel", count : hotelCount},
      {type : "apartment", count : apartmentCount} ,
      {type : "resort", count : resortCount} ,
      {type : "villa", count : villaCount} ,
      {type : "cabin", count : cabinCount} ])
      } catch (err) {
    next(err);
  }
};
