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
      ],
    },
  ],
};

export default sidebar.apisidebar;
