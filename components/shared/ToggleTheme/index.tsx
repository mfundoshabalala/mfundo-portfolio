import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { FunctionComponent, useEffect, useState } from 'react';

const ToggleTheme: FunctionComponent = () => {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		setTheme('light');
		setIsMounted(true);
	}, [setTheme]);

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light');
			setEnabled(!enabled);
		}
	};

	// TODO: Put pictures on the Switch

	return (
		<Switch
			checked={enabled}
			onChange={switchTheme}
			className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex items-center h-7 rounded-full w-14`}
		>
			<span className="sr-only">Toggle theme</span>
			<span
				className={`${
					enabled ? 'translate-x-8' : 'translate-x-1'
				} inline-block w-5 h-5 transform bg-white rounded-full`}
			/>
		</Switch>
	);
};

export default ToggleTheme;
