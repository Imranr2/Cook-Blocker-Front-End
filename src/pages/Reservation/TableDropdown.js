import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #ced4da",
    color: "#A9A9A9",
    height: "40px",
    width: "145px",
    display: "flex",
    padding: "0px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  },
  "& .MuiSvgIcon-root": {
    color: "#EB7C68",
  },
}));

const TableDropdown = () => {
  const [age, setAge] = React.useState("");
  return (
    <div>
      <FormControl sx={{ m: 1, marginLeft: "-1px" }}>
        <Select
          value={age}
          onChange={(event) => setAge(event.target.value)}
          displayEmpty
          input={<BootstrapInput />}
          renderValue={(selected) => {
            if (selected === "") {
              return <em>Select a table no.</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="" style={{ display: "none" }}>
            None
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default TableDropdown;
