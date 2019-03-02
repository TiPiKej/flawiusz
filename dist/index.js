(() => {
  const root = document.querySelector("#root");

  const calculate = () => {
    let wyeliminowane = [];

    const del = (arr, whichOne) => {
      let z = [];
      arr.forEach((el, nr) => {
        if (nr + 1 !== whichOne) z.push(el);
        else wyeliminowane.push(el);
      });
      return z;
    };

    const lud = Number(input_1.value);
    const coIle = Number(input_2.value);

    let arr = [];
    for (let i = 0; i < lud; i++) arr.push(i + 1);

    let current = 0;

    let i = 0;
    while (arr.length > 1) {
      current =
        arr.length > coIle + current
          ? coIle + current
          : (coIle + current) % arr.length === 0
          ? arr.length
          : (coIle + current) % arr.length;
      arr = del(arr, current);
      current = current === 0 ? arr.length : current - 1;

      i++;
      if (lud % 2 === 0 && arr.length <= 2) break;
    }

    const wynikKoncowy = `Pozostale: ${arr.join(
      " i "
    )}\nKolejnosc eliminowania: ${wyeliminowane.join(", ")}`;
    console.log(wynikKoncowy);
    wynik.innerText = wynikKoncowy;

    // console.log(lud, coIle);
  };

  pressEnter = ({ key }, where) => {
    console.log(key);
    if (key === "Enter") calculate();
    else if (key === "Tab") document.querySelector(where).focus;
  };

  const input_1 = document.createElement("input");
  input_1.type = "number";
  input_1.autofocus = true;
  input_1.placeholder = "Ile ludzi";
  input_1.id = "in1";
  input_1.onkeydown = ev => pressEnter(ev, "#in2");

  const input_2 = document.createElement("input");
  input_2.type = "number";
  input_2.placeholder = "Co ile ludzi";
  input_2.id = "in2";
  input_2.onkeydown = ev => pressEnter(ev, "#in1");

  const button = document.createElement("button");
  button.innerText = "Pokaz wynik";
  button.onclick = calculate;

  const wynik = document.createElement("div");
  wynik.className = "wynik";

  root.appendChild(input_1);
  root.appendChild(input_2);
  root.appendChild(button);
  root.appendChild(wynik);
})();
