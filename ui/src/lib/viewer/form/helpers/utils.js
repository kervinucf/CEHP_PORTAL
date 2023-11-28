import {build_form_fields} from "$lib/viewer/form/fields/builder.js";

export function populate_form_with_fields() {
    queueMicrotask(() => {
        build_form_fields();
    });
}

export async function load_form(form_path) {
    const response = await fetch(form_path);

    // Wait for next microtask to ensure SVG is rendered

    return await response.text();
}

