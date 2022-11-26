import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ActionButton from "../../components/ActionButton";
import ReservationContext from "../../frontendApis/reservation";
import {
  getDateFromTimeStamp,
  getTimeFromTimeStamp,
} from "../../utils/dateTimeParser";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const columns = [
  { id: "date", label: "Date", minWidth: 100 },
  { id: "time", label: "|" + "\xa0\xa0" + "Time", minWidth: 100 },
  {
    id: "customerName",
    label: "|" + "\xa0\xa0" + "Customer Name",
    minWidth: 170,
  },
  {
    id: "customerPhone",
    label: "|" + "\xa0\xa0" + "Contact No.",
    minWidth: 170,
  },
  {
    id: "pax",
    label: "|" + "\xa0\xa0" + "No. of Pax",
    minWidth: 100,
  },
  {
    id: "tableNumber",
    label: "|" + "\xa0\xa0" + "Table No.",
    minWidth: 100,
  },
  {
    id: "edit",
    minWidth: 80,
  },
  {
    id: "fulfill",
    minWidth: 80,
  },
];

export default function ReservationTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { reservations, fulfillReservation, deleteReservation } =
    useContext(ReservationContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          backgroundColor: "secondary.main",
          color: "primary.contrastText",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                    backgroundColor: "secondary.main",
                    color: "secondary.contrastText",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                if (row.isCompleted) return;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.contactNo}
                    sx={{
                      borderBottom: "2px solid black",
                      position: "relative",
                    }}
                  >
                    {columns.map((column) => {
                      let value = row[column.id];
                      if (column.id === "date") {
                        value = getDateFromTimeStamp(row.dateTime);
                      }
                      if (column.id === "time") {
                        value = getTimeFromTimeStamp(row.dateTime);
                      }
                      if (column.id === "edit") {
                        return (
                          <TableCell sx={{ pl: 2, pr: 2, width: 80 }}>
                            <ActionButton
                              onClick={() => console.log("edit")}
                              bgHover="secondary.light"
                              colorHover="#3D3C3A"
                              bgColor="transparent"
                              color="primary.light"
                              sx={{
                                width: "78px",
                                padding: "0px",
                                margin: "0px",
                                border: 2,
                                borderRadius: "8px",
                              }}
                            >
                              Edit
                            </ActionButton>
                          </TableCell>
                        );
                      }

                      if (column.id === "fulfill") {
                        return (
                          <TableCell sx={{ pl: 2, pr: 2, width: 80 }}>
                            <ActionButton
                              onClick={() => fulfillReservation(row.id)}
                              bgColor="primary.light"
                              bgHover="secondary.light"
                              sx={{
                                width: "78px",
                                ml: "-20px",
                                borderRadius: "8px",
                                mr: "20px",
                              }}
                            >
                              Fulfill
                            </ActionButton>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            color: "primary.contrastText",
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                    <IconButton
                      sx={{
                        type: "submit",
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        position: "absolute",
                        right: 0,
                        top: 15,
                      }}
                      onClick={() => deleteReservation(row.id)}
                    >
                      <CloseIcon sx={{ color: "secondary.contrastText" }} />
                    </IconButton>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={reservations.filter((row, idx) => !row.isCompleted).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          backgroundColor: "secondary.main",
          color: "primary.contrastText",
        }}
      />
    </Paper>
  );
}
