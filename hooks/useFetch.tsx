import { useCallback, useEffect, useState } from 'react';

export const useFetchLazy = () => {
	const [response, setResponse] = useState<unknown>();
	const [isError, setIsError] = useState<unknown>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchData = useCallback(
		async (url: string, config = {}): Promise<any> => {
			setIsLoading(true);
			try {
				const res = await fetch(url, config);
				const data = (await res.json()) as unknown;
				setResponse(data);
				setIsLoading(false);
			} catch (error) {
				setIsError(error);
				setIsLoading(false);
			}
		},
		[]
	);

	return { response, isError, isLoading, fetchData };
};

export const useFetch = (url: string, config?: unknown) => {
	const { fetchData, ...rest } = useFetchLazy();

	useEffect(() => {
		fetchData(url, config)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [config, fetchData, url]);

	return rest;
};
