function NavSingle(props){
    return(
        <div className="NavSingle">
            <a href={props.URL}>{props.Title}</a>
        </div>
    );
}

export default NavSingle;