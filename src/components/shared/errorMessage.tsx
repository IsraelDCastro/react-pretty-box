interface ErrorMessageProps {
	message: string;
	suggestions?: string[];
}

export default function ErrorMessage({ message, suggestions }: ErrorMessageProps): any {
	return (
		<div className="error-container" role="alert">
			<svg className="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
			</svg>
			<div className="error-content">
				<h5 className="error-title">No images available</h5>
				<p className="error-message">{message}</p>
				{suggestions && (
					<ul className="error-suggestions">
						{suggestions.map((suggestion, index) => (
							<li key={index}>{suggestion}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
};
