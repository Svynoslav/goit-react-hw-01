import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr className={css.trThead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={css.trTbody} key={item.id}>
            <td className={css.type}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
