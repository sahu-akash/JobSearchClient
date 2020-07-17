import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default function AlertDialog({job,open,handleClose}) {
    

  return (
    <div  >
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{job.title}</DialogTitle>
        <div>
        <img className={'detail-logo'} src={job.company_logo}/></div>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
            <div>{ ReactHtmlParser(job.description) }</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
          <a href={job.url}>Apply</a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}