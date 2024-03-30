
import { Table } from "react-bootstrap"
import IExpenseItem from "../model/expense"



type ExpenseItemsListerModel = {

  expenseItems : IExpenseItem[];
}

const ExpenseItemsLister = ({expenseItems} : ExpenseItemsListerModel) => {




  const testExpenseItems : IExpenseItem[] = [
    {
      "expenseDescription": "Internet Expenses",
      "payeeName": "Ramesh",
      "price": 1100,
      "date": new Date(),
      "id": 1
    },
    {
      "expenseDescription": "Bike Maintainence Expenses",
      "payeeName": "Rahul",
      "price": 3500,
      "date": new Date(),
      "id": 2
    },
  ]

  const getExpenseItems = () => {
    return expenseItems;
  }

  const formatDate = (dateObjFromServer : Date) => {
    
    const dateObj = new Date(dateObjFromServer);

    return dateObj.getDate() + "-" + (dateObj.getMonth() + 1) + "-"
      + dateObj.getFullYear();
  }

  return (
    <div>

      <h3>Expenses View</h3>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Expense Description</th>
              <th>Payee Name</th>
              <th>Expense Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {
                getExpenseItems().map( (expenseItems, index) => {

                  return (

                    <tr>
                      <td>{(index + 1)}</td>
                      <td>{expenseItems.expenseDescription}</td>
                      <td>{expenseItems.payeeName}</td>
                      <td>{formatDate(expenseItems.date)}</td>
                      <td>{expenseItems.price}</td>
                    </tr>
      
                  )
                })
            }

            
          </tbody>
        </Table>      

    </div>
  )

}

export {ExpenseItemsLister}