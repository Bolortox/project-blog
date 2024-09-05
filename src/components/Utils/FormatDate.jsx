const FormatDate = ({ articles }) => {
  const publishedDate = new Date(articles.published_at);
  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };
  const Month = generatMonth(publishedDate.getMonth);
  const Day = publishedDate.getDay();
  const Year = publishedDate.getFullYear();

  return `${Month}${Day},${Year}`;
};

export default FormatDate;
