import React from 'react'
import { GenieStyle, GiftPageStyle, TitleStyle, VacationImageStyle } from '../../styles/giftsStyles'

interface Props {
  image?: string,
  imageGenie?: string
}

const Vacation = ({ image, imageGenie }: Props) => {
  return (
    <GiftPageStyle>
      <TitleStyle>Congratulations!!! You got a vacation!</TitleStyle>
      <VacationImageStyle src={image} alt='vacation'></VacationImageStyle>
      <GenieStyle src={imageGenie} alt='genie'></GenieStyle>
    </GiftPageStyle>
  )
}

export default Vacation