import { FuseNavigationItem } from "@fuse/components/navigation";

export const _filterThroughFeatureGuard = (
  roles: any[],
  navigation: FuseNavigationItem[]
) => {
  
  const nav= navigation.filter(function f(item) {
    ///if no roles needed
    if (!item.roles) {
      return true;
    }
    //if child then measure guard first from child
    if (item.children?.length) {
      return (item.children = item.children.filter(f)).length;
    }

    if (item.roles.some((roleName) => roles?.includes(roleName))) {
      return true;
    }
  });
  return nav;
};
