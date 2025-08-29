import { useEffect, useRef, useState } from "react"
import { VSCodeButton, VSCodeDivider } from "@vscode/webview-ui-toolkit/react"

import { TelemetryEventName } from "@roo-code/types"

import { useAppTranslation } from "@src/i18n/TranslationContext"
import { vscode } from "@src/utils/vscode"
import { telemetryClient } from "@src/utils/TelemetryClient"
import { VSCodeButtonLink } from "../common/VSCodeButtonLink"
import CreditsHistoryTable from "./CreditsHistoryTable"

type AccountViewSSYProps = {
	cloudUser: any | undefined
	cloudApiUrl: string
	onDone: () => void
}

export const AccountViewSSY = ({ cloudUser, cloudApiUrl, onDone }: AccountViewSSYProps) => {
	const { t } = useAppTranslation()
	const { userInfo = null, usages: usageData = [], payments: paymentsData = [] } = cloudUser || {}
	const [loading, setLoading] = useState(false)
	const rooLogoUri = (window as any).IMAGES_BASE_URI + "/panel_light.png"
	const handleConnectClick = () => {
		// Send telemetry for account connect action
		telemetryClient.capture(TelemetryEventName.ACCOUNT_CONNECT_CLICKED)
		vscode.postMessage({ type: "openExternal", url: cloudApiUrl })
	}

	const handleLogoutClick = () => {
		telemetryClient.capture(TelemetryEventName.ACCOUNT_LOGOUT_CLICKED)
		vscode.postMessage({ type: "shengSuanYunSignOut" })
	}

	const handleVisitCloudWebsite = () => {
		telemetryClient.capture(TelemetryEventName.ACCOUNT_CONNECT_CLICKED)
		vscode.postMessage({ type: "openExternal", url: "https://console.shengsuanyun.com/user/overview" })
	}

	return (
		<div className="flex flex-col h-full p-4 bg-vscode-editor-background">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-xl font-medium text-vscode-foreground">{t("account:title")}</h1>
				<VSCodeButton appearance="primary" onClick={onDone}>
					{t("settings:common.done")}
				</VSCodeButton>
			</div>
			{userInfo ? (
				<>
					{userInfo && (
						<div className="w-full flex items-center py-3">
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
					)}
					<div className="flex gap-2 justify-between">
						<VSCodeButton appearance="secondary" onClick={handleVisitCloudWebsite} className="w-2/5">
							{t("account:visitCloudWebsite")}
						</VSCodeButton>
						<VSCodeButton appearance="secondary" onClick={handleLogoutClick} className="w-2/5">
							{t("account:logOut")}
						</VSCodeButton>
					</div>

					<VSCodeDivider className="w-full my-6" />
					<div className="w-full flex flex-col items-center">
						<div className="text-sm text-[var(--vscode-descriptionForeground)] mb-3">余额</div>
						<div className="text-4xl font-bold text-[var(--vscode-foreground)] mb-6 flex items-center gap-2">
							{loading ? (
								<div className="text-[var(--vscode-descriptionForeground)]">加载中...</div>
							) : (
								<>
									<span>￥</span>
									<StyledCreditDisplaySSY balance={userInfo?.Wallet?.Assets / 10000} />
									<VSCodeButton
										appearance="icon"
										className="mt-1"
										onClick={() => {
											setLoading(false)
										}}>
										<span className="codicon codicon-refresh"></span>
									</VSCodeButton>
								</>
							)}
						</div>

						<div className="w-full">
							<VSCodeButtonLink href="https://console.shengsuanyun.com/user/recharge" className="w-full">
								充值
							</VSCodeButtonLink>
						</div>
					</div>

					<VSCodeDivider className="mt-6 mb-3 w-full" />

					<div className="flex-grow flex flex-col min-h-0 pb-[0px]">
						<CreditsHistoryTable isLoading={loading} usageData={usageData} paymentsData={paymentsData} />
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

					<div className="flex flex-col gap-4 mt-5">
						<VSCodeButton appearance="primary" onClick={handleConnectClick} className="w-full">
							{t("account:connect")}
						</VSCodeButton>
					</div>
				</>
			)}
		</div>
	)
}

// Custom hook for animated credit display with styled decimals
const useAnimatedCredits = (targetValue: number, duration: number = 660) => {
	const [currentValue, setCurrentValue] = useState(0)
	const animationRef = useRef<number>()
	const startTimeRef = useRef<number>()

	useEffect(() => {
		const animate = (timestamp: number) => {
			if (!startTimeRef.current) {
				startTimeRef.current = timestamp
			}

			const elapsed = timestamp - startTimeRef.current
			const progress = Math.min(elapsed / duration, 1)

			// Easing function (ease-out)
			const easedProgress = 1 - (1 - progress) ** 3
			const newValue = easedProgress * targetValue

			setCurrentValue(newValue)

			if (progress < 1) {
				animationRef.current = requestAnimationFrame(animate)
			}
		}

		// Reset and start animation
		startTimeRef.current = undefined
		animationRef.current = requestAnimationFrame(animate)

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [targetValue, duration])

	return currentValue
}

// Custom component to handle styled credit display
export const StyledCreditDisplaySSY = ({ balance }: { balance: number }) => {
	const animatedValue = useAnimatedCredits(balance)
	const formatted = animatedValue.toFixed(2)
	const parts = formatted.split(".")
	const wholePart = parts[0]
	const decimalPart = parts[1] || "0000"
	const firstTwoDecimals = decimalPart.slice(0, 2)
	const lastTwoDecimals = decimalPart.slice(2)

	return (
		<span className="font-azeret-mono font-light tabular-nums">
			{wholePart}.{firstTwoDecimals}
			<span className="text-[var(--vscode-descriptionForeground)]">{lastTwoDecimals}</span>
		</span>
	)
}
