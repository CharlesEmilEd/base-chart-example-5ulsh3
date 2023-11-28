export const createDataPoint = (
  time = Date.now(),
  magnitude = 1000,
  offset = 0,
  max
) => {
  return [time + offset * magnitude, Math.round(Math.random() * max * 2) / 2];
};

export const createRandomData = (time, magnitude, points = 10000) => {
  const data = [];
  const max = Math.round(Math.random() * 10000);
  let i = points * -1 + 1;
  for (i; i <= 0; i++) {
    data.push(createDataPoint(time, magnitude, i, max));
  }
  return data;
};

export const addDataPoint = (data, toAdd) => {
  if (!toAdd) toAdd = createDataPoint();
  const newData = data.slice(0); // Clone
  newData.push(toAdd);
  return newData;
};
