import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run preview',
		port: 4173
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	]
};

export default config;
