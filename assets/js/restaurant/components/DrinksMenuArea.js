import React, { Component } from "react";

export default class DrinksMenuArea extends Component {
  render() {
    let { menud } = this.props;
    return (
      <div className="menu-section">
        <div id="title-container">
          <h1>{menud.name}</h1>
          <p style={{fontStyle: 'italic'}} className="descr">{menud.info}</p>
        </div>
        <table >
          {menud.items.map(menuitem => (
            <tbody id="item-description" key={menuitem.name}>
              <tr>
                <td style={{width: '100%', padding: '8px 8px 8px 0',textAlign: 'left'}} className="itemTag">
                  {menuitem.name}<br/>
                  <ul style={{fontSize: '14px', display: 'block'}}>
                    <li>{menuitem.iteminfo}</li>
                  </ul>
                </td>
                <td style={{width: '50%', padding: '8px'}} className="price">{menuitem.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
