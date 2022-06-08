document.getElementById("button").addEventListener("click", function () {
  let date = new Date(document.getElementById("date").value);

  // date = date.getTime() + 1000 * 3600 * 24;
  date = new Date(date);
  const currentDay = date.getUTCDay() + 1;
  const currentDate = date.getUTCDate();
  const currentMonth = date.getUTCMonth() + 1
  const currentYear = date.getUTCFullYear();

  console.log(date.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))

  switch (currentDay) {
    case 1:
      document.getElementById("diasem").innerHTML = "Domingo";
      break;

    case 2:
      document.getElementById("diasem").innerHTML = "Segunda";
      break;

    case 3:
      document.getElementById("diasem").innerHTML = "Terça";
      break;

    case 4:
      document.getElementById("diasem").innerHTML = "Quarta";
      break;

    case 5:
      document.getElementById("diasem").innerHTML = "Quinta";
      break;

    case 6:
      document.getElementById("diasem").innerHTML = "Sexta";
      break;

    case 7:
      document.getElementById("diasem").innerHTML = "Sabado";
      break;
  }

  switch (currentMonth) {
    case 1:
      document.getElementById("mesport").innerHTML = "Janeiro";
      break;

    case 2:
      document.getElementById("mesport").innerHTML = "Feveiro";
      break;

    case 3:
      document.getElementById("mesport").innerHTML = "Março";
      break;

    case 4:
      document.getElementById("mesport").innerHTML = "Abril";
      break;

    case 5:
      document.getElementById("mesport").innerHTML = "Maio";
      break;

    case 6:
      document.getElementById("mesport").innerHTML = "Junho";
      break;

    case 7:
      document.getElementById("mesport").innerHTML = "Julho";
      break;

    case 8:
      document.getElementById("mesport").innerHTML = "Agosto";
      break;

    case 9:
      document.getElementById("mesport").innerHTML = "Setembro";
      break;

    case 10:
      document.getElementById("mesport").innerHTML = "Outubro";
      break;

    case 11:
      document.getElementById("mesport").innerHTML = "Novembro";
      break;

    case 12:
      document.getElementById("mesport").innerHTML = "Dezembro";
      break;
  }

  document.getElementById("dia").innerHTML = currentDate;
  document.getElementById("mes").innerHTML = currentMonth;
  document.getElementById("ano").innerHTML = currentYear;
  document.getElementById("mili").innerHTML = date.getTime();
});
