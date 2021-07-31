import Head from "next/head";
import { Title } from "elements/shared/TextStyles";
import styled from "styled-components";
import { Gradients } from "elements/shared/Colors";

const Background = styled.div`
  background: ${Gradients.red};
  padding: 10px 20px;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Uncle Jhon 🍕 App</title>
        <meta name="description" content="Uncle Jhon Pizza App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background>
        <Title>Welcome, Hello world</Title>
      </Background>
    </>
  );
}
