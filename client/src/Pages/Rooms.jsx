import Casserole from "../Components/Casserole";

function Rooms(props) {
    return (
        <div>
            <h1 className="Center">Rooms</h1>

            <Casserole Title="Single Room" DB="singleroom" isAdmin={props.isAdmin} InputsList={['RoomNo']}/>
            <Casserole Title="Double Room" DB="doubleroom" isAdmin={props.isAdmin} InputsList={['RoomNo']}/>
            <Casserole Title="Twin Room" DB="twinroom" isAdmin={props.isAdmin} InputsList={['RoomNo']}/>
            <Casserole Title="King Room" DB="kingroom" isAdmin={props.isAdmin} InputsList={['RoomNo']}/>    
        </div>
    );
}

export default Rooms;