import { validateIBAN } from 'ibantools';

export function iban_validator(v: string): string {
	const result = validateIBAN(v.trim().replace(' ', '').toUpperCase());
	if (result.valid) {
		return '';
	} else {
		if (result.errorCodes.includes(0)) {
			return '';
		} else if (result.errorCodes.includes(1)) {
			return 'IBAN Land Code fehlt';
		} else if (result.errorCodes.includes(2)) {
			return 'IBAN hat falsche Länge';
		} else {
			return 'IBAN zahlen sind falsch';
		}
	}
}
