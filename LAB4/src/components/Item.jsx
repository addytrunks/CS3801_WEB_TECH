function Item({ name, price, type, weight }) {
  return (
    <ul>
      {type === "Animal" ? (
        <li>
          Name: {name} - Weight: {weight} kg
        </li>
      ) : (
        <li>
          Name: {name} - Price: {price}
        </li>
      )}
    </ul>
  );
}

export default Item;
