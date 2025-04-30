import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./OptionOnePage.css";

const COLORS = [
  "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6",
  "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3",
  "#808000", "#ffd8b1", "#000075", "#808080", "#ffffff", "#000000", "#ff7f00", "#1f78b4",
  "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff1493", "#a6cee3", "#b15928",
  "#4b0082", "#7fffd4", "#dc143c", "#8a2be2", "#00ced1", "#20b2aa", "#ff4500", "#adff2f",
  "#4682b4", "#dda0dd", "#7cfc00", "#ff6347", "#6a5acd", "#00fa9a", "#db7093", "#ff00ff"
];

function OptionOnePage() {
  const [expectation, setExpectation] = useState("");
  const [reality, setReality] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [expData, setExpData] = useState([]);
  const [realData, setRealData] = useState([]);

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 24 hours = 86400 seconds
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    let timer;
    if (timerStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerStarted && timeLeft <= 0) {
      setTimerDone(true);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerStarted, timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const parseData = (text) => {
    const lines = text.split(",");
    return lines
      .map((line) => {
        const [label, value] = line.trim().split(" ");
        const hours = parseFloat(value);
        return label && !isNaN(hours) ? { name: label, value: hours } : null;
      })
      .filter(Boolean);
  };

  const getTotalHours = (data) => data.reduce((sum, item) => sum + item.value, 0);

  const getRating = (percent) => {
    if (percent >= 90) return "Great";
    if (percent >= 60) return "Good";
    return "Poor";
  };

  const handleStartTimer = () => {
    const expParsed = parseData(expectation);
    const expTotal = getTotalHours(expParsed);

    if (expParsed.length === 0 || expTotal !== 24) {
      alert("Please enter valid expectation data totaling exactly 24 hours.");
      return;
    }

    setExpData(expParsed);
    setTimerStarted(true);
  };

  const handleSubmit = () => {
    const realParsed = parseData(reality);
    const realTotal = getTotalHours(realParsed);

    if (realParsed.length === 0 || realTotal !== 24) {
      alert("Please enter valid reality data totaling exactly 24 hours.");
      return;
    }

    setRealData(realParsed);
    setShowResult(true);
  };

  const calculateMatchPercentage = () => {
    let matched = 0;
    for (let i = 0; i < expData.length; i++) {
      const realItem = realData.find(r => r.name === expData[i].name);
      if (realItem) {
        const min = Math.min(expData[i].value, realItem.value);
        const max = Math.max(expData[i].value, realItem.value);
        matched += (min / max);
      }
    }
    const avg = matched / expData.length;
    return Math.round(avg * 100);
  };

  const matchPercent = calculateMatchPercentage();
  const feedback = getRating(matchPercent);

  return (
    <div className="option-one-container">
      <h2 className="page-heading">Expectation vs Reality Tracker</h2>

      <div className="form-section">
        <h3>Expectation (Plan your 24 hours)</h3>
        <textarea
          className="text-area"
          value={expectation}
          onChange={(e) => setExpectation(e.target.value)}
          placeholder="E.g. sleep 8, study 6, phone 2, play 1"
          disabled={timerStarted}
        />
        {!timerStarted && (
          <button className="submit-btn" onClick={handleStartTimer}>
            Start 24 Hour Timer
          </button>
        )}
        {timerStarted && !timerDone && (
          <div style={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
            Time left to enter reality: {formatTime(timeLeft)}
          </div>
        )}
      </div>

      <div className="form-section">
        <h3>Reality (What actually happened?)</h3>
        {timerStarted && !timerDone && (
          <div style={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
            Timer is running, please wait...
          </div>
        )}
        {timerDone && (
          <textarea
            className="text-area"
            value={reality}
            onChange={(e) => setReality(e.target.value)}
            placeholder="E.g. sleep 6, study 4, phone 5, play 2"
          />
        )}
      </div>

      <button className="submit-btn" onClick={handleSubmit} disabled={!timerDone}>
        Submit
      </button>

      {showResult && (
        <div className="charts-container">
          <h3>Reality Check</h3>
          <div className="chart-row">
            <div className="chart-wrapper">
              <h4>Expectation</h4>
              <ul>
                {expData.map((item, index) => (
                  <li key={index}>{item.name}: {item.value} hrs</li>
                ))}
              </ul>
              <PieChart width={350} height={350}>
                <Pie
                  data={expData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {expData.map((_, index) => (
                    <Cell key={`exp-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="bottom" height={60} />
              </PieChart>
            </div>

            <div className="chart-wrapper">
              <h4>Reality</h4>
              <ul>
                {realData.map((item, index) => {
                  const isExtra = !expData.some(e => e.name.toLowerCase() === item.name.toLowerCase());
                  return (
                    <li key={index}>
                      {item.name}: {item.value} hrs
                      {isExtra && <strong> - Extra </strong>}
                    </li>
                  );
                })}
              </ul>
              <PieChart width={350} height={350}>
                <Pie
                  data={realData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {realData.map((_, index) => (
                    <Cell key={`real-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="bottom" height={60} />
              </PieChart>
            </div>
          </div>

          <div style={{ marginTop: "30px", fontSize: "18px", textAlign: "center" }}>
            <p>✅ Well done! You completed <strong>{matchPercent}%</strong> of your plan.</p>
            <p>📝 Rating: <strong>{feedback}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionOnePage;
