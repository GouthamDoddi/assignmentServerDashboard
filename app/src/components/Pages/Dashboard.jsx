import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import DataGridDemo from "../DataGrid";
import "./dashboard.css";

import { t1Rows, t2Rows, t3Rows, t4Rows, columns } from "./dashboardData";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      {/* dashbord */}

      <div id="title" style={{ textAlign: "center" }}>
        <p id="titleText" style={{ fontSize: "x-large", fontWeight: "600" }}>
          Dashboard
        </p>
      </div>

      {/* sever data */}

      <Box sx={{ flexGrow: 1 }} style={{ width: "98%", margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={12} lg={6}>
            <Item>
              <p style={{ fontSize: "x-large", fontWeight: "600" }}>Servers</p>
              <DataGridDemo columns={columns} rows={t1Rows} />
            </Item>
          </Grid>

          <Grid xs={12} md={12} lg={6}>
            <Item>
              <p style={{ fontSize: "x-large", fontWeight: "600" }}>
                Services(API)
              </p>
              <DataGridDemo columns={columns} rows={t2Rows} />
            </Item>
          </Grid>

          <Grid xs={12} md={12} lg={6}>
            <Item>
              <p style={{ fontSize: "x-large", fontWeight: "600" }}>
                Connectivity - FTP/SFTP
              </p>

              <DataGridDemo columns={columns} rows={t3Rows} />
            </Item>
          </Grid>

          <Grid xs={12} md={12} lg={6}>
            <Item>
              <p style={{ fontSize: "x-large", fontWeight: "600" }}>Websites</p>
              <DataGridDemo columns={columns} rows={t4Rows} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
