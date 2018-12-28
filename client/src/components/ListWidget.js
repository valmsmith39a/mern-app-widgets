import React from 'react';

const ListWidget = ({ widgets, deleteWidget }) => {

  return (
    <ul>
      {
        widgets &&
          widgets.length > 0 ?
            (
              widgets.map(widget => {
                return (
                  <li key={widget._id} onClick={() => deleteWidget(widget._id)}>{widget.action}</li>
                )
              })
            )
            :
            (
              <li>No widget(s) left</li>
            )
      }
    </ul>
  )
}

export default ListWidget