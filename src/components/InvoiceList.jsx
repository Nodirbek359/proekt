import { Link } from "react-router-dom"

function InvoiceList({invoices}) {
  return (
      <div>
          <ul>
              {
                  invoices.map((invoice) => {
                      const { id } = invoice
                      return <li key={id}>
                          <Link to={`invoice/${id}`}>
                              
                          </Link>
                      </li>
                  })
              }
          </ul>


    </div>
  )
}

export default InvoiceList