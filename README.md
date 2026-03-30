# Ejercicio Front - Tabla de Cryptos

## Descripción del proyecto

Este ejercicio consiste en construir una interfaz web que muestre una **tabla de criptomonedas** consumiendo datos desde la API pública de **CoinGecko**.

La pantalla incluye un **buscador visual sin funcionalidad** (solo parte de interfaz), pensado como base para una mejora futura.

## Objetivo del ejercicio

- Mostrar una tabla con información de criptomonedas obtenida desde CoinGecko.
- Practicar consumo de API y renderizado de datos en Angular.
- Presentar un buscador en la UI sin implementar lógica de filtrado.

## Tecnologías utilizadas

- Angular v15
- Cypress v15.13
- Bootstrap 5.1

## API utilizada

- CoinGecko API (datos de criptomonedas)

## Comprobaciones E2E con Cypress

Se hacen las siguientes comprobaciones automatizadas:

- Al cargar la página, se muestra al menos 1 elemento en la tabla.
- El primer elemento de la lista es el de mayor capitalización de mercado (orden descendente).
- El cambio de precio de las últimas 24 horas (columna 24H %) aparece en verde si es positivo o en rojo si es negativo.
- Junto al precio de cada criptomoneda se muestra el símbolo del dólar (ejemplo: $50000).

## Scripts disponibles

- `npm start`: inicia el servidor de desarrollo (`ng serve`) en `http://localhost:4200/`.
- `npm run build`: genera el build de producción.
- `npm test`: ejecuta tests unitarios con Karma/Jasmine.
- `npm run cypress:open`: abre Cypress para pruebas end-to-end.

## Instalación

1. Instalar dependencias:

	```bash
	npm install
	```

2. Iniciar el proyecto en desarrollo:

	```bash
	npm start
	```
