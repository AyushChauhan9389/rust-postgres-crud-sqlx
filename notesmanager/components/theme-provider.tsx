'use client'

import * as React from 'react'
const NextThemesProvider = dynamic(
    () => import('next-themes').then((e) => e.ThemeProvider),
    {
        ssr: false,
    }
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { type ThemeProviderProps } from 'next-themes/dist/types'
import dynamic from 'next/dynamic'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}