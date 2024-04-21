<template>
  <div class="group relative">
    <button class="mr-2" type="button" @click="$emit('delete')">
      <svg
        class="stroke-black hover:stroke-slate-500 transition hover:duration-150"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 11V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 11V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <span
      class="pointer-events-none absolute -top-5 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xs"
    >
      Delete
    </span>
  </div>
</template>
