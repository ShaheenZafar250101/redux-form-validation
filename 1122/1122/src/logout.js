function Logout()
{
    return (

        <button onClick={remove}>Logout</button>
    );
}


function remove(){
    return(
        
        window.location.href = "/" ,
       localStorage.removeItem("user-info")
          
       );      
}


export default Logout;