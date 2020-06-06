import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { muiTheme } from 'common/Style/mui-theme';
import {
  useStyles,
  ExhibitorContactWrapper,
  HeroHeadingWrapper,
  DialogContent,
} from './style';

function createData(name, email, phone, company, jobTitle) {
  return { name, email, phone, company, jobTitle };
}

const rows = [
  createData(
    'Nagraj',
    'nagraj@gmail.com',
    9988774455,
    'sensibull',
    'Full stack developer',
  ),
  createData(
    'Madhukar',
    'madhukar@gmail.com',
    9988774455,
    'sensibull',
    'UI developer',
  ),
  createData(
    'Siddesh',
    'siddesh@gmail.com',
    9988774455,
    'Matrix',
    'Backend developer',
  ),
  createData(
    'Basavesh',
    'basavesh@gmail.com',
    9988774455,
    'Matrix',
    'Backend developer',
  ),
  createData(
    'Manoj',
    'manoj@gmail.com',
    9988774455,
    'Infosys',
    'Full stack developer',
  ),
];

export default function ExhibitorContacts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <ExhibitorContactWrapper>
        <HeroHeadingWrapper>Contacts</HeroHeadingWrapper>
        <TableContainer className={classes.tableContainerStyle}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.jobTitle}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <IconButton
          className={classes.floatingAddContactBtn}
          onClick={handleDrawerToggle}
        >
          <PersonAddOutlinedIcon />
        </IconButton>
        <Dialog
          onClose={handleDrawerToggle}
          aria-labelledby="simple-dialog-title"
          open={open}
          className={classes.addContactDialog}
        >
          <DialogTitle id="simple-dialog-title">Add New Contact</DialogTitle>
          <DialogContent>
            <form>
              <TextField label="Name" variant="outlined" />
              <TextField
                error
                label="Email"
                variant="outlined"
                helperText="Incorrect entry."
              />
              <TextField label="Phone" variant="outlined" type="number" />
              <TextField label="Company" variant="outlined" />
              <TextField label="Job Title" variant="outlined" />
              <TextField label="Notes" variant="outlined" multiline rows={4} />
              <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.addContactBtn}
              >
                ADD
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </ExhibitorContactWrapper>
    </ThemeProvider>
  );
}
