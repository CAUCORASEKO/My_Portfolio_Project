<script>
    // Aquí puedes importar cualquier dependencia o módulo que necesites
  </script>
  
  <main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
      <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Hi! I’m <span class="poppins text-violet-400">Claudio</span> aka CAUCO <br/>Full Stack
          <span class="poppins text-violet-400">Developer</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl">
          My <span class="text-violet-400">favorite tech</span> includes, Python, JavaScript (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!
        </p>
  
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
          href="#"
          target="_blank"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">Get in touch &rarr;</h4>
        </a>
      </div>
      <div class="relative shadow-2xl grid place-items-center">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src="images/profile.png"
          alt="Profile Image"
          class="object-cover z-[2] max-h-[70vh]"
        />
      </div>
    </section>
    <section id="Projects" class="py20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endedors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violt-400">see</span> my work?
            </h3>
            <!-- svelte-ignore a11y-missing-content -->
            <a href="https://github.com/CAUCORASEKO"
            target="_blank" class="mx-auto px-4 py-2 rounded-md fa-border
            border-solid border-white flex items-center gap-2 -mb-4 sm:-mb:-mb-0
            -mt-10 hover:border-violet-700 duration-200">
        </a>



        </div>
    </section>
  </main>
  