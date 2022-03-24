import useModal from 'hooks/useModal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children?: React.ReactNode;
}

type ModalProps = React.FunctionComponent<Props>;

const Modal: ModalProps = ({ children }) => {
	const { isModalShown, closeModal, isMounted, portalRef } = useModal();

	useEffect(() => {
		console.log(portalRef);

		if (isMounted && isModalShown) {
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					closeModal();
				}
			});
		}
	});

	return (
		<>
			<div className="modal-background" onClick={closeModal} role="presentation">
				<div className="modal-body" role="presentation" onClick={(e) => e.stopPropagation()}>
					<button type="button" className="" onClick={closeModal}>
						Hide Modal
					</button>
					<p>{children}</p>
				</div>
			</div>
		</>
	);
};

export default Modal;
