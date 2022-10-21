import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { Tag, WeBetEvent } from "../models";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "start_time", headerName: "Start Time", flex: 0.75 },
  { field: "end_time", headerName: "End Time", flex: 0.75 },
  {
    field: "tags",
    headerName: "Tags",
    description: "This column has a value formatter and is not sortable.",
    sortable: false,
    flex: 1,
    valueFormatter: (params) => {
      const tags = params.value as Tag[];
      return tags.join(", ");
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    flex: 0.5,
    renderCell: () => {
      return (
        <span>
          <IconButton edge={"start"}>
            <EditIcon />
          </IconButton>
          <IconButton edge={"start"}>
            <DeleteIcon />
          </IconButton>
        </span>
      );
    },
  },
];

export const EventList: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState<WeBetEvent[] | []>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get<WeBetEvent[]>("/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          loading={loading}
          error={error}
          rows={events}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.name}
          autoHeight
          checkboxSelection
        />
      </div>
    </div>
  );
};
