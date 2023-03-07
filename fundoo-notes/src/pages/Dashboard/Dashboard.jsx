import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MiniDrawer from '../../components/Drawer/Drawer';
import Header from '../../components/header/Header'
import TakeNote1 from '../../components/TakeNote1/TakeNote1';
import TakeNote2 from '../../components/TakeNote2/TakeNote2';
import TakeNote3 from '../../components/TakeNote3/TakeNote3';
import { getListApi } from '../../services/DataServices';

function Dashboard(props) {


    const [toggle, setToggle] = useState(true);
    const [DataList, setDataList] = useState([])
    const [drawerState, setDrawerState] = useState(false) // for drawer
    const [noteValue, setNoteValue] = useState("Notes");

    const ListenToHeader = () => {
        setDrawerState(!drawerState)
        console.log(drawerState)
    }

    const openNote = () => {
        setToggle(false)
    }

    const closeNote = () => {
        setToggle(true)
    }

    const getListMethod = () => {
        getListApi()

            .then(response => {
                console.log(response)
                let noteArray = [];  //define array
                if (noteValue === "Notes") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.archive === false && note.trash === false) {  // backend response
                            return note;
                        }
                    })
                }
                else if (noteValue === "Archive") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.archive === true && note.trash === false) {  // backend response
                            return note;
                        }
                    })
                }
                else if (noteValue === "Trash") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.trash === true && note.archive === false) {  // backend response
                            return note;
                        }
                    })
                }

                setDataList(noteArray)

            })
            .catch(error => {
                console.log(error)
            })

    }

    const autoRefresh = () => {
        getListMethod()
    }

    useEffect(() => {
        getListMethod()
    }, [noteValue])
    console.log(DataList)

    const noteTransfer = (val) => {
        setNoteValue(val)
    }

    return (

        <div>

            <Header ListenToHeader={ListenToHeader} />
            <MiniDrawer drawerState={drawerState} noteTransfer={noteTransfer}/>
            {
                toggle ? <TakeNote1 openNote={openNote} /> : <TakeNote2 closeNote={closeNote} autoRefresh={autoRefresh} />
            }

            <div style={{ width: '70%', height: '100%', display: 'flex', flexWrap: 'wrap' , position: 'relative', top: '75px', left: '250px', gap: '20px' }}>
                {
                    DataList.map(note => (
                        <TakeNote3 note={note} autoRefresh={autoRefresh} />
                    ))
                }
            </div>

        </div>

    )
}

export default Dashboard