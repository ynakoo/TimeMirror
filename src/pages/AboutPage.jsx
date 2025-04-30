import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Time Mirror – Tracker</h1>

      <div className="about-content">
        <p className="about-description">
          Time Mirror – Tracker is an interactive tool designed to help you manage your time and track how your daily activities align with your planned goals. This app offers two main functionalities: the **Expectation vs Reality** tracker and the **Card-Based Tracker**. Both of these tools provide unique insights into your time management, allowing you to make data-driven decisions to optimize your time usage.
        </p>

        <h2 className="about-subtitle">Expectation vs Reality Tracker</h2>
        <p className="about-description">
          The **Expectation vs Reality** feature allows you to plan your 24-hour day by setting expectations for each activity (e.g., sleep, study, entertainment, etc.). Afterward, you can track how much time you actually spent on each activity, and the app will generate a pie chart comparing your expectations with your reality.
        </p>
        <p className="about-description">
          By using this feature, you can visually see where you are overestimating or underestimating time spent on tasks. This gives you a clearer picture of your time usage and helps you adjust your future plans accordingly.
        </p>

        <h2 className="about-subtitle">Card-Based Tracker</h2>
        <p className="about-description">
          The **Card-Based Tracker** allows you to categorize your day into different activities. This feature uses a set of 48 cards where each card represents (30-minutes) task or activity. You can click on these cards and assign categories (e.g., Social, Entertainment, Academics) to each task. Once all cards are filled, the app generates a pie chart visualizing how your time was distributed across the different categories.
        </p>
        <p className="about-description">
          This tracker is perfect for those who prefer a more granular, interactive approach to planning and tracking their day. It provides flexibility in categorizing tasks and gives an easy-to-read visual overview of time allocation.
        </p>

        <h2 className="about-subtitle">How to Use This App</h2>
        <h3 className="about-subtitle">1. Expectation vs Reality Tracker</h3>
        <ul className="about-steps">
          <li>Start by entering your **expected time allocation** for different activities in the input area (e.g., "sleep 8, study 6, phone 3, etc.").</li>
          <li>Click on **Start 24 Hour Timer** to begin your time tracking.</li>
          <li>After the 24-hour period, enter the **actual time spent** on each activity in the second section.</li>
          <li>Click **Submit** to see a comparison of your expected and actual time with pie charts.</li>
          <li>Review the visual feedback to analyze how well you followed your plan, and adjust accordingly for the next day.</li>
        </ul>

        <h3 className="about-subtitle">2. Card-Based Tracker</h3>
        <ul className="about-steps">
          <li>Select a category for your tasks (e.g., Social, Academics, Health, etc.) from the provided list.</li>
          <li>Click on the **cards** to assign categories and track your activities. You can click as many times as needed to fill all 48 cards.</li>
          <li>Once all cards are filled, click **Submit** to generate a pie chart showing how your time was spent across different categories.</li>
          <li>Analyze the chart to see your time distribution and make improvements to your time management strategy.</li>
        </ul>

        <h2 className="about-subtitle">Why Use Time Mirror – Tracker?</h2>
        <p className="about-description">
          This app provides two interactive and visual tools that give you deep insights into how you use your time. Whether you’re trying to improve your work-life balance, track personal growth, or optimize your academic schedule, Time Mirror – Tracker helps you understand how your actual time spent compares to your expectations.
        </p>
        <p className="about-description">
          By using the Expectation vs Reality Tracker and the Card-Based Tracker, you gain a better understanding of your time allocation and can make adjustments to be more productive and focused.
        </p>

        <h2 className="about-subtitle">Contact Us</h2>
        <p className="about-description">
          Have any questions or feedback? Feel free to reach out to us at <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
