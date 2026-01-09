import { useEffect, useState } from "react";

const useGithubStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/kali204")
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          profile: data.html_url
        });
      })
      .catch(() => {});
  }, []);

  return stats;
};

export default useGithubStats;
