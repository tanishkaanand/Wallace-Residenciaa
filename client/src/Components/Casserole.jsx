import {useState,useEffect} from 'react';
import Form from "./Form";
import Block from "./Block"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import keyIndex from 'react-key-index';

function Casserole(props){

    var addClass = ""
    if(props.isAdmin===true) {
        addClass = "CarouselAdmin"
    }else{
        addClass = "Carousel"
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 30
        }
    };

    const [ data, setData] = useState([]);
    const [ PlusBtnState, setState] = useState(false);
    
    const getData = () => {
        let url = 'http://localhost:3001/'+props.DB; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json())
        .then((receivedData) => setData(receivedData));
    }

    useEffect( () => getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [] );

    function expand(){
        setState(true);
    }

    function compress(){
        setState(false);
    }

    return( 
        <div key={props.Title} className="TextCenter">
            <h4 key={props.Title+'1'} className="">{props.Title}</h4><br/>
            <div key={props.Title+'2'} className="Center SkeletonBox"> 
                
                { PlusBtnState===false ?
                        <button key={props.Title+'3'} onClick={expand} className="LargeBtn CircularBtn"> + </button> : 
                            <div key={props.Title+'4'} onMouseLeave={compress} className="FitInSizedBox Center FormBox" >
                                <Form 
                                    Title={props.DB} 
                                    InputsList={props.InputsList} 
                                    SubmitBtn="+"
                                    key={props.Title+'5'}
                                />
                            </div> 
                }
                
                <div key={props.Title+'6'} className={addClass}>
                    <Carousel
                        key={props.Title+'7'}
                        responsive={responsive}     // Numbers of slides to show at each breakpoint
                        transitionDuration={5000}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"    // Use this to style the dot list.
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                    >
                        { 
                            data && data.length>0 && data.map((One,i)=> (
                                <Block 
                                    key={props.Title+'8'}
                                    id={One._id} 
                                    Heading={props.DB} 
                                    RoomNumber={One.RoomNo}
                                />
                            )) 
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Casserole; 