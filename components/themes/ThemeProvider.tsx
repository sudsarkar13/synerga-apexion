import React from "react";
import {
	ThemeProvider as NThemesProvider,
	type ThemeProviderProps as NextThemesProviderProps,
} from "next-themes";

export function ThemeProvider({
	children,
	themes = ["light", "dark"],
	forcedTheme,
	enableSystem = true,
	disableTransitionOnChange = false,
	enableColorScheme = true,
	storageKey = "theme",
	defaultTheme = "system",
	attribute = "data-theme",
	value,
	nonce,
	scriptProps,
}: NextThemesProviderProps) {
	return (
		<NThemesProvider
			themes={themes}
			forcedTheme={forcedTheme}
			enableSystem={enableSystem}
			disableTransitionOnChange={disableTransitionOnChange}
			enableColorScheme={enableColorScheme}
			storageKey={storageKey}
			defaultTheme={defaultTheme}
			attribute={attribute}
			value={value}
			nonce={nonce}
			scriptProps={scriptProps}>
			{children}
		</NThemesProvider>
	);
}
