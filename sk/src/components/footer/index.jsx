import React, {useContext} from 'react'
import { MovieContext } from '../../context/movie'
import { Box } from './styled'
export const Movie = () => {
    const [state, setState]= useContext(MovieContext)
    return (
        <Box>
            {state.map((value)=>{
                    return(
                        <Box.K>
                            <Box.Img></Box.Img>
                            <Box.D>
                                <Box.I></Box.I>
                                <div>
                                    <Box.T>{value.title}</Box.T>
                                    <Box.N>{value.user.name} {value.user.surname}</Box.N>
                                    <Box.V>{value.view  }</Box.V>
                                </div>
                            </Box.D>
                            
                        </Box.K>
                    );
                })}
        </Box>
    )
}
export default Movie;