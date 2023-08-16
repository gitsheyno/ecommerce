export const createAction = (type, payload) => {
  console.log(payload);
  return { type, payload };
};
