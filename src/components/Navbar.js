import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";

const NavBar = () => (
  <div className="searchbar">
    <FormControl fullWidth>
      <FilledInput
        placeholder="Search"
        autoFocus
        startAdornment={
          <InputAdornment>
            <IconButton aria-label="search-icon">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  </div>
);

export default NavBar;
