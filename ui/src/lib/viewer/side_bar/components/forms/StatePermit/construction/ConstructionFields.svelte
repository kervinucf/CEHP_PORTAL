<script>
    import ApplicantInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/ApplicantInformation.svelte";
    import ExistingTankInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/ExistingTankInformation.svelte";
    import ContractorSignature
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/ContractorSignature.svelte";
    import ExistingDrainfieldInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/ExistingDrainfieldInformation.svelte";
    import SystemFailureInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/SystemFailureInformation.svelte";
    import PumpOutInformation
        from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/PumpOutInformation.svelte";
    import Remarks from "$lib/viewer/side_bar/components/forms/StatePermit/construction/fields/Remarks.svelte";
</script>

<div>
    <h3>
        Construction Page
    </h3>
    <div>

        <div>
            <ApplicantInformation/>
        </div>
        <p></p>
        <div>
            <ExistingTankInformation/>
        </div>
        <p></p>
        <div>
            <PumpOutInformation/>
        </div>
        <p></p>
        <div>
            <ExistingDrainfieldInformation/>
        </div>
        <p></p>
        <div>
            <SystemFailureInformation/>
        </div>
        <div>
            <Remarks />
        </div>
        <div>
            <ContractorSignature/>
        </div>
    </div>
</div>