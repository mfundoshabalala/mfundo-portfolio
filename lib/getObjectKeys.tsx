/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import _ from 'lodash';

const getObjectKeys = (obj: Record<string, number>): Array<string> =>
	_.keys(obj) as Array<string>;

export default getObjectKeys;
