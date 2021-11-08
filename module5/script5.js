document.addEventListener("DOMContentLoaded", function (event) {
  const sayHello = (event) => {
    console.log(event);
    const name = document.querySelector("#name").value;
    let message = "<h2>Hello " + name + "!!!</h2>";
    //   const content = (document.querySelector("#content").textContent = message);
    document.querySelector("#content").innerHTML = message;
    if (name === "student") {
      let title = document.querySelector("#title").textContent;
      console.log(title);
      title += "love it";
      document.querySelector("#title").textContent = title;
    }
  };
  document.querySelector("button").addEventListener("click", sayHello);

  document
    .querySelector("body")
    .addEventListener("mousemove", function (event) {
      //   console.log(event.shiftKey);
      if (event.shiftKey === true) {
        console.log(event.shiftKey);
        console.log(event.clientX);
        console.log(event.clientY);
      }
    });
});

// document.querySelector("button").addEventListener("click", sayHello);
//document.querySelector("button").onclick = sayHello;
