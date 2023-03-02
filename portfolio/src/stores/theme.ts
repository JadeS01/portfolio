import { writable } from "svelte/store";

export type ThemeType = "lavender" | "peach" | "ocean";

export const ThemeOptions: {label: string, value: ThemeType}[] = [
    { label: 'Peach', value: 'peach' },
    { label: 'Lavender', value: 'lavender' },
    { label: 'Ocean', value: 'ocean' }
];

export const theme = writable<ThemeType>("lavender");