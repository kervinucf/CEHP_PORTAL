<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let application;
    export let site_evaluation;
    export let construction;
</script>

<div class="top-toolbar">
    <img src="logo.png" alt="Florida CHEP" />
    <button class="application"
            on:click="{() => {application = !application; site_evaluation = false;construction = false; dispatch('application', application);}}">
        Application
    </button>

    <button class="site-eval"
            on:click="{() => {site_evaluation = !site_evaluation;application = false;construction = false; dispatch('site_evaluation', site_evaluation);}}">
        Site Eval
    </button>
    <button class="construction"
            on:click="{() => {construction = !construction;application = false;site_evaluation = false; dispatch('construction', construction);}}">
        Construction
    </button>
</div>


<style>
    .top-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        background-color: #26292c;
        color: #fff;
        font-size: .87rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .6);
        z-index: 1;
    }

    .top-toolbar img {
        height: 30px;
        margin-right: 20px;
    }

    .top-toolbar a {
        margin: 0 10px;
        color: #fff;
        text-decoration: none;
    }

    .top-toolbar button {
        background-color: #555;
        border: none;
        color: #fff;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
    }

    .top-toolbar .search-box {
        flex-grow: 1;
        margin-left: 20px;
    }

    .top-toolbar input[type="text"] {
        padding: 5px;
        border-radius: 4px;
        border: 1px solid #555;
    }

</style>