import React, { Component } from "react"
class ClassComponent extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor")
        this.state = {
            date: new Date().toISOString()
        }
    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
        // this.clearSetId = setInterval(()=>{
        //     console.log("setInterval")
        //     this.updateDate()
        // },1000)


        // setTimeout(()=>{
        //     console.log("setTimeout")
        //     clearInterval(this.clearSetId)
        //     this.updateDate()
        // },5000)
    }
    componentDidCatch(error) {
        console.log("componentDidCatch")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    updateDate = () =>{
        this.setState({
            date: new Date().toISOString()
        })
    }
    render() {
        console.log("Render")
        const { date } = this.state
        return (
            <div>
                {date}
            </div>
        )
    }
}
export default ClassComponent;