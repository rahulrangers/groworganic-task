import {
  Checkbox,
  Collapse,
  IconButton,
  IconButtonProps,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import data from "../store/data";
import department from "../types/department";
import { useState } from "react";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));
const Department = ({ row }: { row: department }) => {
  const [expanded, setExpanded] = useState(false);
  const [dpt_check, setdpt_check] = useState<boolean>(false);
  const [sub_dept_check, setSub_dept_check] = useState<boolean[]>(() => {
    const size = row.sub_departments.length;
    return new Array(size).fill(false);
  });
  const handleselect = (index: number) => {
    setSub_dept_check(prevState => prevState.map((checked, i) => (i === index ? !checked : checked)));
  };
  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          <ExpandMore expand={expanded} onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
          <Checkbox
            checked={dpt_check || !sub_dept_check.includes(false)}
            onChange={() => {
              if (dpt_check || !sub_dept_check.includes(false)) {
                setdpt_check(false);
                setSub_dept_check(sub_dept_check.map(() => false));
              } else {
                setdpt_check(true);
              }
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
          {row.department}
        </TableCell>
      </TableRow>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {row.sub_departments.map((sub_dept, index) => (
          <TableRow key={index}>
            <Checkbox checked={dpt_check || sub_dept_check[index]} onClick={() => handleselect(index)} />
            <TableCell>{sub_dept}</TableCell>
          </TableRow>
        ))}
      </Collapse>
    </>
  );
};
const SecondTable = () => {
  const departments: department[] = data;

  return (
    <div className="m-5">
      <div className="flex justify-center text-[36px] text-blue-500 font-bold"> Departments</div>
      <div className=" flex justify-center">
        <div className="flex justify-center w-[400px]">
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
              <TableBody>
                {departments.map((row: department) => (
                  <Department row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
export default SecondTable;
