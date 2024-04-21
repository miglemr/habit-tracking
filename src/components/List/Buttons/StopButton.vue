<template>
  <div class="group relative">
    <button type="button" @click="$emit('stop')">
      <svg
        class="fill-stop-dark hover:fill-stop-light transition hover:duration-150"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        />
      </svg>
    </button>
    <span
      class="pointer-events-none absolute -top-5 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xs"
    >
      Stop
    </span>
  </div>
</template>
