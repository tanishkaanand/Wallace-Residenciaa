var mongoose = require('mongoose');
const { json } = require('body-parser');

const SameSchema = new mongoose.Schema({ RoomNo : String });
const SingleRoom = mongoose.model("singlerooms", SameSchema);


module.exports.getSingleRoomList = async () => {
    return await SingleRoom.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteSingleRoomItem = async (delID) => {
    await SingleRoom.deleteOne( { _id : delID} );
}

module.exports.addSingleRoomItem = async (newDish) => {
    await (new SingleRoom(newDish)).save();
}

module.exports.COUNT = async () => {
    let ANS = await SingleRoom.count();
    
    // console.log('\nIN THE SINGLE ROOM COUNT FXN');
    // console.log(ANS);

    return ANS;
}