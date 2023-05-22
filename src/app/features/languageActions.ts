export const setLanguage = (language: string = 'ru') => {
    console.log(setLanguage)
    return {
      type: 'SET_LANGUAGE',
      payload: language,
    };
  };
  