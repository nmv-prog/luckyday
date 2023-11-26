import { FormControl } from '@material-ui/core';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CustomMUIDatePickerProps, CustomMUIDatePickerStyle, CustomMUIFormControlStyle } from '../../../styles/GamerSignUpStyles/InputDateStyles';
// import { useState } from 'react';

const InputDate = () => {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };

  return (
    <FormControl style={CustomMUIFormControlStyle}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label='Date of Birth' sx={CustomMUIDatePickerStyle}
          slotProps={{
            openPickerIcon: CustomMUIDatePickerProps.openPickerIcon,
            textField: CustomMUIDatePickerProps.textField,
          }} />
      </LocalizationProvider>
    </FormControl>
  )
}

export default InputDate