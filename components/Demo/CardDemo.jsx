import React from "react";
import Card from "../Card/Card";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CardDemo() {
  return (
    <section className="component-section">
      <h2>Card Component</h2>

      <div className="usage-section">
        <h4>📖 Usage</h4>
        <p>
          Cards are flexible containers used to group related content and
          actions. They typically include a title, an icon, and descriptive
          text.
        </p>
      </div>

      <div className="component-demo">
        <h3>Examples</h3>
        <div className="demo-group">
          <Card>
            <Card.Icon
              icon={<FaCloudArrowUp size={24} />}
              backgroundColor="#4f7df3"
              color="#fff"
            />
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Description>
              Deploy your app in minutes with our simple and easy-to-use
              deployment process.
            </Card.Description>
          </Card>
          <Card>
            <Card.Icon
              icon={<FaStar size={24} />}
              backgroundColor="#f59e0b"
              color="#fff"
            />
            <Card.Title>Star Rating</Card.Title>
            <Card.Description>
              Rate your experience and help us improve our services.
            </Card.Description>
          </Card>
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
          {`import Card from "./components/Card/Card";
import { FaCloudArrowUp } from "react-icons/fa6";

function MyComponent() {
  return (
    <Card>
      <Card.Icon
        icon={<FaCloudArrowUp size={24} />}
        backgroundColor="#4f7df3"
        color="#fff"
      />
      <Card.Title>Easy Deployment</Card.Title>
      <Card.Description>
        Deploy your app in minutes with our simple and easy-to-use
        deployment process.
      </Card.Description>
    </Card>
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
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="table-subheader">
              <strong>Card</strong>
            </td>
          </tr>
          <tr>
            <td>
              <code>children</code>
            </td>
            <td>node</td>
            <td>-</td>
            <td>
              The content of the card, typically <code>Card.Icon</code>,{" "}
              <code>Card.Title</code>, and <code>Card.Description</code>
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="table-subheader">
              <strong>Card.Title</strong>
            </td>
          </tr>
          <tr>
            <td>
              <code>children</code>
            </td>
            <td>node</td>
            <td>-</td>
            <td>The title text</td>
          </tr>
          <tr>
            <td colSpan="4" className="table-subheader">
              <strong>Card.Description</strong>
            </td>
          </tr>
          <tr>
            <td>
              <code>children</code>
            </td>
            <td>node</td>
            <td>-</td>
            <td>The description text</td>
          </tr>
          <tr>
            <td colSpan="4" className="table-subheader">
              <strong>Card.Icon</strong>
            </td>
          </tr>
          <tr>
            <td>
              <code>icon</code>
            </td>
            <td>node</td>
            <td>-</td>
            <td>The icon element (e.g., from react-icons)</td>
          </tr>
          <tr>
            <td>
              <code>backgroundColor</code>
            </td>
            <td>string</td>
            <td>
              <code>#4f7df3</code>
            </td>
            <td>Background color of the icon container</td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>string</td>
            <td>
              <code>#fff</code>
            </td>
            <td>Color of the icon</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
