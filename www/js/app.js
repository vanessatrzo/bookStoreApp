(function(){

	var app = angular.module('bookApp',['ui.router']);

	app.controller('bookController',function(){
		this.products=books;
	});
	app.config(function($stateProvider) {

				$stateProvider
					.state('dashboard',{
						url:'/dashboard',
						templateUrl: 'templates/dashboard.html',
						controller: 'bookController'
					})
					.state('dashboard.datos',{
						url:'/data',
						templateUrl: 'templates/data.html',
						controller: 'bookController'
					})
					.state('dashboard.pedidos',{
						url:'/pedidos',
						templateUrl: 'templates/pedidos.html',
						controller: 'bookController'
					})
					.state('dashboard.favoritos',{
						url:'/favorios',
						templateUrl: 'templates/favoritos.html',
						controller: 'bookController'
					})
					.state('libros',{
						url:'/libros',
						templateUrl: 'templates/libros.html',
						controller: 'bookController'
					})
				});
	var books=[{
			"id":"1",
			"titulo":"Destroza este Diario",
			"autor": "Keri Smith",
	 		"editorial": "Paidos",
	 		"descripcion": "¿Sientes que deberías plasmar todo tu potencial artístico, pero no sabes cómo? Destroza este diario es el libro con el que te podrás sentir cual Damien Hirst disecando tiburones. La modernísima Keri Smith anima a los propietarios de este diario a cometer actos “destructivos” agujereando sus páginas, añadiendo fotos para dibujar encima o pintando con café, con la intención de experimentar el verdadero  proceso creativo. Podrás descubrir una nueva forma de arte y elaboración de un diario, además de formas novedosas de superar el miedo a la página en blanco  e iniciar el proceso creativo.",
	 		imagenes: [{id:0,url:'img/diario.jpg'}]				
		},
		{
			"id": "2",
	 		"titulo": "La chica del tren",
	 		"autor": "Paula Hawkins",
	 		"editorial": "Planeta",
	 		"descripcion": "¿Estabas en el tren de las 8.04? ¿Viste algo sospechoso? Rachel, sí. Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas… y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece?. Tú no la conoces. Ella a ti, sí.",
	 		imagenes: [{id:0,url:'img/chicatren.jpg'}]			
		},
		{
			"id": "3",
	 		"titulo": "El silencio de la ciudad blanca",
	 		"autor": "Eva García Saénz de Urturi",
	 		"editorial": "actions",
			"descripcion": "Tasio Ortiz de Zárate, el brillante arqueólogo condenado por los extraños asesinatos que aterrorizaron la tranquila ciudad de Vitoria hace dos décadas, está a punto de salir de prisión en su primer permiso cuando los crímenes se reanudan de nuevo: en la emblemática Catedral Vieja de Vitoria, una pareja de veinte años aparece desnuda y muerta por picaduras de abeja en la garganta. Poco después, otra pareja de veinticinco años es asesinada en la Casa del Cordón, un conocido edificio medieval. El joven inspector Unai López de Ayala —alias Kraken—, experto en perfiles criminales, está obsesionado con prevenir los crímenes antes de que ocurran, una tragedia personal aún fresca no le permite encarar el caso como uno más. Sus métodos poco ortodoxos enervan a su jefa, Alba, la subcomisaria con la que mantiene una ambigua relación marcada por los crímenes… El tiempo corre en su contra y la amenaza acecha en cualquier rincón de la ciudad. ¿Quién será el siguiente?.",
	 		imagenes: [{id:0,url:'img/ciudadblanca.jpg'}]			
		},
		{
			"id": "4",
	 		"titulo": "La viuda",
	 		"autor": "Fiona Barton",
	 		"editorial": "Planeta",
	 		"descripcion": "Si él hubiera hecho algo horrible, ella lo sabría. ¿O no?. Todos sabemos quién es él: el hombre que vimos en la portada de todos los periódicos acusado de un crimen terrible. Pero, ¿qué sabemos realmente de ella, de quien le sujeta el brazo en la escalera del juzgado, de la esposa que está a su lado?. El marido de Jean Taylor fue acusado y absuelto de un crimen terrible hace años. Cuando él fallece de forma repentina, Jean, la esposa perfecta que siempre le ha apoyado y creído en su inocencia, se convierte en la única persona que conoce la verdad. Pero ¿qué implicaciones tendría aceptar esa verdad? ¿Hasta dónde está dispuesta a llegar para que su vida siga teniendo sentido? Ahora que Jean puede ser ella misma, hay una decisión que tomar: ¿callar, mentir o actuar?",
	 		imagenes: [{id:0,url:'img/viuda.jpg'}]			
		}
		];


})();