import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './index.css';
import { StrictMode } from 'react';

export default function Root() {
	return (
		<html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="icon" type="image/png" href="/a-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Assessment</title>
      </head>
      <body>
        <StrictMode>
          <Outlet />
        </StrictMode>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
	);
}

