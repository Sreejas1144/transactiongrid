import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import transactionData from "./transactionData.json";
import { processData } from "./util";
import "./component.scss";

export default function TransactionGrid() {
  const { rows, totalPoints } = processData(transactionData);

  const columns = [
    { field: "id", headerName: "Transaction Id", width: 170 },
    {
      field: "date",
      headerName: "Date",
      width: 200
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      width: 250
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 135
    },
    {
      field: "points",
      headerName: "Points",
      width: 130,
      renderCell: (params) => {
        return <span className="points">{params.row.points}</span>;
      }
    }
  ];

  return (
    <div className="transaction-grid">
      <DataGrid columns={columns} rows={rows} />
      <div className="total-points">
        <b>Total Points Earned : {totalPoints}</b>
      </div>
    </div>
  );
}
