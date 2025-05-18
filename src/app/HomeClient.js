'use client';

import { useEffect } from "react";

export default function ThemeMetaUpdater() {
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const currentTheme = storedTheme || 'system';
    const isDark = currentTheme === 'dark' || (currentTheme === 'system' && systemPrefersDark);

    const themeTag = document.querySelector('meta[name="theme-color"]');

    if (themeTag) {
        themeTag.setAttribute('content', isDark ? '#1f2937' : '#e5e5e5');
      } else {
        const newThemeTag = document.createElement('meta');
        newThemeTag.name = 'theme-color';
        newThemeTag.content = isDark ? '#1f2937' : '#e5e5e5';
        document.head.appendChild(newThemeTag);
      }
  }, []);

  return null;
}
