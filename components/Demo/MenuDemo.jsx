import React from "react";
import Menu from "../Menu/index";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MenuDemo() {
  return (
    <section className="component-section">
      <h2>Menu Component</h2>

      <div className="usage-section">
        <h4>📖 Usage</h4>
        <p>
          The Menu component provides a compound component pattern for creating
          dropdown menus. It uses React Context to manage the open/closed state
          internally.
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
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: "8px",
            fontSize: "0.875rem",
            margin: 0,
          }}
        >
          {`import Menu from "./components/Menu";

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
}`}
        </SyntaxHighlighter>
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
  );
}
