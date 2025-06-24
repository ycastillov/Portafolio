'use client';

import {
  ThemeProvider as NextThemsProvider,
  ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemsProvider {...props}>{children}</NextThemsProvider>;
}
