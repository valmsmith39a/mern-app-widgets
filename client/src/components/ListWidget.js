import React from 'react';
import { connect } from 'react-redux'

class ListWidget extends React.Component {
  render() {
    const { widgets, deleteWidget } = this.props
    return (
      <ul>
        {
          widgets &&
            widgets.length > 0 ?
              (
                widgets.map(widget => {
                  return (
                    <li key={widget._id} onClick={() => deleteWidget(widget._id)}>{widget}</li>
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
}

const mapStateToProps = ({widgetsPage}) => {
  return { widgets: widgetsPage.widgets };
};

export default connect(mapStateToProps, null)(ListWidget)

// const ListWidget = ({ widgets, deleteWidget }) => {
//   return (
//     <ul>
//       {
//         widgets &&
//           widgets.length > 0 ?
//             (
//               widgets.map(widget => {
//                 return (
//                   <li key={widget._id} onClick={() => deleteWidget(widget._id)}>{widget.action}</li>
//                 )
//               })
//             )
//             :
//             (
//               <li>No widget(s) left</li>
//             )
//       }
//     </ul>
//   )
// }
