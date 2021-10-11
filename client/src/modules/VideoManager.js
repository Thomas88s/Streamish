const baseUrl = '/api/Video';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};


export const getAllVideosWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`)
      .then((res) => res.json())
};


export const searchVideos = (videoSearchTerm) => {
    console.log('searching?')
    return fetch(`${baseUrl}/search?q=${videoSearchTerm}&sortDesc=false`)
      .then((res) => res.json());
};
export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

export const getVideo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const getVideosByUser = (id) => {
  console.log("getting user videos?")
  return fetch(`${baseUrl}/users/${id}`)
      .then((res) => res.json())
};
