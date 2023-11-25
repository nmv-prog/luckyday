import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { CustomMUIFormControlStyle, CustomMUIInputLabelStyle, CustomMUIInputStyle, StarStyle } from '../../../styles/SignUpStyles/InputRequiredStyles';

interface Props {
  label: string[]
}

const InputRequired = ({ label }: Props) => {
  return (
    <FormControl style={CustomMUIFormControlStyle}>
      <InputLabel htmlFor={label[0]} style={CustomMUIInputLabelStyle}>
        <StarStyle>*</StarStyle>
        {label[1]}
      </InputLabel>
      <Input id={label[0]} required style={CustomMUIInputStyle} />
    </FormControl>
  )
}

export default InputRequired