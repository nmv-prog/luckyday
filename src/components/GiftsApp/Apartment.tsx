import React from 'react'
import { ApartmentImageStyle, GenieStyle, GiftPageStyle, TitleStyle } from '../../styles/giftsStyles'

interface Props {
  image?: string,
  imageGenie?: string
}

const Apartment = ({ image, imageGenie }: Props) => {
  return (
    <GiftPageStyle>
      <TitleStyle>Congratulations!!! You got an apartment!</TitleStyle>
      <ApartmentImageStyle src={image} alt='apartment'></ApartmentImageStyle>
      <GenieStyle src={imageGenie} alt='genie'></GenieStyle>
    </GiftPageStyle>
  )
}

export default Apartment