import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Textheader from "../../components/Textheader";

const data = [
 {
  value: "Admin",
  label: "Admin",
 },
 {
  value: "Manger",
  label: "Manger",
 },
 {
  value: "User",
  label: "User",
 },
];
const regEmail =
 /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
 /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Form = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const [open, setOpen] = React.useState(false);

 const handleClose = (reason: any) => {
  if (reason === "clickaway") {
  }

  setOpen(false);
 };

 const handleClick = () => {
  setOpen(true);
 };

 const onSubmit = () => {
  console.log("doneeeeeeeeeeee");
  handleClick();
 };

 return (
  <Box
   onSubmit={handleSubmit(onSubmit)}
   display={"flex"}
   component="form"
   flexDirection={"column"}
   gap={3}
  >
   <Textheader
    isDashboard={true}
    title={"Form"}
    text={"please fill below if you want to join our team"}
   />

   <Stack direction={"row"} display={"flex"} gap={3}>
    <TextField
     error={Boolean(errors.firstName)}
     helperText={Boolean(errors.firstName) ? "required field & min 3 character" : null}
     {...register("firstName", { required: true, minLength: 3 })}
     sx={{ flex: "1" }}
     label="first name"
     variant="filled"
    />
    <TextField
     error={Boolean(errors.lastName)}
     helperText={Boolean(errors.lastName) ? "min 3 character" : null}
     {...register("lastName", { required: false, minLength: 3 })}
     sx={{ flex: "1" }}
     label="last name"
     variant="filled"
    />
   </Stack>

   <TextField
    error={Boolean(errors.email)}
    helperText={Boolean(errors.email) ? "please provide a valid email" : null}
    {...register("email", { required: false, pattern: regEmail })}
    label="email"
    variant="filled"
   />
   <TextField
    error={Boolean(errors.number)}
    helperText={Boolean(errors.number) ? "please provide a valid number" : null}
    {...register("number", { required: false, pattern: phoneRegExp })}
    label="phone number"
    variant="filled"
   />
   <TextField label="address 1" variant="filled" />
   <TextField
    variant="filled"
    id="outlined-select-currency"
    select
    label="Role"
    defaultValue="User"
   >
    {data.map((option) => (
     <MenuItem key={option.value} value={option.value}>
      {option.label}
     </MenuItem>
    ))}
   </TextField>
   <Box sx={{ textAlign: "center" }}>
    <Button type="submit" variant="contained">
     Create new rule
    </Button>
   </Box>
   <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={open}
    autoHideDuration={4000}
    onClose={handleClose}
   >
    <Alert severity="success" sx={{ width: "100%" }}>
     New Rule has been created
    </Alert>
   </Snackbar>
  </Box>
 );
};

export default Form;
