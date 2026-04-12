const highlights = [
	{
		title: "Frontend",
		text: "Responsive interfaces built with React, Next.js, and Tailwind.",
	},
	{
		title: "Backend",
		text: "APIs and services focused on reliability, speed, and clear structure.",
	},
	{
		title: "Delivery",
		text: "Clean commits, testing discipline, and fast iteration from idea to launch.",
	},
];

export default function Body() {
	return (
		<section className="mx-auto w-full max-w-5xl px-6 py-14">
			<h2 className="text-3xl font-bold text-zinc-900">What I Do</h2>
			<p className="mt-3 max-w-2xl text-zinc-600">
				I design and build practical web products with strong UX and dependable
				engineering.
			</p>

			<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{highlights.map((item) => (
					<article
						key={item.title}
						className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
					>
						<h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
						<p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
