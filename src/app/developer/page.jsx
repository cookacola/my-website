import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen text-black bg-orange-100">
			<Head>
				<title>Developer Profile</title>
				<meta name="description" content="A simple developer profile page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container p-6 mx-auto">
				<h1 className="mb-6 text-4xl font-bold">
					Welcome to my Developer Profile!
				</h1>

				<section>
					<h2 className="mb-4 text-2xl font-bold">About me</h2>
					<p className="mb-4">
						I'm a full stack developer with a speciality in modern web
						development technologies like React, Node.js, and of course,
						Next.js!
					</p>
				</section>

				<section>
					<h2 className="mb-4 text-2xl font-bold">Projects</h2>
					<div className="grid grid-cols-3 gap-4">
						{/* Replace with your actual projects */}
						<div className="p-4 bg-white rounded-md shadow">
							<h3 className="mb-2 text-lg font-bold">Project 1</h3>
							<p>This is a description of my amazing project.</p>
						</div>
						<div className="p-4 bg-white rounded-md shadow">
							<h3 className="mb-2 text-lg font-bold">Project 2</h3>
							<p>This is a description of my another amazing project.</p>
						</div>
						<div className="p-4 bg-white rounded-md shadow">
							<h3 className="mb-2 text-lg font-bold">Project 3</h3>
							<p>This is a description of my great project.</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="mb-4 text-2xl font-bold">Contact</h2>
					<p>
						You can reach out to me at{" "}
						<a
							href="mailto:your-email@example.com"
							className="text-blue-600 underline"
						>
							your-email@example.com
						</a>
					</p>
				</section>
			</main>
		</div>
	);
}
