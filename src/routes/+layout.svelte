<script>

    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';

</script>

<Header />
<div class="content">
    <slot />
</div>
<Footer />