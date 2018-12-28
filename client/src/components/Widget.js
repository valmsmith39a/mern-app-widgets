import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListWidget from './ListWidget';

class Widget extends Component {

  state = {
    widgets: []
  }

  componentDidMount(){
    this.getWidgets();
  }

  getWidgets = () => {
    axios.get('/api/widgets')
      .then(res => {
        if(res.data){
          this.setState({
            widgets: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteWidget = (id) => {

    axios.delete(`/api/widgets/${id}`)
      .then(res => {
        if(res.data){
          this.getWidgets()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { widgets } = this.state;

    return(
      <div>
        <h1>My Widget(s)</h1>
        <Input getWidgets={this.getWidgets}/>
        <ListWidget widgets={widgets} deleteWidget={this.deleteWidget}/>
      </div>
    )
  }
}

export default Widget;