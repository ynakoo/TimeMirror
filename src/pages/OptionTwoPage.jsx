import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./OptionTwoPage.css"; // import the CSS file

const categories = [
  "Social Connections", "Personal development", "Rest & Recharge", "Entertainment", "Academics",
  "EverydayEssentials", "Health & Well-being", "Unknown??"
];

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8",
  "#8dd1e1", "#a4de6c", "#d0ed57", "#ffc658"
];

function OptionTwoPage() {
  const [cards, setCards] = useState(Array(48).fill(""));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleCardClick = (index) => {
    if (selectedCategory) {
      const newCards = [...cards];
      newCards[index] = selectedCategory;
      setCards(newCards);
    } else {
      alert("Please select a category first!");
    }
  };

  const handleSubmit = () => {
    if (cards.includes("")) {
      alert("Please fill all 48 cards before submitting!");
      return;
    }
    setShowResult(true);
  };

  const prepareChartData = () => {
    const countMap = {};
    cards.forEach((cat) => {
      countMap[cat] = (countMap[cat] || 0) + 1;
    });
    return Object.entries(countMap).map(([name, value]) => ({ name, value }));
  };

  const chartData = prepareChartData();

  return (
    <div className="container">
      <h2 className="heading">Time Mirror – Tracker</h2>

      <div className="category-container">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${
              selectedCategory === cat ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {cards.map((value, index) => (
          <div
            key={index}
            className={`card ${value ? "filled" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {value || `#${index + 1}`}
          </div>
        ))}
      </div>

      <div className="submit-container">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      {showResult && (
        <div className="chart-section">
          <h3 className="chart-title">Your Time Distribution</h3>
          <div className="chart-wrapper">
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({  percent }) => ` ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionTwoPage;
