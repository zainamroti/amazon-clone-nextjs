import React from 'react'
import styles from '../../styles/Header.module.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
            </div>

            <div className={styles.header__option}>
                {/* //MUI Location icon */}

                <span className={styles.header__optionLineOne}>Deliver to</span>
                <span className={styles.header__optionLineTwo}>Pakistan</span>
            </div>

            <div className={styles.header__search}>
                <select className={styles.header__searchSelect} name="All-category-sel" id="-1-sel-header" ><option value="All">All</option></select>
                <input className={styles.header__searchInput} type="text" className={styles.header__searchInput} />
                <SearchIcon className={styles.header__searchIcon} />
            </div>

            <div className={styles.header__nav}>
                <div className={styles.header__option}>
                    {/* Language Selector */}
                </div>
                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Hello, there</span>
                    <span className={styles.header__optionLineTwo}>Sign in</span>

                </div>
                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Returns</span>
                    <span className={styles.header__optionLineTwo}>& Orders</span>

                </div>
                <div className={styles.header__option}>
                    {/* Card Dynamic count */}
                    {/* Card Icon */}
                    <span className={styles.header__optionLineTwo}>Cart</span>
                </div>
            </div>

        </div>
    )
}

export default Header