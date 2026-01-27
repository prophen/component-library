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

---

### Badge Component

Versatile badges for status indicators and labels.

**Features:**

- Multiple color options
- Pill and square styles
- Customizable content

**Basic Usage:**

```jsx
import Badge from "./components/Badge/Badge";

<Badge color="green">Success</Badge>
<Badge color="red" style="pill">Error</Badge>
```

**Props:**

| Prop       | Type   | Options                                                      | Default | Description   |
| ---------- | ------ | ------------------------------------------------------------ | ------- | ------------- |
| `children` | node   | any                                                          | -       | Badge content |
| `color`    | string | "red", "yellow", "green", "blue", "indigo", "purple", "pink" | -       | Color theme   |
| `style`    | string | "pill"                                                       | -       | Shape style   |

---

### Banner Component

Prominent banners for global messages and status updates.

**Features:**

- Multi-line and single-line variants
- Status themes (success, warning, error, neutral)
- Automatic icons based on status

**Basic Usage:**

```jsx
import Banner from "./components/Banner/Banner";

<Banner status="success" title="Congratulations!">
  Your application was saved successfully.
</Banner>

<Banner status="warning" variant="single-line" title="Please update your profile" />
```

**Props:**

| Prop       | Type   | Options                                  | Default      | Description                 |
| ---------- | ------ | ---------------------------------------- | ------------ | --------------------------- |
| `status`   | string | "success", "warning", "error", "neutral" | "neutral"    | Status theme                |
| `variant`  | string | "multi-line", "single-line"              | "multi-line" | Layout variant              |
| `title`    | string | any                                      | -            | Main title text             |
| `children` | node   | any                                      | -            | Description text (optional) |

---

### Card Component

A compound component for displaying content in a structured card format.

**Features:**

- Flexible compound component structure
- Custom icon support with color options
- Consistent styling for titles and descriptions

**Basic Usage:**

```jsx
import Card from "./components/Card/Card";
import { HiCloudUpload } from "react-icons/hi";

<Card>
  <Card.Icon icon={<HiCloudUpload />} color="white" backgroundColor="#3F75FE" />
  <Card.Title>Easy Deployment</Card.Title>
  <Card.Description>Deploy your app with a single click.</Card.Description>
</Card>;
```

**Props:**

**Card.Icon Props:**

| Prop              | Type   | Default   | Description           |
| ----------------- | ------ | --------- | --------------------- |
| `icon`            | node   | -         | Icon element          |
| `color`           | string | "#fff"    | Icon color            |
| `backgroundColor` | string | "#4f7df3" | Icon background color |

---

### Testimonial Component

A stylish testimonial component with image support.

**Features:**

- Responsive layout with image
- Built-in quote styling
- Professional typography for name and title

**Basic Usage:**

```jsx
import TestimonialWithImage from "./components/Testimonial/TestimonialWithImage";
import testimonialImg from "./assets/testimonial.jpg";

<TestimonialWithImage
  img={{ src: testimonialImg, alt: "Customer photo" }}
  name="Sarah Dole"
  title="CTO at TechCorp"
>
  "This library has saved us hundreds of hours of development time."
</TestimonialWithImage>;
```

**Props:**

| Prop       | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `children` | node   | The testimonial quote text                   |
| `img`      | object | Image object with `src` and `alt` properties |
| `name`     | string | Name of the person providing the testimonial |
| `title`    | string | Job title or role                            |

---

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
