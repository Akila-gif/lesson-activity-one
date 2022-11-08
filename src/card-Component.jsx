import React from "react";
import {CardImg} from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
class CardComponent extends React.Component{
    render() {
        return(
            <div className="col pt-3" key="1">
                <div className="card h-100 ">
                    <div className="card-header" >{this.props.title}</div>
                    <div  style={{backgroundColor : "#282c34"}}>
                        <CardImg src={logo} className="App-logo" ></CardImg>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.subTitle}</h5>
                        <p className="card-text">{this.props.discription}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.props.time}</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;