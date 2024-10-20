interface RequestOptions extends RequestInit {
	headers?: Record<string, string>;
}

interface APIResponse<T> {
	data: T;
	status: number;
	message?: string;
}

class APIError extends Error {
	public status: number;

	constructor(message: string, status: number) {
		super(message);
		this.status = status;
	}
}

const API_BASE_URL = "/api";

const request = async <T>(
	url: string,
	options: RequestOptions = {},
): Promise<APIResponse<T>> => {
	const defaultHeaders: Record<string, string> = {
		"Content-Type": "application/json",
	};

	const token = localStorage.getItem("token");
	if (token) {
		defaultHeaders["Authorization"] = `Bearer ${token}`;
	}

	const config: RequestOptions = {
		...options,
		headers: {
			...defaultHeaders,
			...options.headers,
		},
	};

	try {
		const response = await fetch(`${API_BASE_URL}${url}`, config);

		if (!response.ok) {
			const errorData = (await response.json()) as { message?: string };
			throw new APIError(
				errorData.message || "An error occurred",
				response.status,
			);
		}

		const data = (await response.json()) as T;
		console.log("Data:", data);
		return { data, status: response.status };
	} catch (error) {
		if (error instanceof APIError) {
			if (error.status === 401) {
				console.error("Unauthorized, redirecting to login...");
			} else if (error.status === 500) {
				console.error("Server error, please try again later.");
			}
			throw error;
		} else {
			console.error("An unexpected error occurred:", error);
			throw new APIError("An unexpected error occurred", 500);
		}
	}
};

const get = <T>(
	url: string,
	options?: RequestOptions,
): Promise<APIResponse<T>> => {
	return request<T>(url, { ...options, method: "GET" });
};

const post = <T>(
	url: string,
	data: any,
	options?: RequestOptions,
): Promise<APIResponse<T>> => {
	return request<T>(url, {
		...options,
		method: "POST",
		body: JSON.stringify(data),
	});
};

const put = <T>(
	url: string,
	data: any,
	options?: RequestOptions,
): Promise<APIResponse<T>> => {
	return request<T>(url, {
		...options,
		method: "PUT",
		body: JSON.stringify(data),
	});
};

const del = <T>(
	url: string,
	options?: RequestOptions,
): Promise<APIResponse<T>> => {
	return request<T>(url, { ...options, method: "DELETE" });
};

export default {
	get,
	post,
	put,
	del,
};
