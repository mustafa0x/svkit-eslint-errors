import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
    compilerOptions: {  // CHANGED
        // disable specific accessibility warnings
        warningFilter: warning =>
            !warning.filename?.includes('node_modules') &&
            ![
                'a11y_autofocus',
                'security_anchor_rel_noreferrer',
                'a11y_click_events_have_key_events',
                'a11y_no_static_element_interactions',
            ].includes(warning.code),
    },
};

export default config;
