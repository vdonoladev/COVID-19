let dataBase = [
	{
		"uf": "Brasil",
		"suspeitos": "<div class='spinner blue'></div>",
		"confirmados": "<div class='spinner gold'></div>",
		"mortes": "<div class='spinner red'></div>"
	}
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
	`;

	const container = document.createElement('div');
	container.innerHTML = panel;

	const info = document.getElementById('info');

	info.appendChild(container);
};

showData(dataBase[0]);