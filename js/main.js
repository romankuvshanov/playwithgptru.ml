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

function generate() {
  if (document.getElementById("query").value) {
    //alert((document.getElementById("query").value));
    document.getElementById("generation").style.display = "block";
    document.getElementById("generationResultAnimation").style.display = "block";
    fetch('https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0354e1f4-a10b-47ac-93a0-2ffee32414e2/default/playwithgptru?query=' + document.getElementById("query").value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("generationResultAnimation").style.display = "none";
        document.getElementById("generationResultField").innerText = data.predictions;

      });
  }
  else {
    alert("Вы ничего не ввели!");
  }

}
