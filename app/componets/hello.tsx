type HelloProps = {
	name?: string;
	role?: string;
};

export default function Hello({
	name = "Mudau",
	role = "Full-Stack Developer",
}: HelloProps) {
	return (
		<section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
			<p className="text-sm uppercase tracking-wide text-zinc-500">Welcome</p>
			<h2 className="mt-2 text-2xl font-bold text-zinc-900">Hi, I am {name}.</h2>
			<p className="mt-2 text-zinc-600">I build fast, clean web experiences as a {role}.</p>
		</section>
	);
}
