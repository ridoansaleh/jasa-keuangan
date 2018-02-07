import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../assets/Custom.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { show : 0 };
    this.changeProductDetail = this.changeProductDetail.bind(this);
  }

  changeProductDetail(e, data) {
    e.preventDefault();
    this.setState({
      show: data
    });
  }


  render() {
    const green = {borderBottom: '4px solid #42b549'};
    const grey = {borderBottom: '4px solid #c7c7c7'};
    const greenColor = {color:'#42b549'};
    const greyColor =  {color:'#c7c7c7'};
    return (
      <div className="container">
        <p className="app-title">Ajukan Aplikasi Produk Keuangan</p>
        <div className="row justify-content-center">
            <div className="box" style={this.state.show===1 ? green : grey} onClick={(e) => this.changeProductDetail(e, 1)}>
              <div>
                <i className="wrapper-icon box-icon mitratopper-icon"></i>
              </div>
              <p className="box-title">Mitra Toppers</p>
              <p className="box-content">Mitra Penyedia Pinjaman Merchant Tokopedia</p>
              <p className="box-detail" style={this.state.show===1 ? greenColor:greyColor}>Lihat Detail Produk</p>
            </div>
            <div className="box" style={this.state.show===2 ? green : grey} onClick={(e) => this.changeProductDetail(e, 2)}>
              <div>
                <i className="wrapper-icon box-icon kartukredit-icon"></i>
              </div>
              <p className="box-title">Kartu Kredit</p>
              <p className="box-content">Ajukan Kartu Kredit yang sesuai dengan kebutuhan</p>
              <p className="box-detail" style={this.state.show===2 ? greenColor:greyColor}>Lihat Detail Produk</p>
            </div>
            <div className="box" style={this.state.show===3 ? green : grey} onClick={(e) => this.changeProductDetail(e, 3)}>
              <div>
                <i className="wrapper-icon box-icon pinjamanonline-icon"></i>
              </div>
              <p className="box-title">Pinjaman Online</p>
              <p className="box-content">Ajukan Pinjaman tanpa Agunan yang Sesuai</p>
              <p className="box-detail" style={this.state.show===3 ? greenColor:greyColor}>Lihat Detail Produk</p>
            </div>
            <div className="box" style={this.state.show===4 ? green : grey} onClick={(e) => this.changeProductDetail(e, 4)}>
              <div>
                <i className="wrapper-icon box-icon asuransi-icon"></i>
              </div>
              <p className="box-title">Asuransi</p>
              <p className="box-content">Ajukan Asuransi yang sesuai dengan kebutuhan</p>
              <p className="box-detail" style={this.state.show===4 ? greenColor:greyColor}>Lihat Detail Produk</p>
            </div>
        </div>

        <ProductDetail isComponent={this.state.show}/>

      </div>
    );
  }
}

export default App;
