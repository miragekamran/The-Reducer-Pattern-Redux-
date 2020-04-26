export const setEditTrue = () => {
  return { type: "EDITING" };
};

export const updateTitle = (newtitle) => {
  return { type: "UPDATE_TITLE", payload: newtitle };
};
