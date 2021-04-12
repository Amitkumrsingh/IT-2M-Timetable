var days = {
  monday: [
    "9:15 - 10:05  TALF(Ms. Shiva Soni)",
    "10:05 - 10:55  SI(Mr.Harish Dalal) ",
    "10:50 - 11:45  TALF(Ms. Shiva Soni)",
    "11:45 - 12:35  OS (Ms.Rifa Nizam Khan)",
   
    "13:35 - 14:25  QUANT",
    "14:25 - 15:15  QUANT",
    "15:15 - 16:05  WD(Mr.S.S.Pal)",
    "16:05 - 16:55  PP(Ms.Shyla singh)"
  ],
  tuesday: [
    "9:15 - 10:05   WD(Mr.S.S.Pal)",
    "10:05 - 10:55  SI(Mr.Harish Dalal) ",
    "10:50 - 11:45  PP(Ms.Shyla singh)",
    "11:45 - 12:35  TALF(Ms. Shiva Soni)",
  
    "13:35 - 14:25  OS (Ms.Rifa Nizam Khan)",
    "14:25 - 15:15  SI(Mr.Harish Dalal)",
    "15:15 - 16:05  OS (Ms.Rifa Nizam Khan)",
    "16:05 - 16:55  TC(Ms.SB)"
  ],
  wednesday: [
    "9:15 - 10:05  SI(Mr.Harish Dalal) ",
    "10:05 - 10:55  PDP ",
    "10:50 - 11:45  PDP",
    "11:45 - 12:35   TALF(Ms. Shiva Soni)",

    "13:35 - 14:25  PP(Ms.Shyla singh)",
    "14:25 - 15:15  WD(Mr.S.S.Pal)",
    "15:15 - 16:05  WD-L(Ms UMA TOMER)",
    "16:05 - 16:55  WD-L(Ms UMA TOMER)"
  ],
  thursday: [
    "9:15 - 10:05  OS (Ms.Rifa Nizam Khan)",
    "10:05 - 10:55  SI(Mr.Harish Dalal) ",
    "10:50 - 11:45   TC(Ms.SB)",
    "11:45 - 12:35  PP(Ms.Shyla singh)",
   
    "13:35 - 14:25  TALF(Ms. Shiva Soni)",
    "14:25 - 15:15  WD(Mr.S.S.Pal)",
    "15:15 - 16:05  PP-L(Ms. Shiva soni)",
    "16:05 - 16:55  PP-L(Ms. Shiva soni)"

  ],
  friday: [
    "9:15 - 10:05  PP(Ms.Shyla singh)",
    "10:05 - 10:55  WD(Mr.S.S.Pal) ",
    "10:50 - 11:45   OS (Ms.Rifa Nizam Khan) ",
    "11:45 - 12:35   TC(Ms.SB)",
   
    "13:35 - 14:25  TALF(Ms. Shiva Soni)",
    "14:25 - 15:15  SI(Mr.Harish Dalal)",
    "15:15 - 16:05  OS-L(Ms.Shyla Singh)",
    "16:05 - 16:55  OS-L(Ms.Shyla Singh) "

  ],
  saturday: [],
  sunday: [],
};

// ******************************************************************

const show_image_and_text = () => {
  let todayH2 = document.querySelector(".today h2");
  let today__time__table = document.querySelector(".today__time__table");
  let table = document.querySelector("table");
  const para = document.createElement("p");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = "assets/happy.png";
  img.width = "700";
  div.setAttribute("class", "myImage");
  todayH2.style.display = "none";
  table.style.display = "none";
  span.textContent = "No classes today. Enjoy your day!";
  div.appendChild(img);
  today__time__table.appendChild(div);
  para.appendChild(span);
  today__time__table.appendChild(para);
};

// ******************************************************************

const showTodayTimeTable = (timetable) => {
  const tbody = document.querySelector("table tbody");
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = timetable[i].split("  ")[0];
    td2.textContent = timetable[i].split("  ")[1];

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);
  }
};

// ******************************************************************

const compute_start_and_end_time = (currentTime, time) => {
  let date = new Date(currentTime.getTime());
  date.setHours(time.split(":")[0]);
  date.setMinutes(time.split(":")[1]);
  date.setSeconds(time.split(":")[2]);

  return date;
};

// ********************************************************************

const display_ongoing_class_name = (timetable) => {
  const ongoing__class = document.querySelector(".ongoing__class h3");
  if (
    new Date() >= compute_start_and_end_time(new Date(), "09:15:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "10:04:59")
  ) {
    ongoing__class.textContent = timetable[0].split("  ")[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), "10:05:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "10:54:59")
  ) {
    ongoing__class.textContent = timetable[1].split("  ")[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), "10:55:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "11:44:59")
  ) {
    ongoing__class.textContent = timetable[2].split("  ")[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), "11:45:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "12:34:59")
  ) {
    ongoing__class.textContent = timetable[3].split("  ")[1];
  } 

    else if (
    new Date() >= compute_start_and_end_time(new Date(), "13:35:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "14:24:59")
  ) {
    ongoing__class.textContent = timetable[4].split("  ")[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), "14:25:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "15:14:59")
  ) {
    ongoing__class.textContent = timetable[5].split("  ")[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), "15:15:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "16:04:59")
  ) {
    ongoing__class.textContent = timetable[6].split("  ")[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), "16:05:00") &&
    new Date() <= compute_start_and_end_time(new Date(), "16:54:59")
  ) {
    ongoing__class.textContent = timetable[7].split("  ")[1];
  } else ongoing__class.textContent = "It's a break.";
};
// ******************************************************************

const show_ongoing_class_status = (timetable) => {
  const ongoing__class = document.querySelector(".ongoing__class h3");

  if (!timetable.length) ongoing__class.textContent = "-";
  else {
    if (
      new Date() >= compute_start_and_end_time(new Date(), "10:05:00") &&
      new Date() <= compute_start_and_end_time(new Date(), "16:54:59")
    )
      display_ongoing_class_name(timetable);
    else ongoing__class.textContent = "-";
  }
};

// ******************************************************************

const find_week_day = () => {
  const greetingPara = document.querySelector(".greeting p");
  const tableTitle = document.querySelector(".today h2");
  let table = document.querySelector("table");
  let currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour <= 11)
    greetingPara.textContent = "Good morning!";
  else if (currentHour >= 12 && currentHour <= 15)
    greetingPara.textContent = "Good afternoon!";
  else greetingPara.textContent = "Good evening!";

  switch (new Date().getDay()) {
    case 0:
      show_ongoing_class_status([]);

      if (currentHour >= 0 && currentHour <= 18) {
        show_image_and_text();
      } else {
        tableTitle.textContent = "Get set for tomorrow";
        showTodayTimeTable(days["monday"]);
      }
      break;
    case 1:
      show_ongoing_class_status(days["monday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["monday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["tuesday"]);
      }
      break;
    case 2:
      show_ongoing_class_status(days["tuesday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["tuesday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["wednesday"]);
      }
      break;
    case 3:
      show_ongoing_class_status(days["wednesday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["wednesday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["thursday"]);
      }
      break;
    case 4:
      show_ongoing_class_status(days["thursday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["thursday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["friday"]);
      }
      break;
    case 5:
      show_ongoing_class_status(days["friday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["friday"]);
      } else {
        table.style.display = "none";
        tableTitle.textContent = "Calm down! It's weekend tomorrow 🎉";
      }
      break;
    case 6:
      show_ongoing_class_status([]);
      show_image_and_text();
  }
};

find_week_day();

// ******************************************************************

function create_para_in_timer(string) {
  const Timer = document.querySelector(".timer");
  const timepara = document.createElement("p");
  timepara.textContent = string;

  Timer.appendChild(timepara);
}

// ******************************************************************

const timerFunction = (countdownTime) => {
  let timerAnimation = setInterval(function () {
    var distance = new Date(countdownTime).getTime() - new Date().getTime();

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    a[0].textContent = hours < 10 ? "0" + hours : hours;
    a[1].textContent = ":";
    a[2].textContent = minutes < 10 ? "0" + minutes : minutes;
    a[3].textContent = ":";
    a[4].textContent = seconds < 10 ? "0" + seconds : seconds;
    b[0].textContent = "h";
    b[2].textContent = "m";
    b[4].textContent = "s";

    if (distance < 0) {
      clearInterval(timerAnimation);
      let divs_in_timer = document.querySelectorAll(".timer div");
      for (let m = 0; m < divs_in_timer.length; m++) {
        divs_in_timer[m].style.display = "none";
      }
      create_para_in_timer("Please refresh the page. 🔄");
    }
  }, 1000);
};

// ******************************************************************

const highlight_current_class = (i) => {
  var trarray = document.querySelectorAll("tbody tr");

  trarray[i].style.backgroundColor = "#d9d1a9";
};
// ******************************************************************

const configure_timer = (timetable) => {
  for (let i = 0; i < 7; i++) {
    if (
      new Date() >=
        compute_start_and_end_time(
          new Date(),
          timetable[i].split(" ")[0] + ":00"
        ) &&
      new Date() <
        compute_start_and_end_time(
          new Date(),
          timetable[i].split(" ")[4] + ":00"
        )
    ) {
      highlight_current_class(i);
      configure_timer_in_subcomponent(i + 1, timetable);
    }
  }
  // if (
  //   new Date() >= compute_start_and_end_time(new Date(), "10:40:00") &&
  //   new Date() < compute_start_and_end_time(new Date(), "10:45:00")
  // ) {
  //   configure_timer_in_subcomponent(2, timetable);
  // }
  
   if (
    new Date() >= compute_start_and_end_time(new Date(), "13:00:00") &&
    new Date() < compute_start_and_end_time(new Date(), "14:00:00")
  ) {
    configure_timer_in_subcomponent(4, timetable);
  }
  
};

// ********************************************************************

const configure_timer_in_subcomponent = (val, timetable) =>{
  var k, flag;

  for (k = val; k < 8; k++) {
    if (timetable[k].split("  ")[1] !== "-") {
      flag = k;
      break;
    }
  }
  timerFunction(
    compute_start_and_end_time(
      new Date(),
      timetable[flag].split(" ")[0] + ":00"
    )
  );
};

// *********************************************************************

if (
  new Date().getDay() > 0 &&
  new Date().getDay() < 6 &&
  new Date() >= compute_start_and_end_time(new Date(), "10:05:00") &&
  new Date() <= compute_start_and_end_time(new Date(), "16:54:59")
) {
  if (new Date() < compute_start_and_end_time(new Date(), "16:15:00")) {
    var Timer = document.querySelector(".timer");
    for (let i = 0; i < 5; i++) {
      var timerDiv = document.createElement("div");
      var timerDivh3 = document.createElement("h3");
      var timerDivh5 = document.createElement("h5");
      timerDiv.appendChild(timerDivh3);
      timerDiv.appendChild(timerDivh5);
      Timer.appendChild(timerDiv);
    }

    var a = document.querySelectorAll(".timer div h3");
    var b = document.querySelectorAll(".timer div h5");

    switch (new Date().getDay()) {
      case 1:
        configure_timer(days["monday"]);
        break;
      case 2:
        configure_timer(days["tuesday"]);
        break;
      case 3:
        configure_timer(days["wednesday"]);
        break;
      case 4:
        configure_timer(days["thursday"]);
        break;
      case 5:
        configure_timer(days["friday"]);
        break;
    }
  } else {
    highlight_current_class(7);
    create_para_in_timer("This is the last lecture of the day. 🕺");
  }
} else if (new Date().getDay() === 0 || new Date().getDay() === 6) {
  create_para_in_timer("No classes today! 🕺");
} else if (new Date() > compute_start_and_end_time(new Date(), "16:54:59")) {
  create_para_in_timer("All classes are over for today! 🕺");
} else {
  create_para_in_timer("First class will begin at 10:05 a.m. 📚");
}
