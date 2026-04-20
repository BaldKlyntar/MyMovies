import React, { createContext, useEffect, useState} from "react";
import customFetch from '../Utils/customFetch.js'

export const MovieContext = createContext(null)

const MovieContextProvider = (props) => {


    const contextValue = {

    };

    return(
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider