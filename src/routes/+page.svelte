<script>
    import Sidebar from '$lib/Sidebar.svelte';
    import Header from '$lib/Header.svelte';
    import Section1 from '$lib/Section1.svelte';
    import Section2 from '$lib/Section2.svelte';
    import Section3 from '$lib/Section3.svelte';
</script>

<style>
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .body {
        display: flex;
		height: 100%;
    }
    .section1, .section3 {
        flex: 1;
		height: 100%;
    }
    .section2 {
        flex: 2;
		height: 100%;
    }
</style>

<div class="sidebar">
    <Sidebar />
</div>
<div class="content">
    <Header />
    <div class="body">
        <div class="section1">
            <Section1 />
        </div>
        <div class="section2">
            <Section2 />
        </div>
        <div class="section3">
            <Section3 />
        </div>
    </div>
</div>
