const instructionsPrompt = "Телефон: Телефон всегда должен быть рядом с вами. Всегда должен быть включен. Всегда должна быть заряжена батарея. Всегда должны быть открыты приложения, которые вы используете. Всегда!\nТуфли: Туфли должны быть на высоком каблуке, в идеале на шпильках. Туфли на шпильках должны быть черные, желательно лакированные. В идеале туфли на шпильке должны быть из натуральной кожи. Носить туфли только в вечернее время, дома в них делать нечего.\nЧасы: Найти красивые часы, которые радуют глаз, купить их, чтобы они всегда были на руке. Время от времени смотреть на часы и радоваться, что жизнь продолжается.\nДоска: Взять доску, поставить ее на кухне и рисовать на ней маркером. Можно нарисовать что-то красивое, например девушку в белом платье и голубом шарфе, но можно и просто нарисовать сердечко, написать \"Я тебя люблю\", просто так, чтобы никому не мешать.\nДверь: Открыть дверь, зайти в дом и закрыть ее за собой, чтобы никто не вошел. Зайти в магазин и купить еды, а потом выйти из магазина с пустыми руками. В магазине спросить у продавца, сколько сейчас времени и узнать, какой сегодня день недели, месяц, год и число.\n";
const boyQuotesPrompt = "Пацанская цитата: Со мной сложно, но те, кто любят, справляются.\nПацанская цитата: Я буду ценить всегда только тех, кто со мной до последнего.\nПацанская цитата: С каждым такое было. молча стоишь.улыбаешься. а боль изнутри ломает рёбра.\nПацанская цитата: Три простых правила:  если тебя не любят - не выпрашивай любовь. если тебе не верят - не оправдывайся. если тебя не ценят - не доказывай.\nПацанская цитата: Я на твоё «скучаю» готов променять весь мир.\nПацанская цитата:";

function resetOutputField() {
  // If launch prediction for the first time
  if (!document.getElementById("generationDiv").style.display) {
    document.getElementById("generationDiv").style.display = "block";
  }
  document.getElementById("generationResultAnimation").style.display = "block";
  document.getElementById("generationResult").style.textAlign = "center";
  document.getElementById("generationQueryField").innerText = "";
  document.getElementById("generationResultField").innerText = "Пожалуйста, подождите..."
}

function updateResults(result) {
  // If error occurred
  if (result === "Ошибка обработки запроса! Попробуйте снова!") {
    document.getElementById("generationResultField").style.color = "red";
  }
  document.getElementById("generationResultAnimation").style.display = "none";
  document.getElementById("generationResult").style.textAlign = "inherit";
  document.getElementById("generationQueryField").innerText = document.getElementById("query").value;
  document.getElementById("generationResultField").innerText = result;
  document.getElementById("generate").innerText = "Сгенерировать снова!";
}

async function generate() {
  // If we have something in query textarea
  let query = document.getElementById("query").value;
  console.log(query);
  if (query) {
    resetOutputField();
    let prompt = makePrompt(query);
    console.log(prompt);
    let result = await getPredictionFromAPI(prompt);
    console.log(result.predictions);
    updateResults(result.predictions.replace(prompt, ""));
  }
  else {
    alert("Вы ничего не ввели! Введите ваш запрос в поле под загловком \"Ваше начало\".");
  }
}

// async function getPredictionFromAPI(query) {
//   const response = await fetch('https://twilight-disk-a8a4.kuvshanovr4457.workers.dev/?query=' + query);
//   if (response.ok) {
//     return await response.json();
//   }
//   else return { predictions:"Ошибка обработки запроса! Попробуйте снова!" };
// }

async function getPredictionFromAPI(jsonQuery) {
  const response = await fetch('https://billowing-waterfall-d7b2.kuvshanovr4457.workers.dev/', {
    method: 'POST',
    body: JSON.stringify({text:jsonQuery}),
  });
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
      return boyQuotesPrompt + query;
    case 'instructions':
      return instructionsPrompt + query;
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

function trimResponse(response) {
  return response.substring(makePrompt(document.getElementById("query").value).length);
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
