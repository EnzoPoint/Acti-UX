import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@components/layout/header'

const App = ({ Component, pageProps }: AppProps) => {

	const router = useRouter()

	// render

	return (
		// <Context.Provider value={contextValue}>
			<SessionProvider session={pageProps.session}>
				<Head>
					<meta name="application-name" content="LaVision Média" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content="LaVision Média" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-wep-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-title" content="LaVision Média" />
					<meta name="description" content="Le magazine 100% pour les passionnés par des passionées !" />
					<meta name="format-detection" content="telephone=no" />
					<link href="splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<link href="splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<link href="splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
					<link href="splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
					<link href="splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<link href="splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
					<link href="splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<link href="splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<link href="splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<link href="splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name='viewport'
						content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
					/>
					<link rel="manifest" href="/manifest.json" />
				</Head>

				{
					// check if we're in /app
					router.pathname.includes('/') ?
						// if so, display the nav bar and the header
						<>
							<Header />
							<Component {...pageProps} />
						</>
					:
						<Component {...pageProps} />
				}
			</SessionProvider>
		// </Context.Provider>
	)
}

export default App