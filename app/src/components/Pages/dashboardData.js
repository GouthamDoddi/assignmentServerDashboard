export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Environment",
    headerName: "Environment",
    width: 150,
    editable: true,
  },
  {
    field: "ServerType",
    headerName: "Server Type",
    width: 150,
    editable: true,
  },
  {
    field: "URL",
    headerName: "URL",
    width: 210,
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </a>
    ),
  },
  {
    field: "Status",
    headerName: "Status",
    width: 90,

    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const t1Rows = [
  {
    id: 1,
    Environment: "DEV",
    ServerType: "Cloud",
    URL: "https://google.com",
    Status: "UP",
  },
  {
    id: 2,
    Environment: "QA",
    ServerType: "On-premise",
    URL: "https://google.com",
    Status: "DOWN",
  },
];

export const t2Rows = [
  {
    id: 1,
    Environment: "DEV",
    ServerType: "Partner-Services",
    URL: "https://google.com",
    Status: "UP",
  },
  {
    id: 2,
    Environment: "UAT",
    ServerType: "Partner-Services",
    URL: "https://google.com",
    Status: "DOWN",
  },
];

export const t3Rows = [
  {
    id: 1,
    Environment: "TEST",
    ServerType: "Cloud",
    URL: "https://google.com",
    Status: "UP",
  },
  {
    id: 2,
    Environment: "PROD",
    ServerType: "On-premise",
    URL: "https://google.com",
    Status: "DOWN",
  },
];

export const t4Rows = [
  {
    id: 1,
    Environment: "TEST",
    ServerType: "Website",
    URL: "https://google.com",
    Status: "UP",
  },
  {
    id: 2,
    Environment: "PROD",
    ServerType: "Website",
    URL: "https://google.com",
    Status: "DOWN",
  },
];
