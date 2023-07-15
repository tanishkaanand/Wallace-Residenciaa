var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ RoomNo : String });
const DoubleRoom = mongoose.model("doublerooms", SameSchema);


module.exports.getDoubleRoomList = async () => {
    return await DoubleRoom.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteDoubleRoomItem = async (delID) => {
    await DoubleRoom.deleteOne( { _id : delID} );
}

module.exports.addDoubleRoomItem = async (newDish) => {
    await (new DoubleRoom(newDish)).save();
}

module.exports.COUNT = async () => {
    return await DoubleRoom.count();
}