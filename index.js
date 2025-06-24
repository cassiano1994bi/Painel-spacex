import Head from 'next/head'
import PainelCassiano from '../components/PainelCassiano'

export default function Home() {
  return (
    <>
      <Head>
        <title>Painel Cassiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main style={{ padding: 20 }}>
        <PainelCassiano />
      </main>
    </>
  )
}
