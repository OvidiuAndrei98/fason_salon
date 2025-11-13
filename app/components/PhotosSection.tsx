import DomeGallery from "@/components/globe-carousel/GlobeCarousel";

const PhotosSection = () => {
  return (
    <div style={{ width: "100vw", height: "70vh" }}>
      <DomeGallery
        fit={1}
        grayscale={false}
        dragSensitivity={10}
        dragDampening={0.8}
        segments={20}
        fitBasis="auto"
        overlayBlurColor="#f6f8ff"
        maxVerticalRotationDeg={0}
      />
    </div>
  );
};
export default PhotosSection;
