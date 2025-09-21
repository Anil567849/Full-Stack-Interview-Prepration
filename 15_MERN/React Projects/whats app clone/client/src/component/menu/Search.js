import React from 'react'

import { styled, alpha } from '@material-ui/core';
import {InputBase} from '@material-ui/core';
import {Search as SearchIcon} from '@material-ui/icons';

function Search({text , setText}) {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        marginTop : 2,
        borderRadius: 18,
        marginRight: theme.spacing(2),
        background : '#f6f6f6',
        marginLeft: 0,
        width: '100%',
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: 40,
          transition: theme.transitions.create('width'),
          width: '100%',
        },
      }));

    return (
        <div>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder = 'search...'
                inputProps={{ 'aria-label': 'search' }}   
                onChange={(e)=> setText(e.target.value)}
                />
            </Search>
        </div>
    )
}

export default Search
