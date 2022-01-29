import classes from "./SearchBar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import {useSearchParams} from "react-router-dom";

const SearchBar = props => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = props.searchParamName;

    return <div className={classes.searchBar}>
        <FontAwesomeIcon icon={solid('search')} inverse className={classes.searchIcon}/>
        <input value={searchParams.get(searchParam) || ""}
               onChange={event => {
                   let filter = event.target.value;
                   if (filter) {
                       setSearchParams({ filter });
                   } else {
                       setSearchParams({});
                   }
               }}/>
    </div>
}

export default SearchBar;