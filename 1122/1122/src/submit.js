import "react-dom";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function submit(values) {
  return sleep(1000).then(async () => {

    let item = values;

    console.warn(item);
   
    let result = await fetch("https://stage.arms.graana.rocks/api/user/login",{
          method : "POST" , 
          headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
          },
          body : JSON.stringify(item)
        });
        
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        console.warn(result.message);
  // <Link to={"/logout"} />
   
      
    
  }).then(() => {
   
    window.location.href = "/logout";
    
  });
}



export default submit;
