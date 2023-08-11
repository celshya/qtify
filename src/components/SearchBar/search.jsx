import React from 'react'
import {ReactComponent as SearchIcon} from "../../assets/SearchIcon.svg"
import styles from "./search.module.css"
const Search = ({placeholder,data}) => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search}/>
        <button className={styles.searchButton} type='submit'> <SearchIcon/></button>

    </form>
  )
}

export default Search