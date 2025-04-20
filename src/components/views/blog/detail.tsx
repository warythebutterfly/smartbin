import { ChevronLeft } from "@/components/icons";
import { Heading, RichText } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import { IBlog, urlForImage } from "~/sanity/lib";
import { extractYouTubeID } from "./mediaCarousel";

export const BlogDetailsView = ({ article }: { article: IBlog }) => {
  const { title, mainImage, content } = article;

  const allMedia = [
    ...(article.images || []).map((img: any) => ({
      type: "image",
      url: img.url,
      caption: img.caption,
      alt: img.alt,
    })),
    ...(article.youtubeLinks || []).map((link: string) => ({
      type: "video",
      url: link,
    })),
  ];

  return (
    <section className="bg-[#f5faf0] bg-team bg-right">
      <div
        className="ezy__travel1_JIUyTMc4 py-20 md:p-[100px] bg-[#0b1727] h-[400px] object-cover text-white relative z-1 bg-cover bg-no-repeat bg-center flex justify-center items-end overflow-hidden"
        style={{
          backgroundImage: `url(${mainImage ? urlForImage(mainImage).url() : "https://static.vecteezy.com/system/resources/previews/010/709/854/non_2x/protecting-the-earth-from-plastic-garbage-planet-earth-with-plastic-bottles-a-banner-symbolizing-recycling-protecting-the-environment-and-improving-life-on-earth-free-photo.jpg"}`,
        }}
      ></div>
      <div className="container px-0 sm:px-4 mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="relative z-10 grid grid-cols-12 gap-4 -mt-40 -md:mt-40 bg-white text-black px-4 rounded-md">
              <div className="col-span-12">
                <div className="p-0 sm:p-6">
                  <div className="bg-white pb-[120px] sm:pb-[180px] md:pb-[220px] lg:pb-[265px]">
                    <div className="wrapper">
                      <div className=" mx-auto">
                        <div className="flex items-center">
                          <Link
                            href="/blog"
                            className="py-[10px] text-[#9CA3AF]"
                          >
                            <button className="bg-primary h-[40px] w-[40px] rounded-full border border-white hover:border-blue-500 text-white transition ease-in-out duration-500 flex justify-center items-center cursor-pointer mr-4 lg:mr-0">
                              <ChevronLeft className="text-xl" />
                            </button>
                          </Link>
                        </div>

                        {title ? (
                          <Heading className="my-8 sm:my-10 md:my-12 lg:my-16 text-[20px] sm:text-[24px] md:text-[28px] text-primary tracking-[-0.32px] flex items-center justify-center">
                            {title}
                          </Heading>
                        ) : null}

                        <RichText
                          // className={styles.portableText}
                          content={content}
                        />

                        {title ? (
                          <div>
                            <Heading className="my-12 text-[28px] text-primary tracking-[-0.32px] ">
                              Gallery
                            </Heading>
                            <div className="grid grid-cols-12 gap-6">
                              {allMedia.map((item, i) => (
                                <div
                                  className="col-span-12 md:col-span-6 lg:col-span-4"
                                  key={i}
                                >
                                  <div className="group relative text-center">
                                    {item.type === "image" ? (
                                      <div className="h-[300px]">
                                        <Image
                                          src={item.url}
                                          alt={`Slide ${i + 1}`}
                                          width={800}
                                          height={450}
                                          className="w-full h-full object-cover rounded-lg"
                                        />
                                        {item.caption && (
                                          <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-40 bg-blur-sm bg-saturate-200 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-center p-6">
                                            <p className="mb-0 text-primary">
                                              {item.caption}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="aspect-video w-full h-[300px]">
                                        <iframe
                                          src={`https://www.youtube.com/embed/${extractYouTubeID(item.url)}`}
                                          title={`YouTube video ${i + 1}`}
                                          className="w-full h-full rounded-lg"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 relative"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
