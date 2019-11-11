export const increment = nr => {
  return {
    type: "INCEREMENT",
    payload: nr
  };
};

export const decerement = nr => {
  return {
    type: "DECEREMENT",
    payload: -nr
  };
};
