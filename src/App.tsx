import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coupon from './components/Coupon';
import Home from './components/Home';
import Qrcode from './components/Qrcode';
import { DivAppStyle } from './styles/styles';
import { base_url } from './utils/constants';
import { ObjectType } from './utils/types';

function App() {

  const [couponData, setCouponData] = useState<ObjectType>();
  const [qrcode, setQrcode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(base_url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setCouponData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handlerOpenNewWindow = () => {
    setQrcode((currentQrcode) => {
      window.open(`/qrcode?qrcode=${couponData!.qrcodes![currentQrcode]}`, '_blank');
      return currentQrcode;
    });
  }

  return (
    <DivAppStyle>
      {couponData && <Routes>
        <Route path={'*'} element={<Home recognizePage={couponData!.recognizePage!} />} />
        <Route path={'coupons'} element={<Coupon changePage={setQrcode} openNewWindow={handlerOpenNewWindow} couponData={couponData} />} />
        <Route path={'qrcode'} element={<Qrcode/>} />
      </Routes>}
    </DivAppStyle>
  );
}

export default App;
