import React, { useState } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import messages from './ResetToursButton.messages';

const propTypes = {
  intl: intlShape.isRequired
};

function ResetToursButton(props) {
  const [openDialogToursState, setOpenDialogToursState] = useState(false);

  const handleOnClickOk = () => {
    props.enableAllTours();
    handleClose();
  };

  const handleClickOpen = () => {
    setOpenDialogToursState(true);
  };

  const handleClose = () => {
    setOpenDialogToursState(false);
  };

  return (
    <div>
      <ListItem button={true} onClick={handleClickOpen}>
        <ListItemText
          className="Navigation__ListItemText"
          primary={<FormattedMessage {...messages.resetTours} />}
          secondary={<FormattedMessage {...messages.resetToursSecondary} />}
        />
      </ListItem>
      <Dialog
        open={openDialogToursState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <FormattedMessage {...messages.confirmDialog} />
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleOnClickOk} color="primary">
            <FormattedMessage {...messages.ok} />
          </Button>
          <Button onClick={handleClose} color="primary">
            <FormattedMessage {...messages.cancel} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ResetToursButton.propTypes = propTypes;

export default injectIntl(ResetToursButton);
