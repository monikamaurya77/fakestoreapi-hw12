import {useState,useEffect} from 'react'

function API(){

    const [fake,setFake]=useState([])
    console.log(fake);

    useEffect(()=>{
        fakestore()
    },[])

    const fakestore=async()=>{
        const res=await fetch ("https://fakestoreapi.com/products")
        const data=await res.json()
        setFake(data)
        
    }
    

    return (
        <div>
            <h1>Fake Store API</h1>
            <div className="container">
              {fake.map((val)=>{
                return(
                    <div className="box">
                    <div className="content">
                        <h6>{val.title}</h6>
                        <p>{val.price}$</p>

                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"50%",alignItems:"center",marginBottom:"5px"}}>
                        <img src={val.image}></img>
                    <button><i class="fa-solid fa-cart-shopping">+</i></button>
                    </div>
                    
                </div>
                
                )
              })}  
               
               
              
            </div>
        </div>
    )
}

export default API