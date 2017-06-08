import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
  }

  handleChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: type})
    })
  }

  handleFindPetsClick() {

    let url = "/api/pets"

    if ( this.state.filters.type !== "all") { url += `?type=${this.state.filters.type}`}

    fetch(url).then(info => info.json()).then(pets => this.setState({ pets }))

  }

  handleAdoptPet(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
