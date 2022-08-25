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
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},
		{
			name: 'edge',
			use: { ...devices['Desktop Edge'] }
		},
		{
			name: 'ie',
			use: { ...devices['Desktop IE'] }
		}
	]
};

export default config;
