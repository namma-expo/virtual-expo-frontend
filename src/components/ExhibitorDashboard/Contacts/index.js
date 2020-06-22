import React, { useEffect } from 'react';
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
import { useForm } from 'react-hook-form';
import { fetchAllContacts, createNewContact } from './service';
import { ExhibitorContentWrapper, HeroHeadingWrapper } from '../style';
import { useStyles, DialogContent } from './style';

export default function Contacts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [contacts, setContacts] = React.useState([]);
  const { register, handleSubmit, reset } = useForm();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetchAllContacts();
      if (response.status === 200) {
        const result = await response.json();
        setContacts(result);
      }
    }
    fetchData();
  }, [setContacts]);

  return (
    <ThemeProvider theme={muiTheme}>
      <ExhibitorContentWrapper>
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
              {contacts.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone1}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.occupation}</TableCell>
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
            <form
              onSubmit={handleSubmit(
                ({
                  company,
                  email,
                  name,
                  notes,
                  occupation,
                  phone1,
                  phone2,
                }) => {
                  createNewContact({
                    company,
                    email,
                    name,
                    notes,
                    occupation,
                    phone1,
                    phone2,
                  });
                  // reset();
                },
              )}
            >
              <TextField
                label="Name"
                variant="outlined"
                inputRef={register}
                name="name"
              />
              <TextField
                error
                label="Email"
                variant="outlined"
                helperText="Incorrect entry."
                inputRef={register}
                name="email"
              />
              <TextField
                label="Phone"
                variant="outlined"
                type="number"
                inputRef={register}
                name="phone1"
              />
              <TextField
                label="Phone"
                variant="outlined"
                type="number"
                inputRef={register}
                name="phone2"
              />
              <TextField
                label="Company"
                variant="outlined"
                inputRef={register}
                name="company"
              />
              <TextField
                label="Job Title"
                variant="outlined"
                inputRef={register}
                name="occupation"
              />
              <TextField
                label="Notes"
                variant="outlined"
                multiline
                rows={4}
                inputRef={register}
                name="notes"
              />
              <Button
                type="submit"
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
      </ExhibitorContentWrapper>
    </ThemeProvider>
  );
}
