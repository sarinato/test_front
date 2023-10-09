import React from 'react'
import Feed from '@components/Feed'
import {Roboto} from 'next/font/google'


const robotoRegular = Roboto({
  subsets:["latin"],  
  weight:['300','400','900','500','700']
})

const Home = () => {
  return (
    <main className={robotoRegular.className}>
      <Feed />
    </main>
  )
}

export default Home