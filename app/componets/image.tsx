import Image from "next/image";

const PROFILE_IMAGE_URL =
	"https://firebasestorage.googleapis.com/v0/b/mudau-1d1cb.firebasestorage.app/o/musa.jpeg?alt=media&token=e25605e8-e9df-4990-836a-edd2f2f11ff8";

export default function ProfileImage() {
	return (
		<Image
			src={PROFILE_IMAGE_URL}
			alt="Mudau Rotondwa Agriment profile photo"
			width={160}
			height={160}
			sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
			priority
			className="w-full h-full rounded-full object-cover transition duration-300 group-hover:scale-105"
		/>
	);
}
