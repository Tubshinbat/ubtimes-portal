export default () => {
  const todayMongolia = () => {
    let month, day;
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let year = today.getFullYear();
    const arrayDate = today.toLocaleDateString().split("/");
    const stringDate = today.toString().split(" ");
    if (stringDate) {
      switch (stringDate[0]) {
        case "Sun":
          day = "Ням";
          break;
        case "Mon":
          day = "Даваа";
          break;
        case "Tue":
          day = "Мягмар";
          break;
        case "Wed":
          day = "Лхагва";
          break;
        case "Thu":
          day = "Пүрэв";
          break;
        case "Fri":
          day = "Баасан";
          break;
        case "Sat":
          day = "Бямба";
          break;
        default:
          day = "";
      }
    }

    month = arrayDate[0] + " сарын";

    return `${month} ${arrayDate[1]} , ${day}`;
  };

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar_container">
            <div className="topbar_today">
              <i className={`far fa-calendar-alt `}></i>
              <p> {todayMongolia()} </p>
            </div>
            <div className="header_search_box">
              <form action="/search">
                <input name="s" type="text" placeholder="Мэдээллээс хайх... " />{" "}
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
