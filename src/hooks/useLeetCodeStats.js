import { useEffect, useState } from "react";

const useLeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/35AaCqh9wQ")
      .then(res => res.json())
      .then(data => {
        setStats({
          solved: data.totalSolved,
          easy: data.easySolved,
          medium: data.mediumSolved,
          hard: data.hardSolved
        });
      })
      .catch(() => {});
  }, []);

  return stats;
};

export default useLeetCodeStats;
