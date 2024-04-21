<template>
  <div class="group relative">
    <button class="mr-2" type="button" @click="$emit('edit')">
      <svg
        class="stroke-black hover:stroke-light-blue transition hover:duration-150"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g id="Complete">
          <g id="edit">
            <g>
              <path
                d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <polygon
                fill="none"
                points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </svg>
      <span
        class="pointer-events-none absolute -top-5 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xs"
      >
        Edit
      </span>
    </button>
  </div>
</template>
