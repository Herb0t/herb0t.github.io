import { FunctionComponent } from "react";
import Transaction from "./transaction";

const ListTransactions: FunctionComponent = () => {

  return (
    <>
      <h2>List Transactions</h2>
      <Transaction />
    </>
  );
}

export default ListTransactions;