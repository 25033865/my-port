"use client";

import { useEffect, useRef } from "react";

const TARGET_FRAME_MS = 1000 / 120;

export default function Cousour() {
	const dotRef = useRef<HTMLDivElement>(null);
	const rafIdRef = useRef<number | null>(null);
	const lastTimeRef = useRef(0);
	const isInsideRef = useRef(false);
	const scopeRef = useRef<HTMLElement | null>(null);

	const pointerRef = useRef({ x: 0, y: 0 });
	const dotPosRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!supportsFinePointer || prefersReducedMotion) {
			return;
		}

		const startX = window.innerWidth / 2;
		const startY = window.innerHeight / 2;
		const scope = document.getElementById("portfolio-root");

		if (!scope) {
			return;
		}

		pointerRef.current = { x: startX, y: startY };
		dotPosRef.current = { x: startX, y: startY };
		scopeRef.current = scope;

		const updateTransforms = () => {
			if (dotRef.current) {
				dotRef.current.style.transform = `translate3d(${dotPosRef.current.x - 4}px, ${dotPosRef.current.y - 4}px, 0)`;
			}
		};

		const handlePointerMove = (event: PointerEvent) => {
			if (!isInsideRef.current) {
				return;
			}

			pointerRef.current.x = event.clientX;
			pointerRef.current.y = event.clientY;
		};

		const handlePointerEnter = (event: PointerEvent) => {
			isInsideRef.current = true;
			scope.classList.add("custom-cursor-scope");
			pointerRef.current = { x: event.clientX, y: event.clientY };
			dotPosRef.current = { x: event.clientX, y: event.clientY };

			if (dotRef.current) {
				dotRef.current.style.opacity = "1";
			}

			updateTransforms();
		};

		const handlePointerLeave = () => {
			isInsideRef.current = false;
			scope.classList.remove("custom-cursor-scope");

			if (dotRef.current) {
				dotRef.current.style.opacity = "0";
			}
		};

		const animate = (time: number) => {
			const elapsed = lastTimeRef.current ? time - lastTimeRef.current : TARGET_FRAME_MS;
			lastTimeRef.current = time;

			if (isInsideRef.current) {
				const frameScale = Math.min(2.5, elapsed / TARGET_FRAME_MS);
				const dotEase = Math.min(1, 0.72 * frameScale);

				dotPosRef.current.x += (pointerRef.current.x - dotPosRef.current.x) * dotEase;
				dotPosRef.current.y += (pointerRef.current.y - dotPosRef.current.y) * dotEase;
				updateTransforms();
			}

			rafIdRef.current = window.requestAnimationFrame(animate);
		};

		scope.addEventListener("pointermove", handlePointerMove, { passive: true });
		scope.addEventListener("pointerenter", handlePointerEnter);
		scope.addEventListener("pointerleave", handlePointerLeave);
		rafIdRef.current = window.requestAnimationFrame(animate);

		return () => {
			scope.classList.remove("custom-cursor-scope");
			scope.removeEventListener("pointermove", handlePointerMove);
			scope.removeEventListener("pointerenter", handlePointerEnter);
			scope.removeEventListener("pointerleave", handlePointerLeave);

			if (rafIdRef.current !== null) {
				window.cancelAnimationFrame(rafIdRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={dotRef}
			aria-hidden="true"
			className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.95)] opacity-0 will-change-transform"
		/>
	);
}
