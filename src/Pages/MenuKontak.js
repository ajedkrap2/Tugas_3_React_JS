import React, { Component } from 'react';

const address = "Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860";
const phone = "081312345678";

class MenuKontak extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alamat: address,
      kontak: phone
    }
  }

  render() {
    return (
      <div>
        <center>
          <h3>{this.state.alamat}</h3>
          <h4>Kontak : {this.state.kontak}</h4>
        </center>
      </div>
    );
  }
}


export default MenuKontak;
