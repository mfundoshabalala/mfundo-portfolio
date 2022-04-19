/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import _ from 'lodash';

const transformText = (text: string): string | undefined =>
	_.startCase(_.toLower(_.replace(text, '_', ' ').replaceAll('-', ' ')));

export default transformText;
