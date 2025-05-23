export function getClientPosition(client, q1, median, q3) {
  if (isNaN(client) || isNaN(q1) || isNaN(median) || isNaN(q3)) {
    return {
      position: "Missing Data",
      insight: "Unable to calculate due to incomplete KPI values",
      improvementScope: null,
    };
  }

  if (client >= q1) {
    return {
      position: "Position 1",
      insight: "High performing – maintain performance",
      improvementScope: null,
    };
  } else if (client > median && client < q1) {
    const lowerLimit = q1 - client;
    const upperLimit = q1 * 0.96 - client;

    return {
      position: "Position 2",
      insight: "Reasonable performance – improve to reach Q1",
      improvementScope: `${lowerLimit.toFixed(2)} to ${upperLimit.toFixed(2)}`,
    };
  } else if (client > q3 && client <= median) {
    const lowerLimit = median - client;
    const upperLimit = q1 - client;

    return {
      position: "Position 3",
      insight: "Needs improvement to reach better performance",
      improvementScope: `${lowerLimit.toFixed(2)} to ${upperLimit.toFixed(2)}`,
    };
  } else {
    const lowerLimit = median - client;
    const upperLimit = q1 - client;

    return {
      position: "Position 4",
      insight: "Major improvement needed",
      improvementScope: `${lowerLimit.toFixed(2)} to ${upperLimit.toFixed(2)}`,
    };
  }
}
