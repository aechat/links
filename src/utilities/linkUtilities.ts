export const isHttpLink = (href: string): boolean => /^https?:\/\//i.test(href);

export const getFileNameFromHref = (href: string, fallback = "file"): string =>
  decodeURIComponent(href.split("#")[0].split("?")[0].split("/").pop() || fallback);

export const isGithubRawFromRepository = (
  href: string,
  owner: string,
  repo: string
): boolean => {
  try {
    const url = new URL(href);

    const path = url.pathname.toLowerCase();

    const parts = path.split("/").filter(Boolean);

    const [urlOwner, urlRepo] = parts;

    return (
      url.hostname === "github.com" &&
      urlOwner === owner.toLowerCase() &&
      urlRepo === repo.toLowerCase() &&
      path.includes("/raw/")
    );
  } catch {
    return false;
  }
};
