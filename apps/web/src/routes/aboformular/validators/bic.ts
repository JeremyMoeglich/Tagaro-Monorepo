import { validateBIC } from 'ibantools';

export function bic_validator(v: string): string {
	const result = validateBIC(v.trim().replace(' ', '').toUpperCase());
	if (result.valid) {
		return '';
	} else {
		if (result.errorCodes.includes(0)) {
			return '';
		} else if (result.errorCodes.includes(1)) {
			return 'BIC Land Code fehlt';
		} else {
			return 'BIC zahlen sind falsch';
		}
	}
}
