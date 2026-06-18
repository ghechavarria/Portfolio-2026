import { useState } from 'react';
import { site } from '../data/portfolioData';

const profilePhotoSrc =
  import.meta.env.VITE_PROFILE_PHOTO_URL || site.profilePhoto;

export default function ProfileAvatar({ className, initials = site.profileInitials }) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div className={className} role="img" aria-label={site.name}>
      {useFallback ? (
        initials
      ) : (
        <img
          src={profilePhotoSrc}
          alt=""
          onError={() => setUseFallback(true)}
        />
      )}
    </div>
  );
}
