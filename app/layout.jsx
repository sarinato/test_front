'use client'

import '@styles/globals.css'
import Nav from '@components/Nav'
import BottomNav from '@components/BottomNav'
import styled from 'styled-components';
import {Roboto} from 'next/font/google'
import StyledComponentsRegistry from './registry'

const robotoRegular = Roboto({
  subsets:["latin"],  
  weight:['300','400','900','500','700']
})



const AppContainer = styled.div`
  width: 414px;
  height: 1199px;
  background: white;  
`;

const RootLayout = ({children}) => {

  return (
    <html lang='en'>

      <body className={robotoRegular.className}>
          <main className='app'> 
          <StyledComponentsRegistry>

              <AppContainer>

                <Nav />     
                {children}
                <BottomNav/>

              </AppContainer>   
              
            </StyledComponentsRegistry>                             
          </main>
      </body>
    </html>
  )
}

export default RootLayout