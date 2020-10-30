import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import NavigationBar from '../NavigationBar/NavigationBar';
const Header = () => {
    return (
      <div>
        <NavigationBar/>
        <MainHeader></MainHeader>
      </div>
    );
};

export default Header;