import { z } from 'zod';

export const get_email_config_schema = z.object({
	subject: z.string().optional(),
	folder: z.string().optional(),
	from: z.string().optional(),
	since: z.date().optional(),
	cached: z.boolean().optional()
});

export type GetEmailConfig = z.infer<typeof get_email_config_schema>;

export interface UnsentEmail {
	subject: string;
	body: string;
}

export const sent_email_schema = z.object({
	seen: z.boolean(),
	date: z.date(),
	subject: z.string(),
	body: z.string()
});

export type SentEmail = z.infer<typeof sent_email_schema>;
