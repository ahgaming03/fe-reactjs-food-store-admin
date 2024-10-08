import React, { useEffect, useState } from "react";

import defaultImage from "@/assets/images/default-image.png";
import { fetchImage } from "@/api/apiService";

interface DisplayImageProps {
  imageId: string;
  className?: string;
  id?: string;
}

export const DisplayImage: React.FC<DisplayImageProps> = ({
  imageId,
  className,
  id,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchImage(imageId)
      .then((base64Image) => setImageSrc(base64Image as string))
      .catch((error) => {
        setError(error);
      });
  }, [imageId]);

  return (
    <>
      <img
        src={error || !imageSrc ? defaultImage : imageSrc}
        alt="image"
        className={className}
        id={id}
        loading="lazy"
      />
    </>
  );
};
