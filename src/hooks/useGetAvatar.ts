const avatars = {
  yana: require("../../src/assets/avatars/yana.png"),
  user: require("../../src/assets/avatars/user.png"),
};

type Avatars = keyof typeof avatars;

export const useGetAvatar = (avatarType: Avatars): number => {
  return avatars[avatarType];
};
