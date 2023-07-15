var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ RoomNo : String });
const TwinRoom = mongoose.model("twinrooms", SameSchema);


module.exports.getTwinRoomList = async () => {
    return await TwinRoom.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteTwinRoomItem = async (delID) => {
    await TwinRoom.deleteOne( { _id : delID} );
}

module.exports.addTwinRoomItem = async (newDish) => {
    await (new TwinRoom(newDish)).save();
}

module.exports.COUNT = async () => {
    return await TwinRoom.count();
}