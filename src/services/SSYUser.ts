import axios from "axios"

export const fetchUserInfo = async (token: string): Promise<any> => {
	if (!token) return null
	const headers = { "x-token": `${token}` }
	const url = "https://api.shengsuanyun.com"
	const dqs = dateQueryString()
	const rate = 1 // Define rate constant for calculations

	try {
		const [usage, payment, user] = await Promise.all([
			axios.get(`${url}/modelrouter/userlog?page=1&pageSize=1000&${dqs}`, { headers }),
			axios.get(`${url}/modelrouter/listrecharge?page=1&pageSize=10000`, { headers }),
			axios.get(`${url}/user/info`, { headers }),
		])

		if (usage.data.data.code == 103) {
			return null
		}

		let usages = [],
			payments = [],
			userInfo = {}
		if (usage.data && Array.isArray(usage.data.data.logs)) {
			usages = usage.data.data.logs.map((it: any) => ({
				spentAt: it.request_time,
				model: `${it.model?.company}/${it.model?.name}`,
				credits: (rate * it.total_amount) / 10000000,
				totalTokens: it.total_amount,
				promptTokens: it.input_tokens,
				completionTokens: it.output_tokens,
			}))
		}

		if (payment.data && Array.isArray(payment.data.data.records)) {
			payments = payment.data.data.records.map((it: any) => ({
				paidAt: it.create_at,
				creatorId: "",
				amountCents: ((rate * it.price) / 10000).toString(),
				credits: 0,
			}))
		}

		if (user.data && user.data.data.Wallet) {
			userInfo = user.data.data
		}

		return { usages, payments, userInfo }
	} catch (e) {
		console.log(e)
		return null
	}
}

const dateQueryString = (): string => {
	const endDate = new Date()
	const startDate = new Date(endDate)
	startDate.setDate(endDate.getDate() - 3)
	const formatDate = (date: Date): string => {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, "0") // 月份补零
		const day = String(date.getDate()).padStart(2, "0") // 日期补零
		return `${year}-${month}-${day}`
	}
	return `startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}`
}
