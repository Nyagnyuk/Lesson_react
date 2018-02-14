const path = require('path');
const HTML = require('html-webpack-plugin');

module.exports = {
	plugins:[ //массив, содержащий все плагины webpack
		new HTML({template: './src/index.html'})// здесь лежит базовый html, в кот будем запихивать свой скрипт
	],
	entry:'./src/index.jsx' ,    //путь к главному файлу проекта(относит путь)
	output:{                   //куда компелировать результат нашей работы 
		filename: 'app.js',
		// path: __dirname + '\\dist' //путь к папке, где нах. app.js - абсолютным путем //в случае винды так
		// path: __dirname + '/dist' //в случае линукса 
		//или подключаем библиотеку 'path' и она сама поставит атк как надо
		// path : path.resolve(__dirname, 'dist') // или сокращаем
		path : path.resolve('dist')
	},
	module: { //особенности компиляции
		rules: [ //правила компиляции
			{
				test: /\.jsx?$/,
				// test: /\.css$/
				exclude: /node_modules/,   //необязательный элемент- webpack - будет работать чуточкю быстрее
				use: {//само правило компиляции, с пом чего мы будем компл такие файлы
					loader: 'babel-loader', //название обработчика этого расширения, загрущик компилятора файлов js
					options:  { 		//наборы правил компиляции
						presets: ['env', 'react'] //любой болле новый ES в любой более старый ES
					}
				}	
			}
		]
	}
}