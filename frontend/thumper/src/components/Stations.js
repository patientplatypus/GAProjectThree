import React, { Component } from 'react';
import ListStations from './ListStations';

class Stations extends Component {
  // constructor(props){
  //   super(props);
  //   Stations:{
  //
  //   }
  // }


//
// componentWillMount(){
//   this.props.clearRedirect()
// }



  render() {
    let listStations;
    if(this.props.stations){
      listStations = this.props.stations.data.map(station => {
        // console.log(station);
        return (
          <ListStations key={station._id} station={station} handleStationClicked={this.props.handleStationClicked.bind(this)}/>
        );
      });
    }
    return (
      <div className="Stations">
        {listStations}
      </div>
    );
  }
}

export default Stations;
