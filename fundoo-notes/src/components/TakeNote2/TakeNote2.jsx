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
import { createNewNoteApi } from '../../services/DataServices';
import ColorPopper from '../Colorpopper/Colorpopper';

function TakeNote2(props) {
    const [noteData, setNoteData] = useState({ title: '', description: '', color:'' });
    // const [InputCardBoxColor , setInputCardBoxColor] = useState('')
    const Submit = () => {
        props.closeNote()

        if (noteData.title || noteData.note) {
            console.log("Api call for create note")
            createNewNoteApi(noteData)
                .then(response => {
                    console.log(response)
                    props.autoRefresh()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const TakeNote2Title = (e) => {
        setNoteData(preState => ({ ...preState, title: e.target.value }))
    }

    const TakeNote2Description = (e) => {
        setNoteData(preState => ({ ...preState, description: e.target.value }))
    }
    const listenToColorPopper1 = (popperColor) => {
        setNoteData(preState => ({ ...preState, color:popperColor }))
        // setInputCardBoxColor(popperColor)
    }
    return (
        <div style={{backgroundColor:noteData.color}} className="note2maincontainer">
            <div className="title">
                <div className="input">
                    <InputBase onChange={TakeNote2Title} placeholder='Title' />
                </div>
                <div className="labelicon">
                    <PushPinOutlinedIcon />
                </div>
            </div>
            <div className="takenote2">
                <InputBase onChange={TakeNote2Description} placeholder='Take a note...' />
            </div>
            <div className="bottomicon">
                <div className="note2icon">
                    <IconButton> <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </IconButton>
                    <IconButton> <PersonAddAltOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
                    <IconButton>  <ColorPopper listenToColorPopper1={listenToColorPopper1} action="create"/></IconButton>
                    <IconButton> <AddPhotoAlternateOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
                    <IconButton> <ArchiveOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
                    <IconButton> <MoreVertOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
                    <IconButton> <UndoOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
                    <IconButton> <RedoOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </IconButton>
                </div>
                <div className="icontext">
                    <Button onClick={Submit} sx={{ textTransform: 'none' }} style={{ color: "#202124" }}  >Close</Button>
                </div>
            </div>
        </div>
    )
}

export default TakeNote2