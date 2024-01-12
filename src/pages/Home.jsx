import React from "react";
import { useFetch } from "../hooks/useFetch";
import InvoiceList from "../components/InvoiceList";
import TodoList from "../components/Todolist";
function Home() {
  const { data: invoices, isPending, error } = useFetch("Api");

  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {invoices && <InvoiceList invoices={invoices} />}
<TodoList/>
    </div>
  );
}

export default Home;
