import React from 'react'
import './toobarProduct.scss';
function ToobarProduct(props) {
    return (
        <div id="toolbar-product" className="toolbar toolbar-product">  
        <div className="toolbar-content">
          <div className="toolbar-sort-group">
            <label htmlFor>Sắp xếp theo</label>
            <select name id className="toolbar-sort-select">
              <option value className="select-item">Phổ biến</option>
              <option value className="select-item">Bán chạy</option>
              <option value className="select-item">A-Z</option>
              <option value className="select-item">Z-A</option>
            </select>
          </div>
          <div className="toolbar-content-mode">
            <div className="toolbar-mode toolbar-mode-grid active">
              <ion-icon className="toolbar-mode-icon toolbar-mode-icon-gird" name="grid-outline" />
            </div>
            <div className="toolbar-mode toobar-mode-list">
              <ion-icon className="toolbar-mode-icon toolbar-mode-icon-list" name="list-outline" />
            </div>
          </div>
        </div>
      </div>
      
    )
}


export default ToobarProduct

