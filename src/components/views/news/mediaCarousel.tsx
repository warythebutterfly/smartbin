import Slider from "react-slick";
import Image from "next/image";
import { News, urlForImage } from "~/sanity/lib";

export const MediaCarousel = ({ news }: { news: News }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const allMedia = [
    ...(news.images || []).map((img: string) => ({
      type: "image",
      url: urlForImage(img).url(),
    })),
    ...(news.youtubeLinks || []).map((link: string) => ({
      type: "video",
      url: link,
    })),
  ];

  // Shuffle the array
  for (let i = allMedia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allMedia[i], allMedia[j]] = [allMedia[j], allMedia[i]];
  }

  const shuffledMedia = allMedia.sort(() => Math.random() - 0.5);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {allMedia.map((item, index) => (
          <div key={index} className="w-full">
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={`Slide ${index + 1}`}
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-lg"
              />
            ) : (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeID(item.url)}`}
                  title={`YouTube video ${index + 1}`}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Utility function to extract YouTube video ID
const extractYouTubeID = (url: string): string => {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/,
  );
  return match ? match[1] : "";
};
