import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = ({ info, handleClose }) => {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open='true'
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
        {info.name}
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        {info.image ? (
          <img src={info.image} alt={info.name} style={{ width: 400 }} />
        ) : (
          <img
            src='https://dummyimage.com/400x600/ddd/fff.png&text=No+Image'
            alt='None'
          />
        )}

        <ul>
          <li>Date of birth: {info.dateOfBirth}</li>
          <li>Gender: {info.gender}</li>
          <li>House: {info.house}</li>
          <li>Actor: {info.actor}</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default CustomizedDialogs;
