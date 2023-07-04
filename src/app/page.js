import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-neutral-900 text-white">
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
                  <Link
                    href="/#accelerometer"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    MPU6050
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#motion"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    HC-SR501
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#light"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    BH1750
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section class="mt-20">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              BenchEEE: 3D Printing Management System using STM32 powered by
              Thingspeak-based IoT
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The goal of this IoT project is to develop a smart system using an
              STM32 microcontroller that integrates multiple sensors, including
              a light sensor, motion sensor, acceleration sensor, and gyroscope.
              These sensors will provide real-time data about the environment
              and the movement of objects. The project aims to interface the
              sensor data with a custom web application portal dashboard using
              ThingSpeak, an IoT platform for data collection and visualization.
            </p>
          </div>
          <div class="lg:mt-0 lg:col-span-5 p-10 flex items-center justify-center h-full">
            <Image
              width={864}
              height={864}
              src="/demo.png"
              className="object-contain w-96 "
              alt="Project Setup"
            />
          </div>
        </div>
      </section>
      <section class="">
        <h1 class="text-4xl max-w-screen-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Data Dashboard
        </h1>
      </section>
      <section class="" id="accelerometer">
        <div class="gap-16 items-center py-8 px-4 mx-auto grid grid-cols-1 lg:py-16 lg:px-6 justify-center">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-screen-xl self-center mx-auto">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Acceleration and Gyroscope: MPU6050
            </h2>
            <p class="mb-4">
              The MPU6050 sensor will provide crucial data related to
              acceleration and angular velocity. By monitoring the acceleration,
              the system can detect any sudden or excessive movements that may
              compromise the stability of the 3D printer table. This information
              is vital in maintaining precise and accurate printing results.
              Additionally, the gyroscope data will enable the system to measure
              the orientation and rotational stability of the table.
            </p>
            <p>
              This ensures that the table remains stable and stationary, leading
              to improved print quality and accuracy. This sensor data is
              transmitted in real-time to a central monitoring system or a web
              application portal dashboard.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 w-full justify-center">
            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2207908/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28x-axis%29&type=line&xaxis=Time&yaxis=Acceleration+%28g%29"></iframe>

            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2207908/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28y-axis%29&type=line&xaxis=Time&yaxis=Acceleration+%28g%29"></iframe>
            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2207908/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Acceleration+%28z-axis%29&type=line&xaxis=Time&yaxis=Acceleration+%28g%29"></iframe>
            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2207908/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Orientation+%28x-axis%29&type=line&xaxis=Time&yaxis=Orientation (°)"></iframe>
            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2207908/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Orientation+%28y-axis%29&type=line&xaxis=Time&yaxis=Orientation (°)"></iframe>
            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2207908/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Orientation+%28z-axis%29&type=line&xaxis=Time&yaxis=Orientation (°)"></iframe>
          </div>
        </div>
      </section>
      <section class="" id="motion">
        <div class="gap-16 items-center py-8 px-4 mx-auto grid grid-cols-1 lg:py-16 lg:px-6 justify-center">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-screen-xl mx-auto">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Motion Detector: HC-SR501
            </h2>
            <p class="mb-4 ">
              The function of the motion sensor, specifically the HC-SR501, in
              this IoT project is to monitor the presence of people in the
              printing area of the 3D printing system. Its goal is to detect any
              unauthorized entry or movement that may potentially affect or
              damage the ongoing printing process. The motion sensor will
              provide data indicating the presence or absence of motion in its
              vicinity, enabling the system to take appropriate actions such as
              pausing or alerting the user, ensuring the safety and integrity of
              the printing process.
            </p>
            <p>
              The benefits of incorporating the motion sensor include enhanced
              security, prevention of accidental disruptions, and protection
              against potential damages caused by human interference, ultimately
              leading to reliable and uninterrupted 3D printing operations.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 w-full justify-center">
            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2187429/charts/1?bgcolor=%23ffffff&color=%23b86f23&dynamic=true&results=30&title=Motion+Sensor+Data+%5B0s%2C7s%5D&type=line&xaxis=Time&yaxis=Motion+Logic&yaxismax=1&yaxismin=0"></iframe>

            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2187429/charts/2?bgcolor=%23ffffff&color=%23b86f23&dynamic=true&results=30&title=Motion+Sensor+Data+%5B7s%2C15s%5D&type=line&xaxis=Time&yaxis=Motion+Logic"></iframe>

            <iframe
              className=""
              width={450}
              height={260}
              src="https://thingspeak.com/channels/2187429/charts/3?bgcolor=%23ffffff&color=%23b86f23&dynamic=true&results=30&title=Motion+Sensor+Data&type=line&xaxis=Time&yaxis=Motion+Logic"></iframe>
          </div>
        </div>
      </section>
      <section class="" id="light">
        <div class="gap-16 items-center md:py-8 md:px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid w-full md:gap-4 items-center justify-center overflow-scroll">
            <iframe
              className="overflow-scroll"
              width={450}
              height={260}
              s
              src="https://thingspeak.com/channels/2209528/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-8 text-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
              Light Sensor: BH1750
            </h2>
            <p class="mb-4">
              The function of the light sensor, specifically the BH1750, in this
              IoT project is to monitor the light levels in the room where the
              3D printing system is located. Its primary goal is to ensure
              optimal print quality and consistency by detecting variations in
              lighting conditions that may affect the printing process,
              particularly when using light-sensitive materials or specific
              printing techniques. Additionally, the light sensor can also help
              in detecting human presence in the room. By analyzing the data
              from the BH1750 sensor, the system can make adjustments or provide
              alerts to maintain the desired printing environment.
            </p>
            <p>
              The benefits of integrating the light sensor include improved
              print quality, consistent results, and the ability to adapt to
              changing lighting conditions or detect unauthorized access to the
              printing area.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
