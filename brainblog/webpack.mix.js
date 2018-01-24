const mix = require('laravel-mix');

mix.copyDirectory('resources/assets/fonts', 'public/fonts')
	.copyDirectory('resources/assets/images', 'public/images')
	.sass('resources/assets/sass/app.sass', 'public/css')
	.options({ processCssUrls: false });
// .autoload({
// 	   jquery: ['$', 'window.jQuery', 'jQuery'],
// 	   'popper.js/dist/umd/popper.js': ['Popper']
// 	})
	// .js('resources/assets/js/app.js', 'public/js');
