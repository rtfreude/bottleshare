import React, { Component } from 'react';
import $                    from 'jquery';
import { AutoComplete }     from 'material-ui';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import './searchbeer.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class SearchBeer extends Component {
  constructor(props) {
    super(props);
     this.state = {
      beerName: 'Naughty 90',
      inputValue: '',
      displayName: 'Naughty 90',
      dataSource: [],
      beerStyle: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onUpdateInput = this.onUpdateInput.bind(this);
  }

  onUpdateInput(inputValue) {
    const self = this;

    this.setState({
      inputValue: inputValue
    }, function() {
      self.performSearch();
    });
  }

  componentDidMount() {
    this.beerCall(this.state.inputValue);
  }

  handleClick () {
    //console.log('input value: ', this.state.inputValue)
    this.beerCall(this.state.inputValue);
  }

  performSearch() {
    const self = this;
    console.log(self.state.inputValue)

    if(this.state.inputValue !== '') {

      return $.get('/searchbeer', {inputValue: self.state.inputValue})
        .then((data) => {
          console.log('performSearch', data)
          let retrievedSearchTerms = data.sort();
          //console.log('sort data', retrievedSearchTerms)
        self.setState({
          dataSource: retrievedSearchTerms
        });

      });
    }
  }

  beerCall() {

    return $.get('/beername', {beerRequest: this.state.inputValue})
    .then((data) => {
      //console.log('beerCall', data)
        this.setState({
          beerName: data.data[0].name,
          displayName: data.data[0].name,
          beerStyle: data.data[0].style.shortName,
        })
      })
  }

  render() {
    return (
      <div className="beer-search">
        <div className="input-group">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
              hintText          = "Input beer..."
              dataSource        = {this.state.dataSource}
              filter            = {AutoComplete.noFilter}
              onTouchTap        = {this.handleClick}
              onUpdateInput     = {this.onUpdateInput}
              onNewRequest      = {this.handleClick}
              floatingLabelText = "Input beer name and hit enter..."
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default SearchBeer;