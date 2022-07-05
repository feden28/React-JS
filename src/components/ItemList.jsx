import React from "react";
import Item from "./Item";

export default function ItemList({ objec }) {
  return (
    <div>
      {objec.map((elem) => <Item key={elem.id} elem={elem} />)}
    </div>
  );
}