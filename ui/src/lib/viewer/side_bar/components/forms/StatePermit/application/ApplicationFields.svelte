<script>
    import ApplicantInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/application/fields/ApplicantInformation.svelte";
    import PropertyInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/application/fields/PropertyInformation.svelte";
    import BuildingInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/application/fields/BuildingInformation.svelte";
    import SignerFields from "$lib/viewer/side_bar/components/forms/StatePermit/application/fields/SignerFields.svelte";
</script>

<style>
    
</style>

<div>
    <h3>
        Application Page
    </h3>
    <div>

        <div>
            <ApplicantInformation/>
        </div>
        <p></p>
        <div>
            <PropertyInformation/>
        </div>
        <p></p>
        <div>
            <BuildingInformation/>
        </div>
        <p></p>
        <div>
            <SignerFields/>
        </div>
    </div>
</div>