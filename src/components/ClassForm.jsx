import React, { Component } from 'react';


class ClassForm extends Component {
    constructor() {
        super();
        this.state= {
            Name :"",
            Email :"",
            Password :"",

        }
    }
    handleName=(event) =>{
        this.setState(
            {Name:event.target.value}
        );
    }

    handleEmail=(event) =>{
        this.setState(
            {Email:event.target.value}
        );
    }
    handlePassword=(event) =>{
        this.setState(
            {Password:event.target.value}
        );
    }

    handleSubmit=(event) =>{
        event.preventDefault();
            console.log(
            {
                Name:this.state.Name,
                Email: this.state.Email,
                Password:this.state.Password,
            }
            
        );

    }

    render() { 
        return (  
        <>
       <form onSubmit = {this.handleSubmit} id="form">
       <h1>CONTACT FORM</h1>

			<label htmlFor="name">Name</label>
			<input onChange={this.handleName} value={this.state.Name} id="name"></input><br/>
		

		
			<label htmlFor="email">Email</label>
			<input onChange={this.handleEmail} value={this.state.Email} id="email"></input><br/>
			
		
			<label htmlFor="password">Password </label>
			<input onChange={this.handlePassword} value={this.state.Password} type="password" id="password"></input><br/>
			
		
             <button className='text' onChange={this.handleSubmit} value={this.state.Submit}>Submit</button>
			
		
        </form>
        

        
        </> 
        );
    }
}
 
export default ClassForm;







/*class ClassForm extends Component {
    constructor(){
        super();
        this.state = {
        name:"",
        email:"",
        password:""
        }
    }
    
    
      handleName = (event) => {
        this.setState(
            {name:event.target.value}
            );
      }
    
      handleEmail = (event) => {
        this.setState(
            {email:event.target.value}
            );
      }
    
      handlePassword = (event) => {
        this.setState(
            {password:event.target.value}
            );
      }
    
    
      handleSubmit = (event) => {
       event.preventDefault();
       console.log({
        Name:this.state.name,
        Email:this.state.email,
        Password:this.state.password
       }
       );
    }
    
      render() { 
            return ( 
                <>
                <form onSubmit={this.handleSubmit} id="form">

                <label htmlFor="name">Name</label>
           <input type="text" name="name" onChange={this.handleName} value={this.state.name}id="name"/><br/>

           <label htmlFor="name">Email</label>
           <input type="text" name="name" onChange={this.handleEmail} value={this.state.email} id="email"/><br/>
    
           <label htmlFor="name">Password</label>
           <input type="password" name="name" onChange={this.handlePassword} value={this.state.password}id="password"/><br/>
    
           <button onChange={this.handleSubmit}>Submit</button>
           </form>
                </>
             );
        }
    }

export default ClassForm;*/
     



    
/*class ClassForm extends Component {
    constructor() {
        super();
        this.state= {
            Name :" ",
            Email :" ",
            Password :" ",

        }
    }
    handleName=(event) =>{
        this.setState(
            {Name:event.target.value}
        );
    }

    handleEmail=(event) =>{
        this.setState(
            {Email:event.target.value}
        );
    }
    handlePassword=(event) =>{
        this.setState(
            {Password:event.target.value}
        );
    }

    handleSumbit=(event) =>{
        event.preventDefault();
            console.log(
            {
                Name:this.state.Name,
                Email: this.state.Email,
                Password:this.state.Password,
            }
            
        );

    }

    render() { 
        return (  
        <>
    <h1>CONTACT FORM</h1>
       <form onSubmit = {this.handleSubmit} id="form">
		
			<label htmlFor="name">Name</label>
			<input onChange={this.handleName} value={this.state.Name} id="name"></input><br/>
		

		
			<label htmlFor="email">Email</label>
			<input onChange={this.handleEmail} value={this.state.Email} id="email"></input><br/>
			
		
			<label htmlFor="password">Password </label>
			<input onChange={this.handlePassword} value={this.state.Password} id="password"></input><br/>
			
		
             <button  onChange={this.handleSumbit} value={this.state.Submit}></button>
			
		
        </form>


        
        </> 
        );
    }
}
 
export default ClassForm;*/
