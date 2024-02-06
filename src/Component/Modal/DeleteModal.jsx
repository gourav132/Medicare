import React, {useState} from 'react'
import { firestore } from '../../Firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { Typography, Button, Grid, Backdrop, Fade, Modal, Box} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteModal({
  setDocument, 
  setModalOpen,
  Modalopen, 
  documentDelete, 
  setDocumentDelete}) {

  const Modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
  };

  // DR = Delete Report
  const [ DRLStatus, setDRLStatus ] = useState(false);
  const handleModalClose = () => setModalOpen(false);

  const handleDR = async () => {
      setDRLStatus(true);

      try {
        const docRef = doc(firestore, 'Reports', documentDelete);
        await deleteDoc(docRef);

        // Reset state and close the modal on successful deletion
        setDRLStatus(false);
        setDocument(null);
        handleModalClose();
      } catch (error) {
        console.log(error);
        setDRLStatus(false);
      }
    }

  return (
    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
        open={Modalopen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={Modalopen}>
          <Box sx={Modalstyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Delete Document
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Are you sure you want to delete this document?
            </Typography>
            <Grid mt={1} container spacing={2} direction='row' justifyContent='flex-end'>
              <Grid item>
                <Button onClick={handleModalClose} size='small'>Cancel</Button>
              </Grid>
              <Grid item>
                <LoadingButton
                    color='error'
                    loading = {DRLStatus}
                    loadingPosition="start"
                    startIcon={<DeleteIcon />}
                    // startIcon={<CheckIcon />}
                    variant="contained"
                    size='small'
                    onClick={handleDR}
                    >
                        {DRLStatus ? 'Deleting' : 'Delete'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
  )
}
