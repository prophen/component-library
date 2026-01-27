import React from "react";
import Badge from "../Badge/Badge";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BadgeDemo() {
  return (
    <section className="component-section">
      <h2>Badge Component</h2>

      <div className="usage-section">
        <h4>📖 Usage</h4>
        <p>
          A simple badge component for displaying small labels or counts.
          Perfect for tags, status indicators, and notification counts.
        </p>
      </div>

      <div className="component-demo">
        <h3>Default</h3>
        <div className="demo-group">
          <Badge>Default Badge</Badge>
        </div>

        <h3>Styles</h3>
        <div className="demo-group">
          <Badge>Square Badge</Badge>
          <Badge style="pill">Pill Style Badge</Badge>
        </div>

        <h3>Colors</h3>
        <div className="demo-group">
          <Badge color="red">Red Badge</Badge>
          <Badge color="yellow">Yellow Badge</Badge>
          <Badge color="green">Green Badge</Badge>
          <Badge color="blue">Blue Badge</Badge>
          <Badge color="indigo">Indigo Badge</Badge>
          <Badge color="purple">Purple Badge</Badge>
          <Badge color="pink">Pink Badge</Badge>
        </div>

        <h3>Combined Props</h3>
        <div className="demo-group">
          <Badge style="pill" color="green">
            Success
          </Badge>
          <Badge style="pill" color="red">
            Error
          </Badge>
          <Badge style="pill" color="blue">
            Info
          </Badge>
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
          {`import Badge from "./components/Badge/Badge";

function MyComponent() {
  return (
    <>
      {/* Default badge */}
      <Badge>Default Badge</Badge>

      {/* Pill style */}
      <Badge style="pill">Pill Badge</Badge>

      {/* Color variations */}
      <Badge color="red">Red Badge</Badge>
      <Badge color="green">Green Badge</Badge>
      <Badge color="blue">Blue Badge</Badge>

      {/* Combined props */}
      <Badge style="pill" color="green">
        Success
      </Badge>
      <Badge style="pill" color="red">
        Error
      </Badge>
    </>
  );
}`}
        </SyntaxHighlighter>
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
              <code>style</code>
            </td>
            <td>string</td>
            <td>
              <code>"pill"</code>
            </td>
            <td>square</td>
            <td>Badge shape variant</td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>string</td>
            <td>
              <code>"red"</code>, <code>"yellow"</code>, <code>"green"</code>,{" "}
              <code>"blue"</code>, <code>"indigo"</code>, <code>"purple"</code>,{" "}
              <code>"pink"</code>
            </td>
            <td>gray</td>
            <td>Badge color variant</td>
          </tr>
          <tr>
            <td>
              <code>children</code>
            </td>
            <td>node</td>
            <td>any</td>
            <td>-</td>
            <td>Badge content</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
