# Programming Practice

Solving programming interview problems requires two skills:

1. **Coming up with a solution** — figuring out which algorithm or approach to use.
2. **Translating that solution into code** — turning the idea in your head into working code.

Most people struggle with both at the same time, which makes interviews feel impossible. These exercises isolate skill #2. Each exercise gives you a known algorithm with a clear explanation — your only job is to implement it. No tricks, no figuring out "the catch."

By practicing this way, translating ideas into code becomes second nature. Then when you're in an actual interview, you can put all your energy into skill #1 — and once you have an approach, the code just flows.

## Rules

1. **Do not use AI.** No ChatGPT, no Copilot, no Claude. The point is to build understanding, not to generate answers.
2. **Do not use the internet.** Every exercise includes a `description.md` with everything you need — how the algorithm works, its complexity, and a step-by-step example. Work from that alone.
3. **Write the code yourself.** Struggle is part of the process. If you're stuck, re-read the description and trace through the example by hand.

## Getting Started

1. Fork this repo and clone your fork.
2. Install [Bun](https://bun.sh) if you don't have it.
3. Run `bun install` to install dev dependencies.
4. Start solving.

```sh
# run all tests
bun test exercises

# run tests for a specific category
bun test exercises/searches
bun test exercises/sorts

# run tests for a specific exercise
bun test exercises/sorts/1-bubble-sort

# run tests in watch mode (re-runs on file changes)
bun test --watch exercises
```

## How It Works

Each exercise has three files:

| File | Purpose |
|---|---|
| `description.md` | Read this first. Explains the algorithm and walks through an example. |
| `index.ts` | Your workspace. Contains the function signature — implement the body. |
| `index.test.ts` | Test cases. Run these to check your solution. Do not modify. |

Your goal: make all tests pass for each exercise.

## Exercises

Exercises are numbered by difficulty within each category. Start from 1 and work your way up.

### Searches

| # | Exercise | Description |
|---|---|---|
| 1 | linear-search | Scan elements one by one |
| 2 | binary-search | Halve the search range repeatedly |
| 3 | jump-search | Jump in blocks, then scan linearly |

### Sorts

| # | Exercise | Description |
|---|---|---|
| 1 | bubble-sort | Swap adjacent elements, bubble the largest up |
| 2 | selection-sort | Find the minimum, place it next |
| 3 | insertion-sort | Insert each element into the sorted portion |
| 4 | merge-sort | Split in half, sort each, merge back |
| 5 | quick-sort | Pick a pivot, partition, recurse |
| 6 | heap-sort | Build a max-heap, extract maximums |
| 7 | bucket-sort | Distribute into buckets by range, sort each, concatenate |
