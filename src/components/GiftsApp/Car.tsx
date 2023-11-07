import React from 'react'
import { CarImageStyle, GenieStyle, GiftPageStyle, TitleStyle } from '../../styles/giftsStyles'

interface Props {
    image?: string,
    imageGenie?: string
}

const Car = ({ image, imageGenie }: Props) => {
    return (
        <GiftPageStyle>
            <TitleStyle>Congratulations!!! You got a car!</TitleStyle>
            <CarImageStyle src={image} alt='car'></CarImageStyle>
            <GenieStyle src={imageGenie} alt='genie'></GenieStyle>
        </GiftPageStyle>
    )
}

export default Car