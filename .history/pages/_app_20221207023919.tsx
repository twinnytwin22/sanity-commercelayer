import React from 'react'
import { AppProps } from 'next/app'
import '../styles/main.css'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
  <WagmiConfig client={wagmiClient}>
  <RainbowKitProvider chains={chains}>
    <Component {...pageProps} />
   </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default CustomApp
