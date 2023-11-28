<script>
    import ApplicantInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/site_eval/fields/ApplicantInformation.svelte";
    import SiteEvaluation
        from "$lib/viewer/side_bar/components/forms/StatePermit/site_eval/fields/SiteEvaluation.svelte";
    import EvaluatorFields
        from "$lib/viewer/side_bar/components/forms/StatePermit/site_eval/fields/EvaluatorFields.svelte";

</script>

<div>
    <h3>
        Site Evaluation Page
    </h3>
    <div>

        <div>
            <ApplicantInformation/>
        </div>
        <p></p>
        <div>
            <SiteEvaluation/>
        </div>
        <p></p>
        <div>
            <EvaluatorFields/>
        </div>
    </div>
</div>