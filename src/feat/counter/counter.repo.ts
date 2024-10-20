import NetworkManager from "../../lib/network_manager";

interface InitialData {
	message: string;
	initial_count: number;
}

export async function fetchCount(): Promise<number> {
	const response = await NetworkManager.get<InitialData>("/");
	return response.data.initial_count;
}
