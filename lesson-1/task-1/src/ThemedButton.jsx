import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    return <button {...this.props} style={{
      backgroundColor: this.context.background,
      color: this.context.fontcolor
    }}
    className='btn' />;}
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;