import data from '../../data.json';

export const getReviews = (language: string) => {
  let payload;
console.log(payload)
  if (language === 'en') {
    payload = data.en;
  } else if (language === 'ru') {
    payload = data.ru;
  } else {
    payload = null;  
  }

  return {
    type: 'GET_REVIEWS',
    payload,
  };
};
