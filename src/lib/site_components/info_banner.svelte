<script lang="ts">
	import { browser } from '$app/env';
	import Button from '$lib/layout_components/button.svelte';
	import Cookies from 'js-cookie';
	import lodash from 'lodash';
	import * as cookie_keys from '$lib/vars/cookie_keys';
	
	function IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	function GetPrefrenceObj(): { [key: string]: boolean | undefined } {
		const original_cookie_json = Cookies.get('preferences');
		let return_object = { Essentiell: true };
		if (original_cookie_json && IsJsonString(original_cookie_json)) {
			let object: any = JSON.parse(original_cookie_json);
			if (Object.values(object).every((key) => typeof key == 'boolean')) {
				return_object = object;
			}
		}
		const keys = Object.keys(return_object);
		const difference = cookie_keys.required_keys.filter((x) => !keys.includes(x));
		difference.forEach((element) => {
			return_object[element] = undefined;
		});
		return return_object;
	}

	function AreCookiesAccepted(object: { [key: string]: boolean | undefined }): boolean {
		//return false;
		return !Object.values(object).some((key) => key === undefined) || !browser;
	}

	let accept_obj: { [key: string]: boolean } = GetPrefrenceObj();

	export let preferences_object = accept_obj;
	$: preferences_object = lodash.cloneDeep(accept_obj);
	
	$: Cookies.set('preferences', JSON.stringify(accept_obj), { expires: 128 });

	let edit_preferences = lodash.cloneDeep(accept_obj);
	Object.entries(edit_preferences).forEach((element) => {
		edit_preferences[element[0]] = Boolean(element[1]);
	});
	const tabs = {
		Cookies: `
		Auf dieser Website werden Cookies und ähnliche Technologien genutzt.
		Einige sind für den Betrieb der Website notwendig.
		Andere können links aktiviert werden und dienen statistischen Erhebungen zur Optimierung der Webseite,
		der Nachverfolgung von Werbemaßnahmen, auch über mehrere Webseiten hinweg sowie der Personalisierung.
		Bedenke, dass nicht aktivierte Cookies den Funktionsumfang der Webseite einschränken können.
		Bei vereinzelten Cookies akzeptierst du zudem, dass deine Daten in Ländern,
		die unter Umständen kein adäquates Schutzniveau i.S.d. DSGVO bieten,
		verarbeitet werden können. Weitere Infos findest du in der Datenschutzerklärung.
		`,
		Kontakt: `
		
		`,
		Aboformular: `
		
		`,
		Widerrufsrecht: `
		
		`
	};
	let current_tab = 'Cookies'
</script>

{#if !AreCookiesAccepted(accept_obj)}
	<div class="grey_out" />
	<div class="outer">
		<h2>Cookie Einstellungen</h2>
		<div class="side_alignment">
			<div class="options">
				{#each Object.entries(edit_preferences) as pair}
					<div class="option">
						<p>{pair[0]}</p>
						<label class="switch">
							<input
								type="checkbox"
								bind:checked={edit_preferences[pair[0]]}
								disabled={pair[0] === 'Essentiell'}
							/>
							<span class="slider round" />
						</label>
					</div>
				{/each}
			</div>
			<div class="tabs_container">
				<div class="tab_bar">
					{#each Object.keys(tabs) as tab_name}
						<button class={current_tab === tab_name ? 'selected' : ''} on:click={function () {current_tab = tab_name}}>
							{tab_name}
						</button>
					{/each}
				</div>
				<div class="tab_content">
					{tabs[current_tab]}
				</div>
			</div>
		</div>
		<div class="buttons">
			<div
				on:click={function () {
					accept_obj = lodash.cloneDeep(edit_preferences);
				}}
			>
				<Button text="Einstellungen Speichern" reversed={true} />
			</div>
			<div
				on:click={function () {
					accept_obj = lodash.cloneDeep(edit_preferences);
					Object.keys(accept_obj).forEach(element => {
						accept_obj[element] = true
					});
				}}
			>
				<Button text="Alle Akzeptieren" reversed={false} />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.tab_bar {
		display: flex;
		justify-content: space-between;
		button {
			flex-grow: 1;
			padding: 10px 0px;
		}
		button.selected {
			background-color: white;
		}
	}
	.tab_content {
		width: 500px;
		background-color: white;
		padding: 20px;
	}
	.tabs_container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.buttons {
		display: flex;
		gap: 20px;
		min-width: 450px;
		max-width: 600px;
		justify-content: space-between;
	}
	.side_alignment {
		display: flex;
		gap: 20px;
		padding: 20px;
	}
	.grey_out {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(75, 75, 75, 0.774);
		z-index: 1000;
	}
	.option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}
	.options {
		display: flex;
		flex-direction: column;
		min-width: fit-content;
		background-color: white;
		padding: 20px;
	}
	.outer {
		display: flex;
		flex-direction: column;
		position: fixed;
		background-color: rgb(231, 231, 231);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1001;
		box-shadow: 0px 0px 300px -30px rgba(0, 0, 0, 0.75);
		padding: 20px;
		border-radius: 10px;
		align-items: center;
	}
	h2 {
		margin: 0px;
	}
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
		input {
			opacity: 0;
			width: 0;
			height: 0;
		}
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}
	input[disabled]:checked + .slider {
		background-color: rgb(120, 152, 179);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
