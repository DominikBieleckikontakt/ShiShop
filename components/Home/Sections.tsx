import { InfoSection } from "@/components/server";
import ImagesBackground from "./ImagesBackground";
import Image from "next/image";

const Sections = () => {
  return (
    <div className="relative">
      <InfoSection
        title="Who are we?"
        image={{
          alt: "photo of creators",
          src: "/images/photo-creators.png",
          rounded: true,
          size: 64,
          onRight: true,
        }}
      >
        Welcome to the creative minds behind{" "}
        <b className="text-accent">ShiShop</b>! Our dedicated team of passionate
        individuals came together with a shared love for unique and expressive
        T-shirts. Combining diverse talents in design, marketing, and
        e-commerce, we set out to curate a one-of-a-kind shopping experience for
        T-shirt enthusiasts. From eye-catching graphics to comfortable fabrics,
        each member of our team contributed their expertise to bring you a
        carefully crafted collection that reflects our commitment to quality and
        individuality. Explore <b className="text-accent">ShiShop</b> and
        discover the result of our collaborative efforts to redefine the world
        of T-shirt fashion.
      </InfoSection>
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className={`opacity-20 absolute top-2 md:top-[15rem] md:-left-[5rem] sm:size-48 md:size-48 xl:-left-[10rem] xl:top-[5rem] rotate-45`}
      />
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className="opacity-20 absolute top-[15rem] left-[8rem] sm:top-[15rem] sm:left-[25rem] md:top-[4rem] md:left-[30rem] lg:left-[40rem] xl:top-[5rem] xl:left-[50rem] 2xl:-top-[4rem] 2xl:left-[50rem] size-32 md:size-64 -rotate-[35deg]"
      />
      <InfoSection
        title="Our history"
        image={{
          alt: "photo of creators",
          src: "/images/photo-meeting.png",
          width: 600,
          height: 200,
        }}
      >
        Established in 2018 by a group of friends with a penchant for creativity
        and fashion, <b className="text-accent">ShiShop</b> has a whimsical
        origin story that begins with a backyard barbecue where the idea was
        born. Bonding over their shared love for quirky T-shirts, this eclectic
        group decided to turn their passion into a business venture.
        <br />
        <br />
        Initially starting as a weekend project,{" "}
        <b className="text-accent">ShiShop</b> evolved from a small garage
        operation into a thriving online store. The team's journey was marked by
        late-night brainstorming sessions, countless design experiments, and a
        commitment to fostering a community of T-shirt enthusiasts.
        <br />
        <br />
        In 2020, the team faced a pivotal moment when one of their designs
        unexpectedly went viral on social media. This unexpected success
        propelled <b className="text-accent">ShiShop</b> into the spotlight,
        turning their once-humble venture into a go-to destination for unique
        and trend-setting T-shirts.
        <br />
        <br />
        Over the years, the team has continued to expand their creative
        horizons, collaborating with independent artists and designers to bring
        fresh and innovative designs to their customers. Today,{" "}
        <b className="text-accent">ShiShop</b> stands as a testament to the
        power of passion, friendship, and the belief that a simple idea can
        blossom into a thriving online T-shirt haven.
      </InfoSection>
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className={`opacity-20 absolute top-[50rem] md:top-[45rem] md:-left-[5rem] sm:size-96 md:size-96 xl:left-[5rem] xl:top-[30rem] -rotate-[50deg]`}
      />
      <InfoSection title="Our products">
        <b className="text-accent">ShiShop</b>, where quality meets creativity!
        Our commitment to providing exceptional products begins with our premium
        T-shirts. Crafted from the finest materials, our shirts boast a
        luxurious feel and a durability that ensures they stand the test of
        time.
        <br />
        <br />
        We take pride in our meticulous attention to detail, from the selection
        of high-quality fabrics to the precision of our printing processes. Our
        T-shirts not only showcase vibrant and eye-catching designs but also
        prioritize comfort and longevity. The result is a collection that not
        only looks great but feels great to wear.
        <br />
        <br />
        Looking ahead, we are dedicated to expanding our product line while
        maintaining the same unwavering standard of excellence. As we grow,
        anticipate the introduction of other carefully curated items, all held
        to the same rigorous standards that define the ShiShop brand.
        <br />
        <br />
        Discover the difference of <b className="text-accent">ShiShop</b>{" "}
        quality – where each T-shirt is a testament to our passion for
        delivering not just products, but experiences that exceed expectations.
        Join us on this journey, as we continue to redefine the world of
        wearable art.
      </InfoSection>
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className={`opacity-20 absolute left-[10rem] top-[140rem] sm:top-[90rem] sm:left-[20rem] md:top-[80rem] md:left-[15rem] sm:size-96 md:size-64 xl:left-[30rem] xl:top-[70rem] 2xl:left-[50rem] rotate-[50deg]`}
      />
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className="opacity-20 absolute top-[120rem] left-0 sm:top-[100rem] sm:left-0 md:top-[100rem] md:-left-10 lg:left-0 xl:top-[90rem] xl:left-0 2xl:top-[80rem] 2xl:left-0 size-32 md:size-64 -rotate-[35deg]"
      />
      <InfoSection title="Contact Us" id="contact-section">
        Have a question, comment, or just want to share your love for our
        T-shirts? We'd love to hear from you! Get in touch with the ShiShop team
        through the following contact channels:
        <br />
        <br />
        Email: <i>info@shishop.com</i>
        <br />
        Customer Support Hotline: 1-800-SHI-SHOP
        <br />
        <br />
        Visit us at our Headquarters:{" "}
        <i>
          ShiShop Inc. 123 Creativity Lane Artsville, AS 12345 United Styles of
          Fashion
        </i>
        <br />
        <br />
        Follow us on Social Media:
        <br />
        <b className="text-accent font-bold">Instagram</b>: @ShiShopStyle
        <br />
        <b className="text-blue-400 font-bold">Facebook</b>: /ShiShop
        <br />
        <b className="font-bold">X</b>: @ShiShopTees
        <br />
        <br />
        Our dedicated support team is available Monday through Friday, from 9:00
        AM to 6:00 PM (GMT). Feel free to reach out for assistance,
        collaboration inquiries, or just to say hello! We look forward to
        connecting with our amazing community of T-shirt enthusiasts.
      </InfoSection>
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className={`opacity-20 absolute -left-[5rem] top-[160rem] sm:top-[140rem] sm:left-[20rem] md:top-[140rem] md:left-[25rem] lg:top-[120rem] lg:left-[35rem] sm:size-72 md:size-64 xl:left-[30rem] xl:top-[120rem] 2xl:top-[100rem] 2xl:left-[40rem] -rotate-[140deg]`}
      />
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className="opacity-20 absolute top-[140rem] left-96 sm:top-[140rem] sm:-left-[5rem] md:top-[155rem] md:-left-10 lg:top-[130rem] lg:-left-[10rem] xl:top-[140rem] xl:left-0 2xl:top-[120rem] 2xl:-left-[10rem] size-48 md:size-64 -rotate-[35deg]"
      />
    </div>
  );
};

export default Sections;
