import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DataTableData from "../types/DataTableData";

type Props = {
  data: DataTableData;
  testid: string;
};

const DataTable = (props: Props) => {
  return (
    <DataGrid
      rows={props.data.data}
      columns={props.data.columns}
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
      data-testid={props.testid}
    />
  );
};

export default DataTable;
