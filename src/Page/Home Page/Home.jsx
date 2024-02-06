import React, { useContext, useState, useEffect } from 'react';
import { Paper, Container, Typography, Grid, Divider, IconButton, Tooltip, Menu, MenuList ,MenuItem, ListItemIcon } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { AuthContext } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import useFetchDataset from '../../Business Logic/useFetchDataset';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import style from './Home.module.css';

import CustomCard from '../../Component/Card/Card';
import { Skeletons, DeleteModal } from '../../Component';

export default function Home() {

    const { dataset, DSLstatus } = useFetchDataset();
    const [ document, setDocument ] = useState();
    const [ user ] = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/login');
        }
    }, [user])


    // VD = View details
    const handleVD = (id) => {
        setDocument(id)
    }

    
    // Right panel menu control variables
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    // Modal Controls
    const [Modalopen, setModalOpen] = React.useState(false);
    const handleModalOpen = (DocId) => { setModalOpen(true); setDocumentDelete(DocId) } 

    const [ documentDelete ,setDocumentDelete] = useState(null);


    return (
        <>
        <DeleteModal setDocument={setDocument} setModalOpen={setModalOpen} Modalopen={Modalopen} documentDelete={documentDelete} setDocumentDelete={setDocumentDelete} />

        <Grid container sx = {{ mt: 0}}>
            <Grid item md = {5} lg = {5} className = {style.leftOption}>
                <Container>

                    {DSLstatus === false && dataset.map((data, index) => (
                        <CustomCard key={index} data={data} handleVD={handleVD} />
                    ))}
                    {DSLstatus === true && <Skeletons />}

                </Container>
            </Grid>
            <Grid item md = {7}  lg = {7} sx = {{ mt: 4  }} className = {style.rightPanel}>
                <Container sx = {{ height: '100%' }}>
                <Paper variant='outlined' sx = {{ p: 4}} >
                    { document ? <>
                        <Typography variant='h5' color='text.primary' textAlign='center'>Report Details: </Typography>
                        <Grid container sx = {{ mt: 4 , mb: 2 }} alignItems="center">
                            <Grid item lg={12} container alignItems='center' justifyContent='flex-end' spacing={2}>
                                <Grid item>
                                    <Tooltip title='Document type'>
                                        <Typography>{document[1].Type}</Typography>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title='Appointment date'>
                                        <Typography>{document[1].Prescription.date}</Typography>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title = 'Report settings'>
                                        <IconButton onClick={handleClick}>
                                            <MoreVertRoundedIcon />
                                        </IconButton>
                                    </Tooltip>

                                    <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} PaperProps={{
                                        elevation: 0,
                                        sx: { overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, '& .MuiAvatar-root': { width: 28, height: 28, ml: -0.5, mr: 1, },
                                                '&:before': { content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0, },
                                            },
                                        }} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuList dense>
                                            <MenuItem disabled>
                                                <ListItemIcon>
                                                    <ModeEditOutlineIcon fontSize="small" />
                                                </ListItemIcon>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                handleModalOpen(document[0]);
                                                // handleDR(document[0])
                                                }}>
                                                <ListItemIcon>
                                                    <DeleteIcon fontSize="small"/>
                                                </ListItemIcon>
                                                Delete
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>

                                </Grid>
                            </Grid>
                        </Grid>
                        
                            <Grid item lg={6}>
                                <Typography variant='h4'>{document[1].Prescription.doctor}</Typography>
                                <Typography color='text.secondary'>{document[1].Prescription.department}</Typography>
                            </Grid>

                            <Divider></Divider>

                            <Typography variant='h6' sx = {{ mt: 2}}>Prescribed Medicine</Typography>
                            <Paper sx = {{m: 2}} elevation={0}>
                                {document[1].Prescription.Medicine.map((meds) => {
                                    return(
                                        <Paper sx = {{ mb: 2, p: 1}} variant='outlined'>
                                            <Typography variant='body'>{meds.MedName}</Typography>
                                            <br />
                                            <Typography variant='caption' color='text.secondary'>Morning:{meds.Morning} Afternoon:{meds.Afternoon} Night: {meds.Night}</Typography>
                                        </Paper>
                                    );
                                })}
                            </Paper>
                        
                        </>
                    :
                    <Grid container alignItems='center' justifyContent='center' sx = {{ height: "68vh"}}>
                        <Grid item>
                            <Typography color='text.secondary'>
                                Select a option to View its details
                            </Typography>
                        </Grid>
                    </Grid>
                    }
                     

                </Paper>
                </Container>

            </Grid>
        </Grid>
        </>
    )
}
