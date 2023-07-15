function Logout(props){

    function handleLogout(event) {
        localStorage.removeItem('TOKEN',);
        localStorage.clear();
    }

    return(
        <div 
            onClick={handleLogout}
            className="NavSingle" 
        >
            <a href="/" className="FontCursive">Logout</a>
        </div>
    );
}

export default Logout;