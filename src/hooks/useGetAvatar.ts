const avatars = {
  yana: require("../assets/avatars/yana.png"),
  user: require("../assets/avatars/user.png"),
};

type Avatars = keyof typeof avatars;

export const useGetAvatar = (avatarType: Avatars): number => {
  return avatars[avatarType];
};
