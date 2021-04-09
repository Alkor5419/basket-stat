import { useEffect, useState } from "react";
type ThemeMode = "lightTheme" | "darkTheme";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(
    "lightTheme"
  );

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (!localTheme) {
      window.localStorage.setItem("theme", "lightTheme");
    }
  }, []);

  const changeTheme = () => {
    if (theme === "lightTheme") {
      localStorage.setItem("theme", "darkTheme");
      setTheme("darkTheme");
    } else {
      localStorage.setItem("theme", "lightTheme");
      setTheme("lightTheme");
    }
  };

  return { theme, changeTheme };
};
