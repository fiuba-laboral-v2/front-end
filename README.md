# Bolsa de Trabajo FIUBA: front-end

Trabajo Práctico Profesional, FIUBA, 2020

Staging: ![Build status](https://github.com/fiuba-laboral-v2/front-end/workflows/front-end-build/badge.svg)

# Production

https://bolsadetrabajo.fi.uba.ar

# Staging

http://antiguos.fi.uba.ar/laboral/

## Comandos de yarn

En este repositorio se usa `yarn` como gestor de dependencias

- `yarn install`: Este comando instala las dependencias especificadas en el
  archivo `package.json`.

- `yarn start`: Este comando ejecuta la aplicación de React para que
  se recompile en caso de que se detecte un cambio. Se usa para desarrollo.
- `preinstall`: Este comando elimina los módulos linkeados para los imports
  que utilizan alias.

- `postinstall`: Este comando crea los módulos linkeados para los imports
  que utilizan alias.

- `yarn build`: Este comando compila los archivos de Typescript a Javascript
  creando la aplicación productiva en la carpeta `build`.

- `yarn test`: Este comando ejecuta los tests.

- `yarn lint`: Este comando ejecuta todos los linters que están integrados,
  es decir, ejecuta `prettier`, `tslint`, `stylelint` y `tsc` que es el
  compilador. En caso de que falle el linter debido a `prettier`, se debe
  ejecutar `format:all` para arreglarlo.
- `yarn lint:scss`: Este comando ejecuta el linter de `stylelint` para los archivos de extensión `scss`.

- `yarn lint:src:ts`: Este comando ejecuta el linter de `tslint` para los archivos de extensión `ts`.

- `yarn lint:src:tsx`: Este comando ejecuta el linter de `tslint` para los
  archivos de extensión `tsx` dentro del directorio de `src`.

- `yarn lint:src:tsx`: Este comando ejecuta el linter de `tslint` para los
  archivos de extensión `tsx` dentro del directorio de `src`.
- `yarn lint:test:ts`: Este comando ejecuta el linter de `tslint` para los
  archivos de extensión `ts` dentro del directorio de `test`.

- `yarn lint:test:tsx`: Este comando ejecuta el linter de `tslint` para los
  archivos de extensión `tsx` dentro del directorio de `test`.

- `yarn format:all`: Este comando arregla los errores del linter de `prettier`.

- `yarn stash`: Este comando utiliza el stash de git para ocultar los archivos
  que no están agregados para el commit. Se usa al momento de querer realizar un commit cuando
  tenemos archivos nuevos sin agregar.
  `yarn unstash`: Este comando saca de la pila del stash de git los últimos
  archivos del stash.
