interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({ videoId, title = "Product Video" }: VideoEmbedProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black border border-gray-100">
      {/* This wrapper creates a responsive 16:9 aspect ratio. 
        Padding-bottom 56.25% is the magic number for 16:9.
      */}
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
}