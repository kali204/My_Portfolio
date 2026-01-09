import React from "react";
import { FaGithub, FaCode } from "react-icons/fa";
import useGithubStats from "../hooks/useGithubStats";
import useLeetCodeStats from "../hooks/useLeetcodeStats";
import useGithubActivity from "../hooks/useGithubActivity";
import useCountUp from "../hooks/useCountUp";
import "../styles/proof.css";
// ProofWrapper component to display GitHub and LeetCode stats

const ProofWrapper = () => {
  const github = useGithubStats();
  const leetcode = useLeetCodeStats();
  const lastActive = useGithubActivity();

  const solved = useCountUp(leetcode?.solved || 0);
  const repos = useCountUp(github?.repos || 0);

  return (
    <section className="proof">
      <div className="proof-container">
        <h3 className="proof-title">Engineering Proof</h3>

        <div className="proof-cards">

          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/35AaCqh9wQ/"
            target="_blank"
            rel="noreferrer"
            className="proof-card"
          >
            <div className="proof-icon"><FaCode /></div>
            <div className="proof-content">
              <h4>Problem Solving</h4>
              <p>{solved}+ problems solved</p>
              <span>DSA · DP · Graphs</span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/kali204"
            target="_blank"
            rel="noreferrer"
            className="proof-card"
          >
            <div className="proof-icon"><FaGithub /></div>
            <div className="proof-content">
              <h4>Engineering Work</h4>
              <p>{repos} public repositories</p>
              <span>
                {lastActive
                  ? `Last active: ${new Date(lastActive).toDateString()}`
                  : "Active on GitHub"}
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ProofWrapper;
