import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <header className="w-full border-b-[1px] border-gray-200 opacity-95 backdrop-blur-md fixed top-0 bg-neutral-900">
        <nav class="px-4 lg:px-6 py-2.5  h-full">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
              <Image
                height={500}
                width={500}
                src="/bencheee.png"
                class="h-8 w-8 mr-3"
                alt="BenchEEE Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                BenchEEE
              </span>
            </a>

            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section class="">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              BenchEEE: 3D Printing Monitoring Solution powered by IoT
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Adipisicing deserunt commodo do Lorem ea est eu adipisicing est.
              Tempor aliquip velit officia culpa ea aliquip irure duis ullamco
              ea eu eiusmod. Laboris velit eiusmod sint mollit. Et velit
              consequat aliquip excepteur adipisicing excepteur id est ex. Sit
              sit pariatur ullamco incididunt sint id laborum qui. Laboris esse
              sit incididunt magna id duis aliqua amet Lorem sint non nostrud
              occaecat enim.
            </p>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              width={900}
              height={700}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section class="">
        <h1 class="text-4xl max-w-screen-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Data Dashboard
        </h1>
      </section>
      <section class="">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Acceleration and Gyroscope: MPU6050
            </h2>
            <p class="mb-4">
              Culpa duis Lorem duis dolore ullamco dolore consectetur duis
              ullamco Lorem excepteur sunt sint culpa. Nulla reprehenderit dolor
              dolor consequat nisi. Enim dolor enim non reprehenderit
              adipisicing.
            </p>
            <p>
              Qui duis labore fugiat ipsum dolor do labore mollit et adipisicing
              laboris labore.
            </p>
          </div>
          <div class="grid max-w-3xl lg:max-w-full grid-cols-1 gap-4 lg:grid-cols-3 h-auto justify-center">
            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28x-axis%29&type=line&xaxis=Time&yaxis=Acceleration+%28g%29"></iframe>

            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28y-axis%29&type=line&xaxis=Time&yaxis=Acceleration+%28g%29"></iframe>
            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28z-axis%29&type=line&xaxis=Time&yaxis=Acceleration+%28g%29"></iframe>
            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28x-axis%29&type=line&xaxis=Time&yaxis=g"></iframe>
            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
          </div>
        </div>
      </section>
      <section class="">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Motion Detector: HC-SR501
            </h2>
            <p class="mb-4">
              Culpa duis Lorem duis dolore ullamco dolore consectetur duis
              ullamco Lorem excepteur sunt sint culpa. Nulla reprehenderit dolor
              dolor consequat nisi. Enim dolor enim non reprehenderit
              adipisicing.
            </p>
            <p>
              Qui duis labore fugiat ipsum dolor do labore mollit et adipisicing
              laboris labore.
            </p>
          </div>
          <div class="grid gap-4 mt-8">
            <iframe
              className="w-full h-auto aspect-[45/26]"
              src="https://thingspeak.com/channels/2187429/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=15&title=Motion+Sensor+Data&type=line&xaxis=Time&yaxis=Motion+Logic"></iframe>
          </div>
        </div>
      </section>
      <section class="">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid gap-4 mt-8">
            <iframe
              className="w-full aspect-[45/26]"
              src="https://thingspeak.com/channels/2207908/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28x-axis%29&type=line&xaxis=Time&yaxis=g"></iframe>
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Light Sensor: BH1750
            </h2>
            <p class="mb-4">
              Culpa duis Lorem duis dolore ullamco dolore consectetur duis
              ullamco Lorem excepteur sunt sint culpa. Nulla reprehenderit dolor
              dolor consequat nisi. Enim dolor enim non reprehenderit
              adipisicing.
            </p>
            <p>
              Qui duis labore fugiat ipsum dolor do labore mollit et adipisicing
              laboris labore.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
