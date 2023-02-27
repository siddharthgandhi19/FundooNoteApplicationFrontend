import React, { useState } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { NoteColorApi } from "../../services/DataServices";
import { positions } from "@mui/system";

function ColorPopper(props) {
    const colors = ["#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#e8eaed", "#e6c9a8", "#fdcfe8"]

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const PickColor = (color) => {
        if (props.action === "create") {
            console.log("color coming from note2")
            props.listenToColorPopper1(color)
        } else if (props.action === "update") {
            console.log("color coming from note3")
            props.listenToColorPopper2(color)
        }
    }
    return (
        <>
            <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                <PaletteOutlinedIcon style={{ color: "#202124" }} fontSize="small" />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, border: 'solid white', p: 1, borderRadius: '10px', bgcolor: 'background.paper', width:350, display: 'flex', justifyContent: 'space-between', position:'relative' , left:'180px' }}>
                    {
                        colors.map(color => (
                            <div style={{ width: 28, height: 28, border: '1 px solid red', borderRadius: 100, backgroundColor: color }} onClick={() => PickColor(color)}></div>
                        ))
                        //iteration and holding the color from array
                    }
                </Box>
            </Popper>
        </>
    )
}
export default ColorPopper;