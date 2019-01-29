import React, { Component } from "react";

export default class CenterMenuAreaRight extends Component {
  render() {
    let { menur } = this.props;
    return (
      <div className="menu-section">
        <div id="title-container">
          <h1>{menur.name}</h1>
          <p style={{fontStyle: 'italic'}} className="descr">{menur.info}</p>
        </div>
        <table >
          {menur.items.map(menuitem => (
            <tbody id="item-description" key={menuitem.name}>
              <tr>
                <td style={{width: '100%', padding: '8px 8px 8px 0',textAlign: 'left'}} className="itemTag">{menuitem.name}</td>
                <td style={{width: '50%',  padding: '8px'}} className="price">{menuitem.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
