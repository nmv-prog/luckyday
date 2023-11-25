import React, { useEffect, useState } from 'react'
import { gifts_base_url } from '../../utils/constants';
import { GiftsType } from '../../utils/types';
import Car from './Car';
import Apartment from './Apartment';
import Vacation from './Vacation';

const Gifts = () => {

    const [giftsData, setGiftsData] = useState<GiftsType>();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(gifts_base_url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setGiftsData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

  return (
        <Car image={giftsData?.car} imageGenie={giftsData?.imageGenie}/>
        // <Apartment image={giftsData?.apartment} imageGenie={giftsData?.imageGenie}/>
        // <Vacation image={giftsData?.vacation} imageGenie={giftsData?.imageGenie}/>
  )
}

export default Gifts