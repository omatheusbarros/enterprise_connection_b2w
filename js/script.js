$(function(){
	// Iniciando as funções
	carregarDinamico();
	carregarPontoTuristico();
	carregarVoltar();

	// Carregamento da página do filme/série
	function carregarDinamico(){
		$('[realtime]').click(function(){
			let pagina = $(this).attr('realtime');
			carregarBackground(pagina);

			$('article.movieseries_article section').fadeOut(500);

			setTimeout(function(){
				$(pagina).fadeIn(500);
			},500);

			return false;
		})
	}

	// Carregamento da página de ponto turístico
	function carregarPontoTuristico(){
		$('[pontoturistico]').click(function(){
			let pagina = $(this).attr('pontoturistico');
			
			$('.movies_series_page').fadeOut(500);

			setTimeout(function(){
				$('.tourist_spot_page').fadeIn(500);
				$('article.touristspot_article section').css('display','none');
				$(pagina).fadeIn(500);
			},500)

			return false;
		})
	}

	// Retorno à página do filme/série
	function carregarVoltar(){
		$('[realtimevoltar]').click(function(){
			let pagina = $(this).attr('realtimevoltar');
			
			$('.tourist_spot_page').fadeOut(500);

			setTimeout(function(){
				$('.movies_series_page').fadeIn(500);
				$(pagina).fadeIn(500);
			},500)

			return false;
		})
	}

	// Função para carregar o background do filme/série
	function carregarBackground(pagina){
		let urlImagens = './images/backgrounds/';
		let peakyblinders = urlImagens + 'fundo_peakyblinders.png';
		let backtothefuture = urlImagens + 'fundo_backtothefuture.png';
		let comerrezaramar = urlImagens + 'fundo_comerrezaramar.png';

		if (pagina == '#peakyblinders_home')
			$('main').css('background-image','url('+peakyblinders+')');
		else if (pagina == '#backtothefuture_home')
			$('main').css('background-image','url('+backtothefuture+')');
		else
			$('main').css('background-image','url('+comerrezaramar+')');
	}

	// Menu inicial Peaky Blinders
	$("[menu='pb'] i").css('font-size','26px').css('color','#F2C94C');
	$("[menu='pb'] span").css('font-size','26px');

	// Animações do menu de navegação
	$('[menu]').hover(function(){
		alterarMenu(this);
	})
	
	$('[menu]').click(function(){
		alterarMenu(this);
	})

	function alterarMenu(element){
		let menu = $(element).attr('menu');
		let circle = "[menu='" + menu + "'] i";
		let span = "[menu='" + menu + "'] span";
		let i = "[menu='pb'] i, [menu='btf'] i, [menu='cra'] i";
		let spanOld = "[menu='pb'] span, [menu='btf'] span, [menu='cra'] span";

		$(i).css('font-size','16px').css('color','#FFF');
		$(spanOld).css('font-size','24px');

		$(circle).css('font-size','26px').css('color','#F2C94C');
		$(span).css('font-size','26px');
	}
})