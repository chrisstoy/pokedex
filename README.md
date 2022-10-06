# Ash's Pokedex

by Chris Stoy
chrisstoy@gmail.com

# Project Details

### Running from source

After getting the source code, run the following commands to install dependencies and serve the app:

```bash
> npx yarn install
> nx serve
```

### Unit Testing

To execute unit tests, run the following command:

```bash
> nx test
```

### Integration Testing

To execute e2e tests, run the following command:

```bash
> nx e2e pokedex-e2e
```

## Additional Work Needed for Production Release

This is a rough MVP containing the basic functional requirements, but still needing work before Ash can use it on the road.

- Styling needs to be improved
  - Improve reactive layout for different screen sizes (web and mobile)
  - Centralize theming variables and common component styles
  - Make the UI more visually appealing
- Add more testing for Components and Integration
- Add caching for loaded Pokemon details. Currently details are fetched from the API for every search. Instead, build a cache of previously searched Pokemon Details and use that, only fetching data when needed.
- Implement localization for different language support.
- Support more complex Evolution trees. Currently only supports linear evolutions.

# Original Requirements

## The Problem

Ash and his friends are on a new adventure to catch even more Pokemon! Before they set off on this journey they need some tools. As we all know every great Pokemon trainer needs a reliable Pokedex to identify Pokemon. It’s a good thing they have you! Ash has asked if you would be willing to build him a brand new Pokedex with core features and a couple of enhancements.

## Business Requirements

Please attempt to implement the following business requirements:
Use the Pokemon API to make API requests for data https://pokeapi.co/docs/v2.

- Able to search for any Pokemon.
- Able to see details about abilities, moves, species, sprites and types upon searching.
- Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.
- Able to see a history of what has been searched and revisit at anytime. A sleek and intuitive layout that resembles a Pokedex.

## Technical Requirements

The following technical requirements must be met:

- This project should be done with the latest React framework.
- This project should be done with the latest Redux framework.
- This project should be done using TypeScript.
- This project should be done using version control, preferably git.
- This project can be styled with SCSS/CSS or Styled Components.
- This project should have automated tests that ensure the business logic implemented is correct.
- This project should include a README that addresses anything you may not have completed. It should also address what additional changes you might need to make if the application were intended to run in a concurrent environment. Any other comments or thoughts about the project are also welcome.

---

This project was generated using [Nx](https://nx.dev).
