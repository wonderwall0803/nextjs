import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head'
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { usePageContext } from 'context/pageContext';
import { useUserContext } from 'context/userContext';
import Header from 'components/common/header';
import Footer from 'components/common/footer';

const Home: NextPageWithLayout = () => {
  const pageContext = usePageContext();
  const userContext = useUserContext();
  const {txtSample, setTxtSample} = pageContext;
  const {userName, setUserName} = userContext;
  const [sample, setSample] = useState();

  useEffect(() => {
    console.log('レンダリング後実行');
  },[]);

  return (
    <>
      <Head>
        <title>ページタイトル</title>
        <meta name="description" content="ページのディスクリプション" />
      </Head>
      <main>
        <p>pageContext data : {txtSample}</p>
        <p>userContext data : {userName}</p>
        <div onClick={() => {setTxtSample("Change Context!!")}}>Click Here Context Change!!</div>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

const sample = css`
  ${media.pc} {
    
  }
  ${media.sp} {

  }
`

export default Home
