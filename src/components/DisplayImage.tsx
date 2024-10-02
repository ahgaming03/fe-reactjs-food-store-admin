import React, { useEffect, useState } from "react";

import defaultImage from "@/assets/images/default-image.png";
import axios from "axios";

interface DisplayImageProps {
  id?: string;
  className?: string;
}

export const DisplayImage: React.FC<DisplayImageProps> = ({
  id,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/api/views/images/${id}`);
        const dataResponse: {
          success: boolean;
          data: { base64Image: string };
        } = response.data;
        if (dataResponse.success) setImageSrc(dataResponse?.data?.base64Image);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (id) fetchImage();
  }, [id]);

  return (
    <>
      {imageSrc ? (
        <img src={imageSrc} alt="image" className={className} />
      ) : (
        <img src={defaultImage} alt="image" className={className} />
      )}
    </>
  );
};
