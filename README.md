# CursoAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Ramas del repositorio

Este repositorio está organizado en ramas que representan cada etapa del curso. Cada rama parte de la anterior y agrega nuevas funcionalidades o conceptos. Se recomienda seguirlas en orden para acompañar el progreso del curso.

| Rama | Descripción |
|------|-------------|
| `main` | Rama principal. Contiene el estado estable y aprobado del proyecto. Aquí llegan los cambios después de revisar y fusionar cada rama de práctica. |
| `copilot/create-angular-project` | **Paso 1 – Scaffolding inicial.** Crea el proyecto base de Angular v21 con enrutamiento (`--routing`) y hojas de estilos SCSS. Es el punto de partida del curso. |
| `copilot/create-blog-structure-using-atomic-design` | **Paso 2 – Diseño Atómico (blog).** Introduce la metodología Atomic Design para estructurar componentes (átomos, moléculas, organismos). Implementa una estructura de blog con datos dinámicos. |
| `copilot/create-components-for-episodes-and-characters` | **Paso 3 – Signals y consumo de API.** Agrega componentes para personajes y episodios de *Rick & Morty* aplicando Atomic Design y el nuevo sistema de **Signals** de Angular para gestión de estado reactivo. |

### ¿Cómo usar las ramas?

1. **Explorar una rama específica:**
   ```bash
   git checkout <nombre-de-la-rama>
   ```
2. **Comparar diferencias entre ramas:**
   ```bash
   git diff main..copilot/create-angular-project
   ```
3. **Crear tu propia rama de práctica a partir de una etapa:**
   ```bash
   git checkout -b mi-practica copilot/create-blog-structure-using-atomic-design
   ```
4. Siempre que quieras llevar cambios aprobados a `main`, crea un Pull Request desde tu rama hacia `main` para revisión antes de fusionar.
