import Explore from "../Components/Explore";
import ComeTogether from "../Components/ComeTogether";
import Greeting from "../Components/Greeting";

function Home(){
    return(
        <div className=''>
            <Greeting/>
            <Explore/>
            <ComeTogether/>
        </div>
    );
}

export default Home;