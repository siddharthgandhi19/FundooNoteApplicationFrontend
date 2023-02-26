import React from 'react'
import '../TakeNote1/TakeNote1.css'
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { InputBase } from '@mui/material';

function TakeNote1(props) {

    const Submit = () => {
        props.openNote()
    }

    return (
        <div onClick={Submit} className="noteonemaincontainer">
            <div className="takenote">
                <InputBase placeholder='Take a note...' /></div>
            <div className="sidenavigation">
                <IconButton> <CheckBoxOutlinedIcon /> </IconButton>
                <IconButton> <BrushOutlinedIcon /> </IconButton>
                <IconButton> <ImageOutlinedIcon /> </IconButton>
            </div>
        </div>
    )
}
export default TakeNote1