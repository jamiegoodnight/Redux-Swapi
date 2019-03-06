import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchPeople } from "../actions/index";

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    if (this.props.loading===true) {
        <p>LOADING</p>
    }
    return ( 
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  loading: state.charsReducer.loading,
  error: state.charsReducer.error
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchPeople
  }
)(CharacterListView);
