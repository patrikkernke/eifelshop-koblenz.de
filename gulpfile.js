var elixir = require('laravel-elixir');

// vendor packages
require('laravel-elixir-stylus');
var nib = require('nib');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.stylus('app.styl', 'resources/assets/css/stylus.css', { 
        use: nib(),
        'include css': true
    })
    .styles([
        'blacktie-inset_theme.css',
        'stylus.css'
    ])
    .browserSync({ proxy: 'eifelshop.dev'});
    
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts');
});
