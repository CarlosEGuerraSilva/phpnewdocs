import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

export function useTheme() {
	const [theme, setThemeState] = useState<Theme>(() => {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		localStorage.setItem(THEME_KEY, theme);
	}, [theme]);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
	};

	return { theme, setTheme };
}
