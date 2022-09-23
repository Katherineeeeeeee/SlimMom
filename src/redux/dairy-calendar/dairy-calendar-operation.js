import { createAction } from '@reduxjs/toolkit';

// export const addDate = createAction(
//   'postEatenProduct/addDate',
//   function prepare(data) {
//     console.log(data);
//     return {
//       payload: {
//         date: data,
//       },
//     };
//   }
// );

const addDate = data => {
  console.log(data);
  return { type: 'postEatenProduct/addDate', payload: { date: data } };
};
console.log(addDate());

export const addWeight = createAction(
  'postEatenProduct/addWeight',
  function prepare(data) {
    return {
      payload: {
        weight: data,
      },
    };
  }
);
