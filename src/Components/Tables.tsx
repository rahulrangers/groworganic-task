import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import Loading from "../ui/Loading";

const Tables = () => {
  const navigate = useNavigate();
  const loginStatus = localStorage.getItem("login");

  useEffect(() => {
    if (loginStatus !== "true") {
      console.log("hi");
      localStorage.setItem("login", "invalid");
      console.log(localStorage.getItem("login"))
      navigate("/", { replace: true });
    }
  }, [loginStatus, navigate]);
 if(loginStatus=="true"){
  return (
    <>
      <FirstTable />
      <SecondTable />
    </>
  );
}
else{
  return (
    <Loading/>
  )
}
}


export default Tables;
