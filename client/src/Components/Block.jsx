import { useState } from "react";

function Block(props){

    const [TextFontClass, setTextFont] = useState("neonGreenText");  
    var addClass = "Relative Block"

    function handleClick1(id, heading) {
        fetch(`/${encodeURIComponent(heading)}/deletion?delID=${encodeURIComponent(id)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    function mouseEnter(){
        setTextFont("neonPurpleText");
    }

    function mouseLeave() {
        setTextFont("neonGreenText");
    }

    return( 
        <div 
            onMouseEnter={mouseEnter} 
            onMouseLeave={mouseLeave} 
            className={addClass}
            style={{backgroundColor:'black',border:'2px solid white'}}
        >
            <h5 
                className={TextFontClass+" SmallText FontCursive"}
            >
                Room Number : {props.RoomNumber}
            </h5>
            
            <button 
                onClick={() => handleClick1(props.id, props.Heading)} 
                className="CircularBtn TopRight"
            >
            X
            </button>

        </div>
    );
}

export default Block; 