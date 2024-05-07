export const generateColors = (languages: string[]) => {
  const colors: string[] = [];
  languages.forEach((language) => {
    const color = getColorForLanguage(language);
    colors.push(color);
  });
  return colors;
};

export const getColorForLanguage = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
      return "rgba(255, 206, 86)";
    case "java":
      return "#C83E4D";
    case "python":
      return "rgba(75, 192, 192)";
    case "html":
      return "rgba(255, 99, 132)";
    case "typescript":
      return "rgba(54, 162, 235)";
    case "css":
      return "rgba(255, 159, 64)";
    default:
      return "rgba(0, 0, 0)";
  }
};
