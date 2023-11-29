<script>
    import TopBar from "$lib/viewer/top_bar/TopBar.svelte";
    import SideBar from "$lib/viewer/side_bar/SideBar.svelte";
    import FormViewer from "$lib/viewer/form/FormViewer.svelte";
    import html2canvas from "html2canvas";
    import {onMount} from "svelte";

    let application = false;
    let construction = false;
    let site_evaluation = true;

    $: form_path =
        site_evaluation ? "./forms/site evaluation/site evaluation-1.svg" :
            application ? "./forms/application/application-1.svg" :
                construction ? "./forms/construction/construction-1.svg" : "./forms/site evaluation/site evaluation-1.svg";

    function captureElementScreenshot() {
        const element = document.getElementById("pdf-canvas");

        if (element) {
            html2canvas(element).then(canvas => {
                // download the image
                const link = document.createElement("a");
                link.download = "image.jpg";
                link.href = canvas.toDataURL();
                link.click();


            });
        } else {
            console.error("Element not found");
        }
    }


    onMount(() => {
        const download = document.getElementById("download");
        // download.addEventListener("click", captureElementScreenshot);
    });
</script>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
    <title>Field Filler Web App</title>
    <link rel="stylesheet" href="../../../../test/styles.css">
</head>

<div class="main-container">

    <div class="top-toolbar">
        <TopBar bind:application={application} bind:site_evaluation={site_evaluation} bind:construction={construction}/>
    </div>

    <div class="main-content" style="height: 100vh">
        <div class="pdf-viewer" style="background: #515558;display: flex;overflow-x: scroll;padding: 1rem">
            <FormViewer bind:form_path/>
        </div>
        <div class="sidebar">
            <SideBar bind:form_path />
        </div>

    </div>
</div>

<style>



    /* Sidebar Styles */
    .sidebar {
        padding: 1rem;
        overflow-y: auto;
    }





    /* Responsive Styles */
    @media only screen and (min-width: 1024px) {
        .main-container {
            flex-direction: row;
        }

        .top-toolbar {
            position: fixed;
            width: 100%;
            z-index: 1000;
        }

        .main-content {
            padding-top: 2.5rem; /* Space for fixed toolbar */
            display: flex;
            width: 100%;
        }

        .sidebar {
            width: 28%;
            top: 2.5rem; /* Below the toolbar */
            bottom: 0;
            overflow-y: auto;
        }

        .pdf-viewer {
            width: 80%;
            padding: 1rem;
        }
    }



</style>
