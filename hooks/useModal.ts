import { useEffect, useState, useRef } from 'react';

const useModal = () => {
	const [isModalShown, setIsModalShown] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState(false);
	const portalRef = useRef<HTMLElement | null>(null);

	const closeModal = () => {
		setIsModalShown(false);
	};

	useEffect(() => {
		setIsMounted(true);

		setTimeout(() => {
			portalRef.current = document.getElementById('modalportal');
		}, 2000);

		if (isMounted) {
			setIsModalShown(true);
		}

		return () => {
			setIsMounted(false);
		};
	}, [isMounted]);

	return { isModalShown, closeModal, isMounted, portalRef };
};

export default useModal;
