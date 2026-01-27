import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <h1>Component Library</h1>
      <p className="subtitle">
        A collection of beautiful, reusable React components
      </p>

      {/* Menu Component Section */}
      <section className="component-section">
        <h2>Menu Component</h2>

        <div className="usage-section">
          <h4>📖 Usage</h4>
          <p>
            The Menu component provides a compound component pattern for
            creating dropdown menus. It uses React Context to manage the
            open/closed state internally.
          </p>
        </div>

        <div className="component-demo">
          <h3>Interactive Demo</h3>
          <Menu>
            <Menu.Button>Open Menu</Menu.Button>
            <Menu.Dropdown>
              <Menu.Item>Profile Settings</Menu.Item>
              <Menu.Item>Account</Menu.Item>
              <Menu.Item>Dashboard</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        <div className="code-example">
          <code>{`import Menu from "./components/Menu";

function MyComponent() {
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
}`}</code>
        </div>

        <h3>Props</h3>
        <table className="props-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>Menu</code>
              </td>
              <td>
                <code>onOpen</code>
              </td>
              <td>function</td>
              <td>Callback fired when menu opens/closes</td>
            </tr>
            <tr>
              <td>
                <code>Menu.Button</code>
              </td>
              <td>
                <code>children</code>
              </td>
              <td>node</td>
              <td>Button content</td>
            </tr>
            <tr>
              <td>
                <code>Menu.Dropdown</code>
              </td>
              <td>
                <code>children</code>
              </td>
              <td>node</td>
              <td>Menu items</td>
            </tr>
            <tr>
              <td>
                <code>Menu.Item</code>
              </td>
              <td>
                <code>children</code>
              </td>
              <td>node</td>
              <td>Item content</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Button Component Section */}
      <section className="component-section">
        <h2>Button Component</h2>

        <div className="usage-section">
          <h4>📖 Usage</h4>
          <p>
            A flexible button component with multiple size and variant options.
            Supports all standard HTML button attributes.
          </p>
        </div>

        <div className="component-demo">
          <h3>Sizes</h3>
          <div className="demo-group">
            <Button size="sm">Small Button</Button>
            <Button>Default Button</Button>
            <Button size="lg">Large Button</Button>
          </div>

          <h3>Variants</h3>
          <div className="demo-group">
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
          </div>

          <h3>Combined Props</h3>
          <div className="demo-group">
            <Button size="sm" variant="success">
              Small Success
            </Button>
            <Button size="lg" variant="danger">
              Large Danger
            </Button>
          </div>
        </div>

        <div className="code-example">
          <code>{`import Button from "./components/Button/Button";

function MyComponent() {
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
      <Button 
        variant="danger" 
        onClick={() => console.log('Clicked!')}
      >
        Click Me
      </Button>
    </>
  );
}`}</code>
        </div>

        <h3>Props</h3>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Options</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>string</td>
              <td>
                <code>"sm"</code>, <code>"lg"</code>
              </td>
              <td>default</td>
              <td>Button size variant</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>string</td>
              <td>
                <code>"success"</code>, <code>"warning"</code>,{" "}
                <code>"danger"</code>
              </td>
              <td>default</td>
              <td>Button color variant</td>
            </tr>
            <tr>
              <td>
                <code>className</code>
              </td>
              <td>string</td>
              <td>any</td>
              <td>-</td>
              <td>Additional CSS classes</td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>node</td>
              <td>any</td>
              <td>-</td>
              <td>Button content</td>
            </tr>
            <tr>
              <td>
                <code>...rest</code>
              </td>
              <td>any</td>
              <td>any</td>
              <td>-</td>
              <td>All standard button HTML attributes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
