import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  listGender(gender) {
    return gender === 'male' ? '♂' : '♀'
  }

  // adoptedButton() {
  //   if ( this.isAdopted )
  //     { return <button className="ui disabled button">Already adopted</button> }
  //   else
  //     { return <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button> }
  // }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    const {pet, isAdopted} = this.props
    const {name, type, age, weight, gender} = pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} ({type} { this.listGender(gender) })</a>
          <div className="description">
            <span>Age: {age} - Weight: {weight}</span>
          </div>
        </div>
        <div className="extra content">
          { isAdopted ?
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button> }
        </div>
        <p></p>
      </div>
    );
  }
}

export default Pet;
