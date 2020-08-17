<script lang="ts">
  import { stores } from '@sapper/app'

  import NProgress from 'nprogress'

  import GlobalStyle from '../components/GlobalStyle.svelte'
  import Nav from '../components/Nav.svelte'

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  })

  const { preloading } = stores()

  $: {
    if ($preloading) {
      NProgress.start()
    }

    if (!$preloading) {
      NProgress.done()
    }
  }

  export let segment: string
</script>

<GlobalStyle/>

<Nav {segment}/>

<main class="container" class:loading={$preloading}>
  <slot></slot>
</main>

<style lang="postcss">
  .container {
    @apply duration-500;
    @apply transition-opacity;

    &.loading {
      @apply opacity-25;
    }
  }

  @screen md {
    .container {
      @apply px-64;
    }
  }
</style>
