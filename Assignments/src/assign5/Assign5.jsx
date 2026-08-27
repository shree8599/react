
import { useState } from "react";

function WelcomeMessage() {
	return <p className="text-green-700">Welcome back! You can access your dashboard.</p>;
}

function LoginMessage() {
	return <p className="text-slate-600">Please log in to continue.</p>;
}

export default function Assign5() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showContent, setShowContent] = useState(true);
	const marks = 32;
	const hasPassed = marks >= 40;

	return (
		<main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
			<section className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
				<h1 className="mb-2 text-3xl font-bold text-indigo-700">Conditional Rendering</h1>
				<p className="mb-8 text-slate-500">Four examples using React conditions and Tailwind CSS.</p>

				<div className="grid gap-6 sm:grid-cols-2">
					<article className="rounded-xl border border-slate-200 p-5">
						<h2 className="mb-3 text-lg font-semibold">1. Login status</h2>
						{isLoggedIn ? <WelcomeMessage /> : <LoginMessage />}
						<button
							onClick={() => setIsLoggedIn(!isLoggedIn)}
							className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
						>
							{isLoggedIn ? "Logout" : "Login"}
						</button>
					</article>

					<article className="rounded-xl border border-slate-200 p-5">
						<h2 className="mb-3 text-lg font-semibold">2. Exam result</h2>
						<p>Student marks: <strong>{marks}</strong>/100</p>
						<p className={`mt-2 font-bold ${hasPassed ? "text-green-600" : "text-red-600"}`}>
							{hasPassed ? "Pass" : "Fail"}
						</p>
					</article>

					<article className="rounded-xl border border-slate-200 p-5">
						<h2 className="mb-3 text-lg font-semibold">3. Conditional component</h2>
						{isLoggedIn ? <WelcomeMessage /> : <LoginMessage />}
					</article>

					<article className="rounded-xl border border-slate-200 p-5">
						<h2 className="mb-3 text-lg font-semibold">4. Show or hide content</h2>
						<button
							onClick={() => setShowContent(!showContent)}
							className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
						>
							{showContent ? "Hide content" : "Show content"}
						</button>
						{showContent && <p className="mt-4 rounded-lg bg-indigo-50 p-3 text-indigo-800">This content is conditionally visible.</p>}
					</article>
				</div>
			</section>
		</main>
	);
}