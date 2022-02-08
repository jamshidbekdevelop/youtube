import React from 'react'
// import Footer from '../components/footer'
import Main from '../components/main'
import Navbar from '../components/navbar'
import Sitebar from '../components/sitebar'
import Footer from '../components/footer'
import { Moc } from './styled'
export const Root = () => {
    return (
        <Moc>
            <Main/>
            <Moc flex>
                <Navbar/>
                <Moc>
                    <Sitebar/>
                    <Footer/>
                </Moc>
                
            </Moc>
            
        </Moc>
    )
}
export default Root;