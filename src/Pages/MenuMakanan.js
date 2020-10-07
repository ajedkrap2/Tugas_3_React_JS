import React, { Component } from 'react';

import ListMakanan from "../ListData/ListMakanan"

import NasiKentut from "../Assets/nasi-kentut.webp"
import NasiKuning from "../Assets/nasi-kuning.jpg"
import NasiPadang from "../Assets/nasi-padang.jpg"
import SateAyam from "../Assets/sate.png"
import SotoLamongan from "../Assets/sotolamongan.png"

class MenuMakanan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pesan: 0
    }
    this.rubahPesanan = this.rubahPesanan.bind(this)
    this.pesanan = this.pesanan.bind(this)
  }

  rubahPesanan() {
    this.setState((state, props) => {
      return {
        pesan: state.pesan++
      }
    })
  }

  pesanan(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <h3>Daftar Makanan yang disediakan : </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan pic={NasiPadang} />
                <center>
                  <button onClick={() => this.rubahPesanan()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={SateAyam} />
                <center>
                  <button onClick={() => this.rubahPesanan()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={SotoLamongan} />
                <center>
                  <button onClick={() => this.rubahPesanan()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={NasiKentut} />
                <center>
                  <button onClick={() => this.rubahPesanan()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={NasiKuning} />
                <center>
                  <button onClick={() => this.rubahPesanan()}>Pesan Makanan</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input
          type="text"
          onChange={e => this.pesanan(e)}
        />
        <h3>Pesanan Anda : {this.state.pesan}</h3>
      </div>
    );
  }
}


export default MenuMakanan;
