import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class ToGo extends React.Component {
  //Form should have: Coffee Shop name, address, picture

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Add location
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Coffee Shop to go List
          </DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              label="Name"
              margin="normal"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="address"
              label="Address"
              margin="normal"
              variant="outlined"
              className={classes.textField}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ToGo);
