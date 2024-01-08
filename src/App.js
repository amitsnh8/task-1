import React,{useState,useEffect} from "react";

const inputArr=[{type:"text",value:""},{type:"text",value:""},{type:"text",value:""}]
function App() {
  const [row,setRow]=useState(inputArr)
    const handleAdd=()=>{
        setRow([...row,...inputArr])
    }
    useEffect(()=>{
      const fetchData=async ()=>{
     const resp= await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(resp);
      
      console.log("hi");
    }
    fetchData();
    },[])
    return(
        <>
        {
            row?(
                row.map((item,index)=>{
                    return(
                        <div>
                            <input type={item.type} value={item.value} />
                        </div>
                    )
                })
            ):null
        }
        <button onClick={handleAdd} >Add</button>
        </>
    )
}

export default App;
