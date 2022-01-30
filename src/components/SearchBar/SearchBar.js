import classes from "./SearchBar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import {useSearchParams} from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SearchBar = props => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = props.searchParamName;
    const {width} = useWindowDimensions();

    const iconSize = width > 700 ? "3x" : "1x";

    return <div className={classes.searchBar}>
        <FontAwesomeIcon icon={solid('search')} size={iconSize} inverse className={classes.searchIcon}/>
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