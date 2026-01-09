import { useEffect, useState } from "react";

const useGithubActivity = () => {
  const [lastActive, setLastActive] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/kali204/events/public")
      .then(res => res.json())
      .then(events => {
        if (events && events.length > 0) {
          setLastActive(events[0].created_at);
        }
      })
      .catch(() => {});
  }, []);

  return lastActive;
};

export default useGithubActivity;
