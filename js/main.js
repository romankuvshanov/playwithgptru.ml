const instructionsPrompt = "Телефон: Телефон всегда должен быть рядом с вами. Всегда должен быть включен. Всегда должна быть заряжена батарея. Всегда должны быть открыты приложения, которые вы используете. Всегда!\nТуфли: Туфли должны быть на высоком каблуке, в идеале на шпильках. Туфли на шпильках должны быть черные, желательно лакированные. В идеале туфли на шпильке должны быть из натуральной кожи. Носить туфли только в вечернее время, дома в них делать нечего.\nЧасы: Найти красивые часы, которые радуют глаз, купить их, чтобы они всегда были на руке. Время от времени смотреть на часы и радоваться, что жизнь продолжается.\nДоска: Взять доску, поставить ее на кухне и рисовать на ней маркером. Можно нарисовать что-то красивое, например девушку в белом платье и голубом шарфе, но можно и просто нарисовать сердечко, написать \"Я тебя люблю\", просто так, чтобы никому не мешать.\nДверь: Открыть дверь, зайти в дом и закрыть ее за собой, чтобы никто не вошел. Зайти в магазин и купить еды, а потом выйти из магазина с пустыми руками. В магазине спросить у продавца, сколько сейчас времени и узнать, какой сегодня день недели, месяц, год и число.\n";
const boyQuotesPrompt = "Пацанская цитата: Со мной сложно, но те, кто любят, справляются.\nПацанская цитата: Я буду ценить всегда только тех, кто со мной до последнего.\nПацанская цитата: С каждым такое было. молча стоишь.улыбаешься. а боль изнутри ломает рёбра.\nПацанская цитата: Три простых правила:  если тебя не любят - не выпрашивай любовь. если тебе не верят - не оправдывайся. если тебя не ценят - не доказывай.\nПацанская цитата: Я на твоё «скучаю» готов променять весь мир.\nПацанская цитата:";
const recipesPrompt = "Курица, вода, картошка, морковка, лук. : Овощи и мясо можно запечь в духовке, для этого нужно подготовить овощи и мясо и запекать в духовом шкафу. Сначала запекаем овощи. Мелко нарезаем лук, картофель, морковку. Заливаем овощи кипятком, солим, добавляем специи. Готовим в духовке при температуре 200 градусов минут 20. Посыпаем тертым сыром, ставим снова в духовку на 5 минут.\nЧеснок, рис, мясо, вода, специи. Из этого набора можно приготовить замечательный ужин. Для начала нужно приготовить рис и мясо по отдельности. Мясо положить в кастрюлю с водой и варить до готовности. Лук нарезать и обжарить на сковороде с растительным маслом. Добавить к мясу. В это время можно почистить чеснок и нарезать его пластиками. Добавить чеснок к мясу и луку. Посолить и поперчить. Когда мясо будет готово, выложить рис. Можно готовить на пару, но мы любим жареный рис, поэтому обжариваем его на сухой сковороде.\nТесто, сыр, салями, помидоры, соус, зелень. Что приготовить, если дома нет ничего, кроме теста, сыра и помидоров? Конечно, пиццу. Приготовьте тесто, добавьте туда сыр и помидоры, сделайте пиццу и положите ее в духовку. Готово!\nМакароны, куриное филе, сливки, сыр, яйца, мука, молоко. Макароны отварить, мясо нарезать небольшими кусочками и обжарить на сливочном масле. Сыр натереть, смешать со сливками и яйцом. Получившейся смесью смазать макароны, сверху выложить мясо и посыпать сыром. Запекать 15 минут при температуре 180 градусов.\n";
const folkWisdomPrompt = "Если дома нет покоя, то и в гостях не будет мира.\nКак дела у тебя, так и ты другим открой.\nВ воскресенье нужно жить, а в понедельник – умирать.\nОн хотел лишь одного – счастья.\nНе зачем бежать к счастью, когда оно само прибежит.\nПочему нельзя быть счастливым, если это не запрещено\nКак в дом зайдешь, так и выйдешь.nМеньше говори, больше слушай.\n";
const shortWikipediaPrompt = "Короче, Очки — это средство, которое дает возможность человеку, носящему очки, казаться еще умнее, чем он есть на самом деле.\nКороче, Стул — объект мебели, предназначенный для сидения одного человека.\nКороче, Автомобиль — средство передвижения, которое может быть использовано для решения проблем с парковкой, если припарковать его на месте, где проблема не решается.\nКороче, Кроссовки — обувь для спортсменов и тех, кто хочет казаться спортивным.\n";
const movieSynopsesPrompt = "Сумерки: Влюбленная пара решает сбежать от людей и провести ночь вдвоем наедине с природой, где их чувства могут быть полнее. Однако влюбленным не приходится долго искать уединенное место - они находят его в старой хижине над обрывом. И им остается лишь одно - рискнуть и посмотреть, чем закончится эта ночь.\nМир Юрского периода: Два года спустя после событий первого фильма в парке динозавров появляется новый вид - динозавр-гибрид, который оказывается не таким уж безобидным, как казалось сначала.\nЧеловек паук через вселенные: Питер Паркер, обычный студент, случайно становится обладателем сверхспособностей. Он учится управлять ими, но все его попытки заканчиваются неудачами, пока он не встречает таинственную девушку, которая даёт ему возможность применить свои силы.\nШоу Трумана: На протяжении многих лет главный герой фильма Труман живет в вымышленном городе, окруженный вымышленными людьми. Однажды он понимает, что все, кого он знает, - это актеры, играющие роли жителей города. В этот момент Труман осознает, что он сам всего лишь актер, играющий главную роль в этом спектакле.\n";

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
    let resultReplaced = result.predictions.replace(prompt, "");
    updateResults(trimResult(resultReplaced));
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
      return boyQuotesPrompt + query.trim();
    case 'instructions':
      return instructionsPrompt + query.trim();
    case 'recipes':
      return recipesPrompt + query.trim();
    case 'folkWisdom':
      return folkWisdomPrompt + query.trim();
    case 'shortWikipedia':
      return shortWikipediaPrompt + query.trim();
    case 'movieSynopses':
      return movieSynopsesPrompt + query.trim();
  }
}

function trimResult(result) {
  let generationMode = document.querySelector('input[name="generationMode"]:checked').value;
  switch (generationMode) {
    case 'noStyle':
      return result;
    case 'boyQuotes':
      return result.slice(0, result.indexOf('\n'));
    case 'instructions':
      return result.slice(0, result.indexOf('\n'));
    case 'recipes':
      return result.slice(0, result.indexOf('\n'));
    case 'folkWisdom':
      return result.slice(0, result.indexOf('\n'));
    case 'shortWikipedia':
      return result.slice(0, result.indexOf('\n'));
    case 'movieSynopses':
      return result.slice(0, result.indexOf('\n'));
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
      document.getElementById("query").placeholder = "Введите начало цитаты, а ruGPT3 продолжит её в \"пацанском стиле\". Например: Он хотел лишь одного";
      break;
    case 'instructions':
      document.getElementById("query").placeholder = "Придумайте предмет, а ruGPT3 напишет инструкцию к нему. Например: Компьютер:";
      break;
    case 'recipes':
      document.getElementById("query").placeholder = "Введите ингредиенты, а ruGPT3 напишет к ним рецепт. Например: Свекла, вода, мясо, картошка, капуста, лук, соль.";
      break;
    case 'folkWisdom':
      document.getElementById("query").placeholder = "Введите что-нибудь, а ruGPT3 выдаст народную мудрость. Например: Многое в жизни";
      break;
    case 'shortWikipedia':
      document.getElementById("query").placeholder = "Придумайте предмет, а ruGPT3 придумает к нему описание. Например: Короче, Компьютер";
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
// TODO: Refactoring
