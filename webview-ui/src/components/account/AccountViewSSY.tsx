import { useEffect, useRef, useState } from "react"
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react"

import { TelemetryEventName } from "@roo-code/types"

import { useAppTranslation } from "@src/i18n/TranslationContext"
import { vscode } from "@src/utils/vscode"
import { telemetryClient } from "@src/utils/TelemetryClient"
import axios from "axios"

type AccountViewSSYProps = {
	token: string | undefined
	cloudApiUrl: string
	onDone: () => void
}

export const AccountViewSSY = ({ token, cloudApiUrl, onDone }: AccountViewSSYProps) => {
	const { t } = useAppTranslation()
	const wasAuthenticatedRef = useRef(false)
	const [userInfo, setUserInfo] = useState<any>(null)
	const [loading, setLoading] = useState(false)

	const rooLogoUri = (window as any).IMAGES_BASE_URI + "/shengsuanyun.png"

	// Track authentication state changes to detect successful logout
	useEffect(() => {
		if (token) {
			wasAuthenticatedRef.current = true
			fetchUserInfo(token)
		} else if (wasAuthenticatedRef.current && !token) {
			// User just logged out successfully
			telemetryClient.capture(TelemetryEventName.ACCOUNT_LOGOUT_SUCCESS)
			wasAuthenticatedRef.current = false
		}
	}, [token])

	const handleConnectClick = () => {
		// Send telemetry for account connect action
		telemetryClient.capture(TelemetryEventName.ACCOUNT_CONNECT_CLICKED)
		vscode.postMessage({ type: "openExternal", url: cloudApiUrl })
	}

	const handleLogoutClick = () => {
		// Send telemetry for account logout action
		telemetryClient.capture(TelemetryEventName.ACCOUNT_LOGOUT_CLICKED)
		vscode.postMessage({ type: "shengSuanYunSignOut" })
	}

	const handleVisitCloudWebsite = () => {
		// Send telemetry for cloud website visit
		telemetryClient.capture(TelemetryEventName.ACCOUNT_CONNECT_CLICKED)
		vscode.postMessage({ type: "openExternal", url: "https://console.shengsuanyun.com/user/overview" })
	}

	const fetchUserInfo = (token: string) => {
		if (!token) return
		setLoading(true)
		axios
			.get(`https://api.shengsuanyun.com/user/info`, { headers: { "x-token": `${token}` } })
			.then((res) => {
				if (res.data && res.data.data) {
					setUserInfo(res.data.data)
				} else {
					console.error("Invalid response from ShengSuanYun API", res.data)
				}
			})
			.catch((error) => {
				console.error("Error fetching user info from ShengSuanYun API", error)
			})
			.finally(() => {
				setLoading(() => false)
			})
	}

	return (
		<div className="flex flex-col h-full p-4 bg-vscode-editor-background">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-xl font-medium text-vscode-foreground">{t("account:title")}</h1>
				<VSCodeButton appearance="primary" onClick={onDone}>
					{t("settings:common.done")}
				</VSCodeButton>
			</div>
			{token ? (
				<>
					{userInfo && !loading && (
						<div className="flex flex-col mb-6">
							<div className="w-full flex items-end">
								<div className="w-16 h-16 mb-3 rounded-full overflow-hidden">
									{userInfo?.HeadImg ? (
										<img
											src={userInfo.HeadImg}
											alt={t("account:profilePicture")}
											className="w-full h-full object-cover"
										/>
									) : (
										<div className="w-full h-full flex items-center justify-center bg-vscode-button-background text-vscode-button-foreground text-xl">
											{userInfo?.Nickname?.charAt(0) || userInfo?.Email?.charAt(0) || "?"}
										</div>
									)}
								</div>

								<div className="flex flex-col gap-3 ml-4">
									<h2 className="text-lg font-medium text-vscode-foreground mb-0">
										{userInfo?.Nickname || userInfo?.Username}
									</h2>
									{userInfo?.Email && (
										<p className="text-sm text-vscode-descriptionForeground">{userInfo?.Email}</p>
									)}
								</div>
							</div>
							{userInfo?.Wallet && (
								<div className="w-full flex items-center justify-center gap-2 text-sm text-vscode-descriptionForeground">
									<p className="text-lg">￥{(userInfo.Wallet.Assets / 10000).toFixed(2)}</p>
								</div>
							)}
						</div>
					)}
					<div className="flex gap-2 justify-between">
						<VSCodeButton appearance="secondary" onClick={handleVisitCloudWebsite} className="w-[160px]">
							{t("account:visitCloudWebsite")}
						</VSCodeButton>
						<VSCodeButton appearance="secondary" onClick={handleLogoutClick} className="w-[160px]">
							{t("account:logOut")}
						</VSCodeButton>
					</div>
				</>
			) : (
				<>
					<div className="flex flex-col items-center mb-1 text-center">
						<div className="w-16 h-16 mb-1 flex items-center justify-center">
							<div
								className="w-12 h-12 bg-vscode-foreground"
								style={{
									WebkitMaskImage: `url('${rooLogoUri}')`,
									WebkitMaskRepeat: "no-repeat",
									WebkitMaskSize: "contain",
									maskImage: `url('${rooLogoUri}')`,
									maskRepeat: "no-repeat",
									maskSize: "contain",
								}}>
								<img src={rooLogoUri} alt="Roo logo" className="w-12 h-12 opacity-0" />
							</div>
						</div>
					</div>

					<div className="flex flex-col mb-6 text-center">
						<h2 className="text-lg font-medium text-vscode-foreground mb-2">
							{t("account:cloudBenefitsTitle")}
						</h2>
						{/* <p className="text-md text-vscode-descriptionForeground mb-4">
							{t("account:cloudBenefitsSubtitle")}
						</p>
						<ul className="text-sm text-vscode-descriptionForeground space-y-2 max-w-xs mx-auto">
							<li className="flex items-start">
								<span className="mr-2 text-vscode-foreground">•</span>
								{t("account:cloudBenefitHistory")}
							</li>
							<li className="flex items-start">
								<span className="mr-2 text-vscode-foreground">•</span>
								{t("account:cloudBenefitSharing")}
							</li>
							<li className="flex items-start">
								<span className="mr-2 text-vscode-foreground">•</span>
								{t("account:cloudBenefitMetrics")}
							</li>
						</ul> */}
					</div>

					<div className="flex flex-col gap-4">
						<VSCodeButton appearance="primary" onClick={handleConnectClick} className="w-full">
							{t("account:connect")}
						</VSCodeButton>
					</div>
				</>
			)}
		</div>
	)
}
