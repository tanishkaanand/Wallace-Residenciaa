app.post("/book", (req, res) => DB.BOOKING.addBooking({
    Name: req.body.Name,
    PhoneNo: req.body.PhoneNo,
    Email: req.body.Email,
    DOB: req.body.DOB,
    Address: req.body.Address,
    ZipCode: req.body.ZipCode,
    Nationality: req.body.Nationality,
    CreditType: req.body.CreditType,
    CreditHolder: req.body.CreditHolder,
    CreditNumber: req.body.CreditNumber,
    CreditExpiration: req.body.CreditExpiration,
    RoomCategory: req.body.RoomCategory,
    CheckIn: req.body.CheckIn,
    CheckOut: req.body.CheckOut
}).then(() => {
    let x = new Date(req.body.CheckIn);
    DB.COUNTER.INCR({ d: x.getDate(), m: x.getMonth() + 1, y: x.getFullYear(), RoomCategory: req.body.RoomCategory })
    res.redirect('/pay');
}));
