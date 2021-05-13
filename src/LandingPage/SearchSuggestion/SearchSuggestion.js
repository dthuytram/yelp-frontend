import React from 'react';
import styles from './SearchSuggestion.module.css';
export function SearchSuggestion(){
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-concierge-bell"></i></span><span className={styles.suggestion}>Restaurants</span>
            <span className="icon is-small"><i className="fas fa-cocktail"></i></span><span className={styles.suggestion}>Services</span>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.suggestion}>Hotel Bay</span>
            <span className="icon is-small"><i className="fas fa-plane-departure"></i></span><span className={styles.suggestion}>Destination</span> 
            {/* classNam fas-fa taken from "font awesome" 
            *** https://fontawesome.com/icons Page*/}


    
        </div>
    );
}