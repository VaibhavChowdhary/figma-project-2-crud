export const formatDate = (dateString) => {
  const isAlreadyFormatted = /^[a-zA-Z]{3}\s\d{1,2},\s\d{4}$/.test(dateString);

  if (isAlreadyFormatted) {
    return dateString;
  } else {
    const [year, month, day] = dateString.split("-");
    const dateObj = new Date(year, parseInt(month) - 1, day);
    return dateObj.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
};

export const sortByName = (data, sortOrder) => {
  const sortedData = [...data].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
  return sortedData;
};

export const sortByDate = (data, sortOrder) => {
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.dateOfAdmission);
    const dateB = new Date(b.dateOfAdmission);
    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  return sortedData;
};

export const showSortButton = (value) => {
  const xyz = document.getElementById(value);
  if (xyz) {
    xyz.style.display = "block";
  }
};

export const hideSortButton = (value) => {
  const xyz = document.getElementById(value);
  if (xyz) {
    xyz.style.display = "none";
  }
};