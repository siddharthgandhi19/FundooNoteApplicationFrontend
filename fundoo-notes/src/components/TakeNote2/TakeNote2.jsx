import { InputBase } from '@mui/material'
import React, { useState } from 'react'
import '../TakeNote2/TakeNote2.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import IconButton from '@mui/material/IconButton';


function TakeNote2(props) {
    const Submit = () => {
        props.closeNote()
    }

  return (
    <div className="note2maincontainer">
        <div className="title">
            <div className="input">
                <InputBase placeholder='Title'  />
            </div>
            <div className="labelicon">
            <PushPinOutlinedIcon/>
            </div>
        </div>
        <div className="takenote2">
        <InputBase placeholder='Take a note...' />
        </div>
        <div className="bottomicon">
            <div className="note2icon">
            <IconButton> <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small"/> </IconButton>
            <IconButton> <PersonAddAltOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
            <IconButton> <ColorLensOutlinedIcon style={{ color: "#202124" }} fontSize="small"/> </IconButton>
            <IconButton> <AddPhotoAlternateOutlinedIcon  style={{ color: "#202124" }} fontSize="small" /> </IconButton>
            <IconButton> <ArchiveOutlinedIcon  style={{ color: "#202124" }} fontSize="small"/> </IconButton>
            <IconButton> <MoreVertOutlinedIcon  style={{ color: "#202124" }} fontSize="small"/> </IconButton>
            <IconButton> <UndoOutlinedIcon  style={{ color: "#202124" }} fontSize="small"/> </IconButton>
            <IconButton> <RedoOutlinedIcon  style={{ color: "#202124" }} fontSize="small"/> </IconButton>
            </div>
            <div className="icontext">
                <Button onClick={Submit} sx={{ textTransform: 'none' }} style={{ color: "#202124"}}  >Close</Button>
            </div>
        </div>
    </div>
  )
}

export default TakeNote2
