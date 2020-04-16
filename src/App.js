import React from 'react';
import BaiTapGioHangRedux from './components/BaiTapRedux/BaiTapGioHangRedux';
import BaiTapBurger from './components/BaiTapBurgerRedux/BaiTapBurger';
// import Layout from './components/BaiTap/Layout';
// import BaiTapComponent from './components/BaiTapComponents/BaiTapComponent';
// import BaiTapGioHang from './components/Props/BaiTapGioHang/BaiTapGioHang';

function App() {
  return (
    <div>
      {/* <Layout /> */}
      {/* <BaiTapComponent /> */}
      {/* <BaiTapGioHang /> */}
      <BaiTapGioHangRedux />
      <hr />
      <br />
      <br />
      <br />
      <BaiTapBurger />
      
    </div>

  );
}

export default App;
