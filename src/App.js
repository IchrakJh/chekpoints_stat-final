import './App.css';

import React, { Component } from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "fullName",
        bio: "bio",
        imgSrc: <img src="/bb.jpg" alt="myimage" className="imgg"/> ,
        profession: "profession",
      },
      shows: true,
      temps:0
    };
  }


  incrementCounter() {
    const { temps } = this.state;
    this.setState({ temps: temps + 1 });
  }
  componentDidMount() {
    const cpt = this.incrementCounter.bind(this);
    setInterval(cpt, 1000);
  }



  toggle =()=>this.setState({shows:!this.state.shows})


  render() {
    
    return (
      (this.state.shows)? <>
      <h1 className="h11"><center>Hello here is the person profil</center></h1>
    <ul > 
      <p></p>
    <li><em><b>FullName: </b></em>{this.state.person.fullName}</li>
    <li><em><b>Bio: </b></em> {this.state.person.bio}</li>
    <li><em><b>Image: </b></em> </li><p>{this.state.person.imgSrc}</p>
    <li><em><b>Profession: </b></em>{this.state.person.profession}</li>
    
    <li><em><b>Temps: </b></em>{this.state.temps} secondes </li> 
    </ul>
    
    <center><button onClick={this.toggle.bind(this)} class="btn btn-danger">toggle is True Pass to toggle False</button></center>
    </>:  <center><button onClick={this.toggle.bind(this)} class="btn btn-success">toggle is False Pass to toggle True</button></center>

   
   

    );}

}

export default App;
