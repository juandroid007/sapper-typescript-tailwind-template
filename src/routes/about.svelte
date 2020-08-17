<script lang="ts">
  let isToggled = false

  function toggle() {
    isToggled = !isToggled
  }
</script>

<div class="space-y-16">
  <div class="text-3xl italic text-purple-800">
    I’m a purple-colored italic text
  </div>

  <div>
    <button class="custom-btn" on:click="{toggle}">
      I’m a red button. Click me
    </button>

    <div class="secret-text" class:is-shown="{isToggled}">
      You found a secret text
    </div>
  </div>

  <!-- If you enable nesting -->
  <dl>
    <dt>What am I</dt>
    <dd>
    I’m a text that should turn bold at large viewport. And blue when hovered.
    </dd>
  </dl>
</div>

<style lang="postcss">
  .custom-btn {
    @apply bg-red-500;

    @apply px-4;
    @apply py-3;

    @apply shadow;
    @apply rounded;

    @apply transform;
    @apply duration-200;

    border: black solid 2px;
  }

  .custom-btn:hover {
    @apply scale-95;
  }

  .custom-btn:focus {
    @apply outline-none;
  }

  .secret-text {
    @apply pointer-events-none;
    @apply opacity-0;

    &.is-shown {
      @apply opacity-100;
      @apply pointer-events-auto;
    }
  }

  dl {
    & dt {
      @apply text-xl;
    }

    & dd {
      @apply font-normal;
      @apply text-2xl;

      @screen lg {
        @apply font-bold;
      }

      &:hover {
        @apply text-blue-700;
      }
    }
  }
</style>
