//
import React, { Component } from "react";

import MenuKontak from "./Page/MenuKontak";
import MenuProduct from "./Page/MenuProduct";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";

const Header = () => {
  return (
    <div>
      <h1>Ini halaman Header</h1>
    </div>
  );
};
const Footer = () => {
  var nama = "niomic";
  return (
    <div>
      <h1>Ini halaman Footer {nama}</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <MenuUtama />
        <Footer />
      </div>
    );
  }
}

export default App;
