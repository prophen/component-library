import React from "react";
import Button from "../Button/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ButtonDemo() {
  return (
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
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: "8px",
            fontSize: "0.875rem",
            margin: 0,
          }}
        >
          {`import Button from "./components/Button/Button";

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
}`}
        </SyntaxHighlighter>
      </div>

      <h3>Props</h3>
      <div className="table-container">
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
      </div>
    </section>
  );
}
