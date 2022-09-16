import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужные вещи" },
    { id: 1, value: 5, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 3, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handlReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((n) => {
        if (n.id === id) {
          n.value += 1;
        }
        return n;
      })
    );
  };
  const handlDecrement = (id) => {
    setCounters(
      counters.map((n) => {
        if (n.id === id) {
          n.value -= 1;
        }
        return n;
      })
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handlDecrement}
        />
      ))}
      <button className="btn btn-primary sm m-2" onClick={handlReset}>
        Сброс
      </button>
    </>
  );
};

export default CounterList;
