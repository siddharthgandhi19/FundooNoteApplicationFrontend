import React ,{useState} from 'react'
import '../TakeNote3/TakeNote3.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { IconButton, Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { NoteArchieveApi, NoteColorApi, updateNoteAPI } from '../../services/DataServices';
import { NoteTrashApi } from '../../services/DataServices';
import { NotePinApi } from '../../services/DataServices';
import ColorPopper from '../Colorpopper/Colorpopper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import TakeNote2 from '../TakeNote2/TakeNote2'
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export default function TakeNote3(props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    const [open, setOpen] = React.useState(false);
    
    const handleOpen = (obj) =>{
        setOpen(true);
        console.log(obj)
    }
    
    const handleClose = () => setOpen(false);

    const NoteArchieve = (id) => {
        let nId = {
            "noteID": id
        }

        NoteArchieveApi(nId)
            .then(res => {
                console.log(res)
                props.autoRefresh()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const NoteTrash = (id) => {
        let nId = {
            "noteID": id
        }

        NoteTrashApi(nId)
            .then(res => {
                console.log(res)
                props.autoRefresh()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const NotePin = (id) => {
        let nId = {
            "noteID": id
        }

        NotePinApi(nId)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const listenToColorPopper2 = (color1) => {

        let nId = {
            "noteID": props.note.noteID, "color": color1

        }

        NoteColorApi(nId)
            .then(res => {
                console.log(res)
                props.autoRefresh()
            })
            .catch(err => {
                console.log(err)
            })

    }


    const [noteData, setNoteData] = useState({ title: props.note.title , description: props.note.description , color:props.note.color });
    // const [InputCardBoxColor , setInputCardBoxColor] = useState('')
    const Submit1 = () => {
      

        if (noteData.title || noteData.note) {
            console.log("Api call for create note")
            let noteUpdateValue={
                "title": noteData.title,
                "description":noteData.description,
                "color":noteData.color,
              }
            updateNoteAPI(props.note.noteID, noteUpdateValue )
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

        <div>
            <Box className='container3'>
                <Paper style={{ backgroundColor: props.note.color }} className='note3'>
                    <Box className='noteicon2'>
                        <Box className='txt2'>
                            <span className='input3' onClick={()=>handleOpen(props.note)} > {props.note.title}</span>
                            <span className='input4' onClick={handleOpen}>  {props.note.description}</span>
                            {/* <InputBase className='input3' placeholder="Title.."/>
                        <InputBase className='input3' placeholder="Take a note..." /> */}
                        </Box>
                        <div className='pinicon2'>
                            <Tooltip>
                                <IconButton> <PushPinOutlinedIcon onClick={() => NotePin(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" /> </IconButton>
                            </Tooltip>
                        </div>
                    </Box>

                    <Box className="icons3">
                        <Tooltip title='Remind me'>
                            <IconButton><AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Collabrator'>
                            <IconButton> <PersonAddAlt1OutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Color'>
                            <ColorPopper listenToColorPopper2={listenToColorPopper2} action="update"></ColorPopper>
                        </Tooltip>
                        <Tooltip title='Delete'>
                            <IconButton><DeleteIcon onClick={() => NoteTrash(props.note.noteID)}  style={{ color: '#202124' }} fontSize="small" /></IconButton>
                        </Tooltip>
                        <Tooltip title='Archive'>
                            <IconButton> <ArchiveOutlinedIcon onClick={() => NoteArchieve(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" /> </IconButton>
                        </Tooltip>
                        <Tooltip title='More'>
                            <IconButton> <MoreVertOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </IconButton>
                        </Tooltip>
                    </Box>
                </Paper>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
               <div style={{backgroundColor:noteData.color}} className="note2maincontainer">
            <div className="title">
                <div className="input">
                    <InputBase value={noteData.title} onChange={TakeNote2Title} placeholder='Title' />
                </div>
                <div className="labelicon">
                    <PushPinOutlinedIcon />
                </div>
            </div>
            <div className="takenote2">
                <InputBase value={noteData.description} onChange={TakeNote2Description} placeholder='Take a note...' />
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
                    <Button onClick={Submit1} sx={{ textTransform: 'none' }} style={{ color: "#202124" }}  >Close</Button>
                </div>
            </div>
        </div>
            </Modal>
        </div>
    );
}