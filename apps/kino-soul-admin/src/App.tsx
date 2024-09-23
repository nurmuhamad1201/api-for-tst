import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WatchlistList } from "./watchlist/WatchlistList";
import { WatchlistCreate } from "./watchlist/WatchlistCreate";
import { WatchlistEdit } from "./watchlist/WatchlistEdit";
import { WatchlistShow } from "./watchlist/WatchlistShow";
import { MovieList } from "./movie/MovieList";
import { MovieCreate } from "./movie/MovieCreate";
import { MovieEdit } from "./movie/MovieEdit";
import { MovieShow } from "./movie/MovieShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"KinoSoul"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Watchlist"
          list={WatchlistList}
          edit={WatchlistEdit}
          create={WatchlistCreate}
          show={WatchlistShow}
        />
        <Resource
          name="Movie"
          list={MovieList}
          edit={MovieEdit}
          create={MovieCreate}
          show={MovieShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
