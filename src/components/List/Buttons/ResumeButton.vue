<template>
  <div class="group relative">
    <button class="button" @click="$emit('resume')">
      <svg
        class="fill-black hover:fill-gray-500 transition hover:duration-150"
        width="20px"
        height="20px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m 2 2.5 v 11 c 0 1.5 1.269531 1.492188 1.269531 1.492188 h 0.128907 c 0.246093 0.003906 0.488281 -0.050782 0.699218 -0.171876 l 9.796875 -5.597656 c 0.433594 -0.242187 0.65625 -0.734375 0.65625 -1.226562 c 0 -0.492188 -0.222656 -0.984375 -0.65625 -1.222656 l -9.796875 -5.597657 c -0.210937 -0.121093 -0.453125 -0.175781 -0.699218 -0.175781 h -0.128907 s -1.269531 0 -1.269531 1.5 z m 0 0"
        />
      </svg>
      <span
        class="pointer-events-none absolute -top-5 -left-3 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xs"
      >
        Resume
      </span>
    </button>
  </div>
</template>
