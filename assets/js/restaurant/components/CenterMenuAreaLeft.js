import React, { Component } from "react";

export default class CenterMenuAreaLeft extends Component {
  render() {
    let { menu } = this.props;
    console.log(menu);
    return (
      <div className="menu-section">
        <div id="title-container">
          <h1>{menu.name}</h1>
          <p style={{fontStyle: 'italic'}} className="descr">{menu.info}</p>
        </div>
        <table >
          {menu.items.map(menuitem => (
            <tbody id="item-description" key={menuitem.name}>
              <tr>
                <td style={{width: '100%', padding: '8px 8px 8px 0',textAlign: 'left'}} className="itemTag">
                  {menuitem.name}<br />
                  <p style={{fontSize: '14px'}}>{menuitem.iteminfo}</p>
                </td>
                <td style={{width: '50%',  padding: '8px'}} className="price">{menuitem.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
