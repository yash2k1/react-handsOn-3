import { Component } from "react";
import './FormStyle.css'
export default class Form extends Component{

    com
    state={
        Name:'',
        Dept:'',
        Rating:'',
      
        EmpDep:[]
    }
    changeHandle=(e)=>{
        // e.preventDefault()
        // this.setState({Name:e.target.value})
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.Name)
        console.log(this.state.Dept)
        console.log(this.state.Rating)
    }
clickHandle=(e)=>{
        e.preventDefault() 

    let newObj={
        name:this.state.Name,
        Dept:this.state.Dept,
        Rating:this.state.Rating,
    }
    this.state.EmpDep.push(newObj);
    this.setState({EmpDep:this.state.EmpDep})
    this.setState({Name:""})
    this.setState({Dept:""})
    this.setState({Rating:""})
   
}
    render(){
        return(
<>
<form className="form">
    <div className="field1 field">
    <label htmlFor="name">Name:</label>
<input type="text" name="Name" id="name" placeholder="Enter Name" value={this.state.Name} onChange={this.changeHandle}  required/>
    </div>

 <div className="field2 field">
    <label htmlFor="dept">Department:</label>
<input type="text" name="Dept" id="dept" placeholder="Enter Department" value={this.state.Dept} onChange={this.changeHandle}  required/>
    </div>
    <div className="field3 field">
    <label htmlFor="Rating">Rating:</label>
<input type="number" name="Rating" id="Rating" placeholder="Enter Rating" value={this.state.Rating} onChange={this.changeHandle}  required/>
</div>


<button type="button" onClick={this.clickHandle} required>submit</button>
</form>
{
     this.state.EmpDep.length ?(<div className="output" >
{
    this.state.EmpDep.map((item,index)=>{
        return(
            <span className="box" key={index}>Name:{item.name}|| Dept:{item.Dept} || Rating:{item.Rating}</span>
        )
    })
   
}
            </div>
        ):undefined
    
   
}


</> 
        );
    }
}