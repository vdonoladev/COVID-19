let dataBase = [
  {
    uf: "Brasil",
    suspeitos: "<div class='spinner blue'></div>",
    confirmados: "<div class='spinner gold'></div>",
    mortes: "<div class='spinner red'></div>",
    recuperados: "<div class='spinner green'></div>",
  },
];

const showData = (data) => {
  const panel = `
		<div class='estado'>
			${data.uf}
		</div>
		<div class='card suspeitos'>
			<div class='numeros'>${data.suspeitos}</div>
			<div class='titulo'>SUSPEITOS</div>
		</div>
		<div class='card confirmados'>
			<div class='numeros'>${data.confirmados}</div>
			<div class='titulos'>CONFIRMADOS</div>
		</div>
		<div class='card mortes'>
			<div class='numeros'>${data.mortes}</div>
			<div class='titulo'>MORTES</div>
		</div>
		<div class='card recuperados'>
			<div class='numeros'>${data.recuperados}</div>
			<div class='titulo'>RECUPERADOS</div>
		</div>
	`;

  const container = document.createElement("div");
  container.innerHTML = panel;

  const info = document.getElementById("info");
  info.removeChild(info.firstChild);
  info.appendChild(container);
};

const getCoronaBrasil = async () => {
  const url = "https://covid19-brazil-api.now.sh/api/report/v1/brazil";
  const getApi = await fetch(url);
  const json = await getApi.json();
  const brasil = await {
    uf: "Brasil",
    suspeitos: json.data.cases,
    confirmados: json.data.confirmed,
    mortes: json.data.deaths,
    recuperados: json.data.recovered,
  };

  showData(brasil);
};

const getCoronaState = async () => {
  const url = "https://covid19-brazil-api.now.sh/api/report/v1/";
  const getApi = await fetch(url);
  const json = await getApi.json();
  dataBase = await json.data;
};

const findState = (evento) => {
  const ufMap = evento.target.parentNode.id;
  const getState = dataBase.find((state) => state.uf.match(ufMap));
  const state = {
    uf: getState.uf,
    suspeitos: getState.suspects,
    confirmados: getState.cases,
    mortes: getState.deaths,
    recuperados: getState.recovered,
  };
  showData(state);
};

document.querySelector("svg").addEventListener("click", findState);

showData(dataBase[0]);
getCoronaState();
getCoronaBrasil();
