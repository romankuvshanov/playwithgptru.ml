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

// async function test() {
//   document.getElementById("generationDiv").style.display = "block";
//   document.getElementById("generationResultAnimation").style.display = "block";
//   await new Promise(r => setTimeout(r, 4000));
//   //document.getElementById("generationResultAnimation").style.animation = "offsettozero 5s linear forwards";
//   document.getElementById("generationResultAnimation").style.strokeDashoffset = "0";
// }


function resetOutputField() {
  // If launch prediction for the first time
  if (!document.getElementById("generationDiv").style.display) {
    document.getElementById("generationDiv").style.display = "block";
  }
  document.getElementById("generationResultAnimation").style.display = "block";
  document.getElementById("generationResult").style.textAlign = "center";
  document.getElementById("generationResultField").innerText = "Пожалуйста, подождите..."
}

function updateResults(result) {
  // If error occurred
  if (result === "Ошибка обработки запроса! Попробуйте снова!") {
    document.getElementById("generationResultField").style.color = "red";
  }
  document.getElementById("generationResultAnimation").style.display = "none";
  document.getElementById("generationResult").style.textAlign = "inherit";
  document.getElementById("generationResultField").innerText = result;
  document.getElementById("generate").innerText = "Сгенерировать снова!";
}

async function generate() {
  // If we have something in query textarea
  if (document.getElementById("query").value) {
    resetOutputField();
    let result = await getPredictionFromAPI(makePrompt(document.getElementById("query").value));
    updateResults(result.predictions);
  }
  else {
    alert("Вы ничего не ввели! Введите ваш запрос в поле под загловком \"Ваше начало\".");
  }
}

async function getPredictionFromAPI(query) {
  const response = await fetch('https://twilight-disk-a8a4.kuvshanovr4457.workers.dev/?query=' + query);
  if (response.ok) {
    return await response.json();
  }
  else return { predictions:"Ошибка обработки запроса! Попробуйте снова!" };
}

function makePrompt(query) {
  let generationMode = document.querySelector('input[name="generationMode"]:checked').value;
  switch (generationMode) {
    case 'noStyle':
      return query;
    case 'boyQuotes':
      return query;
    case 'instructions':
      return "Телефон: Телефон всегда должен быть рядом с вами. Всегда должен быть включен. Всегда должна быть заряжена батарея. Всегда должны быть открыты приложения, которые вы используете. Всегда!\nТуфли: Туфли должны быть на высоком каблуке, в идеале на шпильках. Туфли на шпильках должны быть черные, желательно лакированные. В идеале туфли на шпильке должны быть из натуральной кожи. Носить туфли только в вечернее время, дома в них делать нечего.\nЧасы: Найти красивые часы, которые радуют глаз, купить их, чтобы они всегда были на руке. Время от времени смотреть на часы и радоваться, что жизнь продолжается.\n" + query;
    case 'recipes':
      return query;
    case 'folkWisdom':
      return query;
    case 'shortWikipedia':
      return query;
    case 'movieSynopses':
      return query;
  }
}

// window.addEventListener('input', function (e) {
//   console.log("input event detected! coming from this element:", e.target);
// }, false);

function updateTextarea(value) {
  switch (value) {
    case 'noStyle':
      document.getElementById("query").placeholder = "Введите что-нибудь, а ruGPT3 продолжит. Например: Сингапур стал первой страной, разрешившей";
      break;
    case 'boyQuotes':
      document.getElementById("query").placeholder = "Введите начало цитаты, а ruGPT3 продолжит её в \"пацанском стиле\". Например: Без труда не";
      break;
    case 'instructions':
      document.getElementById("query").placeholder = "Придумайте предмет, а ruGPT3 напишет инструкцию к нему. Например: Компьютер:";
      break;
    case 'recipes':
      document.getElementById("query").placeholder = "Введите ингредиенты, а ruGPT3 напишет к ним рецепт. Например: Курица, вода, картошка, морковка, лук.";
      break;
    case 'folkWisdom':
      document.getElementById("query").placeholder = "Введите что-нибудь, а ruGPT3 выдаст народную мудрость. Например: На чужой каравай";
      break;
    case 'shortWikipedia':
      document.getElementById("query").placeholder = "Придумайте предмет, а ruGPT3 придумает к нему описание. Например: Компьютер - это";
      break;
    case 'movieSynopses':
      document.getElementById("query").placeholder = "Напишите название фильма, а ruGPT3 придумает к нему синопсис. Например: Назад в будущее:";
      break;
  }
}


//https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0354e1f4-a10b-47ac-93a0-2ffee32414e2/default/playwithgptru?query=
// function generate2() {
//   if (document.getElementById("query").value) {
//     if (document.getElementById("generationDiv").style.display == 'none') {
//       alert("none");
//     }
//
//     document.getElementById("generationDiv").style.display = "block";
//     document.getElementById("generationResultAnimation").style.display = "block";
//
//      getPredictionFromAPI("query");
//   }
//   else {
//     alert("Вы ничего не ввели! Введите ваш запрос в поле под загловком \"Ваше начало\".");
//   }
//
// }
