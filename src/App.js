import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSearchBar from "../src/Components/Home/HeaderSearchBar";
import Layout from "../src/Components/Home/Layout";
import "./App.css";
import CatagoryProduct from "./Components/CategoryPoduct/CatagoryProduct";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import FavoritePage from "./Components/Favorite/FavoritePage";
import MyAccount from "./Components/MyAccount/MyAccount";
import MyMessage from "./Components/MyMessage/MyMessage";
import NaviBar from "./Components/NaviBar/NaviBar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ShoppingCardPage from "./Components/ShoppinfCard/ShoppingCardPage";

// user info create context
export const UserInfoContext = createContext();

function App() {
  const [loggingUserInfo, setLoginUsserInfo] = useState({});

  console.log(loggingUserInfo);

  // useEfect for read user info
  useEffect(() => {
    // fetch fins user
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindUser", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loggingUserInfo }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is find data from app js :", data[0]);
        setLoginUsserInfo(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [loggingUserInfo]);

  return (
    <div className="App">
      {/* home page layout */}
      <UserInfoContext.Provider value={[loggingUserInfo, setLoginUsserInfo]}>
        <Router basename="/QueenZ-Zone">
          <Switch>
            <Route exact path="/">
              <HeaderSearchBar></HeaderSearchBar>
              <Layout></Layout>
              <NaviBar></NaviBar>
            </Route>
            <PrivateRoute path="/Favorite">
              <HeaderSearchBar></HeaderSearchBar>
              <FavoritePage></FavoritePage>
              <NaviBar></NaviBar>
            </PrivateRoute>
            <Route exact path="/Home">
              <HeaderSearchBar></HeaderSearchBar>
              <Layout></Layout>
              <NaviBar></NaviBar>
            </Route>
            <Route exact path="/Category">
              <HeaderSearchBar></HeaderSearchBar>
              <Layout></Layout>
              <NaviBar></NaviBar>
            </Route>

            <Route path={`/MyMessage`}>
              <HeaderSearchBar></HeaderSearchBar>
              <MyMessage></MyMessage>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/ShoppingCard">
              <HeaderSearchBar></HeaderSearchBar>
              <ShoppingCardPage></ShoppingCardPage>
              <NaviBar></NaviBar>
            </Route>

            <Route path="/MyAccount">
              <HeaderSearchBar></HeaderSearchBar>
              <MyAccount></MyAccount>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/Cloth">
              <HeaderSearchBar></HeaderSearchBar>
              <CatagoryProduct></CatagoryProduct>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/Dashboard">
              <MainDashboard></MainDashboard>
            </Route>

            <Route path="*">
              <HeaderSearchBar></HeaderSearchBar>

              <NaviBar></NaviBar>
            </Route>
          </Switch>
        </Router>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
