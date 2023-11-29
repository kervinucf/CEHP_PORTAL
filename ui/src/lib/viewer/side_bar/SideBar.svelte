<script>
    import ApplicationFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/application/ApplicationFields.svelte";
    import ConstructionFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/ConstructionFields.svelte";
    import SiteEvaluationFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/site_eval/SiteEvaluationFields.svelte";

    export let form_path;

</script>

<h2>
    <span>3341 S San Mateo Dr</span>
</h2>

<div>
    <h3>Select Form</h3>
    <div>
        <button>State of Florida Application</button>
        <button>Search Available Forms</button>
        <button>Create Custom Form</button>
    </div>
</div>

<div>
    <h3>Property Information</h3>
    <div>
        <fieldset style="">
            <!-- 1 -->
            <legend>Property Owner</legend>
            <label for="optA">
                <button>Add New</button>
                <button>Search Known</button>
            </label>

        </fieldset>
        <p></p>
        <fieldset>
            <!-- 1 -->
            <legend>Address Information</legend>
            <label for="optA">
                <button>I'll Do It Myself</button>
                <button>Import From Property Appraiser</button>
            </label>
        </fieldset>
        <p></p>
        <fieldset>
            <!-- 1 -->
            <legend>System Inspection & Certification</legend>
            <label for="optA">
                <button>I'll Do It Myself</button>
                <button>Send To Contractor</button>
            </label>
        </fieldset>
        <p></p>
        <fieldset>
            <!-- 1 -->
            <legend>Site Evaluation</legend>
            <label for="optA">
                <button>I'll Do It Myself</button>
                <button>Send To Contractor</button>
            </label>
        </fieldset>
    </div>
</div>


<div>
    {#if form_path == "./forms/application/application-1.svg"}
        <ApplicationFields />
        {:else if form_path == "./forms/construction/construction-1.svg"}
        <ConstructionFields />
        {:else if form_path == "./forms/site evaluation/site evaluation-1.svg"}
        <SiteEvaluationFields />
        {/if}
</div>