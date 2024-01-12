import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function Invoice() {
  const { id } = useParams();
  const url = "http://localhost:3009/data/" + id;
  const { data: invoice, isPending, error } = usefetch(url);
  return (
    <div>
      {invoice && (
        <>
          <div>
            <h2>{invoice.description}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Invoice;
