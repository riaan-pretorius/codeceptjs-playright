import { GridColDef } from "@mui/x-data-grid";

type DataTableData = {
  columns: GridColDef<BaseListData>[];
  data: BaseListData[];
};

export default DataTableData;
