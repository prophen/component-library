import "./Banner.css";
import classnames from "classnames";

export default function Banner({
  status = "neutral",
  variant = "multi-line",
  title,
  children,
}) {
  const allClasses = classnames(
    "banner",
    { "variant-single-line": variant === "single-line" },
    { "status-success": status === "success" },
    { "status-warning": status === "warning" },
    { "status-error": status === "error" },
    { "status-neutral": status === "neutral" },
  );

  const getIcon = () => {
    switch (status) {
      case "success":
        return (
          <svg
            className="banner-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
              fill="currentColor"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            className="banner-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25709 3.09882C9.02209 1.73952 10.9779 1.73952 11.7429 3.09882L18.0229 14.3988C18.7559 15.6988 17.8089 17.2988 16.2799 17.2988H3.71991C2.19091 17.2988 1.24391 15.6988 1.97691 14.3988L8.25709 3.09882ZM11 13.7988C11 14.3511 10.5523 14.7988 10 14.7988C9.44772 14.7988 9 14.3511 9 13.7988C9 13.2466 9.44772 12.7988 10 12.7988C10.5523 12.7988 11 13.2466 11 13.7988ZM10 5.79883C9.44772 5.79883 9 6.24654 9 6.79883V10.7988C9 11.3511 9.44772 11.7988 10 11.7988C10.5523 11.7988 11 11.3511 11 10.7988V6.79883C11 6.24654 10.5523 5.79883 10 5.79883Z"
              fill="currentColor"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            className="banner-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z"
              fill="currentColor"
            />
          </svg>
        );
      case "neutral":
      default:
        return (
          <svg
            className="banner-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V10C9 9.44772 9.44772 9 10 9Z"
              fill="currentColor"
            />
          </svg>
        );
    }
  };

  return (
    <div className={allClasses}>
      {getIcon()}
      <div className="banner-content">
        {variant === "multi-line" ? (
          <>
            <div className="banner-title">{title}</div>
            {children && <div className="banner-description">{children}</div>}
          </>
        ) : (
          <div className="banner-text">{title}</div>
        )}
      </div>
    </div>
  );
}
