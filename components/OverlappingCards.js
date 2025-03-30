import React from "react";

const cards = [
  { id: 1, color: "#ff4757", top: "0%" },
  { id: 2, color: "#2ed573", top: "5%" },
  { id: 3, color: "#1e90ff", top: "0%" },
  { id: 4, color: "#fffa65", top: "15%" },
];

const OverlappingCards = () => {
  return (
    <div className="container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="card"
          style={{
            backgroundColor: card.color,
            top: card.top,
            zIndex: index + 1,
          }}
        >
          Card {card.id}
        </div>
      ))}
    </div>
  );
};

export default OverlappingCards;
