import { Play } from "lucide-react";
import { useRef, useState } from "react";
import video from "../../assets/videos/nexofarm.mp4";
import { useLanguage } from "../../context/LanguageContext";

export function InstitutionalVideo() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section className="bg-surface py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.video.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-text">
            {t.video.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.video.description}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="mx-auto max-w-5xl">
          <div className="group relative overflow-hidden rounded-[2rem] border border-border shadow-lg">
            <video
              ref={videoRef}
              controls={playing}
              preload="metadata"
              className="aspect-video w-full bg-black object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/40 cursor-pointer"
                aria-label={t.video.playAria}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface shadow-2xl transition-transform duration-300 hover:scale-110">
                  <Play
                    size={32}
                    className="ml-1 text-primary"
                    fill="currentColor"
                  />
                </div>
                <span className="mt-4 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  {t.video.tagline}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}