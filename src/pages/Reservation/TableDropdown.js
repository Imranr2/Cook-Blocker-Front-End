import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import TableContext from "../../frontendApis/table";
import { useEffect } from "react";

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
  const { tableNumber, setTableNumber, tables, getTables, loading } =
    useContext(TableContext);

  useEffect(() => {
    getTables();
  }, []);

  return (
    <>
      {!loading && (
        <FormControl sx={{ m: 1, marginLeft: "-1px" }}>
          <Select
            value={tableNumber}
            onChange={(event) => setTableNumber(event.target.value)}
            displayEmpty
            input={<BootstrapInput />}
            renderValue={(selected) => {
              if (selected === -1) {
                return <em>Select a table no.</em>;
              }
              return selected;
            }}
          >
            <MenuItem value={-1} style={{ display: "none" }}>
              None
            </MenuItem>
            {tables.map((table, idx) => {
              return <MenuItem value={table.number}>{table.number}</MenuItem>;
            })}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default TableDropdown;
