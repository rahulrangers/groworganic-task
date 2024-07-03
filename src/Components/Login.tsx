import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Snackbar, TextField } from "@mui/material";

const Login = () => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone_number, setphone_num] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    if (name.length > 0 && email.length > 0 && phone_number.length > 0) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone_number", phone_number);
      localStorage.setItem("login", "true");
      navigate("/tables");
    } else {
      setOpen(true);
    }
  };
  if (localStorage.getItem("login") == "invalid") {
    setOpen(true);
    localStorage.setItem("login", "false");
  }
  return (
    <div className="flex justify-center w-screen h-screen bg-slate-100">
      <div className="flex  flex-col item-center justify center  mt-[130px] bg-white w-[400px] h-[500px] m-5 p-5 ">
        <div className="flex justify-center  text-blue-500 font-bold text-[30px]">Login</div>
        <TextField
          id="outlined-basic"
          onChange={e => setname(e.target.value)}
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="outlined-basic "
          onChange={e => setphone_num(e.target.value)}
          margin="normal"
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={e => setemail(e.target.value)}
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" onClick={handleclick}>
          Submit
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="error" variant="filled" sx={{ width: "100%" }}>
            Please fill all the details
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
export default Login;
