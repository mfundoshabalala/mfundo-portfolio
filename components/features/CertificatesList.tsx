import _ from 'lodash';

const certifications = [
	{
		title: 'Certifications 1',
		url: '/pdf/Coursera 3NDHZJ96EDDN.pdf',
	},
	{
		title: 'Certifications 2',
		url: '/pdf/Coursera AQLUW5TMBVU7.pdf',
	},
	{
		title: 'Certifications 3',
		url: '/pdf/Coursera FKAX92999XNE.pdf',
	},
	{
		title: 'Certifications 4',
		url: '/pdf/Coursera N6BZPEHYWZNE.pdf',
	},
	{
		title: 'Certifications 5',
		url: '/pdf/Coursera PQ8N2QGF8XXC.pdf',
	},
	{
		title: 'Certifications 6',
		url: '/pdf/Coursera SCZZHUF23QDH.pdf',
	},
	{
		title: 'Certifications 7',
		url: '/pdf/Coursera Z7MHS723E35B.pdf',
	},
];

const CertificatesList: React.FC = () => (
	<section className="container flex flex-wrap w-full gap-6 mx-auto">
		{_.map(certifications, ({ url, title }) => (
			<iframe title={title} src={url} width="auto" height={400} frameBorder="0" className="pointer-events-none" />
		))}
	</section>
);

export default CertificatesList;
