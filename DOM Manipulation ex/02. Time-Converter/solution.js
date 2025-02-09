function attachEventsListeners() {
  // const dayBtn = document.querySelector("#daysBtn");
  // const hoursBtn = document.querySelector("#hoursBtn");
  // const minutesBtn = document.querySelector("#minutesBtn");
  // const secondsBtn = document.querySelector("#secondsBtn");
  const dayInput = document.querySelector("#days");
  const hoursInput = document.querySelector("#hours");
  const minutesInput = document.querySelector("#minutes");
  const secondsInput = document.querySelector("#seconds");

  document.querySelector("main").addEventListener("click", function (event) {
    if (event.target.tagName === "INPUT" && event.target.type == "button") {
      //console.log(event.target.parentElement);

      let input = event.target.parentElement.querySelector("input");

      let timeObj = timeTransition(input.id, Number(input.value));
        dayInput.value = timeObj["days"]
        hoursInput.value = timeObj["hours"];
        minutesInput.value = timeObj["minutes"];
        secondsInput.value = timeObj["seconds"];
    }
  });
  function timeTransition(typeOfTime, time) {
    let days;
    if (typeOfTime === "seconds") {
      days = time / 86400;
    }
    if (typeOfTime === "minutes") {
      days = time / 1440;
    }
    if (typeOfTime === "hours") {
      days = time / 24;
    }
    if (typeOfTime === "days") {
      days = time;
    }
    return {
      days: days,
      hours: days * 24,
      minutes: days * 1440,
      seconds: days * 86400,
    };
  }
}
