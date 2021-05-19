import {useState,useEffect} from "react"
function ChildClass(){
    const[date, setDate]=useState(new Date().toISOString())
    useEffect(()=>{
        setDate(new Date().toISOString())
        console.log("useEffect>> DidMount")
    },[])

    useEffect(()=>{
        console.log("useEffect>> DidUpdate")
    })

    // useEffect(()=>{
    //     console.log("useEffect>> will recieve props"),[date]
    // })

    useEffect(()=>{
        return()=>{
            console.log("useEffect>> WillUnmount")
        },[]
    })
    console.log("render in Hooks")
    return(
        <div>
            date in Hooks :{date}
        </div>
    )
}
export default ChildClass;