export const createPhoto = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data: formData,
  })
);

export const fetchPhoto = photoId => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}`,
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'POST',
    url: `api/photos/${photo.id}`,
    data: {
      photo
    },
  })
);

export const fetchPhotoFeed = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
  })
);
