<script>
    import { onMount } from "svelte";
    import Wrapper from "$lib/viewer/Wrapper.svelte";
    import { load_form, populate_form_with_fields } from "$lib/viewer/form/helpers/utils.js";

    export let form_path;
    let svgContent = null;

    $: if (form_path && typeof window !== 'undefined') {
        reloadForm();
    }

    async function reloadForm() {
        svgContent = await load_form(form_path);
        populate_form_with_fields();
    }

    // Optional: Handle window resize
    onMount(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    function handleResize() {
        // Code to handle resize, if necessary
    }
</script>

{#if svgContent}
    <div id="pdf-canvas" class="responsive-canvas">
        <Wrapper svgData={svgContent}/>
    </div>
{/if}

<style>
    .responsive-canvas {
        margin: auto;
        background: white;
        width: 100%; /* Responsive width */
        max-width: 612px; /* Max width */
        height: auto; /* Auto height for responsiveness */
        aspect-ratio: 612 / 792; /* Maintain aspect ratio */
    }
</style>
