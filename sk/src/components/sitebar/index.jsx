import React, {useContext} from 'react'
import { Box } from './styled'
import { MovieContext } from '../../context/movie';
import muvies from '../../mock/data'

export const Sitebar = () => {
    
    return (
        <Box>
            <Box.Button>
                <Box.H1>All</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Kino</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Music</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Videos</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Multic</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Pubg</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Camediya</Box.H1>
            </Box.Button>
            <Box.Button>
                <Box.H1>Live</Box.H1>
            </Box.Button>
        </Box>
    )
}
export default Sitebar