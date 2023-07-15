var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ RoomNo : String });
const KingRoom = mongoose.model("kingrooms", SameSchema);


module.exports.getKingRoomList = async () => {
    return await KingRoom.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteKingRoomItem = async (delID) => {
    await KingRoom.deleteOne( { _id : delID} );
}

module.exports.addKingRoomItem = async (newDish) => {
    await (new KingRoom(newDish)).save();
}

module.exports.COUNT = async () => {
   return await KingRoom.count();
}