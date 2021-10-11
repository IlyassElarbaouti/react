import React, { Component } from 'react'

export default class Dimensions extends Component {
    state={
            width:null,
            height:null,
        }

    componentDidMount(){
        window.addEventListener('resize',this.onResize);
        const {innerWidth,innerHeight}= window;
        this.setDimensions(innerWidth,innerHeight)
    }
    onResize = e =>{
        const {innerWidth,innerHeight}= e.target;
        this.setDimensions(innerWidth,innerHeight)
        
    }
    setDimensions=(width,height)=>{
        this.setState({
            width,
            height,
        })
       document.title = `${this.state.width} x ${this.state.height}`
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.onResize)
    }
    render() {
        return (
            <div>
                {`${this.state.width}px - ${this.state.height}px`}
            </div>
        )
    }
}
