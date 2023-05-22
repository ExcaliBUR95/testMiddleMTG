import React, { Component, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Watch from './Watch';
import ReviewList from './ReviewList';

interface SetLanguageAction {
  type: string;
  payload: string;
}

const mapDispatchToProps = {
  setLanguage: (language: string): SetLanguageAction => ({
    type: 'SET_LANGUAGE',
    payload: language,
  }),
};

type HeaderProps = ConnectedProps<typeof connector>;

class Header extends Component<HeaderProps> {
  handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    console.log(selectedLanguage)
    this.props.setLanguage(selectedLanguage);
  };

  render() {
    const { selectedLanguage } = this.props;
console.log(selectedLanguage)
    return (
      <div className="header">
        <Watch />

        <img className='logo' src="https://w7.pngwing.com/pngs/981/512/png-transparent-avengers-logo-captain-america-thor-hulk-logo-captain-america-marvel-avengers-assemble-avengers-heroes.png" alt="Logo" />
        <select value={selectedLanguage} onChange={this.handleLanguageChange}>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <ReviewList locale={selectedLanguage} reviews={[]} getReviews={function (locale: string): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    selectedLanguage: state.language.language || 'ru',
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Header);
