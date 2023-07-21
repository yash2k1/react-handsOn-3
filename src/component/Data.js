import { Component } from 'react';
import './DataStyle.css'
class Data extends Component{
    constructor(props){
        super(props);
        console.log(props.value)
        console.log(props.value[0])
    }
    render(){
        return(
            <>
               <h1>Employee FeedBack Data </h1>
        
            <div className="output" >
        {
            this.props.value.map((item,index)=>{
                return(
                    <span className="box" key={index}>Name:{item.name}|| Dept:{item.Dept} || Rating:{item.Rating}</span>
                )
            })
           
        }
                    </div>
                <button className="Back" onClick={this.props.toggleFlag}>
                    Go Back
                </button>
        
            </>
        );
    } 

}
export default Data;