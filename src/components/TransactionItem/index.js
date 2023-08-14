// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteHistoryItem} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="list-cell">{title}</p>
      <p className="list-cell">Rs {amount}</p>
      <p className="list-cell">{type}</p>
      <div>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
