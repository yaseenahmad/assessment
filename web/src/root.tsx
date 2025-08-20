import { isRouteErrorResponse, Outlet } from 'react-router';
import { useEffect } from 'react';
import { initializeAppearance } from './hooks/use-appearance';
import './index.css';

export default function Root() {
	useEffect(() => {
		initializeAppearance();
	}, []);

	return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="container mx-auto p-4">
          
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}


