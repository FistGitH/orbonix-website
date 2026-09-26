const topics = [
  ["Planet-Quiz", "Planet Pathfinder", "Planet Master"],
  ["Moons-Quiz", "Moonwalker", "Lunar Legend"],
  ["Sun-Quiz", "Sun Seeker", "Solar Scholar"],
  ["Stars-Quiz", "Stargazer", "Star Architect"],
  ["Galactic-Quiz", "Galactic Explorer", "Galaxy Guardian"],
  ["Blackholes-Quiz", "Event Horizon", "Singularity Expert"],
  ["Comets-Quiz", "Comet Chaser", "Comet Commander"],
  ["Telescope-Quiz", "First Light", "Observatory Director"],
  ["Final-Quiz", "Cosmic Graduate", "Universe Champion"],
];
export const ACHIEVEMENTS = topics
  .flatMap(([quiz, half, full]) => [
    {
      id: quiz + "-50",
      name: half,
      description:
        "Complete " +
        quiz.replace("-Quiz", "") +
        " quiz with at least 50% correct.",
      quiz,
      threshold: 50,
    },
    {
      id: quiz + "-100",
      name: full,
      description:
        "Complete " + quiz.replace("-Quiz", "") + " quiz with 100% correct.",
      quiz,
      threshold: 100,
    },
  ])
  .concat([
    {
      id: "all-50",
      name: "Cosmic Voyager",
      description: "Earn at least 50% in all nine quizzes.",
    },
    {
      id: "all-100",
      name: "Orbonix Legend",
      description: "Earn 100% in all nine quizzes.",
    },
  ]);
export function earnedAchievements(attempts) {
  const best = new Map();
  for (const a of attempts)
    best.set(
      a.quiz,
      Math.max(best.get(a.quiz) || 0, (a.score / a.total) * 100),
    );
  return ACHIEVEMENTS.filter((a) =>
    a.quiz
      ? best.has(a.quiz) && best.get(a.quiz) >= a.threshold
      : topics.every(
          ([q]) => best.has(q) && best.get(q) >= (a.id === "all-50" ? 50 : 100),
        ),
  ).map((a) => a.id);
}
