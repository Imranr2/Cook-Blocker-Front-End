import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ActionButton from "../../components/ActionButton";

const columns = [
  { id: "date", label: "Date", minWidth: 100 },
  { id: "time", label: "Time", minWidth: 100 },
  {
    id: "customerName",
    label: "Customer Name",
    minWidth: 170,
  },
  {
    id: "contactNo",
    label: "Contact No.",
    minWidth: 170,
  },
  {
    id: "pax",
    label: "No. of Pax",
    minWidth: 100,
  },
  {
    id: "table",
    label: "Table No.",
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

const rows = [
  {
    date: "21-10-1998",
    time: "18:00",
    customerName: "Imran",
    contactNo: "12345678",
    pax: 4,
    table: 12,
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                    color: "primary.contrastText",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.contactNo}
                    sx={{
                      borderBottom: "2px solid black",
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
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
                              onClick={() => console.log("fulfill")}
                              bgColor="primary.light"
                              bgHover="secondary.light"
                              sx={{
                                width: "78px",
                                padding: "0px",
                                margin: "0px",
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
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
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
