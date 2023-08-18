import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error">
      <p className="error__texto">Hubo un error</p>
      <p className="error__texto">{error.statusText || error.message}</p>
    </div>
  );
}
