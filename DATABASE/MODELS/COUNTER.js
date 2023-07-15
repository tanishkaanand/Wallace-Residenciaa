const { json } = require('body-parser');
const e = require('express');
var mongoose = require('mongoose');

module.exports.SINGLEROOM = require('./SINGLEROOM');
module.exports.DOUBLEROOM = require('./DOUBLEROOM');
module.exports.TWINROOM = require('./TWINROOM');
module.exports.KINGROOM = require('./KINGROOM');

const COUNTER = mongoose.model("counters", new mongoose.Schema({ Date: {d:Number,m:Number,y:Number}, CounterSingleRoom: Number, CounterDoubleRoom: Number, CounterTwinRoom: Number, CounterKingRoom: Number}));

//---------------------------------------- U S E R-----------------------------------------------

module.exports.getCounterList = async () => {
    return await COUNTER.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.addCounter = async (newUser) => {
    await (new COUNTER(newUser)).save().catch(function(err){ console.log(err)});
}

module.exports.getCounterForTheGivenDate =  async(DATA) => {  
    return await COUNTER.findOne({Date: {d: DATA.d, m: DATA.m, y: DATA.y} } ).catch(function(err){ console.log(err)});
}

function nextDate(DATE) {
    if(DATE.d === 31 
        && (
            DATE.m === 1 || DATE.m === 3 || DATE.m === 5 || DATE.m === 7 || DATE.m === 8 || DATE.m === 10 || DATE.m === 12 
        )  
    ) {
        DATE.d = 1;
        DATE.y = DATE.m === 12 ? DATE.y+1 : DATE.y;
        DATE.m = DATE.m === 12? 1 : DATE.m + 1;
    }else if(
        DATE.d === 30
        && (
            DATE.m === 4 || DATE.m === 6 || DATE.m === 9 || DATE.m === 11  
        )  
    ){
        DATE.d = 1;
        DATE.m = DATE.m + 1;
    }else if(
        DATE.d === 29 
        && (
            DATE.m === 2
        )
    ){
        DATE.d = 1;
        DATE.m = 3;
    }else if(
        DATE.d === 28 && DATE.m === 2
    ) {
        DATE.d = 1;
        DATE.m = 3;
    }else{
        DATE.d = DATE.d+1;
    }

    // if(DATE.d < 10) {
    //     DATE.d = '0' + DATE.d;
    // }

    // if(DATE.m < 10) {
    //     DATE.m = '0' + DATE.m;
    // }

    // let NEXT = DATE.y + '-' + DATE.m + '-' + DATE.d;  
    let NEXT = {
        d: DATE.d,
        m: DATE.m,
        y: DATE.y
    }  

    console.log('\nNEXT DATE = ');
    console.log(NEXT);

    return NEXT;
}

module.exports.getCounterBwDates =  async(DATA) => {
    let ANS = {
        hasSingleRoom: null,
        hasDoubleRoom: null,
        hasTwinRoom: null,
        hasKingRoom: null
    }

    console.log("\n\nCHECK IN DATE = ");
    console.log(DATA.d1+'-'+DATA.m1+'-'+DATA.y1);
    console.log("\n\nCHECK OUT DATE = ");
    console.log(DATA.d2+'-'+DATA.m2+'-'+DATA.y2);

    // let D1 = DATA.d1+'-'+DATA.m1+'-'+DATA.y1;
    // let D2 = DATA.d2+'-'+DATA.m2+'-'+DATA.y2;

    let D1 = {
        d: DATA.d1,
        m: DATA.m1,
        y: DATA.y1
    };

    let D2 = {
        d: DATA.d2,
        m: DATA.m2,
        y: DATA.y2
    };

    let TotalSingleRoom = (await this.SINGLEROOM.COUNT());
    let TotalTwinRoom = (await this.TWINROOM.COUNT());
    let TotalDoubleRoom = (await this.DOUBLEROOM.COUNT());
    let TotalKingRoom = (await this.KINGROOM.COUNT());

    console.log('\nTOTAL SINGLE ROOMS = ');
    console.log(TotalSingleRoom);
    console.log('\nTOTAL DOUBLE ROOMS = ');
    console.log(TotalDoubleRoom);
    console.log('\nTOTAL TWIN ROOMS = ');
    console.log(TotalTwinRoom);
    console.log('\nTOTAL KING ROOMS = ');
    console.log(TotalKingRoom);

    for(let i = D1, INDEX = 1; INDEX <= 3; i = nextDate(i), INDEX++) {
        console.log("\n---> PASS " + INDEX);

        let GET = await this.getCounterForTheGivenDate({d: i.d, m: i.m, y: i.y}).catch(function(err){ console.log(err)});

        console.log("\nDATE = ");
        console.log(i);
        console.log("\nGET = ");
        console.log(GET);

        if(GET) {
            if(ANS.hasSingleRoom === null) {
                if(GET.CounterSingleRoom >= TotalSingleRoom) {
                    ANS.hasSingleRoom = false;
                }
            }
            if(ANS.hasDoubleRoom === null) {
                if(GET.CounterDoubleRoom >= TotalDoubleRoom) {
                    ANS.hasDoubleRoom = false;
                }
            }
            if(ANS.hasTwinRoom === null) {
                if(GET.CounterTwinRoom >= TotalTwinRoom) {
                    ANS.hasTwinRoom = false;
                }
            }
            if(ANS.hasKingRoom === null) {
                if(GET.CounterKingRoom >= TotalKingRoom) {
                    ANS.hasKingRoom = false;
                }
            }
        }

        if(i === D2) {
            break;
        }
    }

    if(ANS.hasSingleRoom === null) {
        ANS.hasSingleRoom = true;
    }

    if(ANS.hasDoubleRoom === null) {
        ANS.hasDoubleRoom = true;
    }

    if(ANS.hasTwinRoom === null) {
        ANS.hasTwinRoom = true;
    }

    if(ANS.hasKingRoom === null) {
        ANS.hasKingRoom = true;
    }
    
    return ANS;
}

module.exports.INCR = async(DATA) => {
    if(DATA.RoomCategory === 'Single Room') {
        return await COUNTER.updateOne(
            {Date: {d: DATA.d, m: DATA.m, y: DATA.y}}, 
            {$inc: { CounterSingleRoom : 1 }}
        ).catch(function(err){ console.log(err)});
    }else if(DATA.RoomCategory === 'Twin Room') {
        return await COUNTER.updateOne(
            {Date: {d: DATA.d, m: DATA.m, y: DATA.y}}, 
            {$inc: { CounterTwinRoom : 1 }}
        ).catch(function(err){ console.log(err)});
    }else if(DATA.RoomCategory === 'Double Room') {
        return await COUNTER.updateOne(
            {Date: {d: DATA.d, m: DATA.m, y: DATA.y}}, 
            {$inc: { CounterDoubleRoom : 1 }}
        ).catch(function(err){ console.log(err)});
    }
    
    return await COUNTER.updateOne(
        {Date: {d: DATA.d, m: DATA.m, y: DATA.y}}, 
        {$inc: { CounterKingRoom : 1 }}
    ).catch(function(err){ console.log(err)});
}
 