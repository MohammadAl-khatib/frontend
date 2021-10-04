import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import DataCard from "./components/DataCard";
import Favs from "./components/Favs";
import Favodal from "./components/Favodal";
import NAv from "./components/NAv";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favs: [],
      showModal: false,
      item: {},
      strDrink: "",
      idDrink: "",
      strDrinkThumb: "",
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_PORT}/data`).then((res) =>
     { console.log(res.data)
       this.setState({
        data: res.data.drinks,
      })}
    );
    axios.get(`${process.env.REACT_APP_BACKEND_PORT}/get-favs`).then((res) =>
     { console.log(res.data)
       this.setState({
        favs: res.data,
      })}
    );
  };

  addToFavourites = (item) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_PORT}/create-fav?email=${this.props.auth0.user.email}`, item)
      .then((res) => {
        console.log(res.data);
        this.setState({
          favs: res.data,
        });
      });
  };
  updateFav = () => {
    let updatedFav = {
      idDrink: this.state.idDrink,
      strDrink: this.state.strDrink,
      strDrinkThumb: this.state.strDrinkThumb,
    };
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_PORT}/update-fav/${this.state.item._id}`,
        updatedFav
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          favs: res.data,
        });
      });
  };
  handleOpen = (item) => {
    this.setState({
      showModal: true,
      item: item,
      strDrink: item.favs.strDrink,
      idDrink: item.favs.idDrink,
      strDrinkThumb: item.favs.strDrinkThumb,
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  handleStrDrink = (e) => {
    this.setState({
      strDrink: e.target.value,
    });
  };
  deleteFav = () => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_PORT}/delete-fav/${this.state.item._id}`
      )
      .then((res) => {
        this.setState({
          favs: res.data,
        });
      });
  };

  render() {
    return (
   
      <Router>
          < NAv/>
          {!this.props.auth0.isAuthenticated && <LoginButton/>}
          {this.props.auth0.isAuthenticated && <LogoutButton/>}
        <Switch>
          <div id="drinks">
            <Route exact path="/home">
              <DataCard
                data={this.state.data}
                addToFavourites={this.addToFavourites}
              />
            </Route>
            <Route exact path = '/favs'>
              <Favs favs={this.state.favs} handleOpen={this.handleOpen} />
              {this.state.showModal && (
                <Favodal
                  handleClose={this.handleClose}
                  showModal={this.state.showModal}
                  item={this.state.item}
                  handleStrDrink={this.handleStrDrink}
                  updateFav={this.updateFav}
                  deleteFav={this.deleteFav}
                />
              )}
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default withAuth0(App);
