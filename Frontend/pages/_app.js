import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
<>
<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />

</Head>
<>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"/>

</>






  
  
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
