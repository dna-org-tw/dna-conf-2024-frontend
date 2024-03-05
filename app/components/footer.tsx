import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto pt-10 pb-20 px-8">
        <div className="w-1/2 md:w-1/3 lg:w-full mx-auto lg:max-w-full grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 gap-y-4 gap-x-10">
          <section>
            <Image
              src="/images/footer-logo.svg"
              alt="Taiwan Digital Nomad Association 台灣數位遊牧協會"
              width={282}
              height={115}
              className="w-full max-w-[282px]"
            />
          </section>
          <section className="flex flex-col gap-y-6 w-full max-w-[210px] mx-auto">
            <div className="hidden lg:block rounded-tr-full text-white border border-white border-solid py-2 px-5">
              Follow Us
            </div>
            <div className="grid grid-flow-col justify-between gap-x-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61552393077480"
                target="_blank"
              >
                <Image
                  src="/images/facebook.svg"
                  alt="Follow us on Facebook"
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href="https://www.instagram.com/dna.org.tw/"
                target="_blank"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="Follow us on Instagram"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="https://lin.ee/RYBBD0R" target="_blank">
                <Image
                  src="/images/line.svg"
                  alt="Find us on Line"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
