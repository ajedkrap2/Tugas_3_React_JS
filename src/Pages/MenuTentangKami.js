import React, { Component } from 'react';

const desc = "Warga Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"

class MenuTentangKami extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tentang: desc
    }
  }

  render() {
    return (
      <div>
        <center>
          <p> Tentang Kami </p>
          {this.state.tentang}
        </center>
      </div>
    );
  }
}


export default MenuTentangKami;
