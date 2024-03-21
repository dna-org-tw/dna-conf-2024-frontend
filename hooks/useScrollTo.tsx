import { useEffect } from 'react';
import { useParams } from 'next/navigation';

const useScrollTo = () => {
	const params = useParams();
	useEffect(() => {
		const hash = window.location.hash.toString().slice(1);
		if (hash) {
			const element = document.getElementById(hash);
			element?.scrollIntoView({ behavior: 'smooth' });
		} else {
			// scroll to top
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}, [params]);
};

export default useScrollTo;
