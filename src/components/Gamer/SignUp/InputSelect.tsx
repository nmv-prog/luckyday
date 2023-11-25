import { MenuItem } from '@material-ui/core'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { CustomMUIFormControlStyle, CustomMUIInputLabelStyle, CustomMUISelectStyle } from '../../../styles/SignUpStyles/InputSelectStyles';

interface Props {
    label: string[],
    items: string[],
}

const InputSelect = ({ label, items }: Props) => {
    // const [familyStatus, setFamilyStatus] = useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setFamilyStatus(event.target.value);
    // };

    return (
        <FormControl style={CustomMUIFormControlStyle} variant="standard" >
            <InputLabel style={CustomMUIInputLabelStyle} id={label[0]}>{label[1]}</InputLabel>
            <Select
                sx={CustomMUISelectStyle}
                labelId={label[0]}
                id={label[0]}
                // value={familyStatus}
                // onChange={handleChange}
                label={label[0]}
            >
                {items.map((item, key) => {
                    return <MenuItem key={key} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default InputSelect