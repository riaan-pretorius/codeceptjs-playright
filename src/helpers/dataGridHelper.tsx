import {
  GridActionsCellItem,
  GridColDef,
  GridDeleteIcon,
  GridRowParams,
} from "@mui/x-data-grid";

export const convertToDataTableData = (
  data: BaseListData[],
  viewUserDetails: any
) => {
  const item = data[0];
  let property: keyof typeof item;

  const columns: GridColDef<BaseListData>[] = [];
  for (property in item) {
    const stringProp: string = property;
    // console.log("property", { property, type: typeof item[property] });
    if (property !== "id" && typeof item[property] !== "object") {
      columns.push({
        headerName: stringProp[0].toUpperCase() + stringProp.slice(1),
        field: property,
        flex: 1,
      });
    }
  }

  columns.push({
    field: "Actions",
    flex: 1,
    type: "actions",
    getActions: (params: GridRowParams) => {
      console.log("params", { params });
      return [
        <GridActionsCellItem
          icon={<GridDeleteIcon />}
          onClick={() => {}}
          label="Delete"
        />,
        <GridActionsCellItem
          onClick={() => viewUserDetails(params.id)}
          label="Details"
          showInMenu
        />,
      ];
    },
  });

  return {
    columns: columns,
    data: data,
  };
};
