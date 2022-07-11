import React from "react";
import Item from "./Item";

export default function ItemList({ objec }) {
  return (
    <div className="flex flex-row flex-wrap">
      {objec.map((elem) => <Item key={elem.id} elem={elem} />)}
    </div>
  );
}