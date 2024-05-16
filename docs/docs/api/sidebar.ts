import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/micanto-api",
    },
    {
      type: "category",
      label: "authentication",
      items: [
        {
          type: "doc",
          id: "api/login-user",
          label: "Login user",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "api/get-a-current-loggedin-user",
          label: "Get a current loggedin user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-a-user",
          label: "Add a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-a-user",
          label: "Update a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-users",
          label: "Get users",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "search",
      items: [
        {
          type: "doc",
          id: "api/search",
          label: "Search",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "player",
      items: [
        {
          type: "doc",
          id: "api/play-a-track",
          label: "Play a track",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-the-listening-session",
          label: "Update the listening session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mark-a-track-as-played",
          label: "Mark a track as played",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-queue",
          label: "Get queue",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "playlist",
      items: [
        {
          type: "doc",
          id: "api/get-playlists",
          label: "Get playlists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-playlist",
          label: "Add playlist",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/get-playlist",
          label: "Get playlist",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-playlist",
          label: "Update playlist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-playlist",
          label: "Delete playlist",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/add-items-to-playlist",
          label: "Add items to playlist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/remove-items-from-playlist",
          label: "Remove items from playlist",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "album",
      items: [
        {
          type: "doc",
          id: "api/get-all-albums",
          label: "Get all albums",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-album",
          label: "Get album",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-album",
          label: "Update album",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/combine-albums",
          label: "Combine albums",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "artist",
      items: [
        {
          type: "doc",
          id: "api/get-all-artists",
          label: "Get all artists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-artist",
          label: "Get artist",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-artist",
          label: "Update artist",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "track",
      items: [
        {
          type: "doc",
          id: "api/get-all-tracks",
          label: "Get all tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-tracks",
          label: "Update tracks",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
