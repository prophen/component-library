import TestimonialWithImage from "../Testimonial/TestimonialWithImage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TestimonialWithImageDemo() {
  return (
    <section className="component-section">
      <h2>Testimonial with Image Component</h2>

      <div className="usage-section">
        <h4>📖 Usage</h4>
        <p>
          The Tesimonial with Image component displays a quote, author details,
          and an associated image. It is useful for social proof sections.
        </p>
      </div>

      <div className="component-demo">
        <h3>Examples</h3>
        <div className="demo-group">
          <TestimonialWithImage
            img={{ src: "/Image1.png", alt: "Testimonial author" }}
            name="Sarah Dole"
            title="Design Engineer at Bobs"
          >
            "I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!"
          </TestimonialWithImage>
        </div>
        <div className="hide-on-mobile">
          <h3>Mobile</h3>
          <div className="demo-group">
            <img src="/mobile.png" alt="mobile testimonial view" />
          </div>
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
          {`import TestimonialWithImage from "./components/Testimonial/TestimonialWithImage";

function MyComponent() {
  return (
    <TestimonialWithImage
      img={{ src: "/Image1.png", alt: "Testimonial author" }}
      name="Sarah Dole"
      title="Design Engineer at Bobs"
    >
      "I've been searching for high-quality abstract images for my design
      projects, and I'm thrilled to have found this platform. The variety
      and depth of creativity are astounding!"
    </TestimonialWithImage>
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
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>node</td>
              <td>-</td>
              <td>The testimonial quote text</td>
            </tr>
            <tr>
              <td>
                <code>img</code>
              </td>
              <td>object</td>
              <td>-</td>
              <td>
                Object containing <code>src</code> and <code>alt</code> for the
                image
              </td>
            </tr>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>string</td>
              <td>-</td>
              <td>Name of the author</td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>string</td>
              <td>-</td>
              <td>Job title or company of the author</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
