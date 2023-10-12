// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {

//     const sheet = new ServerStyleSheet()
    
//     const originalRenderPage = ctx.renderPage
    
//     // Run the React rendering logic synchronously
//     ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) =>
//         sheet.collectStyles(<App {...props} />),
//     })
//     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//     const initialProps = await Document.getInitialProps(ctx)
 
//     return {
//       ...initialProps,
//       styles: [initialProps.styles, sheet.getStyleElement()],
//     }
//   }
 
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <link rel="preconnect" href="https://fonts.googleapis.com"/>
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
//             <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
 
// export default MyDocument