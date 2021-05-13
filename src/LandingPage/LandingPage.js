import React from 'react';
import {TopNav} from './TopNav/TopNav';
import {SearchBar} from '../SearchBar/SearchBar';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import { SearchSuggestion } from './SearchSuggestion/SearchSuggestion';
export function LandingPage(){
    return(
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav/>
                <img src={logo} className={styles.logo} alt='logo'/>
                <SearchBar/>
                <SearchSuggestion/>
            </div>
        </div>
    );
}