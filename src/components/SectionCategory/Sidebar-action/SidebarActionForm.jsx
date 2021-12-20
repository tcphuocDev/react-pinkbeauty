import React from 'react'
// import './sidebarActionFrom.scss';

function SidebarActionForm(props) {
    return (
        <div className="sidebar-options-form">
        <h6 className="sidebar-options-title">Khoảng giá</h6>
        <div className="sidebar-options-content">
          <ul className="sidebar-options-list">
            <li className="sidebar-options-list-item">
              <div className="sidebar-form-group">
                <label htmlFor className="checkbox">
                  <input type="checkbox" id />
                  1-99
                </label>
              </div>
            </li>
            <li className="sidebar-options-list-item">
              <div className="sidebar-form-group">
                <label htmlFor className="checkbox">
                  <input type="checkbox" id />
                  100-199
                </label>
              </div>
            </li>
            <li className="sidebar-options-list-item">
              <div className="sidebar-form-group">
                <label htmlFor className="checkbox">
                  <input type="checkbox" id />
                  200-299
                </label>
              </div>
            </li>
            <li className="sidebar-options-list-item">
              <div className="sidebar-form-group">
                <label htmlFor className="checkbox">
                  <input type="checkbox" id />
                  300-399
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    )
}

export default SidebarActionForm

