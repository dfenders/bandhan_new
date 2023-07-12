export const prerender = true;
import { loadImages } from '$lib/imageLoader';
import { onMount } from 'svelte';

onMount(() => {
    loadImages();
})
