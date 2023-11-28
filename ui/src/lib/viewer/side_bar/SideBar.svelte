<script>
    import ApplicationFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/application/ApplicationFields.svelte";
    import ConstructionFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/ConstructionFields.svelte";
    import SiteEvaluationFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/site_eval/SiteEvaluationFields.svelte";
</script>

<h2>
    <i class="fa-solid fa-house" style="font-size: 25px;margin-right: .25rem;"></i> <span>3341 S San Mateo Dr</span>
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
    <SiteEvaluationFields />
</div>