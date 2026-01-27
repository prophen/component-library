# Component Library

A beautiful collection of reusable React components built with modern design principles.

![Component Library](https://img.shields.io/badge/React-18.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The demo page will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

```bash
npm run build
```

## 📦 Available Components

### Menu Component

A compound component pattern for creating accessible dropdown menus with built-in state management.

**Features:**

- Compound component pattern (Menu, Menu.Button, Menu.Dropdown, Menu.Item)
- Built-in toggle state management using React Context
- Accessible and keyboard-friendly
- Customizable callback on open/close

**Basic Usage:**

```jsx
import Menu from "./components/Menu";

function App() {
  return (
    <Menu>
      <Menu.Button>Open Menu</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Profile Settings</Menu.Item>
        <Menu.Item>Account</Menu.Item>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```

**Props:**

| Component       | Prop       | Type     | Description                           |
| --------------- | ---------- | -------- | ------------------------------------- |
| `Menu`          | `onOpen`   | function | Callback fired when menu opens/closes |
| `Menu.Button`   | `children` | node     | Button content                        |
| `Menu.Dropdown` | `children` | node     | Menu items                            |
| `Menu.Item`     | `children` | node     | Item content                          |

---

### Button Component

A flexible button component with multiple size and variant options.

**Features:**

- Multiple size options (sm, default, lg)
- Color variants (success, warning, danger)
- Supports all standard HTML button attributes
- Composable with custom classes

**Basic Usage:**

```jsx
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      {/* Size variations */}
      <Button size="sm">Small Button</Button>
      <Button>Default Button</Button>
      <Button size="lg">Large Button</Button>

      {/* Variant variations */}
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>

      {/* Combined props */}
      <Button size="lg" variant="success">
        Large Success Button
      </Button>

      {/* With onClick handler */}
      <Button variant="danger" onClick={() => console.log("Clicked!")}>
        Click Me
      </Button>
    </>
  );
}
```

**Props:**

| Prop        | Type   | Options                              | Default | Description                                                   |
| ----------- | ------ | ------------------------------------ | ------- | ------------------------------------------------------------- |
| `size`      | string | `"sm"`, `"lg"`                       | default | Button size variant                                           |
| `variant`   | string | `"success"`, `"warning"`, `"danger"` | default | Button color variant                                          |
| `className` | string | any                                  | -       | Additional CSS classes                                        |
| `children`  | node   | any                                  | -       | Button content                                                |
| `...rest`   | any    | any                                  | -       | All standard button HTML attributes (onClick, disabled, etc.) |

## 🎨 Styling

The component library uses a modular CSS architecture:

- **`style.css`** - Global styles and design tokens
- **`index.css`** - Main entry point that imports all component styles
- **Component-specific CSS** - Each component has its own CSS file (e.g., `Button.css`, `Menu.css`)

### Design Tokens

The library uses a consistent color palette and spacing system:

- **Primary Colors:** Purple gradient (`#667eea` to `#764ba2`)
- **Typography:** Inter font family with responsive sizing
- **Spacing:** Consistent padding and margins using multiples of 8px
- **Border Radius:** Rounded corners (8px, 12px, 16px)

## 📁 Project Structure

```
component-library/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   └── Menu/
│       ├── Menu.jsx
│       ├── Menu.css
│       ├── MenuButton.jsx
│       ├── MenuDropdown.jsx
│       ├── MenuItem.jsx
│       └── index.js
├── hooks/
│   └── useToggle.js
├── examples/
│   └── (example components)
├── index.jsx          # Demo page
├── index.css          # CSS imports
├── style.css          # Global styles
└── index.html
```

## 🛠️ Development

### Adding a New Component

1. Create a new folder in `components/` with your component name
2. Create the component file (e.g., `MyComponent.jsx`)
3. Create the styles file (e.g., `MyComponent.css`)
4. Export your component
5. Import the CSS in `index.css`
6. Add usage examples to `index.jsx`

### Custom Hooks

The library includes custom hooks in the `hooks/` directory:

- **`useToggle`** - Toggle state management with callbacks

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Compound Component Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks)

## 🤝 Contributing

Feel free to add new components following the established patterns and conventions.

---

Built with ❤️ using React and Vite
