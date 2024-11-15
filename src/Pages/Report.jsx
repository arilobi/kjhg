import React from 'react';
import reports from "../assets/images/reports.png";
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const Report = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const reportStyles = {
    backgroundColor: isDarkMode ? " #333" : "#fff",
    color: isDarkMode ? " #fff" : "#000"
};
  return (
    <div class="report-cls" style={reportStyles}>
      <div>
        <img src={reports} alt="graph" class="report-img" />
      </div>
      <h2>Report</h2>
      <table className={`report-table ${isDarkMode ? "table-dark" : "table-light"}`}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Spendings</th>
            <th>Over Budget</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty rows */}
          <tr>
            <td>November</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>December</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>January</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
