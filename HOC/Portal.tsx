import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = React.FunctionComponent<{ children: React.ReactNode }>;

const Portal: PortalProps = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false);
	const portalRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setIsMounted(true);
			portalRef.current = document.getElementById('modalportal');
		}, 2000);

		return () => {
			// setIsMounted(false);
		};
	}, []);

	return isMounted && !!portalRef.current ? createPortal(children, portalRef.current) : null;
};

export default Portal;
