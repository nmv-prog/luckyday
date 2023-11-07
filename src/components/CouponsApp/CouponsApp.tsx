import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Coupon from './Coupon';
import Qrcode from './Qrcode';
import { ObjectType } from '../../utils/types';
import { coupons_base_url } from '../../utils/constants';
import { DivAppStyle } from '../../styles/couponsStyles';

function CouponsApp() {

  const [couponData, setCouponData] = useState<ObjectType>();
  const [qrcode, setQrcode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(coupons_base_url);
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
      
      let parts = currentQrcode.split(/(?=[A-Z])/);

      window.open(`/qrcode?qrcode=${couponData!.qrcodes![currentQrcode]}&shopName=${parts[parts.length - 1]}`, '_blank');
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

export default CouponsApp;
