import { AllHobbiesStyle, HobbyNameStyle, HobbyStyle, ImageHobbyStyle } from '../../../styles/SignUpStyles/HobbiesStyles'
import { ChapterStyle } from '../../../styles/SignUpStyles/SignUpStyle'
import { hobbies } from '../../../utils/constants'

const Hobbies = () => {
    return (
        <>
            <ChapterStyle style={{ top: '1633px', left: '55px' }}>Hobbies</ChapterStyle>
            <AllHobbiesStyle>
                {hobbies.map((hobby, key) => {
                    return <HobbyStyle key={key}>
                        <ImageHobbyStyle src={hobby[0]} alt={hobby[1]} />
                        <HobbyNameStyle>{hobby[1]}</HobbyNameStyle>
                    </HobbyStyle>
                })}
            </AllHobbiesStyle>
        </>
    )
}

export default Hobbies