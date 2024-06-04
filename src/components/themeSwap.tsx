"use client"
import { useTheme } from "next-themes"

export const ThemeSwap: React.FC = () => {
    const {setTheme, theme, resolvedTheme} = useTheme()
    console.log(theme)
    return(
        <button className="dark:text-red-500 text-blue-800" onClick={() => {
            setTheme(resolvedTheme === "light"? "dark" : "light")
        }}>
            só troca ai porra
        </button>
    )
}