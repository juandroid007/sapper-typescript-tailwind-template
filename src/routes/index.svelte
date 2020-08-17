<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div>
  <h1>Great success!</h1>

  <figure>
    <img alt='Success Kid' src='successkid.jpg'>
    <figcaption>Have fun with Sapper!</figcaption>
  </figure>

  <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
</div>

<style>
  h1 {
    @apply text-6xl;
    @apply font-bold;

    @apply py-6;

    @apply transform;
    @apply duration-200;
  }

  img {
    @apply rounded-xl;
    @apply shadow-md;

    @apply transform;
    @apply duration-200;
  }

  img:hover {
    @apply scale-105;
    @apply shadow-2xl;
  }

  h1:hover {
    @apply scale-105;
  }
</style>
