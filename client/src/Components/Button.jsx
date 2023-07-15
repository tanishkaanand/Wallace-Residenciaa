import { useState } from "react";

function Button(props) {

    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <button style={{ opacity: isMouseOver ? 0.8 : 1 }}
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            type="submit" className="CircularBtn"
        >
            <p>{props.Text}</p>
        </button>
    );
}

export default Button;