<script>
  // @ts-nocheck
  
    // Tuodaan Footer ja Header komponentit
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import "../app.css"; // Tuodaan CSS-tiedosto
  
    // Määritellään muuttujat
    /**
       * @type {number}
       */
    let y;
    let innerWidth = 0;
    let innerHeight = 0;
  
    // Funktio, joka scrollaa sivun yläreunaan
    function goTop() {
        document.body.scrollIntoView();
    }
  </script>
  
  <!-- Pääsäilö, joka sisältää sivun rakenteen -->
  <div
    class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
  >
    <!-- Painike, joka scrollaa sivun yläreunaan -->
    <div
        class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
            (y > 0
                ? " opacity-full pointer-events-auto"
                : " pointer-events-none opacity-0")}
    >
        <button
            on:click={goTop}
            class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>
    </div>
    <!-- Tuodaan Header komponentti ja välitetään muuttujat -->
    <Header {y} {innerHeight}/>
    <!-- Sisältö -->
    <slot />
    <!-- Tuodaan Footer komponentti -->
    <Footer />
  </div>
  
  <!-- Svelte komponentti, joka sitoo scrollauksen ja ikkunan koon -->
  <svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
  