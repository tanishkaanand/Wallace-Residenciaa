const { json } = require('body-parser');
const e = require('express');
var mongoose = require('mongoose');

const BOOKING = mongoose.model("bookings", new mongoose.Schema({ 
    Name: String,
    PhoneNo: String,
    Email: String,
    DOB: Date,
    Address: String,
    ZipCode: Number,
    Nationality: String,
    CreditType: String,
    CreditHolder: String,
    CreditNumber: String,
    CreditExpiration: Date,
    // -------------
    RoomCategory: String,
    CheckIn: Date,
    CheckOut: Date
}));

module.exports.getBookingList = async () => {
    return await BOOKING.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.addBooking = async (newDish) => {
    await (new BOOKING(newDish)).save().catch(function(err){ console.log(err)});
}