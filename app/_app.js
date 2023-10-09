import {Roboto} from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const robotoRegular = Roboto({
    subsets:["latin"],  
    weight:['300','400','900','500','700']
  })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={robotoRegular.className}>
      <Component {...pageProps} />
    </main>
  )
}
