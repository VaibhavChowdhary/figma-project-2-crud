export const formatDate = (dateString) => {
  const isHyphenSeparated = dateString.indexOf("-") !== -1;
  if (isHyphenSeparated) {
    const [year, month, day] = dateString.split("-");
    const dateObj = new Date(year, parseInt(month) - 1, day);
    return dateObj.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
};
