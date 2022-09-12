// const circle = document.querySelector('circle');
// const radius = circle.r.baseVal.value;
// const circumference = radius * 2 * Math.PI;
//
// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = `${circumference}`;
//
// function setProgress(percent) {
//   const offset = circumference - percent / 100 * circumference;
//   circle.style.strokeDashoffset = offset;
// }
//
// const input = document.querySelector('input');
// setProgress(35);
//
// input.addEventListener('change', function(e) {
//   if (input.value < 101 && input.value > -1) {
//     setProgress(input.value);
//   }
// })

async function test() {
  document.getElementById("generationDiv").style.display = "block";
  document.getElementById("generationResultAnimation").style.display = "block";
  await new Promise(r => setTimeout(r, 4000));
  //document.getElementById("generationResultAnimation").style.animation = "offsettozero 5s linear forwards";
  document.getElementById("generationResultAnimation").style.strokeDashoffset = "0";
}


function resetOutputField() {
  // If launch prediction for the first time
  if (!document.getElementById("generationDiv").style.display) {
    document.getElementById("generationDiv").style.display = "block";
    document.getElementById("generationResultAnimation").style.display = "block";
  }
  // Else launch prediction second and more time
  else {
    document.getElementById("generationResultField").innerText = "";
    document.getElementById("generationResultAnimation").style.display = "block";
  }
}

function updateResults(result) {
  if (result === "Ошибка обработки запроса! Попробуйте снова!") {
    document.getElementById("generationResultField").style.color = "red";
  }
  document.getElementById("generationResultAnimation").style.display = "none";
  document.getElementById("generationResultField").innerText = result;
  document.getElementById("generate").innerText = "Сгенерировать снова!";
}

async function generate() {
  // If we have something in query textarea
  if (document.getElementById("query").value) {
    resetOutputField();
    let result = await getPredictionFromAPI(document.getElementById("query").value);
    updateResults(result.predictions);
  }
  else {
    alert("Вы ничего не ввели! Введите ваш запрос в поле под загловком \"Ваше начало\".");
  }
}

async function getPredictionFromAPI(query) {
  const response = await fetch('https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0354e1f4-a10b-47ac-93a0-2ffee32414e2/default/playwithgptru?query=' + query);
  if (response.ok) {
    return await response.json();
  }
  else return { predictions:"Ошибка обработки запроса! Попробуйте снова!" };
}


//https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0354e1f4-a10b-47ac-93a0-2ffee32414e2/default/playwithgptru?query=
function generate2() {
  if (document.getElementById("query").value) {
    if (document.getElementById("generationDiv").style.display == 'none') {
      alert("none");
    }

    document.getElementById("generationDiv").style.display = "block";
    document.getElementById("generationResultAnimation").style.display = "block";

     getPredictionFromAPI("query");
  }
  else {
    alert("Вы ничего не ввели! Введите ваш запрос в поле под загловком \"Ваше начало\".");
  }

}
