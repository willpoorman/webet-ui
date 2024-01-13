import { DataGrid, GridApi, GridColDef, useGridApiContext } from "@mui/x-data-grid";
import { FunctionComponent, useEffect, useRef } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const DataGridExample: FunctionComponent = (props) => {
  const apiRef = useRef<GridApi | null>(null);

  // Example showing how we can use the apiRef to modify the DataGrid;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      apiRef?.current?.updateColumns([
        {
          field: "firstName",
          headerName: "First Name",
        },
      ]);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [apiRef]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        components={{
          // This is a hack to grab the DataGrid API ref on first render, since only XGrid has
          // an apiRef prop to use to set it.
          // Normally it's not good to provide an inline declared component as a prop, since it will
          // get redefined each render of TableExample, but since this "Toolbar" component is not
          // actually rendering anything and instead is returning null, it's fine
          Toolbar: () => {
            const gridApiRef = useGridApiContext();

            // Only set the ref once, if its already, set, we don't need to reset it
            if (!apiRef?.current && gridApiRef) {
              apiRef.current = gridApiRef.current;
            }
            return null;
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};
