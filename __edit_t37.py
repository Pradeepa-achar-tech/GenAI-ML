import sys, json

OLD = """              id: 'm5-t37', title: 'Deep Q-Networks (DQN)',
              explain: 'Q-learning with a neural net approximating Q(s,a). Tricks: experience replay, target network. Conquered Atari games from raw pixels.',
              steps: [
                'Replace Q-table with a neural net Q_θ(s, a).',
                'Replay buffer: store (s, a, r, s\\') and sample mini-batches randomly.',
                'Target network Q_θ⁻ updated periodically — stabilises training.',
                'Loss = (r + γ·max Q_θ⁻(s\\', a\\') − Q_θ(s, a))² + backprop.',
                'Use stable-baselines3 instead of hand-rolling for production.',
              ],
              code: `from stable_baselines3 import DQN\\nfrom stable_baselines3.common.env_util import make_vec_env\\n\\nenv = make_vec_env("CartPole-v1", n_envs=4)\\nmodel = DQN("MlpPolicy", env, verbose=1).learn(total_timesteps=50_000)\\nmodel.save("dqn_cartpole")`,
              takeaway: 'For real RL projects, reach for stable-baselines3 — hand-rolled DQN debugging takes weeks to get right.',"""

NEW_FILE = "__new_t37.txt"
with open(NEW_FILE, "r", encoding="utf-8") as f:
    NEW = f.read()

path = "src/data/curriculum.js"
with open(path, "r", encoding="utf-8") as f:
    s = f.read()

count = s.count(OLD)
print(f"Found {count} match(es)")
if count != 1:
    sys.exit(f"Need exactly 1 match, found {count}")

s2 = s.replace(OLD, NEW, 1)
with open(path, "w", encoding="utf-8") as f:
    f.write(s2)

print("Edit applied successfully")
print(f"Old length: {len(s)}, new length: {len(s2)}")
