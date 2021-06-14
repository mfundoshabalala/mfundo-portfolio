async function fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
	const res = await fetch(url, options);
	return (await res.json()) as T;
}

export default fetcher;
