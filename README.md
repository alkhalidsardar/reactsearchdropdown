# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

the process of how the `SearchableDropdown` component works step by step in order:

1. **Component Definition:**
    - The `SearchableDropdown` component is defined as a functional component in React. It takes several props, including `options`, `label`, `id`, `selectedVal`, and `handleChange`.
2. **State Initialization:**
    - Two pieces of state are initialized using the `useState` hook:
        - `query`: It stores the user's input query for filtering the options.
        - `isOpen`: It manages whether the dropdown is open or closed.
3. **Input Element Reference:**
    - `useRef` is used to create a reference to the input element to handle events later. It's named `inputRef`.
4. **Document Click Event Listener:**
    - An `useEffect` hook with an empty dependency array is used to add an event listener to the document. This event listener is responsible for toggling the dropdown open/closed when a click occurs outside of the dropdown.
    - The event listener is removed when the component unmounts to avoid memory leaks.
5. **Select Option Function:**
    - `selectOption` is a function that gets called when an option is selected from the dropdown.
    - It sets the `query` to the selected option's label (to display it in the input field).
    - Calls the `handleChange` function provided through props to update the selected value.
    - Closes the dropdown by setting `isOpen` to `false`.
6. **Toggle Function:**
    - The `toggle` function is responsible for toggling the dropdown's open/closed state based on user interactions (e.g., clicking on the input field).
    - It is attached to the document click event and checks if the clicked element is the input element referenced by `inputRef`.
7. **Get Display Value Function:**
    - `getDisplayValue` determines what value should be displayed in the input field:
        - If the user has typed something (`query` is not null), it displays the query.
        - If there's a selected value (`selectedVal`), it displays it.
        - Otherwise, it displays an empty string.
8. **Filter Options Function:**
    - `filter` is a utility function to filter the available options based on the user's query.
    - It returns an empty array if the query is empty.
    - Otherwise, it filters the `options` array, checking if the lowercase label of each option contains the lowercase query.
9. **Render JSX:**
    - The component returns JSX that represents the searchable dropdown.
    - It consists of an input field and a list of options.
    - The input field value is controlled by the `getDisplayValue` function.
    - Clicking on the input field or arrow icon toggles the dropdown's visibility.
    - Filtered options are mapped over and displayed in the dropdown list.
10. **App Component:**
    - The `App` component imports the `SearchableDropdown` component and a `GoogleSearchButton` component.
    - It manages the selected value (`value`) through state and a `handleChange` function.
    - The `SearchableDropdown` component is rendered with specific props, including the options (`lotrCharacters`), label, id, selected value, and a callback function to handle changes (`handleChange`).
    - The selected value is also passed to the `GoogleSearchButton` component, which is not shown in the provided code but likely performs a Google search when a button is clicked.

This setup allows users to interact with a dropdown that filters options based on their input and select an option, which updates the input field and triggers a callback function to handle the selected value in the parent component (`App`).
