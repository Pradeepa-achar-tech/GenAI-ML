const fs = require("fs");

const OLD = `              id: 'm5-t37', title: 'Deep Q-Networks (DQN)',
              explain: 'Q-learning with a neural net approximating Q(s,a). Tricks: experience replay, target network. Conquered Atari games from raw pixels.',
              steps: [
                'Replace Q-table with a neural net Q_θ(s, a).',
                'Replay buffer: store (s, a, r, s\\') and sample mini-batches randomly.',
                'Target network Q_θ⁻ updated periodically — stabilises training.',
                'Loss = (r + γ·max Q_θ⁻(s\\', a\\') − Q_θ(s, a))² + backprop.',
                'Use stable-baselines3 instead of hand-rolling for production.',
              ],
              code: \`from stable_baselines3 import DQN\\nfrom stable_baselines3.common.env_util import make_vec_env\\n\\nenv = make_vec_env("CartPole-v1", n_envs=4)\\nmodel = DQN("MlpPolicy", env, verbose=1).learn(total_timesteps=50_000)\\nmodel.save("dqn_cartpole")\`,
              takeaway: 'For real RL projects, reach for stable-baselines3 — hand-rolled DQN debugging takes weeks to get right.',`;

const NEW = fs.readFileSync("__new_t37.txt", "utf-8");
const path = "src/data/curriculum.js";
const s = fs.readFileSync(path, "utf-8");

let count = 0;
let idx = -1;
let from = 0;
while ((idx = s.indexOf(OLD, from)) !== -1) {
  count++;
  from = idx + 1;
}
console.log("Found", count, "match(es)");
if (count !== 1) {
  console.log("ERROR: need exactly 1 match");
  process.exit(1);
}

const out = s.replace(OLD, NEW);
fs.writeFileSync(path, out, "utf-8");
console.log("Edit applied. Size:", s.length, "->", out.length);
