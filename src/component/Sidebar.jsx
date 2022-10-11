import React, { Component } from "react";
import { Await } from "react-router-dom";

class Sidebar extends Component {




  constructor() {
    super();
    this.state = {
      sidebar: false,
      minibar: true,
      items: {}
    };
  }
  

  componentDidMount() {
    let items = {};
    this.props.items.forEach(item => {
      if (Array.isArray(item.options)) {
        let checkArr = item.options.filter(option => option.menuItem === true);
        if (checkArr.length) {
          items[item.name] = false;
        }
      }
    });

    this.setState({ items });
  }

  onHoverOn = e => {
    e.preventDefault();
    if (this.state.minibar) {
      this.setState({ minibar: false });
    }
  };

  onHoverOff = e => {
    e.preventDefault();
    if (!this.state.minibar) {
      this.setState({ minibar: true });
    }
  };

  setMinibar = e => {
    let newItems = {};
    for (let key in this.state.items) {
      newItems[key] = false;
    }
    this.setState(prevState => ({
      minibar: !prevState.minibar,
      items: newItems
    }));
  };

  openChild = (e, name) => {
    if (this.state.items.hasOwnProperty(name)) {
      this.setState(prevState => ({
        ...prevState,
        items: {
          ...prevState.items,
          [name]: !prevState.items[name]
        }
      }));
    } else {
    }
  };

  renderSidebar = item => {
    const { sidebar } = this.props;
    const { items, minibar } = this.state;

    let component = (
      <div className="sidebar-inner-item">
        <div
          className="sidebar-parent"
          onClick={e => this.openChild(e, item.name)}
        >
          <div className="sidebar-inner-icon">
            <img
              alt="si"
              width={20}
              height={20}
              src={`/image/${
                item.icon
              }`}
            />
          </div>
          <div className="sidebar-inner-text">
            {typeof items[item.name] === "boolean" && (
              <span className="sidebar-more-icon">
                {items[item.name] ? "-" : "+"}
              </span>
            )}
            <h6>{item.name}</h6>
          </div>
        </div>
        {items[item.name] && this.renderSubItems(item.options)}
      </div>
    );
    if (!sidebar || minibar) {
      component = (
        <div key={item.name} className="sidebar-inner-item">
          <div className="sidebar-parent">
            <div className="sidebar-icon">
              <img
                alt="si"
                width={20}
                height={20}
                src={`/image/${item.icon}`}
                // {`/image/home.png${
                //   item.icon
                // }`}
              />
            </div>
          </div>
        </div>
      );
    }
    return component;
  };

  renderSubItems = options => {
    if (Array.isArray(options)) {
      return options.map(option => {
        if (option.menuItem) {
          return (
            <div className="sidebar-child" onClick={this.openChild}>
              <div className="sidebar-inner-icon">
                <img
                  alt="si"
                  width={20}
                  height={20}
                  src={`/image/${
                    option.icon
                  }`}
                />
              </div>
              <div className="sidebar-inner-text">
                <h6>{option.name}</h6>
              </div>
            </div>
          );
        }
        return null;
      });
    }
  };

  render() {
    const { sidebar } = this.props;
    const { minibar } = this.state;

    return (
      <div id={!sidebar ? "no-sidebar" : minibar ? "mini-sidebar" : "sidebar"}>
        {/* <h6 className="user-type">Superadmin</h6> */}
        <div
          id="toggler"
          className="sidebar-wrapper"
          onMouseOver={this.onHoverOn}
          onMouseLeave={this.onHoverOff}
        >
          <div className="sidebar-inner-wrap">
            {this.props.items.map(item => {
              if (item.menuItem) {
                return this.renderSidebar(item);
              }
              return null;
            })}
          </div>
          <div className="mini-sidebar-toggler">
            <span onClick={this.setMinibar}>{minibar ? "➡" : "⬅"}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
