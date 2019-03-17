import React, { Component } from 'react'; 

 class DogForm extends Component {
     state = {
         age:'',
         breed:'',
         name:''
     }
    handleInput = (e) =>
        this.setState({
            [e.target.name]: e.target.value
        })

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.addDog(this.state)
    }
        

     render() {
         return(
            <div>
                <h1>Create some pups!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="name"/>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleInput} placeholder="age"/>
                    <input type="text" name="breed" value={this.state.breed} onChange={this.handleInput} placeholder="breed"/>
                    <button type="submit">Submit</button>
                </form>
             </div>
        )
    }
 }


 export default DogForm