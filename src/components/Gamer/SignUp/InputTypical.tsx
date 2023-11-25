import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { CustomMUIFormControlStyle, CustomMUIInputLabelStyle, CustomMUIInputStyle } from '../../../styles/SignUpStyles/InputTypicalStyles';

interface Props {
  label: string
}

const InputTypical = ({ label }: Props) => {
  return (
    <FormControl style={CustomMUIFormControlStyle}>
      <InputLabel htmlFor={label} style={CustomMUIInputLabelStyle}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </InputLabel>
      <Input id={label} required style={CustomMUIInputStyle} />
    </FormControl>
  )
}

export default InputTypical