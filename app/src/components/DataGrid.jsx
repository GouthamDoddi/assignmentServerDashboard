import react, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

const serverStatus = (value) => {
  if (value === "UP") {
    return <CheckCircleIcon style={{ color: "#4CAF50" }} />;
  } else {
    return <WarningIcon style={{ color: "#FF5722" }} />;
  }
};

export default function DataGridDemo(props) {
  const { columns, rows } = props;

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const elementStyle = {
    cursor: "pointer",
    opacity: isClicked ? 0.5 : 1,
    transition: "opacity 0.3s ease-in-out", // Optional: add a smooth transition effect
  };

  return (
    <Box sx={{ height: 280, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => {
          if (column.field === "Status") {
            return {
              ...column,
              renderCell: (params) => (
                <div className="status-cell">{serverStatus(params.value)}</div>
              ),
            };
          } else if (column.filed === "URL") {
            return {
              ...column,
              renderCell: (params) => (
                <div style={elementStyle} onClick={handleClick}>
                  {" "}
                  {params.value}{" "}
                </div>
              ),
            };
          }
          return column;
        })}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
