import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    if (this.props.isComponent === 1) {
      return (
        <div className="row product-detail">
          <div className="col-lg-8 col-md-6">
            <h3 className="product-detail-title">Mitra Toppers</h3>
            <p className="product-detail-content">
              Mitra toppers adalah program kerja sama Tokopedia dengan penyedia
              pinjaman yang bertujuan memudahkan Merchant Tokopedia untuk
              mendapatkan modal bagi pengembangan bisnis.
            </p>
            <button className="btn btn-sm btn-success btn-product-detail">
              Ajukan Pinjaman
            </button>
          </div>
          <div className="col-lg-4 col-md-6 left-detail-block">
            <h4>Benefit Mitra Toppers</h4>
            <ul>
              <li> Data Pendukung</li>
              <li> Banyak Pilihan Mitra</li>
              <li> Menambah Stok dan Varian Produk</li>
              <li> Menambah Karyawan</li>
              <li> Meningkatkan Penjualan lewat Promosi</li>
            </ul>
          </div>
        </div>
      );
    } else if (this.props.isComponent === 2) {
      return (
        <div className="row product-detail">
          <div className="col-lg-8 col-md-6">
            <h3 className="product-detail-title">Kartu Kredit</h3>
            <p className="product-detail-content">
              Temukan berbagai jenis kartu kredit dari bank-bank besar di
              Indonesia, dan nikmati beragam penawaran menariknya. Anda juga
              dapat membandingkan beberapa jenis kartu kredit sekaligus di
              Tokopedia, ajukan kartu kredit pastinya jadi lebih mudah dan
              cepat.
            </p>
            <button className="btn btn-sm btn-success btn-product-detail">
              Ajukan Kartu Kredit
            </button>
          </div>
          <div className="col-lg-4 col-md-6 left-detail-block">
            <h4>Benefit Kartu Kredit</h4>
            <ul>
              <li> Pengajuan Online Kapan & Di Mana Saja</li>
              <li> Proses Cepat, Mudah & Aman</li>
              <li> Tanpa Dipungut Biaya</li>
              <li> Kerahasiaan Data Terjamin</li>
              <li> Nikmati Berbagai Promo Menarik</li>
            </ul>
          </div>
        </div>
      );
    } else if (this.props.isComponent === 3) {
      return (
        <div className="row product-detail">
          <div className="col-lg-8 col-md-6">
            <h3 className="product-detail-title">Pinjaman Online</h3>
            <p className="product-detail-content">
              Pinjaman Personal adalah program kerjasama Tokopedia dengan
              partner penyedia pinjaman yang bertujuan memudahkan pengguna
              Tokopedia untuk mendapatkan pinjaman tanpa agunan yang sesuai.
            </p>
            <button className="btn btn-sm btn-success btn-product-detail">
              Ajukan Pinjaman
            </button>
          </div>
          <div className="col-lg-4 col-md-6 left-detail-block">
            <h4>Benefit Pinjaman Online</h4>
            <ul>
              <li> Banyak Pilihan Mitra Pinjaman</li>
              <li> Proses Cepat dan Mudah</li>
              <li> Pilih dan Bandingkan Pinjaman Sesuai Kebutuhan</li>
            </ul>
          </div>
        </div>
      );
    } else if (this.props.isComponent === 4) {
      return (
        <div className="row product-detail">
          <div className="col-lg-8 col-md-6">
            <h3 className="product-detail-title">Asuransi</h3>
            <p className="product-detail-content">
              Bingung dengan penawaran asuransi yang begitu beragam? Pelajari
              lebih lanjut berbagai macam jenis asuransi yang sesuai dengan
              kebutuhan Anda hanya di Tokopedia. Pengajuan aplikasi relatif
              lebih cepat dan lebih mudah.
            </p>
            <button className="btn btn-sm btn-success btn-product-detail">
              Ajukan Asuransi
            </button>
          </div>
          <div className="col-lg-4 col-md-6 left-detail-block">
            <h4>Benefit Asuransi</h4>
            <ul>
              <li> Proses Mudah & Cepat</li>
              <li> Beragam Pilihan</li>
              <li> Premi Fleksibel</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetail;
