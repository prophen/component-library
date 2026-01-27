import React from "react";
import Banner from "../Banner/Banner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BannerDemo() {
  return (
    <section className="component-section">
      <h2>Banner Component</h2>

      <div className="usage-section">
        <h4>📖 Usage</h4>
        <p>
          Display important messages and notifications to users. Banners support
          multiple status types and can show single-line or multi-line content.
        </p>
      </div>

      <div className="component-demo">
        <h3>Multi-line Banners</h3>
        <div
          className="demo-group"
          style={{ flexDirection: "column", gap: "1rem" }}
        >
          <Banner status="success" title="Congratulations!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eget doloribus sapiente
            velit architecto.
          </Banner>
          <Banner status="warning" title="Attention">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eget doloribus sapiente
            velit architecto.
          </Banner>
          <Banner
            status="error"
            title="There is a problem with your application"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eget doloribus sapiente
            velit architecto.
          </Banner>
          <Banner status="neutral" title="Update available">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
        </div>

        <h3>Single-line Banners</h3>
        <div
          className="demo-group"
          style={{ flexDirection: "column", gap: "1rem" }}
        >
          <Banner
            status="success"
            variant="single-line"
            title="Congratulations!"
          />
          <Banner status="warning" variant="single-line" title="Attention" />
          <Banner
            status="error"
            variant="single-line"
            title="There is a problem with your application"
          />
          <Banner
            status="neutral"
            variant="single-line"
            title="Update available"
          />
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
          {`import Banner from "./components/Banner/Banner";

function MyComponent() {
  return (
    <>
      {/* Multi-line banner */}
      <Banner status="success" title="Congratulations!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Banner>

      {/* Single-line banner */}
      <Banner 
        status="warning" 
        variant="single-line" 
        title="Attention" 
      />

      {/* Different status types */}
      <Banner status="error" title="Error occurred">
        There was a problem processing your request.
      </Banner>

      <Banner status="neutral" title="Information">
        This is a neutral informational message.
      </Banner>
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
                <code>status</code>
              </td>
              <td>string</td>
              <td>
                <code>"success"</code>, <code>"warning"</code>,{" "}
                <code>"error"</code>, <code>"neutral"</code>
              </td>
              <td>
                <code>"neutral"</code>
              </td>
              <td>Banner status type (affects color and icon)</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>string</td>
              <td>
                <code>"multi-line"</code>, <code>"single-line"</code>
              </td>
              <td>
                <code>"multi-line"</code>
              </td>
              <td>Banner layout variant</td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>string</td>
              <td>any</td>
              <td>-</td>
              <td>Banner title text (required)</td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>node</td>
              <td>any</td>
              <td>-</td>
              <td>Description text (multi-line variant only)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
