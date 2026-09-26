const assert = require("node:assert/strict");
(async () => {
  const { ACHIEVEMENTS, earnedAchievements } =
    await import("../server/achievements.mjs");
  assert.equal(ACHIEVEMENTS.length, 20);
  assert.equal(new Set(ACHIEVEMENTS.map((a) => a.id)).size, 20);
  assert.deepEqual(earnedAchievements([]), []);
  assert.deepEqual(
    earnedAchievements([{ quiz: "Planet-Quiz", score: 49, total: 100 }]),
    [],
  );
  assert.deepEqual(
    earnedAchievements([{ quiz: "Planet-Quiz", score: 50, total: 100 }]),
    ["Planet-Quiz-50"],
  );
  assert.deepEqual(
    earnedAchievements([
      { quiz: "Planet-Quiz", score: 100, total: 100 },
      { quiz: "Planet-Quiz", score: 0, total: 100 },
    ]),
    ["Planet-Quiz-50", "Planet-Quiz-100"],
  );
  const topics = [
    ...new Set(ACHIEVEMENTS.filter((a) => a.quiz).map((a) => a.quiz)),
  ];
  assert.equal(
    earnedAchievements(topics.map((quiz) => ({ quiz, score: 1, total: 2 })))
      .length,
    10,
  );
  assert.equal(
    earnedAchievements(topics.map((quiz) => ({ quiz, score: 2, total: 2 })))
      .length,
    20,
  );
  console.log("Achievement thresholds and all-quiz milestones passed.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
