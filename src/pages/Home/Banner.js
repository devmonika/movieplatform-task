import React from 'react';

const Banner = () => {
    return (
        <section
  class="relative bg-[url(https://i.postimg.cc/pVzrmMdC/dark-knight-rises-movie-poster-banner-batman.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
      The Dark Knight Rises

        <strong class="block font-extrabold text-rose-700">
        CHAPTER TWO
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
        
Embark on a epic adventure with the anticipated sequel of The Dark Knight Rises, coming this winter 2023.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        
      </div>
    </div>
  </div>
</section>

    );
};

export default Banner;