import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { DataGrid, ColDef } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Tag, WeBetEvent } from "../models";

const columns: ColDef[] = [
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
      return tags.map((tag) => tag.name).join(", ");
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

const eventsFromApi: WeBetEvent[] = [
  {
    name: "Summerslam",
    start_time: "2021-03-01:20:00:00",
    end_time: "2021-03-01:24:00:00",
    tags: [
      {
        name: "WWE",
      },
      {
        name: "PPV",
      },
    ],
  },
  {
    name: "Hell in A Cell",
    start_time: "2021-04-01:20:00:00",
    end_time: "2021-04-01:24:00:00",
    tags: [
      {
        name: "WWE",
      },
      {
        name: "PPV",
      },
    ],
  },
  {
    name: "Wrestlemania",
    start_time: "2021-05-01:20:00:00",
    end_time: "2021-05-01:24:00:00",
    tags: [
      {
        name: "WWE",
      },
      {
        name: "PPV",
      },
    ],
  },
];

export const EventList: FunctionComponent = () => {
  const [events, setEvents] = useState<WeBetEvent[] | []>([]);

  const mockAxios = new MockAdapter(axios, { delayResponse: 500 });
  mockAxios.onGet("/fake/path").reply(200, eventsFromApi);

  useEffect(() => {
    axios.get("/fake/path").then((response) => {
      setEvents(response.data);
    });
  });

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
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
