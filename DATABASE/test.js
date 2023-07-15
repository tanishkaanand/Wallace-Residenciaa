const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HMS", { useNewUrlParser: true});
const COUNTER = mongoose.model("counters", new mongoose.Schema({ Date: {d:Number,m:Number,y:Number}, CounterSingleRoom: Number, CounterDoubleRoom: Number, CounterTwinRoom: Number, CounterKingRoom: Number}));

const addCounter = async (newUser) => {
    await (new COUNTER(newUser)).save().catch(function(err){ console.log(err)});
}

// const createUser = async (entryUser) => {
//     const var1 = await UserLoginModel.findOne({Userame: entryUser.Userame});
//     const var2 = await UserLoginModel.findOne({Email: entryUser.Email});
//     if(var1 === true || var2 === true) {
//         return true;
//     }
//     addUser(entryUser);
//     return false;
// }

// addCounter({Date: {d: 9,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 10,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 11,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 12,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 13,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 14,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 15,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 16,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 17,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 18,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 19,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 20,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 21,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 22,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 23,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
// addCounter({Date: {d: 24,m: 11, y:2022}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});


addCounter({Date: {d: 23,m: 02, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 24,m: 02, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 25,m: 02, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 26,m: 02, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 27,m: 02, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 28,m: 02, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 01,m: 03, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 02,m: 03, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 03,m: 03, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});
addCounter({Date: {d: 04,m: 03, y:2023}, CounterSingleRoom: 0, CounterDoubleRoom: 0, CounterTwinRoom: 0, CounterKingRoom: 0});

